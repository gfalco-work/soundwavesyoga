import Image from "next/image";

export default function Home() {
  return (
      <div>
        {/* Top Banner with logo and navigation links */}
        <div className="bg-[#FADCD9] py-4 px-8 flex justify-between items-center absolute top-0 left-0 right-0 z-10">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Image src="/globe.svg" alt="Logo" width={50} height={50} />
          </div>

          {/* Navigation Links on the right */}
          <div className="flex gap-6">
            <a href="/about" className="text-lg text-[#333] hover:underline">
              About
            </a>
            <a href="/services" className="text-lg text-[#333] hover:underline">
              Services
            </a>
            <a href="/contact" className="text-lg text-[#333] hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Full-Screen Background Image */}
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/background.png")' }}>
          {/* Content Section */}
          <div className="flex justify-center items-center h-full pt-20">
            <div className="text-center text-[#33484d] p-6">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">Sound Waves Yoga</h1>
              <p className="text-lg sm:text-2xl mb-8">Helping you to find rest in a restless world, through movement, stillness and sound.</p>
            </div>
          </div>
        </div>

        {/* Scrollable content below */}
        <div id="more" className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">More Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/image1.jpg" alt="Image 1" width={500} height={300} className="rounded-md" />
                <h3 className="text-xl mt-4">Box 1</h3>
                <p className="mt-2">Description of content for Box 1.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/image2.jpg" alt="Image 2" width={500} height={300} className="rounded-md" />
                <h3 className="text-xl mt-4">Box 2</h3>
                <p className="mt-2">Description of content for Box 2.</p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <Image src="/image3.jpg" alt="Image 3" width={500} height={300} className="rounded-md" />
                <h3 className="text-xl mt-4">Box 3</h3>
                <p className="mt-2">Description of content for Box 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
