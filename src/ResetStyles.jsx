import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const ResetStyles = createGlobalStyle`
  
body {
  /* margin: 0; */
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  /* letter-spacing: 0.04em;
  color: ${(props) => props.theme.color.color};
  background-color: ${(props) => props.theme.color.bkgColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}

/* code {
  font-family: source-code-pro, Menlo, Moanco, Consolas, 'Courier New',
    monospace;
} */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
  object-fit: cover;
}
`;

export default ResetStyles;