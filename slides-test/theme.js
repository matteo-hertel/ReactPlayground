import base from 'mdx-deck/themes';
const green = '#42ff71';
export default {
  ...base,

  font:
    '-apple-system, BlinkMacSystemFont, "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Arial", sans-serif',
  monospace: '"IBM Plex Mono", monospace',
  colors: {
    text: green,
    link: green,
    pre: '#000',
    preBackground: green,
    code: '#000',
    codeBackground: green,
  },
  css: {
    background:
      'linear-gradient(150deg, rgba(37,33,50,1) 0%, rgba(35,76,98,1) 80%)',
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh',
    },
  },
};
