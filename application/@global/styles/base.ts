import { createGlobalStyle } from "styled-components";
import Font from "./font";

const Base = createGlobalStyle`
    ${Font};

    html {
        font-family: 'Open Sans';
        font-size: min(max(1rem, 4vw), 22px);
        text-rendering: optimizeLegibility;
        box-sizing: border-box;
        overflow: hidden;
    }
    

`;

export default Base;
