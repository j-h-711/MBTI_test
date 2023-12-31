import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import ENFJ from "../../assets/img/ENFJ.png";
import ENFP from "../../assets/img/ENFP.png";
import ENTJ from "../../assets/img/ENTJ.png";
import ENTP from "../../assets/img/ENTP.png";
import ESFJ from "../../assets/img/ESFJ.png";
import ESFP from "../../assets/img/ESFP.png";
import ESTJ from "../../assets/img/ESTJ.png";
import ESTP from "../../assets/img/ESTP.png";
import INFJ from "../../assets/img/INFJ.png";
import INTJ from "../../assets/img/INTJ.png";
import INFP from "../../assets/img/INFP.png";
import INTP from "../../assets/img/INTP.png";
import ISFJ from "../../assets/img/ISFJ.png";
import ISFP from "../../assets/img/ISFP.png";
import ISTP from "../../assets/img/ISTP.png";
import ISTJ from "../../assets/img/ISTJ.png";

// import * as images from "../../assets/img";

import styled from "styled-components";
import {
  BoxContainer,
  SubBox,
  Title,
  SubTitle,
  Contents,
  ImgWrap,
  ImgBox,
  BTN,
} from "./ResultPage.styles";

function ResultPage(props) {
  let navigate = useNavigate();

  const whatMBTI = props.MBTI;
  const [result, setResult] = useState("");

  const imageMapping = {
    ENFJ: ENFJ,
    ENFP: ENFP,
    ENTJ: ENTJ,
    ENTP: ENTP,
    ESFJ: ESFJ,
    ESFP: ESFP,
    ESTJ: ESTJ,
    ESTP: ESTP,
    INFJ: INFJ,
    INTJ: INTJ,
    INFP: INFP,
    INTP: INTP,
    ISFJ: ISFJ,
    ISFP: ISFP,
    ISTP: ISTP,
    ISTJ: ISTJ,
  };

  useEffect(() => {
    if (whatMBTI) {
      setResult(whatMBTI);
    }
  }, [whatMBTI]);

  let data = {
    INTJ: {
      img: "",
      subtitle: "당신은 INTJ 입니다.",
      cont1: "INTJ는 용의주도한 전략가 입니다.",
      cont2: "당신은 과학자가 되는걸 추천합니다!",
    },
    INTP: {
      img: "",
      subtitle: "당신은 INTP 입니다.",
      cont1: "INTP는 논리적인 사색가 입니다.",
      cont2: "당신은 사이비 교주가 되는걸 추천합니다!",
    },
    ENTJ: {
      img: "",
      subtitle: "당신은 ENTJ 입니다.",
      cont1: "ENTJ는 대담한 통솔자 입니다.",
      cont2: "당신은 골목대장이 되는걸 추천합니다!",
    },
    ENTP: {
      img: "",
      subtitle: "당신은 ENTP 입니다.",
      cont1: "ENTP는 뜨거운 논쟁을 즐기는 변론가입니다.",
      cont2:
        "당신은 세상의 고정관념을 파괴하는 사회운동가가 되는걸 추천합니다!",
    },
    INFJ: {
      img: "",
      subtitle: "당신은 INFJ 입니다.",
      cont1: "INFJ는 선의의 옹호자 입니다.",
      cont2: "당신은 수녀님이나 신부님이 되는걸 추천합니다!",
    },
    INFP: {
      img: "",
      subtitle: "당신은 INFP 입니다.",
      cont1: "INFP 열정적인 중재자 입니다.",
      cont2: "당신은 판타지 소설 작가가 되는걸 추천합니다!",
    },
    ENFJ: {
      img: "",
      subtitle: "당신은 ENFJ 입니다.",
      cont1: "ENFJ는 정의로운 사회운동가 입니다.",
      cont2: "당신은 지구의 평화 수호자 슈퍼맨이 되는걸 추천합니다!",
    },
    ENFP: {
      img: "",
      subtitle: "당신은 ENFP 입니다.",
      cont1: "ENFP는 재기발랄한 활동가 입니다.",
      cont2: "당신은 자유로운 영혼으로 여행 유튜버가 되는걸 추천합니다!",
    },
    ISTJ: {
      img: "",
      subtitle: "당신은 ISTJ 입니다.",
      cont1: "ISTJ는 청렴결백한 논리주의자 입니다.",
      cont2: "당신은 애국보수 정치인이 되는걸 추천합니다!",
    },
    ISFJ: {
      img: "",
      subtitle: "당신은 ISFJ 입니다.",
      cont1: "ISFJ는 용감한 수호자 입니다.",
      cont2: "당신은 원생 100명을 책임지는 유치원 교사가 되는걸 추천합니다!",
    },
    ESTJ: {
      img: "",
      subtitle: "당신은 ESTJ 입니다.",
      cont1: "ESTJ는 엄격한 관리자 입니다.",
      cont2: "당신은 특성화고 기숙사 사감 선생님이 되는걸 추천합니다!",
    },
    ESFJ: {
      img: "",
      subtitle: "당신은 ESFJ 입니다.",
      cont1: "ESFJ는 사교적인 외교관 입니다.",
      cont2: "당신은 계모임 총무를 하는걸 추천합니다!",
    },
    ISTP: {
      img: "",
      subtitle: "당신은 ISTP 입니다.",
      cont1: "ISTP는 만능 재주꾼 입니다.",
      cont2: "당신은 북한의 경제학자 되는걸 추천합니다!",
    },
    ISFP: {
      img: "",
      subtitle: "당신은 ISFP 입니다.",
      cont1: "ISFP는 호기심 많은 예술가 입니다.",
      cont2: "당신은 성인 웹툰 작가가 되는걸 추천합니다!",
    },
    ESTP: {
      img: "",
      subtitle: "당신은 ESTP 입니다.",
      cont1: "ESTP는 모험을 즐기는 사업가 입니다.",
      cont2: "당신은 야생동물 밀수 업자가 되는걸 추천합니다!",
    },
    ESFP: {
      img: "",
      subtitle: "당신은 ESFP 입니다.",
      cont1: "ESFP는 자유로운 영혼의 연예인 입니다.",
      cont2: "당신은 중학교 수학여행 레크레이션 강사가 되는걸 추천합니다!",
    },
  };

  return (
    <BoxContainer>
      <Title>당신의 MBTI는 ?!</Title>
      {result && (
        <div>
          <SubTitle>{data[result].subtitle}</SubTitle>
          <ImgWrap>
            <ImgBox alt="result_img" src={imageMapping[whatMBTI]}></ImgBox>
          </ImgWrap>
          <Contents>{data[result].cont1}</Contents>
          <Contents>{data[result].cont2}</Contents>
          <BTN
            onClick={() => {
              navigate("/");
            }}
          >
            다시하기
          </BTN>
        </div>
      )}
    </BoxContainer>
  );
}

export default ResultPage;
