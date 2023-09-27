import {createGlobalStyle} from 'styled-components';

const GlobalStylesContainer = createGlobalStyle`
:root {
    --base-font-size : 16px;
    --primary-green : #004b23;
    --secondary-green : #008000;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
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