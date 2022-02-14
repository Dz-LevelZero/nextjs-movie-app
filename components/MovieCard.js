import Image from "next/image"

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={200} height={300} layout="responsive" />
    </div>
  )
}

export default MovieCard