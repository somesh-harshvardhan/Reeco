import {createGlobalStyle} from 'styled-components';

const GlobalStylesContainer = createGlobalStyle`
:root {
    --base-font-size : 16px;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    min-height: 100vh;
    font-size: var(--base-font-size);
    font-family: 'Poppins', sans-serif;
}
`
export default GlobalStylesContainer;