import React from 'react'
import './App.css';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
    return (
        <div>
            <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={movie.main_img} alt ="" />
      <h1>{movie.title}</h1>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
      <h4>{movie.date} </h4>
      <span className="minutes">{movie.duration} </span>
      <p className="type">{movie.genre}</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        {movie.description} 
      </p>
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div>
        </div>
    )
}

export default MovieCard
