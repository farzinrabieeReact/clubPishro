import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import "./index.css"

export function TreemapModule() {

    useEffect(() => {
        window.foamTreeCall()
        window.foamTreeMethod()

        return function cleanup() {
            window.foamTreeMethodUnsubscribe()
        }

    }, [])


    return (
        <>
            <div id="loading-treemap">
                <CircularProgress />
            </div>
            <div className="root-foamtree">
                <div className="details">
                    <p className="title text-center btn-default" id="foamtree-sector-name">جزئیات سهم</p>
                    <div className="items">
                        <div className="table-responsive">
                            <table className="table" id="foamtree-details">
                                <thead className="tableFixHead">
                                    <tr>
                                        <th>نام نماد</th>
                                        <th>قیمت سهم</th>
                                        <th>درصد تغییر</th>
                                        <th>حجم تغییر</th>
                                        <th>ارزش معاملات</th>
                                    </tr>
                                </thead>
                                <tbody id="foamtree-details-tbody">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="filter">
                        <div className="row col-12 col-md-6 mx-0">
                            <div className="col-4 px-1">
                                <select className="form-select form-select-lg" aria-label=".form-select-lg example"
                                    id="baseFilter-treemap">
                                    <option value="turnover" selected>حجم معاملات</option>
                                    <option value="transactions_value">ارزش معاملات</option>
                                    <option value="Legal_movements">تحرکات حقوقی</option>
                                </select>
                            </div>

                            <div className="col-4 px-1">
                                <select className="form-select form-select-lg" aria-label=".form-select-lg example"
                                    id="flowfilter-treemap">
                                    <option value="all" selected>کل بازار</option>
                                    <option value="1">بورس</option>
                                    <option value="2">فرابورس</option>
                                    <option value="4">پایه</option>
                                </select>
                            </div>

                            <div className="col-4 px-1">
                                <select className="form-select form-select-lg" aria-label=".form-select-lg example"
                                    id="sectorsfilter-treemap">
                                    <option value="all" selected>همه صنایع</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 legend">
                            <p className="pallet" style={{ backgroundColor: "rgb(255, 0, 0)" }}>-5</p>
                            <p className="pallet" style={{ backgroundColor: "rgb(154,44, 66)" }}>-2</p>
                            <p className="pallet" style={{ backgroundColor: "rgb(78, 71, 82)" }}>0</p>
                            <p className="pallet" style={{ backgroundColor: "rgb(107,181,141)" }}>+2</p>
                            <p className="pallet" style={{ backgroundColor: " rgb(27, 139, 95)" }}>+5</p>
                        </div>

                        <div>

                        </div>
                    </div>
                   
                    <div className="visualization mt-md-0 mt" id="visualization">
                    </div>



                </div>

            </div >
        </>
    )
}
