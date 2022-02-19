import axios from 'axios';
import Hero from '../components/Hero'
import PopularMovie from '../components/PopularMovie';
import { server } from '../config'

export default function Home({ movies }) {
  return (
    <div className='bg-violet-600 '>
      <Hero movies={movies.results}/>
      <PopularMovie movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() { 
  // i have not hide api key because its for free
  const res = await axios(`${server}/popular?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page=1`);
  // if Using .env
  // const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`); 
  const movies = res.data;
  return {
    props: { movies }
  }
}
