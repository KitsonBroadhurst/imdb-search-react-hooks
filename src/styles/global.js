import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  div {
    text-align: center;
  }

  * {
    box-sizing: border-box;
  }

  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  
  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
  }

  .spinner {
    height: 80px;
    margin: auto;
  }
  
  .App-intro {
    font-size: large;
  }
`