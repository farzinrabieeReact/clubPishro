import React from 'react';
import {makeStyles} from '@material-ui/core';
import CardNoData from "../../../../common/components/cardNoData"
import {dateConvertMiladiToShamsi} from "../../../../common/method/date";
import { handleNumber } from '../../../../common/method/displayData';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'table',
        textAlign: 'left',
        borderTop: "1px solid lightGray"

    },
    ProvinceName: {
        height: 60,
        backgroundColor: '#E8EBEE',
        borderRadius: '8px !important'
    },
    thead: {

        borderBottom: "1px solid black",

    },
    tr: {
        height: 60,
        width: "100%"
    },

}));


export default function Index({data , loading}) {

    const classes = useStyles();
    const handleStatus=(data)=>{
        switch (data){
            case "FINALIZED":
                return "تایید شده"
            case "REJECTED":
                return "لغو شده"
            case "SUBMITTED":
                return "در انتظار"
            default:
                return "نا مشخص"
        }

    }

    return (
        <div className="table-responsive" style={{height:500,overflowY:'auto'}}>
            {data.length === 0 ? (<CardNoData text={loading ? "در حال بارگذاری...":null}/>) :
                <table className={`${classes['root']} `}>
                    <thead className={`${classes["thead"]}`}>
                    <tr className={`${classes["tr"]}`}>
                        {th.map((item, index) => (
                            <th className="px-5" key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>

                    {

                        data.map((item, index) => (
                            <tr className={`${classes['tr']}`} key={index}>
                                <td className="px-5">{index +1}</td>
                                <td className="px-5">{dateConvertMiladiToShamsi(item.body.create_date.split(" ")[0])}</td>
                                <td className="px-5">{item.body.source_description}</td>
                                <td className="px-5">{handleNumber(item.body.value)} امتیاز</td>
                                <td className="px-5">{handleStatus(item.body.status)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            }
        </div>
    )
}

const th = [
    '#',
    'تاریخ',
    'شرح',
    'امتیاز',
    'وضیعت',
]
