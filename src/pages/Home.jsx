import Loading from 'components/Loader/Loading';
import { TitleHomePage, WrapHomePage } from './Page.styled';

import React from 'react';

export default function Home() {
  return (
    <WrapHomePage>
      <TitleHomePage></TitleHomePage>
      {/* <Loading /> */}
    </WrapHomePage>
  );
}
