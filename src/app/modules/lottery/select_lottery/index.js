/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../redux/lottery/select_lottery";
import Tables from './tables/index';


export default function SelectLottery() {


    const dispatch = useDispatch();

    const [sort, setSort] = useState({});
    const [state, setstate] = useState([]);
    const [flagApi, setflagApi] = useState(false);
    const stateReducer = useSelector((state) => state.select_lottery_reducer);

    let date = {

    }

    const [stateTable, setStateTable] = useState({
        ...date
    });

    const [pagnation, setPagnation] = useState({
        number: 1,
        count: 2
    });

    useEffect(() => {
        apiSubmit();
    }, [flagApi]);


    useEffect(() => {
        setstate(stateReducer.data);
        setPagnation((prev) => ({
            ...prev,
            count: Math.ceil(stateReducer.total / stateReducer.size)
        }));
    }, [stateReducer]); //eslint-disable-line react-hooks/exhaustive-deps


console.log('stateReducer' , stateReducer);

    const apiSubmit = () => {
        let obj = {};
        let { size } = stateReducer;
        let { id, ...sortRes } = sort;

        Object.keys(stateTable).forEach((element) => {
            if (stateTable[element]) {
                obj[element] = stateTable[element];
            }
        });

        let _data = {
            data:  obj,
            from: pagnation.number,
            size: size,
            sort_by: sortRes
        };

        dispatch({ type: actionTypes.selectLotteryAsync, payload: _data });
    };



    return (
        <Tables
            setPagnation={setPagnation}
            setflagApi={setflagApi}
            state={state}
            loading={stateReducer.loading}
            state={state}
            pagnation={pagnation}
        />
    );
}
