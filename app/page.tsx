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
                <div className="relative max-w-8xl mx-auto px-6 sm:px-12 py-20 sm:py-32">
                    {/* Left text container */}
                    <div className="w-full sm:w-1/2 text-[#102434] flex flex-col justify-center sm:justify-start sm:pt-32 items-center sm:items-start">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-snug text-center sm:text-left">
                            Helping you to find rest in a restless world through movement, rest and sound.
                        </h1>
                        <p className="text-lg sm:text-2xl leading-snug text-center sm:text-left">
                            Whether you're new to yoga or seeking a gentler practice, through a blend of movement, rest and sound, we'll explore ways
                            to access deep rest that you can carry into your daily life. No forcing. No performance. Just the space to be exactly as
                            you are.
                        </p>
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