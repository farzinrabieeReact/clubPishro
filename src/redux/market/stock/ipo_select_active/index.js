import AxiosCustom from "../../../../app/common/components/apiConfig";
import {
  handleNotificationAlertCatch,
  handleNotificationAlertTrySelect
} from "../../../../app/common/method/handleNotificationAlert";
import { put, takeLatest } from "redux-saga/effects";

export const actionTypes = {
  ipo: "[ipo] Action",
  ipoAsync: "[ipoAsync] Action"
};

const initialState = {
  data: []
};
export const reducer_ipo_select_list = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.ipo:
      return {
        data: payload
      };
    default:
      return state;
  }
};

function* handleWorker() {
  let config = {
    url: "select_request"
  };
  let data = {
    table: "ipo",
    method_type: "select_active_ipos",
    data: {}
  };

  try {
    let res = yield AxiosCustom(config, data);
    let flag = handleNotificationAlertTrySelect(res);
    if (!flag) {
      return;
    }

    yield put({
      type: actionTypes.ipo,
      payload: res.data.response.data.results
    });
  } catch {
    handleNotificationAlertCatch();
  }
}

export function* select_active_ipo() {
  yield takeLatest(actionTypes.ipoAsync, handleWorker);
}
