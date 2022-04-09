import React, { useEffect, useState } from "react";
import { ArrowBack } from "@material-ui/icons";
import { basket_compute_gift_update } from "../../../../redux/basket/basket_compute_gift_update";
import {
  handleNotificationAlertCatch,
  handleNotificationAlertTryUpdate
} from "../../../common/method/handleNotificationAlert";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../../../redux/basket/basket_select_gift";

const FactorBasket = ({
  basketSubmiteReducer,
  setFlagComponent,
  flagComponent,
  stateInput,
  typeComponent,
  setStateInput
}) => {
  const dispatch = useDispatch();
  const [bonusArr, setBonusArr] = useState();
  const [state, setState] = useState([]);
  const [stateSubmit, setStateSubmit] = useState({
    provinceName: "",
    cityName: "",
    address: "",
    postalCode: "",
    description: ""
  });
  useEffect(() => {}, [stateInput]);

  useEffect(() => {
    if (basketSubmiteReducer.data.length !== 0) {
      setState(basketSubmiteReducer.data);
    }

    handleCount();
  }, [basketSubmiteReducer]);

  const handleCount = count => {
    let arrBonus = [];
    state.map((itm, ind) => {
      let sum = itm.body.count * itm.body.sum_bonus;
      arrBonus.push(sum);
    });
    setBonusArr(
      arrBonus.reduce((a, b) => {
        return a + b;
      }, 0)
    );
  };
  const handleSubmit = () => {
    let data = {
      // basket_id: "tsDDWX8ByJcB_Qs3_rAA",
      basket_id: "o39Dkn8BQ1KxGg3fcmgj",
      basket_custom_data: JSON.stringify([
        { provinceName: stateInput.provinceName?.name },
        { cityName: stateInput.cityName?.name },
        {
          address: stateInput.street.concat(
            " , ",
            stateInput.alley,
            " , " + "",
            stateInput.pk
          )
        },
        { postalCode: stateInput.postalCode },
        { description: stateInput.description }
      ])
    };
    basket_compute_gift_update(data)
      .then(res => {
        let isOk = handleNotificationAlertTryUpdate(res);
        if (!isOk) {
          return;
        }
        setStateInput({
          provinceName: "",
          cityName: "",
          street: "",
          alley: "",
          pk: "",
          description: "",
          postalCode: ""
        });
        setTimeout(() => {
          dispatch({ type: actionTypes.selectBasketGiftAsync });
        }, 1000);
      })

      .catch(() => {
        handleNotificationAlertCatch();
      });
  };
  return (
    <>
      <div className="col-4">
        <div
          className="bg-white rounded-lg p-2 shadow mt-5 p-5 d-flex justify-content-between flex-column"
          style={{ height: "630px", overflow: "auto" }}
        >
          <div>
            <div className="mb-7">
              <h3>پرداخت امتیاز</h3>
            </div>
            {basketSubmiteReducer?.data?.map((itm, ind) => (
              <div className="d-flex justify-content-between mb-5">
                <div
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "255px"
                  }}
                >
                  <span>{itm?.body?.gift_name}</span>
                </div>
                <div>
                  <span>{` امتیاز: ${itm.body.count *
                    itm?.body?.sum_bonus}`}</span>
                </div>
              </div>
            ))}
            <div>
              <hr />
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <span className="font-weight-bold font-size-h6">
                  جمع امتیازات
                </span>
              </div>
              <div>
                <span className="font-weight-bold font-size-h6">
                  {bonusArr}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              {" "}
              {flagComponent === typeComponent.baskeLevel1 ? (
                <button
                  className="btn btn-success"
                  onClick={() => setFlagComponent(typeComponent.baskeLevel2)}
                >
                  تایید و ادامه فرایند
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => handleSubmit()}
                  >
                    تایید نهایی
                  </button>
                  <button className="btn btn-success">
                    <ArrowBack
                      onClick={() =>
                        setFlagComponent(typeComponent.baskeLevel1)
                      }
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactorBasket;
