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
    <p>
      都道府県ごとの実効再生産数(感染性の指標, R<sub>t</sub>
      )の変化を示しています。この値は、1人の感染者が何人に感染させるかを表しており、1.0以上だと感染拡大へ、1.0未満だと収束へと向かいます。
    </p>
    <p>
      値は推定値です。感染者数のデータが少ない都道府県ほど推定誤差が大きくなる傾向にあります。
    </p>
    <Header>お願い</Header>
    <p>
      当サイトの値を元に、自身の外出活動を再開する目安にしないでください。1.0を下回っていることは収束していることを意味しません。(あくまで収束へと向かっているだけであり、この状態をしばらく維持する必要があります。)
    </p>
  </>
);
