import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard"

const PopularMovie = ({ movies }) => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    setPopular(movies);
    setFiltered(movies);
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="bg-violet-600 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">Whats Popular</h1>
      <Filter 
      popular={popular}
      setFiltered={setFiltered}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
    />
      <motion.div layout  className="popular-movies">
        <AnimatePresence>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {filtered.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default PopularMovie