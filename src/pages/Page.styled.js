import styled from 'styled-components';
import myImage from '../img/hends.jpg';

export const WrapHomePage = styled.div`
  display: flex;
  /* background-image: url('https://celes.club/uploads/posts/2023-03/thumbs/1679452484_celes-club-p-fon-druzhba-vkontakte-97.jpg'); */
  background-image: url(${myImage});
  object-fit: cover;
  background-repeat: no-repeat;
  min-width: 360px;
  height: 1200px;
  @media screen and (min-width: 800px) {
    width: 800px;
  }
`;
// export const TitleHomePage = styled.h2`
//   margin-top: 200px;
//   font-family: Rubik Moonrock;
//   font-size: 80px;
//   color: #e0f7fa;
// `;

export const WrapRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e1f5fe;
  /* gap: 20px; */
  margin: 0;
`;
export const TitleRegisterPage = styled.h2`
  display: block;
  /* margin-bottom: 10px; */
  font-size: 24px;
  padding: 0;
  margin: 160px auto 20px auto;
  color: #01579b;
`;
export const WrapLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ccff90;
  /* gap: 20px; */
  margin: 0;
`;
export const TitleLoginPage = styled.h2`
  display: block;
  /* margin-bottom: 10px; */
  font-size: 24px;
  padding: 0;
  margin: 160px auto 20px auto;
  color: #388e3c;
`;

export const WrapContactsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ede7f6;
  gap: 20px;
  margin: 0;
`;
export const TitleContactsPage = styled.div`
  display: flex;
  min-width: 360px;
  max-height: 100px;
  font-size: 4px;
  padding: 0;
  margin: 0 auto 68px auto;
  color: #ede7f6;
  @media screen and (min-width: 600px) {
    width: 800px;
    /* height: 40px; */
    margin: 0 auto 32px auto;
  }
`;
