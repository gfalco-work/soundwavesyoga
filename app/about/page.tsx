"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center py-12"
            style={{ backgroundImage: 'url("/aboutme.png")' }} // Replace with your background image path
        >
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-[#33484d] text-center mb-6">
                    About Me
                </h1>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Left Section: Image */}
                    <div className="flex-shrink-0 w-full sm:w-1/3">
                        <Image
                            src="/michelle_fondachello.jpg" // Update with your image file path
                            alt="Yoga Teacher"
                            width={400}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right Section: Text */}
                    <div className="flex-1 text-[#33484d] text-lg sm:text-xl leading-relaxed">
                        <p className="mb-6 text-center sm:text-left">
                            I am motivated by working with busy souls who know they need rest but struggle to find it.
                            As both a yoga teacher and psychotherapist, I have discovered that amazing things can happen
                            when we allow, or even risk, deep rest. For some of us, taking rest requires time and practice
                            in an environment that communicates care and welcomes the pace we each need to move at.
                        </p>

                        <p className="mb-6 text-center sm:text-left">
                            I am fascinated by the connection between our nervous systems and our capacity for rest and
                            restoration. Through my own challenges with settling and replenishing, I have developed practical
                            tools and understanding that I now share with others.
                        </p>

                        <p className="mb-6 text-center sm:text-left">
                            My approach weaves together the wisdom of multiple disciplines I am grateful to have navigated:
                            psychoanalysis, somatic experiencing, sound, and yoga. I remain a perpetual student, constantly
                            expanding my knowledge through ongoing research, study, and practice. This commitment to growth
                            allows me to bring fresh insights to every session.
                        </p>

                        <p className="mb-6 text-center sm:text-left">
                            My aim is to create nurturing spaces where you can explore rest without the pressure of needing
                            to perform. Drawing from extensive study of stress, trauma, and the mind-body connection, my
                            offerings aim to meet you exactly where you are. Whether you're taking your first steps toward
                            slowing down or deepening your existing practice, make an inquiry to see if this is the place for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
