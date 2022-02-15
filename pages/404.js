import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <h1 className="font-bold text-violet-700 text-9xl">404</h1>
      <h6 className="text-5xl font-bold text-gray-600">
        <span className="text-red-500">Oops!</span> Page not found
      </h6>
      <p className="text-gray-500 mt-3">{" The page you're looking for doesn't exists."}</p>
      <Link href="/">
        <a className="bg-violet-700 text-white mt-5 font-bold px-6 py-2 text-sm">Go Home</a>
      </Link>
    </div>
  )
}

export default NotFound
