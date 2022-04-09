import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ModalCard from "../../ModalCard";

let useStyles = makeStyles({
  root: {
    maxWidth: 270,
    minWidth: 270,
    margin: "unset auto",
    ["@media (max-width:768px)"]: {// eslint-disable-line no-useless-computed-key
      margin: "10px auto !important",
    },
    ["@media (min-width:992px) and (max-width:1198px)"]: {// eslint-disable-line no-useless-computed-key
      margin: "10px auto !important",
      maxWidth: 240,
      minWidth: 240,
    },
  },
  images: {
    textAlign: "center",
    paddingTop: 10,
    "& > img": {
      height: 180,
      maxWidth: "95%",
    },
  },
  desc: {
    color: "#64A51C",
    cursor: "pointer",
    marginLeft: 5,
  },
  fontMedia: {
    fontSize:12,
    ["@media (max-width:576px)"]: {// eslint-disable-line no-useless-computed-key
      fontSize: 9,
    },
  },
});

export default function Index({ data,dataSort }) {

  let classes = useStyles();
  const [open, setopen] = useState(false);

  return (
    <div className={`${classes["root"]} shadow m-5  `}>
      <div className={`${classes["images"]} w-100 mb-10`}>
        <img
          src={`data:image/png;base64,${data.body.image}`}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className={"p-5"}>
        <div
          className={"d-flex align-itmes-center flex-wrap flex-column"}
          style={{ height: "85px" }}
        >
          <p className={classes.fontMedia}>{data.body.name}</p>
          <p>
            <span className="font-weight-bolder">امتیاز</span>:
            <span className="font-weight-bolder">
              {data.body.required_bonus}
            </span>
          </p>
        </div>
        <hr />
        <div>
          <p className="d-flex justify-content-between">
            {/* <span>{data.body.description}</span> */}
            <span
              className={classes["desc"]}
              onClick={() => setopen((prev) => !prev)}
            >
              توضیحات بیشتر
            </span>
          </p>
        </div>
      </div>
      <ModalCard open={open} setopen={setopen} data={data} />
    </div>
  );
}
