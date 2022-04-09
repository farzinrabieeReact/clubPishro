import React from "react";
import Styles from "./index.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import MovieIcon from "@material-ui/icons/Movie";
import PublicIcon from "@material-ui/icons/Public";

const FooterLayout = () => {
  return (
    <>
      <div className={Styles["footer"]}>
        <div className={Styles["footer-content-parent"]}>
          <ul
            className="d-flex m-0 mb-2 p-0 list-unstyled justify-content-center"
          >
            <li className={Styles["footer-li"]}>صفحه اصلی</li>
            <li className={Styles["footer-li"]}>شعب کارگزاری مبین سرمایه</li>
            <li className={Styles["footer-li"]}>پشتیبانی: 1579</li>
          </ul>
          <ul
            className="d-flex m-0 p-0 list-unstyled justify-content-center"
          >
            <li className="mx-1" style={{ color: "#929292" }}>
              <TelegramIcon />
            </li>
            <li className="mx-1" style={{ color: "#929292" }}>
              <InstagramIcon />
            </li>
            <li className="mx-1" style={{ color: "#929292" }}>
              <MovieIcon />
            </li>
            <li className="mx-1" style={{ color: "#929292" }}>
              <PublicIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLayout;
