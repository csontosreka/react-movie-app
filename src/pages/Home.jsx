import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

export const Home = () => {
  return (
    <>
      <Main />
      <Row title='Upcoming Movies' url={requests.requestUpcomingMovies}/>
      <Row title='Popular Movies' url={requests.requestPopularMovies}/>
      <Row title='Top Rated Movies' url={requests.requestTopRatedMovies}/>
      <Row title='Trending Movies' url={requests.requestTrendingMovies}/>
    </>
  )
}
