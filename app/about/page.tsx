export default function AboutPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center py-12 sm:py-6 overflow-hidden" // Adjusted padding and added overflow-hidden
            style={{ backgroundImage: 'url("/aboutme.png")' }}
        >
            <div className="max-w-6xl mx-auto bg-[#f7f2ed]/90 shadow-lg rounded-lg p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    {/* Left Section: Image */}
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <div className="w-85">
                            <img
                                src="/teacher_aboutme.jpg"
                                alt="Yoga Teacher"
                                className="rounded-lg shadow-md w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Section: Text */}
                    <div className="flex-1 text-[#33484d]">
                        <h1 className="text-4xl font-bold mb-6 text-center">
                            About Me
                        </h1>

                        <div className="text-lg lg:text-xl leading-relaxed">
                            <p className="text-xl text-justify mb-4">
                                I work with busy souls who know they need rest but struggle to find it.
                                Having trained in both yoga and psychotherapy, I have witnessed remarkable
                                transformations when people allow themselves to experience deep rest.
                                Finding this often requires time and practice in an environment that communicates care and honours our individual pace.
                            </p>

                            <p className="text-xl text-justify mb-4">
                                My fascination with the connection between our nervous systems and our capacity for restoration stems from personal
                                experience.
                                Through my own challenges with settling and replenishing, I have developed practical tools that I now share with others.
                                My approach weaves together wisdom from psychoanalysis, somatic experiencing, sound, and yoga.
                                As a perpetual student, I continuously expand my knowledge through research and practice, bringing fresh insights to every
                                session.
                            </p>

                            <p className="text-xl text-justify">
                                I create nurturing spaces where you can explore rest without pressure to perform. Drawing from extensive study of stress,
                                trauma, and the mind-body connection, I meet you exactly where you are. Whether you are taking your first steps toward
                                slowing down or deepening your existing practice, reach out to see if this feels right for you.
                            </p>

                            <div className="flex justify-center">
                                <img
                                    src="/yogawoman.png"
                                    alt="Yoga Pose"
                                    className="px-5 w-[200px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
