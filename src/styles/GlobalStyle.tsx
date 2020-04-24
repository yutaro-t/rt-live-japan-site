import React from 'react';
import { Global } from '@emotion/core';
export const GlobalStyle: React.FC = () => (
  <Global
    styles={{
      p: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)'
      },
      a: {
        color: '#eb5358'
      }
    }}
  />
);
