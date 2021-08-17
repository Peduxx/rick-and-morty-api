import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --green: #50fa7b;
  --blue: #006EFF;
  --blue-light: #6933FF;
  --text-title: #363F5F;
  --text-body: #969CB3;
  --background: #000108 ;
  --shape: #FFFFFF;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px){
      font-size: 93,75%;
  }
  @media (max-width: 720px){
      font-size: 87,5%;
  }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

body, input, textarea, input{
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
}

ul {
  list-style: none;
}

p{
  color: var(--green);
  a{
    color: var(--blue);
  }
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
    color: var(--shape);
    text-align: center;
}

`;
