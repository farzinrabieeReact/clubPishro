import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../app/common/components/apiConfig";
import {
  handleNotificationAlertCatch,
  handleNotificationAlertTrySelect
} from "../../../app/common/method/handleNotificationAlert";

export const actionTypes = {
  selectBasketGift: "[selectBasketGift] Action",
  selectBasketGiftLoading: "[selectBasketGiftLoading] Action",
  selectBasketGiftAsync: "[selectBasketGiftAsync] Action"
};

const initialState = {
  data: [],
  loading: false
};

export const basket_Select_gift_reducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.selectBasketGift:
      return {
        data: payload
      };
    case actionTypes.selectBasketGiftLoading:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
};

function* handleWorker() {
  yield put({ type: actionTypes.selectBasketGiftLoading, payload: true });

  let config = {
    url: "select_request"
  };

  let _data = {
    table: "gift",
    method_type: "select_submitted_gifts_in_basket",
    from: 0,

    data: {
      // basket_id: "tsDDWX8ByJcB_Qs3_rAA"
      basket_id: "o39Dkn8BQ1KxGg3fcmgj"
    }
  };

  try {
    let res = yield axiosCustom(config, _data);
    let flag = handleNotificationAlertTrySelect(res);
    if (!flag) return;
    yield put({
      type: actionTypes.selectBasketGift,
      payload: res.data.response.data.results
    });
  } catch {
    handleNotificationAlertCatch();
  } finally {
    yield put({
      type: actionTypes.selectBasketGiftLoading,
      payload: false
    });
  }
}

export function* basketSelectGift() {
  yield takeLatest(actionTypes.selectBasketGiftAsync, handleWorker);
}
