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
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-style: normal;

  }

`

export default GlobalStyles
