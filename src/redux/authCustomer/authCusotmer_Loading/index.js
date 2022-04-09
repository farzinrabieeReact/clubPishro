import {put, takeLatest} from "redux-saga/effects";
import axiosCustom from "../../../app/common/components/apiConfig";
import { handleNotificationAlertCatch ,handleNotificationAlertTrySelect} from "../../../app/common/method/handleNotificationAlert";
// import {handleNotificationAlertTrySelect , handleNotificationAlertCatch} from "../../../../app/common/method/handleNotificationAlert";

export const actionTypes = {
    authCustomerLoading: "[authCustomerLoading] Action",
    authCustomerLoadingAsync: "[authCustomerLoadingAsync] Action"
}

const initialState = {
    loading: false,
    // load:false
}

export const authCustomer_loading= (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.authCustomerLoading:
            return {
                loading: payload
            }
        // case actionTypes.authCustomerLoad:
        //     return {
        //        ...state,
        //        load:payload
        //     }
        default:
            return state
    }

}

// function* handleWorker({payload}) {
//     let config = {
//         url: "select_request"
//     }
//     let _data = {
//         table: "clubmember",
//         method_type: "get_kyc_profile",
//         data: payload?payload:{}
//     }
//     try {
//         let res = yield axiosCustom(config, _data)
//         let flag = handleNotificationAlertTrySelect(res)
//         if (!flag) return
//         yield put({type: actionTypes.authCustomer, payload: res.data.response.data.results})
//     } catch {
//         handleNotificationAlertCatch()
//     }
// }


// export function* authCustomerSelectStepOne() {
//     yield takeLatest(actionTypes.authCustomerAsync, handleWorker)
// }