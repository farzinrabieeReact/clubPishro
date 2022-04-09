/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ButtonAnswer from './ButtonAnswer';
import ButtonQuestions from './ButtonQuestions';
import Pagination from './../../../common/components/pagination';
import { actionTypes } from '../../../../redux/about/feedback/feedback_select_list';
import CardNoData from '../../../common/components/cardNoData';


export default function AdvanceTablesWidget4({ className }) {

    let dispatch = useDispatch()
    const reducerFeedback = useSelector(state => state.reducerFeedbackSelectList)
    const [pagnation, setPagnation] = useState(1) // 1 2 3 4 5 6  page
    const [state, setstate] = useState([])

    useEffect(() => {
        let data = {
            size: '6',
            filter: {}
        }
        dispatch({ type: actionTypes.feedbackAsync, payload: data })
    }, [])//eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if (reducerFeedback.data)
            setstate(reducerFeedback.data)

    }, [reducerFeedback.data])


    const changePagnation = (page) => {
        setPagnation(+page)
        dispatch({
            type: actionTypes.feedbackAsync,
            payload: {
                from: +page,
                size: 6,
                filter: {}
            }
        })
    }

    return (
        <div className={`card card-custom ${className} mt-10 shadow rounded-lg`}>
            {/* Head */}
            <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                    لیست ارسال های اخیر
                </h3>
            </div>
            {/* Body */}
            <div className="card-body pt-0 pb-3">
                <div className="tab-content">
                    <div className="table-responsive">
                        <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                            <thead>
                                <tr className="text-center text-uppercase">
                                    <th className="pl-7" style={{ minWidth: "200px" }}><span className="text-dark-75">شماره پیگیری</span></th>
                                    <th style={{ minWidth: "200px" }}>تاریخ ثبت</th>
                                    <th style={{ minWidth: "200px" }}>وضعیت</th>
                                    <th style={{ minWidth: "200px" }}>مشاهده سوال </th>
                                    <th style={{ minWidth: "200px" }}>مشاهده پاسخ </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !state.length && (
                                        <tr>
                                            <td colSpan={5}>
                                                <CardNoData />
                                            </td>
                                        </tr>
                                    )
                                }
                                {
                                    state.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="pl-0 py-8">
                                                    <div className="d-flex align-items-center text-center">
                                                        <div className={'text-center w-100'}>
                                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                                {item.body.tracking_code}
                                                            </span>
                                                            <span className="text-muted font-weight-bold"></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={'text-center'} >
                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                        {item.body.feedback_date.split(' ')[0]}
                                                    </span>
                                                    {/* <span className="text-muted font-weight-bold">
                                        13:19
                                        </span> */}
                                                </td>
                                                <td className={'text-center'}>
                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                        {
                                                            item.body.status === 'ANSWERED'
                                                                ? 'پاسخ داده شده'
                                                                : 'درحال بررسی'
                                                        }
                                                    </span>
                                                    {/* <span className="text-muted font-weight-bold">
                                            Paid
                                        </span> */}
                                                </td>
                                                <td className="pr-0 text-center">
                                                    <ButtonQuestions data={item.body.feedback} />
                                                </td>
                                                <td className="pr-0 text-center">
                                                    <ButtonAnswer data={item.body.response} />
                                                </td>
                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={'m-5'}>

                <Pagination
                    pagnation={pagnation}
                    setPagnation={changePagnation}
                    count={15}
                />
            </div>
        </div>
    );
}

