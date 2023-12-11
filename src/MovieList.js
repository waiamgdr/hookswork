import React from 'react'
import FilmCard from './FilmCard'
import './App.css';
const MovieList = (props) => {
  return (
    <div className="info"  >{props.tt.map (el => <FilmCard     pr={el}/>)}
    
    
    </div>
  )
}

export default MovieList