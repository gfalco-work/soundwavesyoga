"use client";
import React, { useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate a successful form submission.
        setFormStatus("Thank you for contacting us! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="relative min-h-screen">
            {/* Form Content */}
            <div className="relative z-10 min-h-screen bg-[#f7f2ed] py-12">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-[#33484d] text-center mb-6">Contact Me</h1>
                    <p className="text-lg text-center text-[#33484d] mb-8">
                        I would love to hear from you! Please fill out the form below and I will get back to you as soon as possible.
                    </p>

                    {/* Form */}
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

                        <div className="mb-6">
                            <button
                                type="submit"
                                className="w-full bg-[#2a373c] text-white p-3 rounded-lg hover:bg-[#33484d] transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {formStatus && (
                        <div className="text-center text-green-500">
                            <p>{formStatus}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
