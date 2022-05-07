import{ createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --gray: #616161;
        --light-gray: #bfbfc0;
        --cloud-gray: #eceff1;
        --black: #000000;
        --white: #fff;
        --blue: #322af1;
        --gray-background: #111316;
    }

    * {
        margin: 15px;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--black);
    }


    html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }

    *, button {
        font-family: 'Inter', sans-serif;
    }
`;