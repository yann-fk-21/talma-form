import { useEffect, useState } from "react";
import { MainLeft } from "../../components/componentNotRetulables/mainLeft/MainLeft";
import { MainRight1 } from "../../components/componentNotRetulables/mainRight/MainRight1";
import { MainRight2 } from "../../components/componentNotRetulables/mainRight/MainRight2";
import { Header } from "../../components/repeatableComponents/molecules/header/Header";
import { ButtonPrewiew } from "../../components/repeatableComponents/atomes/button/ButtonPreview";
import "./home.css";
import { MainRight3 } from "../../components/componentNotRetulables/mainRight/MainRight3";
import { useDataContext } from "../../customHooks/useDataContext";
import { MainRight4 } from "../../components/componentNotRetulables/mainRight/MainRight4";
import { MainRight5 } from "../../components/componentNotRetulables/mainRight/MainRight5";
import { MainRight6 } from "../../components/componentNotRetulables/mainRight/MainRight6";

export const Home = () => {
  const [stepEtape, setStepEtape] = useState(1);
  const [preview, setPreview] = useState(false);
  const { data, setData, data1, setData1 } = useDataContext();

  const updateStep = () => {
    if (stepEtape > 1) {
      setPreview(true);
      return setStepEtape((prev) => prev - 1);
    }
  };

  const onSubmit = (datas) => {
    console.log(datas);
    if (datas && stepEtape === 1) {
      setPreview(false);
      return setStepEtape((prev) => prev + 1);
    }
  };
  const onSubmit1 = (data1) => {
    console.log(data1);
    if (data1 && stepEtape === 2) {
      const code = localStorage.getItem("code");
      console.log(code);
      const check = localStorage.getItem("check");
      const moneyCode = localStorage.getItem("money");
      const country = localStorage.getItem("country");
      data1.code = code;
      data1.check = check;
      data1.moneyCode = moneyCode;
      data1.country = country;
      console.log(data1);
      setData1(data1);
      setPreview(false);
      return setStepEtape((prev) => prev + 1);
    }
  };
  /*** */
  const onSubmit2 = (data2) => {
    console.log(data2);
    if (data2 && stepEtape === 3) {
      setPreview(false);
      return setStepEtape((prev) => prev + 1);
    }
  };
  const onSubmit3 = (data3) => {
    console.log(data3);
    if (data3 && stepEtape === 4) {
      setPreview(false);
      return setStepEtape((prev) => prev + 1);
    }
  };
  const onSubmit4 = (data4) => {
    console.log(data4);
    if (data4 && stepEtape === 5) {
      setPreview(false);
      return setStepEtape((prev) => prev + 1);
    }
  };
  const onSubmit5 = (data5) => {
    console.log(data5);
  };
  return (
    <div className="home">
      <Header />
      <div className="main">
        <MainLeft stepEtape={stepEtape} preview={preview} />
        {stepEtape === 1 && <MainRight1 onSubmit={onSubmit} />}
        {stepEtape === 2 && (
          <MainRight2 update={updateStep} onSubmit={onSubmit1} />
        )}
        {stepEtape === 3 && (
          <MainRight3 update={updateStep} onSubmit={onSubmit2} />
        )}
        {stepEtape === 4 && (
          <MainRight4 update={updateStep} onSubmit={onSubmit3} />
        )}
        {stepEtape === 5 && (
          <MainRight5 update={updateStep} onSubmit={onSubmit4} />
        )}
        {stepEtape === 6 && (
          <MainRight6 update={updateStep} onSubmit={onSubmit5} />
        )}
        {/* {stepEtape > 1 && (
          <ButtonPrewiew step={stepEtape} update={updateStep} />
        )} */}
      </div>
    </div>
  );
};
