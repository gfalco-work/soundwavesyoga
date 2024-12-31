import Image from "next/image";

export default function Home() {
    return (
        <div>
            {/* Top Section with Boxes */}
            <div id="highlight" className="bg-[#f7f2ed] py-10 sm:py-16">
                <div className="container mx-auto text-center">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#102434] mb-8">
                        Helping You To Find Rest In A Restless World
                    </h1>
                    {/* Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#102434] mb-10 italic">
                        Through Mindful Movement, Restorative Practice, and Resonant Sound
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#102434]">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <Image src="/movement.png" alt="Image 1" width={500} height={300} className="rounded-md" />
                            <h3 className="text-2xl font-bold mt-4">Move</h3>
                            <p className="mt-2 text-lg">
                                Ease physical tension. By exploring where and how we hold patterns of tension in our body, we
                                can create the conditions for letting go.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <Image src="/rest.png" alt="Image 2" width={500} height={300} className="rounded-md" />
                            <h3 className="text-2xl font-bold mt-4">Rest</h3>
                            <p className="mt-2 text-lg">
                                Support the body. Using props to gently hold our physical body, we can experience being held
                                to welcome deeper rest.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <Image src="/bowls1.png" alt="Image 3" width={500} height={300} className="rounded-md" />
                            <h3 className="text-2xl font-bold mt-4">Sound</h3>
                            <p className="mt-2 text-lg">
                                Bathe in sound. Sound can bypass our judging mind and barriers to rest. Helping us to
                                reconnect with our innate lifeforce and the capacity to love and rest.
                            </p>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#102434] mb-8 pt-10 italic">
                        Not forcing. Not performing. Just the space to be exactly as you are.
                    </h3>
                </div>
            </div>

            {/* Original Top Section Now Below */}
            <div className="relative bg-[#f7f2ed] pb-20 sm:pb-24 mt-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row items-stretch min-h-[800px]">
                    {/* Left Image */}
                    <div className="w-full sm:w-1/3 px-12 sm:px-16 flex justify-center items-center">
                        <Image
                            src="/sea_homepage.png"
                            alt="Sea Homepage"
                            width={700}
                            height={700}
                            className="rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full sm:w-2/3 px-6 sm:px-12 flex items-center">
                        <div className="text-[#102434] text-justify text-base sm:text-lg lg:text-xl leading-relaxed space-y-6">
                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#102434] mb-6 mt-6">
                                Cultivating Rest with Busy Souls
                            </h2>
                            <p className="text-lg sm:text-xl">
                                In our overstimulated world, many of us spend our days on constant alert.
                                The echoes of stress, both recent and old, can make slowing down feel surprisingly difficult - even when we feel
                                exhausted.
                                It is a common paradox: those who most need rest often find it the hardest to access.
                                We may carry patterns that make settling feel unfamiliar or even uncomfortable. Yet within each of us lies the natural
                                capacity to restore and renew.
                                Feeling tired yet wired is a complex experience that can be challenging to address alone. <br /> <br />
                                Whether you are new to yoga or seeking a gentler practice, together we can explore pathways that honour your unique
                                needs.
                                Some of us need strong movement before we can settle, while others welcome immediate stillness.
                                Through mindful movement, restorative holds, and beautiful sounds, you can discover your own rhythm for settling.
                            </p>
                            <div className="flex justify-center mt-5">
                                <img
                                    src="/yogawoman.png"
                                    alt="Yoga Pose"
                                    className="px-5 w-[200px] h-auto"
                                />
                            </div>
                            <p className="italic font-bold mt-6 text-xl pb-6">
                                "Feeling real is more than existing; it is finding a way to exist as oneself... and to have a self into which to retreat for relaxation." — D.W. Winnicott
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
