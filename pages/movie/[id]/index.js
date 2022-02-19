import axios from "axios";
import Image from "next/image";
import Meta from "../../../components/Meta";
import { server } from "../../../config";

const MovieDetails = ({ movie }) => {
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={movie.title} /> 
      <div className="px-3">
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} width={1000} height={600} className="rounded-md"/>
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-violet-700 text-sm mt-4">{movie.overview}</p>
        <p className="my-1 font-bold">Genre: <span className="text-violet-700 font-bold">{movie.genres.map(genre => genre.name).join(', ')}</span></p>
        <p className="text-sm font-bold mb-5">Release Date: <span className="text-violet-700 font-bold">{movie.release_date}</span></p>
      </div>
    </div>
  )
}

export async function getStaticProps(context) { 
  const { id } = context.params;

  const res = await axios(`${server}/${id}?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page=1`); 
//  if Using .env
  // const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`); 
  const movie = res.data;
  return {
    props: { movie }
  }
}

export async function getStaticPaths() { 

  // i have not hide api key because its for free
  const res = await axios(`${server}/popular?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page=1`); 
  // if Using .env  
  // const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`); 
  const movies = res.data.results;

  const ids = movies.map(movie => movie.id );
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}

export default MovieDetails