import { useEffect } from "react"

const Filter = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);
  }, [activeGenre])
  
  let btnClass = "font-bold text-white py-3 mb-5 px-6 mx-3 rounded text-sm mt-4 border-2 border-orange-600"
  let btnClassActive = "bg-orange-600 font-bold text-white py-3 mb-5 px-6 rounded text-sm mt-4 border-2 border-orange-700" 

  return (
    <div className="filter-container">
      <button 
        className= {activeGenre === 0 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(0)}
      >
       All
      </button>
      <button 
        className={activeGenre === 35 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(35)}
      >
       Comedy
      </button>
      <button 
        className={activeGenre === 28 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 12 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(12)}
      >
        Adventure
      </button>
      <button
        className={activeGenre === 16 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(16)}
      >
        Animation
      </button>
      <button
        className={activeGenre === 878 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(878)}
      >
        Science Fiction
      </button>
      <button
        className={activeGenre === 27 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(27)}
      >
        Horror
      </button>
      <button
        className={activeGenre === 53 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(53)}
      >
        Thriller
      </button>
      <button
        className={activeGenre === 10751 ? btnClassActive : btnClass}
        onClick={() => setActiveGenre(10751)}
      >
        Family
      </button>
    </div>
  )
}


<button className="bg-violet-600 font-bold text-white py-3 mb-5 px-6 rounded text-sm mt-4">CONTACT US </button>


export default Filter