import React, { useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [movies, setMovies] = useState([]);

  async function getMovies(){
  let {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=2e02cb6f574a4fb754bfe4fb93ac6041')
    setMovies(data.results)
  }
  
getMovies()

  return (
    <>
      <div className="row  g-3 justify-content-center  text-center">
        { movies.length > 0 ?  movies.map((movie , index)=>
        <div key={index} className='col-md-3'>
          <div className="card movie">
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" className='w-100' />
            <h6 className='fw-bold'>{movie.title}</h6>
            <p>{movie.overview}</p>
          </div>
        </div>):<i className='fas fa-spinner fa-spin fa-5x'></i>}
      </div>
    </>
  )
}
