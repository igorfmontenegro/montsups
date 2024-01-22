import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

#root{
    height: 260vh;
    overflow-x: hidden;
    font-family: "Montserrat", sans-serif;
}

`
