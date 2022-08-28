import React from 'react'

const Movie = ({movie}) => {
  const title = movie?.title?.length >= 25 ? movie?.title.slice(0, 25).trim() + '...' : movie?.title; 
  
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] hover:scale-95 inline-block cursor-pointer relative p-2'>
      <img className='w-full h-auto block rounded' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={title}/>
      <p className='text-white bg-gray-900 p-2 rounded text-xs flex justify-center items-center text-center'>{title}</p>
    </div>
  )
}

export default Movie;