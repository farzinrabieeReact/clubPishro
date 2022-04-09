import React from "react";
import Styles from "../../index.module.scss"

const StepOneFinicialContent = ({financialInfo}) => {
  return (
    <>
     <div className="d-flex flex-column m-0 ms-md-5">
        <div style={{color: "#888888" }} className={Styles["stepOne-content-text"]}>میزان آشنایی با بورس</div>
        <div className={Styles["stepOne-content-text"]}>{financialInfo?.tradingKnowledgeLevel?financialInfo?.tradingKnowledgeLevel:"_"}</div>
      </div>
      <div className="d-flex flex-column m-0 ms-md-5">
        <div style={{ color: "#888888" }} className={Styles["stepOne-content-text"]}>پیش‌بینی مقدار<br className="d-block d-sm-none"/> گردش مالی در یک سال</div>
        <div className={Styles["stepOne-content-text"]}>{financialInfo?.transactionLevel?financialInfo?.transactionLevel:'_'}</div>
      </div>
    </>
  );
};

export default StepOneFinicialContent;
