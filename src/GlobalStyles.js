import { createGlobalStyle } from 'styled-components';
import theme, { getFontSizesAsCssString, getColorsAsCssString } from './theme';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  :root {
    box-sizing: border-box;
    font-size: 10px;
    ${getFontSizesAsCssString}
    ${getColorsAsCssString}
  }

  body {
    font-size: var(--font-size);
    background-color: var(--colors-background);
    color: var(--colors-text);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
