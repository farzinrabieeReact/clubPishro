/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";

import Pagination from "./../../../../common/components/pagination";
import { LinearProgress } from "@material-ui/core";
// import { dateConvertMiladiToShamsi } from "./../../../../common/method/date";
import CardNodata from "./../../../../common/components/cardNoData";
import { handelType } from './../method/index';


let home = false;

export default function index({ setPagnation, setflagApi, loading, state, pagnation }) {


    const changePagnation = page => {
        setPagnation((prev) => ({ ...prev, number: page }));
        setflagApi((prev) => !prev);
    };

    return (
        <div
            className={`bg-white rounded-lg shadow mt-5${"card-stretch gutter-b"} `}
            style={{ paddingTop: !loading ? "4px" : "0" }}
        >
            {loading && <LinearProgress />}
            <div className="p-10">
                {/* Head */}
                <div className="border-0 py-3">
                    <h3 className="card-title text-center mx-auto font-weight-bolder">
                        قرعه کشی
                    </h3>
                </div>
                {/* Body */}
                <div className="card-body pt-0 pb-3 px-0">
                    <div className="tab-content">
                        <div className={home ? "overflow-hidden" : "table-responsive"}>
                            {state.length === 0 && (
                                <CardNodata text={loading ? "در حال بارگذاری..." : null} />
                            )}
                            {state.length !== 0 && (
                                <>
                                    <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                                        <thead>
                                            <tr className="text-left text-uppercase">
                                                <th style={{ minWidth: "100px" }} >
                                                    <span className="text-dark-75">نام</span>
                                                </th>
                                                <th style={{ minWidth: "100px" }}>
                                                    <span className="text-dark-75">نام خانوادگی</span>
                                                </th>
                                                <th style={{ minWidth: "100px" }}>
                                                    <span className="text-dark-75">کد ملی</span>
                                                </th>
                                                <th style={{ minWidth: "130px" }}>
                                                    <span className="text-dark-75">عنوان قرعه کشی</span>
                                                </th>
                                                <th style={{ minWidth: "130px" }}>
                                                    <span className="text-dark-75">تاریخ</span>
                                                </th>
                                                <th style={{ minWidth: "130px" }}>
                                                    <span className="text-dark-75">شناسه قرعه کشی</span>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {state?.map((item, ind) => (
                                                <tr className="border-bottom" key={ind}>
                                                    <td className="pl-0 py-1">
                                                        <div>
                                                            <span
                                                                className={`text-dark-75 font-weight-bolder cursor-pointer color-hover mb-1 font-size-lg text-ellipsis `}
                                                            >
                                                                {item.body.member_first_name}
                                                            </span>

                                                        </div>
                                                    </td>

                                                    <td className="py-4">
                                                        <span
                                                            className="text-dark-75 d-block font-size-lg "
                                                            style={{ fontSize: "13px" }}
                                                        >
                                                            {item.body.member_last_name}
                                                        </span>
                                                    </td>

                                                    <td className="p-0">
                                                        <span className="text-dark-75 d-block font-size-lg" >
                                                            {item.body.member_national_id}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-dark-75 d-block font-size-lg">
                                                            {handelType(item.body.type)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-dark-75 d-block font-size-lg">
                                                            {
                                                            item.body.date
                                                                ? item.body.date.split(' ')[0]
                                                            :'-'                                                             }
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="text-dark-75 d-block font-size-lg">
                                                            {item.id}
                                                        </span>
                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </div>

                        {state.length !== 0 && (
                            <>
                                <Pagination
                                    pagnation={pagnation.number}
                                    setPagnation={changePagnation}
                                    // count={15}
                                    count={pagnation.count}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


