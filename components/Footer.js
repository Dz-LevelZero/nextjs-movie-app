import Link from "next/link"

const Footer = () => {
  return (
    <div className="text-center h-32 flex flex-col items-center justify-center ">
      <Link href="/contact" passHref>
        <button className="bg-violet-600 font-bold text-white py-3 mb-5 px-6 rounded text-sm mt-4">CONTACT US </button>
      </Link>
      <p className="text-xl text-violet-700 mb-3">&copy; Copyright 2022</p>
    </div>
  )
}

export default Footer