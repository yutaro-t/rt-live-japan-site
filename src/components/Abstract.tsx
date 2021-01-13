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
    <p>当サイトへアクセスいただきありがとうございます。</p>
    <p>
      現在、実効再生産数の計算式を西浦博教授のモデルへ移行中です。2021年2月中旬ごろの復旧を予定しています。
    </p>
    <p>
      当サイトは、有志2名で開発しており、学業に専念しているため、更新が遅れていることをお詫び申し上げます。
    </p>
  </>
);
