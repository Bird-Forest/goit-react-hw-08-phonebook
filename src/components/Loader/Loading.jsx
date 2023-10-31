import React from 'react';
import { Loader, LoaderWrap } from './Loading.styled';
import { FidgetSpinner } from 'react-loader-spinner';

export default function Loading() {
  return (
    <LoaderWrap>
      <FidgetSpinner
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        top="300"
        wrapperStyle={{ Loader }}
        wrapperClass="Loaler"
        ballColors={['#673ab7', '#64dd17', '#0091ea']}
        backgroundColor=" #ff6d00"
      />
    </LoaderWrap>
  );
}
