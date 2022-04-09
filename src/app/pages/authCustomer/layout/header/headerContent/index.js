import React from "react";
import Styles from "../index.module.scss";

const HeaderContent = ({sejamInfoState}) => {
  return (
    <div className={Styles["header-content-parent"]}>
      <div>
        <img
          src="/media/authCustomer/Group 2@2x.png"
          className={Styles['img']}
          alt=""
        />
      </div>
      <div className={Styles["header-log"]}>
        <div className="ms-5 d-flex align-items-center">
          <img
            src="/media/authCustomer/user@2x.png"
            style={{ width: 18, height: 18, marginLeft: 5 }}
            alt=""
          />
          <div className={Styles["header-log-text"]}>{sejamInfoState?.body?.privatePerson?.firstName} {sejamInfoState?.body?.privatePerson?.lastName}</div>
        </div>
        <div className="d-flex align-items-center">
          <img
            src="/media/authCustomer/logout@2x.png"
            style={{ width: 14, height: 14, marginLeft: 5 }}
            alt=""
          />
          <div className={Styles["header-log-text2"]}>خروج</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
