'use client';

import Image from "next/image";
import { useState } from 'react';

export default function Schedule() {
    return (
        <div className="bg-[#f7f2ed] min-h-screen flex flex-col items-center justify-start">
            {/* Schedule Section */}
            <div className="w-full lg:w-2/3 px-6 lg:px-12 mt-4 lg:mt-10">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Desktop Table - Hidden on mobile */}
                    <div className="hidden lg:block">
                        <table className="w-full border-collapse text-center text-[#102434]">
                            <thead>
                            <tr>
                                <th colSpan={7} className="text-3xl font-bold p-6 text-[#102434]"
                                    style={{background: "linear-gradient(to right, #d3c5b8, #ffffff)"}}>
                                    Weekly Yoga Schedule
                                </th>
                            </tr>
                            <tr className="text-xl font-semibold">
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                    <th key={day} className="p-6 border-b border-[#d8a21e]" style={{width: "14.28%"}}>{day}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-lg">
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]">
                                    <span className="font-bold">Therapeutic Yoga</span><br/>
                                    Closed Group<br/>
                                    By Appointment Only
                                </td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Layout - Shown only on mobile */}
                    <div className="lg:hidden">
                        <div className="text-lg font-bold p-4 text-[#102434] text-center"
                             style={{background: "linear-gradient(to right, #d3c5b8, #ffffff)"}}>
                            Weekly Yoga Schedule
                        </div>
                        <div className="divide-y divide-[#d8a21e]">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                <div key={day} className="p-4">
                                    <h3 className="font-semibold text-[#102434] mb-2">{day}</h3>
                                    <div className="text-base text-[#102434]"> {/* Added text colour here */}
                                        {day === 'Thursday' && (
                                            <>
                                                <div className="font-bold">Therapeutic Yoga</div>
                                                <div>Closed Group</div>
                                                <div>By Appointment Only</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center text-[#102434] italic font-bold p-4 text-xl"
                         style={{background: "linear-gradient(to right, #d3c5b8, #ffffff)"}}>
                        Coming soon: Soundbath Phoenix Yoga, Putney - Sunday 27th April 4pm - 5:30
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-10 px-4 lg:px-0 flex items-center justify-center">
                <div className="w-full lg:w-[40%] aspect-square lg:aspect-auto lg:h-[40%] relative">
                    <Image
                        src="/schedule.png"
                        alt="Yoga Schedule"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            {/* Payment Section - Add this before the final closing div */}
            <div className="w-full lg:w-2/3 px-6 lg:px-12 mt-8 mb-8">
                <PaymentForm />
            </div>
        </div>
    );
}

function PaymentForm() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleCheckout = async () => {
        if (!name || !email) {
            alert('Please enter your name and email');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 0.30,
                    eventName: 'Soundbath Phoenix Yoga - Test',
                    email,
                    name,
                }),
            });

            const { url } = await response.json();
            window.location.href = url;
        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-[#102434] mb-2 text-center">Book Your Spot</h3>
            <p className="text-center text-gray-600 mb-6">Soundbath Phoenix Yoga, Putney</p>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-[#102434] mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#d8a21e] focus:outline-none text-[#102434]"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-[#102434] mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#d8a21e] focus:outline-none text-[#102434]"
                    />
                </div>
                <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full bg-[#d8a21e] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#c49119] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
                >
                    {loading ? 'Processing...' : 'Pay £0.30 (Test)'}
                </button>
                <p className="text-xs text-gray-500 text-center">Secure payment powered by Stripe</p>
            </div>
        </div>
    );
}