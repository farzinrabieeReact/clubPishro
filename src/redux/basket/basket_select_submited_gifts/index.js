import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../app/common/components/apiConfig";
import {
  handleNotificationAlertCatch,
  handleNotificationAlertTrySelect
} from "../../../app/common/method/handleNotificationAlert";

export const actionTypes = {
  basketSelectSubmited: "[basketSelectSubmited] Action",
  basketSelectSubmitedLoading: "[regsterCourseLoading] Action",
  basketSelectSubmitedAsync: "[basketSelectSubmitedAsync] Action"
};

const initialState = {
  data: [],
  loading: false
};

export const basket_Select_Submitted_reducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.basketSelectSubmited:
      return {
        data: payload
      };
    case actionTypes.basketSelectSubmitedLoading:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
};

function* handleWorker() {
  yield put({ type: actionTypes.basketSelectSubmitedLoading, payload: true });

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
      type: actionTypes.basketSelectSubmited,
      payload: res.data.response.data.results
    });
  } catch {
    handleNotificationAlertCatch();
  } finally {
    yield put({
      type: actionTypes.basketSelectSubmitedLoading,
      payload: false
    });
  }
}

export function* basketSelectSubmited() {
  yield takeLatest(actionTypes.basketSelectSubmitedAsync, handleWorker);
}
