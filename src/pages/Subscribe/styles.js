import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  height: 100%;
`;

export const Description = styled.article`
  text-align: center;
  padding-bottom: 5vh;
`;

export const Title = styled.h2`

`;
export const Text = styled.p`
  width: 100%;
  font-size: 14px;
`;
export const TitleInsideForms = styled.h3``;

export const Form = styled.form`
  padding:5px 15px 10px;
  background: #fff;
  box-shadow: 0 0 4px 0 rgb(31 38 135 / 77%);
  backdrop-filter: blur( 1.5px );
  -webkit-backdrop-filter: blur( 1.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  label, input {
    padding: 2vh 0;
  }
`;

export const Questions = styled.section`
  padding: 20px 0;
`;

export const Fields = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
`;

