import { styled } from 'styled-components';

export const LoaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
`;
export const Loader = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  position: absolute;
  top: 300px;
  margin-left: auto;
  margin-right: auto;
`;
