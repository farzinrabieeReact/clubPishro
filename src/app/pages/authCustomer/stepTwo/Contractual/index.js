import React from "react";
import Styles from "../index.module.scss";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyPdf1 from "../../stepThree/pdf/padf1";
import MyPdf2 from "../../stepThree/pdf/pdf2";
import MyPdf3 from "../../stepThree/pdf/pdf3";
import MyPdf4 from "../../stepThree/pdf/pdf4";









const StepTwoContractual = ({sejamInfoState}) => {
  return (
    <>
      <div className="d-flex flex-column w-100 pr-5 border-bottom pb-5 pt-5">
        {/* <PDFViewer width={1100} height={1000}>
          <MyPdf4 />
        </PDFViewer> */}
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className={Styles["stepTwo-contractual-circle"]}>1</span>
            <div
              style={{ marginRight: 10 }}
              className={Styles["contractual-text"]}
            >
              قرارداد مشتری و شرکت کارگزاری مبین سرمایه
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-none d-md-block mx-0 mx-md-3">
              نمایش قراردادها
            </div>
            <PDFDownloadLink document={<MyPdf1 sejamInfoState={sejamInfoState}/>} fileName="contractual1.pdf">
              {({ blob, url, loading, error }) => (
                <img
                  src="/media/authCustomer/writing@2x.png"
                  style={{ width: 15, height: 17 }}
                  alt=""
                />
              )}
            </PDFDownloadLink>

            {/* <img
              src="/media/authCustomer/writing@2x.png"
              style={{ width: 15, height: 17 }}
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column w-100 pr-5 border-bottom pb-5 pt-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className={Styles["stepTwo-contractual-circle"]}>2</span>
            <div
              style={{ marginRight: 10 }}
              className={Styles["contractual-text"]}
            >
              قرارداد استفاده از خدمات برخط اوراق بهادار
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-none d-md-block mx-0 mx-md-3">
              نمایش قراردادها
            </div>
            <PDFDownloadLink document={<MyPdf2 sejamInfoState={sejamInfoState}/>} fileName="contractual2.pdf">
              {({ blob, url, loading, error }) => (
                <img
                  src="/media/authCustomer/writing@2x.png"
                  style={{ width: 15, height: 17 }}
                  alt=""
                />
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column w-100 pr-5 border-bottom pb-5 pt-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className={Styles["stepTwo-contractual-circle"]}>3</span>
            <div
              style={{ marginRight: 10 }}
              className={Styles["contractual-text"]}
            >
              تعهد نامه استفاده از خدمات دسترسی برخط بازار
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-none d-md-block mx-0 mx-md-3">
              نمایش قراردادها
            </div>
            <PDFDownloadLink document={<MyPdf3 sejamInfoState={sejamInfoState}/>} fileName="contractual3.pdf">
              {({ blob, url, loading, error }) => (
                <img
                  src="/media/authCustomer/writing@2x.png"
                  style={{ width: 15, height: 17 }}
                  alt=""
                />
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column w-100 pr-5 pb-5 pt-5 mb-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className={Styles["stepTwo-contractual-circle"]}>4</span>
            <div
              style={{ marginRight: 10 }}
              className={Styles["contractual-text"]}
            >
              قرارداد خرید اعتباری
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-none d-md-block mx-0 mx-md-3">
              نمایش قراردادها
            </div>
            <PDFDownloadLink document={<MyPdf4 />} fileName="contractual4.pdf">
              {({ blob, url, loading, error }) => (
                <img
                  src="/media/authCustomer/writing@2x.png"
                  style={{ width: 15, height: 17 }}
                  alt=""
                />
              )}
            </PDFDownloadLink>
          </div>
        </div>
          
      </div>
    </>
  );
};

export default StepTwoContractual;
