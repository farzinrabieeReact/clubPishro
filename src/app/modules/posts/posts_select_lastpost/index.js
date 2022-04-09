/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import TextsmsIcon from '@material-ui/icons/Textsms';
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../redux/posts/posts_select_lastpost6";
// import { getDataInLocalstorage } from "../../../common/method/getDataInLocalstorage";
import Pagination from "./../../../common/components/pagination";
import { useHistory } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";
import { dateConvertMiladiToShamsi } from "./../../../common/method/date";
import CardNodata from "./../../../common/components/cardNoData";

let load = false;
let infoPost = [];

export function PostsSelectLastpost({
  className,
  payload,
  title,
  paginationShow,
  dataTwo,
  home,
  data3
}) {
  const data = useSelector(state => state.reducerPostLast6);
  let dispatch = useDispatch();
  const [pagnation, setPagnation] = useState({
    number: 1,
    count: 2
  }); // 1 2 3 4 5 6  page
  const { push } = useHistory();
  useEffect(() => {
    if (data3){
    setPagnation(prev => ({
      ...prev,
      count: Math.ceil(data.total3 / data.size)
    }));
    }
      if (dataTwo){
        setPagnation(prev => ({
          ...prev,
          count: Math.ceil(data.total2 / data.size)
        }));

    }else {
        setPagnation(prev => ({
          ...prev,
          count: Math.ceil(data.total / data.size)
        }));
      }

  }, [data]);

  useEffect(() => {
    if (data3) {
      dispatch({
        type: actionTypes.postsAsync3,
        ...payload
      });
    }
    if (dataTwo) {
      dispatch({
        type: actionTypes.postsAsync2,
        ...payload,

      });
    } else {
      dispatch({
        type: actionTypes.postsAsync,
        ...payload
      });
    }
    return () => dispatch({ type: actionTypes.postsRemove });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const changePagnation = page => {
    setPagnation(prevState => ({ ...prevState, number: page }));
   
    if (data3){
      dispatch({
        type: actionTypes.postsAsync3,
        ...payload,
        from:page
      });

    }
    if (dataTwo) {
      dispatch({
        type: actionTypes.postsAsync2,
        ...payload,

        from: page
      });
    } else {
      dispatch({
        type: actionTypes.postsAsync,
        ...payload,
        from: page
      });
    }
    // dispatch({
    //     type: actionTypes.postsAsync,
    //     ...payload,
    //     from: page
    // })
  };
if (data3){
  infoPost=data.data3
  load=data.loading
}
  if (dataTwo) {
    infoPost = data.data2;
    load = data.loading2;
  } else {
    infoPost = data.data;
    load = data.loading;
  }


  return (
    <div
      className={`bg-white rounded-lg shadow mt-5${
        className ? className : ""
      } `}
      style={{ paddingTop: !load ? "4px" : "0" }}
    >
      {load && <LinearProgress />}
      <div className="p-10">
        {/* Head */}
        <div className="border-0 py-3">
          <h3 className="card-title text-center mx-auto font-weight-bolder">
            {title}
          </h3>
        </div>
        {/* Body */}
        <div className="card-body pt-0 pb-3 px-0">
          <div className="tab-content">
            <div className={home ? "overflow-hidden" : "table-responsive"}>
              {infoPost.length === 0 && (
                <CardNodata text={load ? "در حال بارگذاری..." : null} />
              )}
              {infoPost.length !== 0 && (
                <>
                  <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                    <thead>
                      <tr className="text-left text-uppercase">
                        <th className="pl-7" style={{ minWidth: "250px" }}>
                          <span className="text-dark-75">نام</span>
                        </th>
                        <th style={{ minWidth: "100px" }}>
                          <span className="text-dark-75">تاریخ ثبت</span>
                        </th>
                        <th style={{ minWidth: "100px" }}>
                          <span className="text-dark-75">نویسنده</span>
                        </th>
                        <th style={{ minWidth: "130px" }}>
                          <span className="text-dark-75">بازخورد</span>
                        </th>
                        <th style={{ minWidth: "100px" }}>
                          <span className="text-dark-75">گروه</span>
                        </th>
                        {/* <th style={{ minWidth: "80px" }} /> */}
                      </tr>
                    </thead>

                    <tbody>
                      {infoPost?.map((item, ind) => (
                        <tr className="border-bottom" key={ind}>
                          <td
                            style={
                              home ? { width: "290px" } : { width: "420px" }
                            }
                            className="pl-0 py-1"
                          >
                            <div
                              style={
                                home ? { width: "290px" } : { width: "420px" }
                              }
                            >
                              <div className="d-flex">
                                <span className="text-muted font-weight-bold mr-2">
                                  <QuestionAnswerIcon />ّ
                                </span>

                                <span
                                  className={`text-dark-75 font-weight-bolder cursor-pointer color-hover mb-1 font-size-lg text-ellipsis `}
                                  onClick={() =>
                                    push({
                                      pathname: "/posts/detailPost",
                                      state: {
                                        id: item.id,
                                        subgroup_name: item.body.subgroup_name
                                      }
                                    })
                                  }
                                >
                                  {item.body.title}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="py-4">
                            <span
                              className="text-dark-75 d-block font-size-lg "
                              style={{ fontSize: "13px" }}
                            >
                              {dateConvertMiladiToShamsi(
                                item.body.create_date.split(" ")[0]
                              )}
                            </span>
                            <span
                              className="text-dark-75 d-block font-size-lg"
                              style={{ fontSize: "13px" }}
                            >
                              {
                                item.body.create_date
                                  .split(" ")[1]
                                  .split(".")[0]
                              }
                            </span>
                          </td>

                          <td className="p-0">
                            <span
                              className="text-dark-75 d-block font-size-lg"
                              style={
                                home
                                  ? { width: "100px", fontSize: "12px" }
                                  : null
                              }
                            >
                              {item.body.author_first_name}{" "}
                              {item.body.author_last_name}
                            </span>
                          </td>

                          <td>
                            <span className="text-muted mr-2">
                              <ThumbUpIcon />

                              <span
                                style={{ verticalAlign: "sub" }}
                                className="text-dark-75 ml-1"
                              >
                                {item.body.likes}
                              </span>
                            </span>

                            {/* <span className="text-muted ml-2">
                                                    <TextsmsIcon />
                                                    <span className="text-dark-75 ml-1">
                                                        10
                                                    </span>
                                                </span> */}
                          </td>

                          <td>
                            <span className="text-dark-75 d-block font-size-lg">
                              {item.body.forum_name}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>

            {infoPost.length !== 0 && (
              <>
                {paginationShow && (
                  <Pagination
                    pagnation={pagnation.number}
                    setPagnation={changePagnation}
                    // count={15}
                    count={pagnation.count}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
