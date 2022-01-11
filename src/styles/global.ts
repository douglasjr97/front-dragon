import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #363F5F;
    --shape:#FFFFFF;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green:#33CC95;
    --red: #E52E4D;
    --text-title:#363F5F;
    --text-body:#969CB3;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width:720px){
        font-size: 87.5%;
    }
}
body{
    background: var(--backgrounnd);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color:#363F5F;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}
button{
    cursor: pointer;
}
[disabled]:{
    opacity: 0.6;
    cursor: not-allowed;
}
`