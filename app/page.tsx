import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="relative min-h-[800px] bg-[#f7f2ed]">
                {/* Background image container with conditional blur effect */}
                <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full overflow-hidden">
                    <div
                        className="absolute inset-0 w-full h-full block sm:hidden"
                        style={{
                            backgroundImage: "url(/sea_homepage.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <div
                        className="absolute inset-0 w-full h-full hidden sm:block"
                        style={{
                            backgroundImage: "url(/sea_homepage.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            mask: "linear-gradient(to right, transparent, black 20%)", // Increased transparency area
                            WebkitMask: "linear-gradient(to right, transparent, black 20%)",
                        }}
                    />
                </div>

                {/* Content container */}
                <div className="relative max-w-8xl mx-auto px-6 pt-20 sm:px-12 h-full">
                    {/* Text container with responsive versions */}
                    <div className="w-full sm:w-1/2 text-[#102434] h-full flex flex-col justify-center items-center">
                        {/* Mobile version */}
                        <div className="block sm:hidden text-center bg-[#f7f2ed]/80 p-6 rounded-lg">
                            <h1 className="text-3xl font-bold mb-6 leading-snug">
                                Helping You To Find Rest In A Restless World
                            </h1>
                            <p className="text-lg leading-relaxed mb-6">
                                In our overstimulated world, many of us spend our days on constant alert. The echoes of stress, both recent and old,
                                can make slowing down feel surprisingly difficult. Yet within each of us lies the natural capacity to restore and
                                renew. Whether you are new to yoga or seeking a gentler practice, together we can explore pathways that honor your
                                unique needs.
                            </p>
                            <p className="text-lg italic">
                                Not forcing. Not performing. Just the space to be exactly as you are.
                            </p>
                        </div>

                        {/* Desktop version with overlay */}
                        <div className="hidden sm:block relative" style={{transform: 'translateX(150px)'}}>
                            {/* Larger overlay with more space */}
                            <div className="absolute inset-0 bg-[#ffffff]/80 z-10 rounded-lg"/>
                            <h1 className="text-4xl font-bold mb-8 leading-snug text-center relative z-20 max-w-3xl mx-auto pt-10 px-10">
                                Helping You To Find Rest <br/> In A Restless World
                            </h1>
                            <p className="text-2xl leading-tight mb-8 text-justify relative z-20 max-w-3xl mx-auto px-20">
                                In our overstimulated world, many of us spend our days on constant alert. The echoes of stress, both recent and old,
                                can make slowing down feel surprisingly difficult - even when we are exhausted.
                            </p>
                            <p className="text-2xl leading-tight mb-8 text-justify relative z-20 max-w-3xl mx-auto px-20">
                                We may carry patterns that make
                                settling feel unfamiliar or even uncomfortable. Yet within each of us lies the natural capacity to restore and renew.
                            </p>
                            <p className="text-2xl leading-tight mb-8 text-justify relative z-20 max-w-3xl mx-auto px-20">
                                Feeling tired yet wired is a complex experience that can be challenging to address alone. Whether you are new to yoga
                                or seeking a gentler practice, together we can explore pathways that honor your unique needs.
                            </p>
                            <p className="text-2xl italic text-center relative z-20 font-bold max-w-3xl mx-auto pb-10">
                                Not forcing. Not performing. Just the space to be exactly as you are.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scrollable content below */}
            <div id="more" className="bg-[#f7f2ed] py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-[#102434]">My Approach</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#102434]">
                        <div className="bg-white shadow-lg p-6 rounded-lg ">
                            <Image src="/movement.png" alt="Image 1" width={500} height={300} className="rounded-md"/>
                            <h3 className="text-2xl font-bold mt-4">Move</h3>
                            <p className="mt-2 text-lg">Ease physical tension. By exploring where and how we hold patterns of tension in our body, we
                                can create the conditions for letting go.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <Image src="/rest.png" alt="Image 2" width={500} height={300} className="rounded-md"/>
                            <h3 className="text-2xl font-bold mt-4">Rest</h3>
                            <p className="mt-2 text-lg">Support the body. Using props to gently hold our physical body, we can experience being held
                                to welcome deeper rest.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <Image src="/bowls1.png" alt="Image 3" width={500} height={300} className="rounded-md"/>
                            <h3 className="text-2xl font-bold mt-4">Sound</h3>
                            <p className="mt-2 text-lg">Bathe in sound. Sound can bypass our judging mind and barriers to rest. Helping us to
                                reconnect with our innate lifeforce and the capacity to love and rest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
