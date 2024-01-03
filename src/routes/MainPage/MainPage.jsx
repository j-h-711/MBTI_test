import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  CenteredBoxContainer,
  BTN,
  Title,
  BoxContainer,
  ImgWrap,
  ImgBox,
} from "./MainPage.styles";
import { useEffect } from "react";

function Main(props) {
  let navigate = useNavigate();

  const handleStartTest = () => {
    // Reset state variables
    props.setEI(0);
    props.setSN(0);
    props.setTF(0);
    props.setJP(0);
    props.setMBTI(undefined);
    props.setDatas(undefined);

    // Navigate to the test page
    navigate("/testpage");
  };

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
        <BTN onClick={handleStartTest}>시작하기</BTN>
      </BoxContainer>
    </CenteredBoxContainer>
  );
}

export default Main;
