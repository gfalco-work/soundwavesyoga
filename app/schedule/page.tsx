import Image from "next/image";

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
                                <td className="p-6 border border-[#d8a21e]">
                                    <span className="font-bold">Gentle Yoga with Sound</span><br/>
                                    Jiva Health, Wimbledon<br/>
                                    7:30 PM - 8:30 PM
                                </td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]">
                                    <span className="font-bold">Therapeutic Yoga</span><br/>
                                    Closed Group<br/>
                                    By Appointment Only
                                </td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]"></td>
                                <td className="p-6 border border-[#d8a21e]">
                                    <span className="font-bold">Gentle Yoga with Sound</span><br/>
                                    Jiva Health, Wimbledon<br/>
                                    3:30 PM - 4:30 PM
                                </td>
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
                                        {day === 'Tuesday' && (
                                            <>
                                                <div className="font-bold">Gentle Yoga with Sound</div>
                                                <div>Jiva Health, Wimbledon</div>
                                                <div>7:30 PM - 8:30 PM</div>
                                            </>
                                        )}
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
                        Coming soon: Restorative Yoga and Sound workshop
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
        </div>
    );
}
