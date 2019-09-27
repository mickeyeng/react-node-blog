import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 html {
    box-sizing: border-box;
    font-size: 10px;
  
 }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  h1 {
    font-size: 3rem;
  }

`

export default GlobalStyles
