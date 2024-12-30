import Image from "next/image";

export default function Schedule() {
    return (
        <div className="bg-[#f7f2ed] min-h-screen flex py-20">
            {/* Left Section with Table */}
            <div className="w-full sm:w-1/2 px-6 sm:px-12 pt-20">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Table */}
                    <table className="w-full border-collapse text-center text-[#102434]">
                        {/* Header with gradient */}
                        <thead>
                        <tr>
                            <th
                                colSpan={7}
                                className="text-lg sm:text-xl font-bold p-4 text-[#102434]"
                                style={{
                                    background: "linear-gradient(to right, #d3c5b8, #ffffff)",
                                }}
                            >
                                Weekly Yoga Schedule
                            </th>
                        </tr>
                        <tr className="text-sm sm:text-base font-semibold">
                            <th className="p-4 border-b border-[#d8a21e]" style={{width: "14.28%"}}>
                                Monday
                            </th>
                            <th className="p-4 border-b border-[#d8a21e]" style={{width: "14.28%"}}>
                                Tuesday
                            </th>
                            <th className="p-4 border-b border-[#d8a21e]" style={{width: "14.28%"}}>
                                Wednesday
                            </th>
                            <th className="p-4 border-b border-[#d8a21e]" style={{width: "14.28%"}}>
                                Thursday
                            </th>
                            <th className="p-4 border-b border-[#d8a21e]" style={{width: "14.28%"}}>
                                Friday
                            </th>
                            <th className="p-4 border-b border-[#d8a21e]" style={{width: "14.28%"}}>
                                Saturday
                            </th>
                            <th className="p-4 border-b border-[#d8a21e]" style={{width: "14.28%"}}>
                                Sunday
                            </th>
                        </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                        <tr className="text-xs sm:text-sm">
                            <td className="p-4 border border-[#d8a21e]"></td>
                            <td className="p-4 border border-[#d8a21e]">
                                <span className="font-bold">Gentle Yoga with Sound</span>
                                <br/>
                                Jiva Health, Wimbledon
                                <br/>
                                7:30 PM - 8:30 PM
                            </td>
                            <td className="p-4 border border-[#d8a21e]"></td>
                            <td className="p-4 border border-[#d8a21e]">
                                <span className="font-bold">Therapeutic Yoga</span>
                                <br/>
                                Closed Group
                                <br/>
                                By Appointment Only
                            </td>
                            <td className="p-4 border border-[#d8a21e]"></td>
                            <td className="p-4 border border-[#d8a21e]"></td>
                            <td className="p-4 border border-[#d8a21e]"></td>
                        </tr>
                        </tbody>
                    </table>

                    {/* Footer directly below table */}
                    <div
                        className="text-center text-[#102434] italic font-bold text-base sm:text-lg p-4"
                        style={{
                            background: "linear-gradient(to right, #d3c5b8, #ffffff)",
                        }}
                    >
                        Coming soon: Restorative Yoga and Sound workshop
                    </div>
                </div>
            </div>

            {/* Right Section with Image */}
            <div className="hidden sm:block w-1/2 relative mt-5">  {/* Add mt-5 for the 20px margin */}
                <div className="w-[90%] h-[90%] relative">
                    <Image
                        src="/schedule.png"
                        alt="Yoga Image"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="top"
                    />
                </div>
            </div>
        </div>
    );
}
