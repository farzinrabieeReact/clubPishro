import React, { useRef, useState } from "react";
import { Delete } from "@material-ui/icons";
import { addToBasketInsert } from "../../../../../redux/basket/add_to_basket_insert/addToBasketInsert";
import { removeToBasketUpdate } from "../../../../../redux/basket/remove_from_basket/removeToBasketUpdate";
import { CircularProgress } from "@material-ui/core";
import { removeToBasketBulkUpdate } from "../../../../../redux/basket/remove_from_basket_bulk/removeToBasketBulkUpdate";
let cel;
const BasketCard = ({ itm, setFlagApi, flagApi, basketSubmiteReducer }) => {
  const refClickAdd = useRef();
  const refClickRemove = useRef();
  const [loading, setLoading] = useState(false);
  const [flagRemove, setFlagRemove] = useState(false);

  const handleClickAdd = (e, id) => {
    if (refClickAdd.current) {
      clearTimeout(refClickAdd.current);
    }
    setLoading(true);

    let data = {
      gift_id: id
    };
    refClickAdd.current = setTimeout(() => {
      addToBasketInsert(data)
        .then(res => {
          setLoading(false);
          setTimeout(() => {
            setFlagApi(prev => !prev);
          }, 500);
        })
        .catch(err => {
          setLoading(false);
        });
    }, 100);
  };
  const handleClickRemove = (e, id, count) => {
    if (count === 1) {
      setFlagRemove(true);
    } else {
      setFlagRemove(false);
    }
    if (refClickRemove.current) {
      clearTimeout(refClickRemove.current);
    }
    setLoading(true);
    let data = {
      gift_id: id,
      basket_id: "tsDDWX8ByJcB_Qs3_rAA"
    };
    refClickRemove.current = setTimeout(() => {
      removeToBasketUpdate(data)
        .then(res => {
          setLoading(false);
          setTimeout(() => {
            setFlagApi(prev => !prev);
          }, 500);
        })
        .catch(err => {
          setLoading(false);
        });
    }, 100);
  };
  const handleDeleteBulk = (e, id) => {
    setLoading(true);
    let data = {
      gift_id: id,
      basket_id: "tsDDWX8ByJcB_Qs3_rAA"
    };
    removeToBasketBulkUpdate(data)
      .then(res => {
        setLoading(false);
        setTimeout(() => {
          setFlagApi(prev => !prev);
        }, 500);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="row p-0 m-0 h-150px">
        <div className="col-10 h-150px d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="w-200px  mr-3 d-flex align-items-center">
              <img
                src={`data:image/gif;base64,${itm?.body?.image}`}
                alt=""
                className="img-fluid"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div>
              <div className="mb-5">
                <h5>{itm?.body?.gift_name}</h5>
              </div>
              <div>
                <p className="text-dark-25">{itm?.body?.gift_name}</p>
              </div>
              <div className="d-flex align-items-center">
                <div
                  style={{
                    border: "1px solid black",
                    width: "80px",
                    height: "30px"
                  }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div style={{ fontSize: "20px" }}>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={e => handleClickAdd(e, itm.body?.gift_id)}
                      className={loading ? "disabledItems" : ""}
                    >
                      +
                    </span>
                  </div>
                  <div className="mx-4" style={{ fontSize: "18px" }}>
                    <span>{itm?.body?.count}</span>
                  </div>
                  <div style={{ fontSize: "20px" }}>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={e =>
                        handleClickRemove(
                          e,
                          itm.body?.gift_id,
                          itm?.body?.count
                        )
                      }
                      className={loading || flagRemove ? "disabledItems" : ""}
                    >
                      -
                    </span>
                  </div>
                </div>
                <div
                  className="ml-4 "
                  style={{ color: "red", fontSize: "12px", cursor: "pointer" }}
                  onClick={e => handleDeleteBulk(e, itm?.body?.gift_id)}
                >
                  <span>
                    {" "}
                    <Delete />
                  </span>
                  <span>حذف</span>
                </div>
                {loading && (
                  <div className="ml-3">
                    <CircularProgress size={20} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 ">
          <div className="d-flex align-items-center h-100">
            <div>
              {" "}
              <span style={{ fontSize: "18px" }}>{`  امتیاز: ${itm.body.count *
                itm?.body?.sum_bonus}`}</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BasketCard;
