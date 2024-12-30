"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center py-12"
            style={{ backgroundImage: 'url("/aboutme.png")' }} // Replace with your background image path
        >
            <div className="max-w-6xl mx-auto bg-[#f7f2ed] shadow-lg rounded-lg p-8">
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
                            I work with busy souls who know they need rest but struggle to find it.
                            Having trained in both yoga and psychotherapy, I have witnessed remarkable
                            transformations when people allow themselves to experience deep rest.
                            Finding this often requires time and practice in an environment that communicates care and honours our individual pace.
                        </p>

                        <p className="mb-6 text-center sm:text-left">
                            My fascination with the connection between our nervous systems and our capacity for restoration stems from personal experience.
                            Through my own challenges with settling and replenishing, I have developed practical tools that I now share with others.
                        </p>

                        <p className="mb-6 text-center sm:text-left">
                            My approach weaves together wisdom from psychoanalysis, somatic experiencing, sound, and yoga.
                            As a perpetual student, I continuously expand my knowledge through research and practice, bringing fresh insights to every session.
                        </p>

                        <p className="mb-6 text-center sm:text-left">
                            I create nurturing spaces where you can explore rest without pressure to perform. Drawing from extensive study of stress,
                            trauma, and the mind-body connection, I meet you exactly where you are. Whether you arre taking your first steps toward slowing
                            down or deepening your existing practice, reach out to see if this feels right for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
