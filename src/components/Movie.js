import React from 'react'

const DEFAULT_PLACEHOLDER_IMAGE =
"https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg"

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster

  return (
    <div className="movie">
      <h2>{ movie.Title }</h2>
      <div>
        <img 
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={ poster }
        />
      </div>
      <p>{ movie.Year }</p>
    </div>
  )
}

export default Movie