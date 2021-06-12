import { createGlobalStyle } from "styled-components";
import Font from "./font";

const Base = createGlobalStyle`
    ${Font};

    html {
        font-size: 16px;
        font-family: 'Open Sans';
        text-rendering: optimizeLegibility;
    }
    
    @media screen and (min-width: 320px) {
        html {
            font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        }
    }

    @media screen and (min-width: 1000px) {
        html {
            font-size: 22px;
        }
    }

`;

export default Base;
