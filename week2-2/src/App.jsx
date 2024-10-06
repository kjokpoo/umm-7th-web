import { useState } from 'react'
import './App.css'
import { MOVIES } from './mock/movie./movies';

const link = 'https://image.tmdb.org/t/p/w500'

function App() {
  const [hoverId, setHoverId] = useState(0);

  const mouseOff = () => {
    setHoverId(0);
  };

  const mouseOn = (id) => {
    setHoverId(id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' ,gap:"10"}}>
      {
        MOVIES.results.map((movie) => (
          <div
            key={movie.id}
            onMouseEnter={() => mouseOn(movie.id)}
            onMouseLeave={mouseOff}
            style = {{
              position: "relative",
              width: "300px",
              height: "450px",
              borderRadius: 20,
              overflow: "hidden"
            }}
          >
            <div
            style={{
              position: "absolute",
              backgroundColor: movie.id === hoverId ? "black" : "transparent",
              width: "100%",
              height: "100%",
              borderRadius: '10px',
              opacity: movie.id === hoverId ? 0.7 : 0,
              transition: 'background-color 0.3s',
            }}
            >
            </div>
            <img 
              style={{ borderRadius: 20, width: "300px", height: "450px" }} 
              src={link + movie.poster_path} 
              alt={movie.title} 
            />
          </div>
        ))}
    </div>
  )
}

export default App;
