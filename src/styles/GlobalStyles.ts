import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 300;
        src: url("fonts/Rubik-Light.ttf");
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        src: url("fonts/Rubik-Regular.ttf");
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        src: url("fonts/Rubik-Medium.ttf");
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 600;
        src: url("fonts/Rubik-SemiBold.ttf");
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 700;
        src: url("fonts/Rubik-Bold.ttf");
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 800;
        src: url("fonts/Rubik-ExtraBold.ttf");
    }
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 900;
        src: url("fonts/Rubik-Black.ttf");
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, font, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
        background: transparent;
        border: 0;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }
    body {
        background-color: #ffffff;
        margin: 0;
        color: #000;
        font-family: "Rubik", sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    }

    *, *:after, *:before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    
    
    
`;

export default GlobalStyles;
