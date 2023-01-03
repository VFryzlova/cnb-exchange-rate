import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: rgb(235, 235, 235);
    }

    h1 {
        margin: 18px 0 24px 0;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    main {
        background-color: rgb(255, 255, 255);
        max-width: 80%;
        margin: 40px auto;
        padding: 0 18px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid rgb(223, 223, 223);

        .exchange-wrapper {
            @media (min-width: 980px) {
                display: flex;
                justify-content: center;
                gap: 40px;
            }

            & > * {
                flex: 1;
                background-color: rgb(245, 245, 245);
                border-radius: 8px;
                margin-bottom: 18px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    } 
`