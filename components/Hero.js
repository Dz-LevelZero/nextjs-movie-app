import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src="/home_cinema.png" alt="Hero image" width={200} height={200} layout="responsive"/>
      </div>
      <h1 className="text-2xl font-bold text-gray-700 uppercase"> Next Movie </h1>
      <p className="text-gray-500"> A simple movie search App </p>
      <Link href="/contact" passHref>
        <button className="bg-violet-600 font-bold text-white py-3 px-6 rounded text-sm mt-4">CONTACT US </button>
      </Link>
    </div>
  )
}

export default Hero