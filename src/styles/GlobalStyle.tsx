import React from 'react';
import { Global } from '@emotion/core';
import emotionReset from 'emotion-reset';
export const GlobalStyle: React.FC = () => (
  <Global
    styles={[
      emotionReset,
      {
        html: {
          fontSize: 14,
          fontFamily:
            "'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;",
          backgroundColor: '#fafafa'
        },
        p: {
          color: 'rgba(0,0,0,0.65)',
          lineHeight: '1.5em',
          margin: '1em 0'
        },
        a: {
          color: '#eb5358'
        },
        sub: {
          verticalAlign: 'sub',
          fontSize: '0.6em'
        },
        ul: {
          color: 'rgba(0,0,0,0.65)',
          lineHeight: '1.8em',
          margin: '1em 0',
          listStyleType: 'disc',
          paddingLeft: 24
        }
      }
    ]}
  />
);
