import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
            outline: 0;
            /*box-shadow: 0 0 0 2px;*/
        }
    
    body {
        background-color: ${props => props.theme['white-200']};
        color: ${props => props.theme['white-200']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Inter, sans-serif;
    }


`