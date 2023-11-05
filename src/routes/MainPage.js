import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const CenteredBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
let Title = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #dc9e77;
`;

let BTN = styled.button`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem;
  background: #dc9e77;
  color: #f8e692;
  cursor: pointer;
`;

let BoxContainer = styled.div`
  text-align: center;
  border: none;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  background: #f8e692;
  color: #69a65a;
`;

let ImgWrap = styled.div`
  margin: auto;
  max-width: 800px;
  padding: 2rem;
`;
let ImgBox = styled.img`
  border-radius: 1rem;
  width: 100%;
`;

function Main(props) {
  let navigate = useNavigate();

  return (
    <CenteredBoxContainer>
      <BoxContainer>
        <Title>MBTI 테스트</Title>
        <ImgWrap>
          <ImgBox
            alt="main_img"
            src="https://img.freepik.com/premium-photo/four-wooden-blocks-with-the-letter-mbti-myersbriggs-type-indicators_773973-814.jpg?w=1060"
          ></ImgBox>
        </ImgWrap>
        <BTN
          onClick={() => {
            navigate("/testpage");
          }}
        >
          시작하기
        </BTN>
      </BoxContainer>
    </CenteredBoxContainer>
  );
}

export default Main;
