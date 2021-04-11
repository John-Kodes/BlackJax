import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%; // 1 rem = 10px
    }
    body{
        font-family:'Raleway', sans-serif;
        background-color: #333;
        color: white;
    }
    h1{
        font-weight: 400;
    }
    button {
        font-family:'Raleway', sans-serif;
        border: none;
        color: white;
        outline: none;
    }
`;

export default GlobalStyles;
