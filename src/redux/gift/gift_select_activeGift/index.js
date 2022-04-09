
import { put, takeLatest } from "redux-saga/effects";
import axiosCustom from "../../../app/common/components/apiConfig";
import { handleNotificationAlertTrySelect, handleNotificationAlertCatch } from '../../../app/common/method/handleNotificationAlert/'


export const actionTypes = {
    giftSelectActiveList: "[giftSelectActiveList] Action",
    giftSelectActiveListLoad:"[giftSelectActiveListLoad] Action",
    giftSelectActiveListAsync: "[giftSelectActiveListAsync] Action",
    giftRemoveState: "[giftRemoveState] Action",
};

const initialState = {
    data: [],
    load:false
};


export const reducergiftSelectActiveList = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.giftSelectActiveList:
            return {
                data: payload
            }
        case actionTypes.giftSelectActiveListLoad:
            return {
                ...state,
                load:payload
            }
            case actionTypes.giftRemoveState:
                return initialState
        default:
            return state
    }
}

function* handleWorker({ payload }) {

    let config = {
        url: "select_request",
    }

    let data = {
        table: "gift",
        method_type: "select_active_gifts",
        data: payload ? payload : {}
    }
    yield put({type:actionTypes.giftSelectActiveListLoad,payload:true})
    try {
        let res = yield axiosCustom(config, data)
        
        let flag = handleNotificationAlertTrySelect(res)
        if (!flag) return
        yield put({ type: actionTypes.giftSelectActiveList, payload: res.data.response.data.results })
        
        yield put({type:actionTypes.giftSelectActiveListLoad,payload:false})

    } catch  {
        handleNotificationAlertCatch()
    }


}


export function* giftSelectActiveList() {
    yield takeLatest(actionTypes.giftSelectActiveListAsync, handleWorker)
}