import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1({
  fontSize: '2.2rem',
  fontWeight: 'bolder',
  padding: '1.5em 0 1em'
});

export const Abstract: React.FC = () => (
  <>
    <Title>
      R<sub>t</sub> Covid-19 Japan
    </Title>
    <p>
      都道府県ごとの実効再生産数(感染性の指標, R<sub>t</sub>
      )の変化を示しています。この値は、1人の感染者が何人に感染させるかを表しており、1.0以上だと感染拡大へ、1.0未満だと収束へと向かいます。
    </p>
    <p>
      値は推定値です。感染者数のデータが少ない都道府県ほど推定誤差が大きくなる傾向にあります。
    </p>
  </>
);
