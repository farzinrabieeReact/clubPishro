import React, { useState } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core';
import ButtonMoreInformation from './buttonMoreInformation';
import { actionTypes } from '../../../../redux/notificationAlert'
import { useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

import { dateCurrentShamsi } from '../../../common/method/date'
import { timeCurrent } from '../../../common/method/time'
import { feedbackInsert } from '../../../../redux/about/feedback/feedback_insert';
import { handleNotificationAlertTryUpdate, handleNotificationAlertCatch } from '../../../../app/common/method/handleNotificationAlert';


const useStyles = makeStyles({
    Textarea: {
        minHeight: 200,
        resize: 'none',
        border: '1px solid rgba(0,0,0,0.2)'
    },
})


export default function Index() {

    let classes = useStyles();
    const [state, setstate] = useState('')
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch()

    const apiFeedbackInsert = () => {

        setloading(prev => !prev)

        if (state) {
            let data = {
                member_id: null,
                member_first_name: null,
                member_last_name: null,
                member_national_id: null,
                feedback: state,
                feedback_date: `${dateCurrentShamsi()} ${timeCurrent()}`,
                tracking_code: null,
                status: null,
                response: null,
                response_date: null,
                response_source: null,
                responser_id: null,
                responser_first_name: null,
                responser_last_name: null
            }

            feedbackInsert(data)
            .then(res=>{
                try {
                    handleNotificationAlertTryUpdate(res)
         
                } catch {
                    handleNotificationAlertCatch()
                }
                setloading(prev => !prev)
            })
            .catch(()=>{

                setloading(prev => !prev)
            })
        } else {
            dispatch({ type: actionTypes.info, textAlert: 'لطفا فیلد های مورد نظر را وارد نمایید' })
            setloading(prev => !prev)
        }
    }

    return (
        <>
            {
                loading && (<LinearProgress />)
            }
            <div className={'shadow rounded-lg p-10'}>
                <h3>ارتباط با ما</h3>
                <hr className={`w-100`} />
                <div className={`w-100`}>
                    <TextareaAutosize
                        rowsMax={10}
                        className={`${classes['Textarea']} w-100 rounded-lg p-5`}
                        onChange={(event) => setstate(event.target.value)}
                        placeholder="متن خود را در حداکثر 1000 کاراکتر وارد نماید"
                        value={state}
                    />
                    <p className={'my-5'}>
                        از طریق این فرم می توانید هرگونه نظر، پیشنهاد و یا انتقاد خود را پیرامون نحوه عملکرد مجموعه و یا کارکنان، جهت بررسی ارسال فرمایید، روند پیگیری نیز در اطلاعات بیشتر جهت آگاهی در دسترس می باشد
                </p>
                </div>
                <div className={'d-flex justify-content-between '}>
                    <ButtonMoreInformation />
                    <button type="button" className="btn btn-success" onClick={() => apiFeedbackInsert()}>ارسال</button>
                </div>

            </div>
        </>
    )
}


