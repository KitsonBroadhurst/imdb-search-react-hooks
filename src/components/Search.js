import React, { useState }    from 'react'
import styled                 from 'styled-components'

const StyledSearch = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;

  input[type="text"]{
    width: 40%;
    min-width: 170px;
  }
`

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <StyledSearch>
      <input 
        value={ searchValue }
        onChange={ handleSearchInputChanges }
        type="text"
      />
      <input onClick={ callSearchFunction } type="submit" value="SEARCH" />
    </StyledSearch>
  )
}

export default Search