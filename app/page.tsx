import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="relative min-h-[800px] bg-[#e1cdc7]">
                {/* Background image container with conditional blur effect */}
                <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full overflow-hidden">
                    <div className="absolute inset-0 w-full h-full block sm:hidden" style={{
                        backgroundImage: 'url(/sea4.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}/>
                    <div className="absolute inset-0 w-full h-full hidden sm:block" style={{
                        backgroundImage: 'url(/sea4.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mask: 'linear-gradient(to right, transparent, black 15%)',
                        WebkitMask: 'linear-gradient(to right, transparent, black 15%)'
                    }}/>
                </div>

                {/* Content container */}
                <div className="relative max-w-8xl mx-auto px-6 pt-20 sm:px-12 h-full">
                    {/* Text container with responsive versions */}
                    <div className="w-full sm:w-1/2 text-[#102434] h-full flex flex-col justify-center items-center">
                        {/* Mobile version */}
                        <div className="block sm:hidden text-center bg-[#e1cdc7]/80 p-6 rounded-lg">
                            <h1 className="text-3xl font-bold mb-6 leading-snug">
                                Helping you to find rest in a restless world
                            </h1>
                            <p className="text-lg leading-relaxed mb-6">
                                In our overstimulated world, many of us spend our days on constant alert. The echoes of stress, both recent and old, can make slowing down feel surprisingly difficult. Yet within each of us lies the natural capacity to restore and renew.
                                Whether you are new to yoga or seeking a gentler practice, together we can explore pathways that honor your unique needs.
                            </p>
                            <p className="text-lg italic">
                                No forcing. No performance. Just the space to be exactly as you are.
                            </p>
                        </div>

                        {/* Desktop version */}
                        <div className="hidden sm:block">
                            <h1 className="text-4xl font-bold mb-8 leading-snug text-center">
                                Helping you to find rest in a restless world
                            </h1>
                            <p className="text-2xl leading-relaxed mb-8 text-center">
                                In our overstimulated world, many of us spend our days on constant alert. The echoes of stress, both recent and old, can make slowing down feel surprisingly difficult - even when we are exhausted. We may carry patterns that make settling feel unfamiliar or even uncomfortable. Yet within each of us lies the natural capacity to restore and renew.
                            </p>
                            <p className="text-2xl leading-relaxed mb-8 text-center">
                                Feeling tired yet wired is a complex experience that can be challenging to address alone. Whether you are new to yoga or seeking a gentler practice, together we can explore pathways that honor your unique needs.
                            </p>
                            <p className="text-2xl italic text-center">
                                No forcing. No performance. Just the space to be exactly as you are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable content below */}
            <div id="more" className="bg-[#e1cdc7] py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-[#102434]">My Approach</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#102434]">
                        <div className="bg-white shadow-lg p-6 rounded-lg ">
                            <Image src="/movement.png" alt="Image 1" width={500} height={300} className="rounded-md"/>
                            <h3 className="text-xl font-bold mt-4">Movement</h3>
                            <p className="mt-2">Find and release physical tension because sometimes we need to meet what's held in our body before we
                                can take rest.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <Image src="/rest.png" alt="Image 2" width={500} height={300} className="rounded-md"/>
                            <h3 className="text-xl font-bold mt-4">Rest</h3>
                            <p className="mt-2">Through the gentle support of props, we can experience being held. When the body is supported in this
                                way, we can release our need to hold on.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <Image src="/bowls1.png" alt="Image 3" width={500} height={300} className="rounded-md"/>
                            <h3 className="text-xl font-bold mt-4">Sound</h3>
                            <p className="mt-2">Sound can create a gentle container, reconnecting us with our innate capacity for rest. Like waves
                                washing over us, it reminds us of the stillness and lifeforce that resides in each one of us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}