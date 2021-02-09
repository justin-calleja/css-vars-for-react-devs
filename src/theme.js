import { css } from 'styled-components';

const grey100 = (opacity = 1) => `rgba(245, 245, 245, ${opacity})`;
const grey200 = (opacity = 1) => `rgba(238, 238, 238, ${opacity})`;
const grey800 = (opacity = 1) => `rgba(66, 66, 66, ${opacity})`;
const grey900 = (opacity = 1) => `rgba(33, 33, 33, ${opacity})`;

const theme = {
  colors: {
    text: grey900(),
    background: grey100(),
    secondaryBackground: grey200(),
    modes: {
      dark: {
        text: grey100(),
        background: grey900(),
        secondaryBackground: grey800(),
      },
    },
  },
  fontSizes: ['1.6rem', '2rem', '2.4rem'],
  breakpoints: ['768px', '1024px'],
};

export const breakpointsToCssVarsStringFactory = (breakpoints, varName) => {
  return ({ theme, values }) => {
    const mobileVal = values[0];
    let result = '';

    if (mobileVal) result += `--${varName}: ${mobileVal};\n`;

    const otherVals = values.slice(1);
    for (let i = 0; i < otherVals.length; i++) {
      const bp = theme.breakpoints[i];
      if (bp) {
        result += `@media screen and (min-width: ${bp}) { --${varName}: ${otherVals[i]}; }\n`;
      }
    }

    return result;
  };
};

export const getFontSizesAsCssString = ({ theme, varName = 'font-size' }) => {
  return breakpointsToCssVarsStringFactory(
    theme.breakpoints,
    varName,
  )({ theme, values: theme.fontSizes });
};

export const getColorsAsCssString = ({ theme, varName = 'colors' }) => {
  const { modes, ...colors } = theme.colors;

  // https://styled-components.com/docs/api#css
  return css`
    ${(props) => {
      return Object.entries(colors)
        .map(
          ([key, val]) =>
            `--${varName}-${key}: ${
              modes?.[props.theme.colorMode]?.[key] || val
            };`,
        )
        .join('\n');
    }}
  `;
};

export default theme;
