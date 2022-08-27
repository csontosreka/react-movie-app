import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Row = ({title, url}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results)
    })
  }, [url]);

  console.log(movies);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}>
          {movies.map((movie, id) => {
            return (
              <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block rounded' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}/>
                <p className='text-white p-2 bg-gray-900 rounded text-xs  flex justify-center items-center text-center'>{movie?.title}</p>
              </div>
            )  
          })};
        </div>
      </div>
    </>
  )
}

export default Row;