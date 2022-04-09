
import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../../app/common/components/apiConfig";
import { handleNotificationAlertTrySelect , handleNotificationAlertCatch } from '../../../../app/common/method/handleNotificationAlert';




export const actionTypes = {
    feedback: "[feedback] Action",
    feedbackAsync: "[feedbackAsync] Action",
    feedbackRemove: "[feedbackRemove] Action",
};

const initialState = {
    data: []
};


export const reducerFeedbackSelectList = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.feedback:
            return {
                data: payload
            }

        case actionTypes.feedbackRemove:
            return initialState

        default:
            return state
    }
}


function* handleWorker({payload}) {
    let config = {
        url: "select_request",
    }

    let data = {
        table: "feedback",
        method_type: "select",
        from: payload.from ? ((payload.from - 1) * payload.size) : "0",
        size: payload.size,
        data: payload.filter
    }


    try {
        let res = yield axiosCustom(config, data)
        let flag = handleNotificationAlertTrySelect(res)
        if (!flag) return
        yield put({ type: actionTypes.feedback, payload: res.data.response.data.results })


    } catch  {
        handleNotificationAlertCatch()
    }

}


export function* watcherFeedbackSelectList() {
    yield takeLatest(actionTypes.feedbackAsync, handleWorker)
}