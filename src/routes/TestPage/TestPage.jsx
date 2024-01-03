import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  CenteredBoxContainer,
  BoxContainer,
  ImgWrap,
  ImgBox,
  BTN,
  Title,
  SubTitle,
} from "../TestPage/TestPage.styles";

function TestPage(props) {
  useEffect(() => {
    // 결정된 성향 data 배열로 정리
    let data = [];
    if (props.EI > 0) {
      data.push("E");
    } else {
      data.push("I");
    }

    if (props.SN > 0) {
      data.push("S");
    } else {
      data.push("N");
    }

    if (props.TF > 0) {
      data.push("T");
    } else {
      data.push("F");
    }

    if (props.JP > 0) {
      data.push("J");
    } else {
      data.push("P");
    }

    // 배열을 join 통해서 하나의 문자로 바꾸고 setDatas 해줌
    props.setDatas(data.join(""));
    props.setMBTI(props.datas);

    // 아래 애들이 변할때 useEffect 실행
  }, [props.EI, props.SN, props.TF, props.JP, props.datas]);

  let navigate = useNavigate();
  const [num, setNum] = useState(1);
  const initialData = {
    1: {
      ques: "친구가 자기도 같이 놀자는데 어떻게 할까?",
      ans1: "1 : 그래! 불러서 같이 놀자",
      ans2: "2 : 갑자기? 누군데? 어색할 것 같은데..",
    },
    2: {
      ques: "내일 회사 워크샵이 있다. 나의 마음은?",
      ans1: "1 : 가서 새로운 직원들이랑도 친해져야지!",
      ans2: "2 : 대부분 모르는 사람일텐데.. 걱정이네",
    },
    3: {
      ques: "부랄친구 1년 안 만나기 vs 장기자랑 1시간 하기",
      ans1: "1 : 장기자랑 재미있지! 장기자랑 1시간 해야지~",
      ans2: "2 : 친한 친구를 1년 못 보더라도 장기자랑은 못하겠어.. 부랄친구 1년 안 만날래",
    },
    4: {
      ques: "내일 여행을 간다면?",
      ans1: "1 : 내일 여행 가려면 빨리 자야겠다",
      ans2: "2 : 늦잠 자면 어쩌지? 차는 안 막히겠지?..",
    },
    5: {
      ques: "버스에서 눈 내리는 밖을 볼 때",
      ans1: "1 : 아 신발이랑 바지 엄청 더러워지겠네..",
      ans2: "2 : 버스는 안 미끄러지나? 눈은 왜 내릴까...",
    },
    6: {
      ques: "김치찌개를 끓어야 한다",
      ans1: "1 : 레시피를 찾아서 정확히 끓인다",
      ans2: "2 : 음식은 손맛이지! 감으로 끓인다",
    },
    7: {
      ques: "친구에게 자기 집에 불이 났었다고 전화가 왔다. 무슨 말을 할까",
      ans1: "1 : 보험은 들어있어? 없으면 돈 많이 들텐데..",
      ans2: "2 : 몸은 괜찮아? 많이 놀랐겠다..",
    },
    8: {
      ques: "어머니가 공인중개사 시험에서 불합격하셨다. 나의 위로는?",
      ans1: "1 : 실수가 많았어? 왜 떨어진거야?..",
      ans2: "2 : 엄마 속상하지?.. 기분 전환하게 쇼핑가자!",
    },
    9: {
      ques: "친구가 누군가 자기를 뒷담화 하는걸 알게 됐다고 한다.",
      ans1: "1 : 너가 뭐 잘못해서 욕하는거야? 무슨 말 했대?",
      ans2: "2 : 헐.. 누구야 진짜 나쁜사람이네 왜 뒷담을 한대!",
    },
    10: {
      ques: "친구들과 오랜만에 여행을 가기로 했다. 어떻게 정할까",
      ans1: "1 : 언제 어디로 가고 뭘 먹을지 정확히 정하고 간다",
      ans2: "2 : 느낌 오는 곳으로 무작정 간다",
    },
    11: {
      ques: "밥을 먹으러 인터넷으로 찾은 맛집에 왔는데 문을 닫았다. 내 머리속의 생각은?",
      ans1: "1 : 큰일이네.. 어디 가지.. 뭘 먹어야하지",
      ans2: "2 : 그냥 옆에 있는 마라탕집에 가면 되겠다! ",
    },
    12: {
      ques: "이성친구와 저녁 7시에 강남역에서 약속이 있다",
      ans1: "1 : 5시부터는 준비를 하고 10분 일찍 도착하게 6시쯤 출발해야지",
      ans2: "2 : 7시 약속인데 이미 6시30분이네! 얼른 나가야겠다!",
    },
  };

  return (
    <CenteredBoxContainer>
      <BoxContainer>
        <Title>Q{num}</Title>
        <SubTitle>Q : {initialData[num].ques}</SubTitle>
        <BTN
          onClick={() => {
            setNum((prev) => prev + 1);
            if (num <= 3) {
              props.setEI(props.EI + 1);
            } else if (num >= 4 && num <= 6) {
              props.setSN(props.SN + 1);
            } else if (num >= 7 && num <= 9) {
              props.setTF(props.TF + 1);
            } else if (num >= 10 && num <= 12) {
              props.setJP(props.JP + 1);
            }

            if (num === 12) {
              navigate("/resultpage");
            }
          }}
        >
          {initialData[num].ans1}
        </BTN>
        <BTN
          onClick={() => {
            setNum((prev) => prev + 1);
            if (num <= 3) {
              props.setEI(props.EI - 1);
            } else if (num >= 4 && num <= 6) {
              props.setSN(props.SN - 1);
            } else if (num >= 7 && num <= 9) {
              props.setTF(props.TF - 1);
            } else if (num >= 10 && num <= 12) {
              props.setJP(props.JP - 1);
            }
            if (num === 12) {
              navigate("/resultpage");
            }
          }}
        >
          {initialData[num].ans2}
        </BTN>
      </BoxContainer>
    </CenteredBoxContainer>
  );
}
export default TestPage;
