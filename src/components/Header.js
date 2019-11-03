import React    from 'react'
import styled   from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primaryDark};
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.primaryLight};
  padding: 20px;
  cursor: pointer;

  h2 {
    margin: 0;
  }
`

const Header = (props) => {
  return (
    <StyledHeader>
      <h2>{props.text}</h2>
    </StyledHeader>
  )
}

export default Header