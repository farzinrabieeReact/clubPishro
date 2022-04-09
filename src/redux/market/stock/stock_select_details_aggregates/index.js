
import { put, takeLatest } from "redux-saga/effects";
import AxiosCustom from "../../../../app/common/components/apiConfig";
import { handleNotificationAlertTrySelect, handleNotificationAlertCatch } from "../../../../app/common/method/handleNotificationAlert";




export const actionTypes = {
    OrderDetailsAggregates: "[OrderDetailsAggregates] Action",
    OrderDetailsAggregatesAsync: "[OrderDetailsAggregatesAsync] Action",
};

const initialState = {
    data: []
};


export const reducerOrderDetailsAggregates = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.OrderDetailsAggregates:
            return {
                data: payload
            }
        default:
            return state
    }
}


function* handleWorker({payload}) {
    let config = {
        url: "select_request",
    }

    let data = {
        table:  "order",
        method_type: payload.method_type,
        data: payload.data ? payload.data : {} 
    }


    try {

        let res = yield AxiosCustom(config, data)
        let flag = handleNotificationAlertTrySelect(res)
        if (!flag) return

        yield put({ type: actionTypes.OrderDetailsAggregates, payload: res.data.response.data.results })
    }
    catch {
        handleNotificationAlertCatch()
    }

}


export function* watcherOrderDetailsAggregates() {
    yield takeLatest(actionTypes.OrderDetailsAggregatesAsync, handleWorker)
}