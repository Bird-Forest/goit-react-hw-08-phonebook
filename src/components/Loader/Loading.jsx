import React from 'react';
import { LoaderWrap } from './Loading.styled';
import { FidgetSpinner } from 'react-loader-spinner';

export default function Loading() {
  const styles = {
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '300',
    },
  };
  return (
    <LoaderWrap>
      <FidgetSpinner
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={styles.container}
        ballColors={['#673ab7', '#64dd17', '#0091ea']}
        backgroundColor=" #ff6d00"
      />
    </LoaderWrap>
  );
}
