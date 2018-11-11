import React from 'react';
import ThemeProvider from 'mdx-deck/dist/Provider';
import {FaTwitter} from 'react-icons/fa';

const Provider = ({children, ...rest}) => (
  <ThemeProvider {...rest}>
    {children}
    <div
      style={{
        color: 'white',
        fontSize: '16px',
        position: 'absolute',
        bottom: '1em',
        right: '1em',
      }}>
      <FaTwitter style={{marginBottom: '-3px'}} />
      @MHDev91
    </div>
  </ThemeProvider>
);

export default Provider;
