import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./routes/MainPage/MainPage";
import ResultPage from "./routes/ResultPage/ResultPage";
import TestPage from "./routes/TestPage/TestPage";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);

  const [MBTI, setMBTI] = useState();
  const [datas, setDatas] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                setEI={setEI}
                setSN={setSN}
                setTF={setTF}
                setJP={setJP}
                setMBTI={setMBTI}
                setDatas={setDatas}
              />
            }
          />
          <Route
            path="/testpage"
            element={
              <TestPage
                EI={EI}
                SN={SN}
                TF={TF}
                JP={JP}
                setEI={setEI}
                setSN={setSN}
                setTF={setTF}
                setJP={setJP}
                MBTI={MBTI}
                setMBTI={setMBTI}
                datas={datas}
                setDatas={setDatas}
              />
            }
          />
          <Route path="/resultpage" element={<ResultPage MBTI={MBTI} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
