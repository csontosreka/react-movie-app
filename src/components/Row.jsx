import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const Row = ({title, url}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results)
    })
  }, [url]);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'}  className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((movie, id) => {
            return <Movie key={id} movie={movie}/>
          })};
        </div>
      </div>
    </>
  )
}

export default Row;