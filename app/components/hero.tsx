import Image from "next/image";
import { url } from "inspector";

export default function Hero(){
    return(
        <>

<section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to Our Store</h1>
        {/* Description */}
        <p className="text-lg md:text-xl text-center max-w-md mb-6">
          Discover the best products tailored just for you.
        </p>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-grow p-3 rounded-l-md text-gray-800 focus:outline-none"
          />


        
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 rounded-r-md transition duration-200"
          >
            Search
          </button>
        </div>
      </div>
    </section>


        </>
    )
}