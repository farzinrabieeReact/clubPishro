import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../../app/common/components/apiConfig";
import {
  handleNotificationAlertTrySelect,
  handleNotificationAlertCatch
} from "../../../../app/common/method/handleNotificationAlert";

export const actionTypes = {
  about: "[about] Action",
  aboutLoading: "[aboutLoading] Action",
  aboutRemove: "[aboutRemove] Action",
  aboutAsync: "[aboutAsync] Action"
};

const initialState = {
  data: [],
  loading: false
};

export const reducer_about_select_list = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.about:
      return {
        data: payload
      };
    case actionTypes.aboutLoading:
      return {
        ...state,
        loading: payload
      };
    case actionTypes.aboutRemove:
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
};

function* handleWorker() {
  yield put({ type: actionTypes.aboutLoading, payload: true });

  let config = {
    url: "select_request"
  };

  let data = {
    table: "static",
    method_type: "select",
    data: { name: "about" }
  };

  try {
    let res = yield axiosCustom(config, data);
    let flag = handleNotificationAlertTrySelect(res);
    if (!flag) return;
    yield put({
      type: actionTypes.about,
      payload: res.data.response.data.results
    });
  } catch {
    handleNotificationAlertCatch();
  } finally {
    yield put({ type: actionTypes.aboutLoading, payload: false });
  }
}

export function* about_select_list() {
  yield takeLatest(actionTypes.aboutAsync, handleWorker);
}
