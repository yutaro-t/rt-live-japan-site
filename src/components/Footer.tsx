import React from 'react';
import styled from '@emotion/styled';
import { Contents } from '@App/styles/Contents';

// import {
//   FacebookShareButton,
//   FacebookIcon,
//   LineShareButton,
//   LineIcon,
//   TwitterShareButton,
//   TwitterIcon
// } from 'react-share';

const Header = styled.h2({
  fontSize: '1.4rem',
  margin: '1em 0',
  fontWeight: 'bolder'
});
const FooterComponent = styled.footer({
  backgroundColor: '#f0f0f0',
  padding: '32px 0'
});

// const Buttons = styled.div({
//   button: {
//     marginLeft: 8
//   }
// });
export const Footer: React.FC = () => (
  <FooterComponent>
    <Contents>
      <Header>当サイトについて</Header>
      <p>
        <a href="https://twitter.com/kevin">Kevin Systrom</a>氏らによる
        <a href="https://rt.live/">
          R<sub>t</sub> Covid-19
        </a>
        を日本の都道府県へと拡張したものです。
        <br />
        運営・開発は、2人の学生(
        <a href="https://github.com/souring001">Kohei Aso</a>,{' '}
        <a href="https://github.com/yutaro-t">Yutaro Totsuka</a>
        )によってボランティアで行われています。データは毎日自動で更新されます。
        <br />
        問合せは
        <a href="mailto:rt.live.japan@gmail.com">rt.live.japan@gmail.com</a>
        までお願いします。現在、大変多くのお問い合わせを頂いており、ご返信には相応のお時間を頂く場合がございます。
        <br />
        こうした活動を推奨してくださったKevin
        Systrom氏をはじめとする、アメリカ版のサイト制作に尽力された皆様に深く感謝申し上げます。
      </p>

      <Header>
        R<sub>t</sub>の算出について
      </Header>
      <p>
        ここに示される指標 (R<sub>t</sub>
        )は、都道府県ごとに算出されたウイルスの実効再生産数の時間的変化を表しています。これにより、特定の地域において、1人の感染者が何人に感染させるかを推定することができます。1.0未満ならば、ウイルスは広がりますが、足踏み状態になり、全員が感染する前に消えていきます。1.0以上であれば、その地域で感染が拡大していくことを意味します。
      </p>
      <p>
        そして、我々の行動によってR<sub>t</sub>
        の値は日々変動します。アメリカでは州ごとに様々なロックダウン計画があり、地域ごとのR
        <sub>t</sub>
        の比較や変化から、ウイルスの感染拡大を遅らせるための政策がどれだけ効果的であるかを測るのに役立つとされています。
      </p>
      <p>
        詳しくは、Kevin Systrom氏の
        <a href="http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/">
          ブログ(The Metric We Need to Manage COVID-19)
        </a>
        をご覧ください。
        <br />R<sub>t</sub>
        の算出については、 Kevin Systrom氏の
        <a href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb">
          Jupyter notebook
        </a>
        を元にしています。
        <br />
        日本版のRtの算出方法、生成コード、サイトの構築は
        <a href="https://github.com/souring001/covid-19">こちら</a>
        で公開しています。
      </p>
      <Header>データについて</Header>
      <p>
        本サイトで公表しているデータは、ジャッグジャパン株式会社が提供している
        <a href="https://gis.jag-japan.com/covid19jp">
          都道府県別新型コロナウイルス感染者数マップ
        </a>
        のCSVデータを使用しています。
      </p>
      <Header>現状の問題点</Header>
      <p>
        現状のモデルでは、発症から感染発覚までの時間差を考慮していません。本家アメリカ版サイトでは日々モデルが更新されており、当サイトは4/22付のものと対応しています。
        <br />
        当サイトにおいても今後更新していく予定ですので、ご理解のほどよろしくお願いいたします。
      </p>

      <Header>免責事項</Header>
      <ul>
        <li>
          当サイトに掲載されている情報の正確性については万全を期していますが、私たちは利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。
        </li>
        <li>当サイトの管理者は、感染症や公衆衛生学の専門家ではありません。</li>
        <li>
          当サイトに掲載されている情報は、
          <a href="https://twitter.com/kevin">Kevin Systrom</a>氏らによる
          <a href="https://rt.live/">
            R<sub>t</sub> Covid-19
          </a>
          と、比較を目的とするものではありません。(全く同じアルゴリズムを使用していません。）
        </li>
        <li>
          利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。
        </li>
        <li>
          当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。
        </li>
      </ul>

      <Header>更新履歴</Header>
      <p>2020/04/24 公開</p>
      {/* <Header>シェア</Header>

      <Buttons>
        <FacebookShareButton url="https://rt-live-japan.com/">
          <FacebookIcon round size={32} />
        </FacebookShareButton>
        <TwitterShareButton url="https://rt-live-japan.com/">
          <TwitterIcon round size={32} />
        </TwitterShareButton>
        <LineShareButton url="https://rt-live-japan.com/">
          <LineIcon round size={32} />
        </LineShareButton>
      </Buttons> */}
    </Contents>
  </FooterComponent>
);
