import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1({
  fontSize: '2.2rem',
  fontWeight: 'bolder',
  padding: '1.5em 0 1em'
});
const Header = styled.h2({
  fontSize: '1.4rem',
  margin: '1em 0',
  fontWeight: 'bolder'
});

export const Abstract: React.FC = () => (
  <>
    <Title>
      R<sub>t</sub> Covid-19 Japan
    </Title>
    <p>メンテナンス中です。</p>
  </>
);
