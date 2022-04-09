import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../../app/common/components/apiConfig";
import {
  handleNotificationAlertTrySelect,
  handleNotificationAlertCatch
} from "../../../../app/common/method/handleNotificationAlert";

export const actionTypes = {
  credit: "[credit] Action",
  creditLoading: "[creditLoading] Action",
  creditRemove: "[creditRemove] Action",
  creditAsync: "[creditAsync] Action"
};

const initialState = {
  data: [],
  loading: false
};

export const reducer_credit_select_list = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.credit:
      return {
        data: payload
      };
    case actionTypes.creditLoading:
      return {
        ...state,
        loading: payload
      };
    case actionTypes.creditRemove:
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
};

function* handleWorker() {
  yield put({ type: actionTypes.creditLoading, payload: true });

  let config = {
    url: "select_request"
  };

  let data = {
    table: "static",
    method_type: "select",
    data: { name: "credit" }
  };

  try {
    let res = yield axiosCustom(config, data);
    let flag = handleNotificationAlertTrySelect(res);
    if (!flag) return;
    yield put({
      type: actionTypes.credit,
      payload: res.data.response.data.results
    });
  } catch {
    handleNotificationAlertCatch();
  } finally {
    yield put({ type: actionTypes.creditLoading, payload: false });
  }
}

export function* credit_select_list() {
  yield takeLatest(actionTypes.creditAsync, handleWorker);
}
