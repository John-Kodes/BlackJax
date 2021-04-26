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
        color: white;
        outline: none;
        font-size: 2.4rem;
        padding: 0.5rem 1.2rem;

        font-weight: 600;
        background-color: #13131b;
        border-radius: 4px;
        border: 2px solid transparent;
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
        cursor: pointer;

        transition: all 0.1s;

        &:hover {
            transform: scale(1.02) translateY(-0.2rem);
            box-shadow: 0 1.2rem 2rem rgba(0, 0, 0, 0.3);
        }
        &:active {
            transform: scale(1.02) translateY(0.1rem);
            border: 1px solid #f2ce30;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
        }
    }

    ::selection{
        background-color: #f2ce30;
        color: black;
    }
`;

export default GlobalStyles;
