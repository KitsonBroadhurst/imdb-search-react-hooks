import React    from 'react'
import styled   from 'styled-components'

const StyledMovie = styled.div`
  padding: 5px 25px 10px 25px;
  max-width: 20%;

  img {
    width: 200px;
  }

  @media screen and (min-width: 694px) and (max-width: 915px) {
    max-width: 33%;
  }
  
  @media screen and (min-width: 652px) and (max-width: 693px) {
    max-width: 50%;
  }
  
  @media screen and (max-width: 651px) {
    max-width: 100%;
    margin: auto;
  }
`

const DEFAULT_PLACEHOLDER_IMAGE =
"https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg"

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster

  return (
    <StyledMovie>
      <h2>{ movie.Title }</h2>
      <div>
        <img 
          alt={`The movie titled: ${movie.Title}`}
          src={ poster }
        />
      </div>
      <p>{ movie.Year }</p>
    </StyledMovie>
  )
}

export default Movie