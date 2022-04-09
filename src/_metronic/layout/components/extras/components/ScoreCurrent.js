import React, { useEffect, useState } from "react";
import { StarHalf } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleNumber } from "../../../../../app/common/method/displayData/index";
import { actionTypes } from "../../../../../redux/profile/clubmember_select_bonus";

const ScoreCurrent = () => {
  const [show1, setshow1] = useState(true);
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const bonus = useSelector(state => state.reducer_clubmember_select_bonus);
  const [state, setstate] = useState();

  useEffect(() => {
    dispatch({ type: actionTypes.bonusSelectAsync });
  }, []);

  useEffect(() => {
    if (auth.user !== undefined) {
      setstate(bonus);
    }
  }, [bonus]);
  // useEffect(() => {
  let availableBonus = state?.data[0]?.body?.available_bonus;
  let resrvedBonus = state?.data[0]?.body?.reserved_bonus;
  // }, [state]);

  return (
    <li
      className="nav-item mb-2"
      data-placement="left"
      onMouseEnter={() => setshow1(false)}
      onMouseLeave={() => setshow1(true)}
      style={{ position: "relative" }}
    >
      <div
        style={{
          width: "240px",
          height: "130px",
          backgroundColor: "white",
          borderRadius: "7px",
          position: "absolute",
          top: "0",
          right: "50px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}
        className={show1 ? "handleHover" : null}
      >
        <div className="d-flex justify-content-center flex-column mt-5">
          <div className="d-flex justify-content-center ">
            <StarHalf />
            <span>
              امتیاز شما: {auth ? handleNumber(+availableBonus) : " -"}{" "}
            </span>
          </div>
          <div className="d-flex justify-content-center mt-2 ">
            <StarHalf />
            <span>
              امتیاز رزرو شده: {auth ? handleNumber(+resrvedBonus) : "-"}{" "}
            </span>
          </div>
        </div>

        <div
          className="p-4 text-light w-100 d-flex justify-content-center"
          style={{
            backgroundColor: "gray",
            position: "absolute",
            bottom: "0",
            borderRadius: "0 0 7px 7px"
          }}
        >
          <Link to={"/bonus"}>
            <p style={{ color: "white" }}>جزئیات امتیاز کسب شده</p>
          </Link>
        </div>
        <span className="flash"></span>
      </div>
      <div className="btn btn-sm btn-icon btn-bg-light btn-text-warning btn-hover-success">
        <StarHalf color="action" fontSize="large" />
      </div>
    </li>
  );
};

export default ScoreCurrent;
