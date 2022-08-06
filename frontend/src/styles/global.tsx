import { createGlobalStyle } from "styled-components";

const GlobalStyles  = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background-color: #F3F5F8;
        font-family: "Roboto",sans-serif;
    }
`

export default GlobalStyles;