import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../app/common/components/apiConfig";
import { handleNotificationAlertTrySelect, handleNotificationAlertCatch } from '../../../app/common/method/handleNotificationAlert'


export const actionTypes = {
    giftMeSelectAffordable: "[giftMeSelectAffordable] Action",
    giftMeSelectAffordableAsync: "[giftMeSelectAffordableAsync] Action",
    giftMeSelectAffordableLoadin: '[giftMeSelectAffordableLoadin] Action'
};

const initialState = {
    data: [],
    loading: false
};

export const reducergiftMeSelectAffordable = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.giftMeSelectAffordable:
            return {
                ...state,
                data: payload
            }
        case actionTypes.giftMeSelectAffordableLoadin:
            return {
                ...state,
                loading: payload
            }
        default:
            return state
    }
}

function* handleWorker({ payload }) {

    yield put({ type: actionTypes.giftMeSelectAffordableLoadin, payload: true })

    let config = {
        url: "select_request",
    }

    let data = {
        table: "gift",
        method_type: "select_affordable_gifts",
        data: payload ? payload : {}
    }


    try {

        let res = yield axiosCustom(config, data)
        let flag = handleNotificationAlertTrySelect(res)

        yield put({ type: actionTypes.giftMeSelectAffordableLoadin, payload: false })
        
        if (!flag) return
        yield put({ type: actionTypes.giftMeSelectAffordable, payload: res.data.response.data.results })


    } catch  {
        handleNotificationAlertCatch()
    }


}


export function* giftMeSelectAffordable() {

    yield takeLatest(actionTypes.giftMeSelectAffordableAsync, handleWorker)
}