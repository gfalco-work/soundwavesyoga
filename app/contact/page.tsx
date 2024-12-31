"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cooldown, setCooldown] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cooldown) {
            alert("Please wait before sending another message.");
            return;
        }

        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            setFormStatus("Please complete the reCAPTCHA");
            return;
        }

        setIsSubmitting(true);
        setCooldown(true);
        setTimeout(() => setCooldown(false), 300000); // 5 minutes cooldown

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: recaptchaValue,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setFormStatus(data.error || 'Failed to send message');
                return;
            }

            setFormStatus("Thank you for contacting us! We will get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
            recaptchaRef.current?.reset();
        } catch (error) {
            setFormStatus("Failed to send your message. Please try again later.");
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen">
            <div className="relative z-10 min-h-screen bg-[#f7f2ed] py-12">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-[#33484d] text-center mb-6">Contact Me</h1>
                    <p className="text-lg text-center text-[#33484d] mb-8">
                        I would love to hear from you! Please fill out the form below and I will get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-[#33484d] font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border-2 border-[#33484d] rounded-lg focus:outline-none focus:border-[#2a373c]"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#33484d] font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border-2 border-[#33484d] rounded-lg focus:outline-none focus:border-[#2a373c]"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-[#33484d] font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full p-3 border-2 border-[#33484d] rounded-lg focus:outline-none focus:border-[#2a373c]"
                            />
                        </div>

                        <div className="mb-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                className="flex justify-center"
                            />
                        </div>

                        <div className="mb-6">
                            <button
                                type="submit"
                                disabled={cooldown || isSubmitting}
                                className={`w-full p-3 rounded-lg transition-colors ${
                                    cooldown || isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-[#2a373c] text-white hover:bg-[#33484d]"
                                }`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>

                    {formStatus && (
                        <div className={`text-center ${formStatus.includes("Thank you") ? "text-green-500" : "text-red-500"}`}>
                            <p>{formStatus}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
