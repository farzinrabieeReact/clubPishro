import React, { useState } from 'react'
import ModalCustom from '../../../../common/components/ModalCustom';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';
import ModelInsert from './ModalInsert';

let useStyles = makeStyles({
    root: {
        width: 700,
        maxWidth: '100%',
        padding: 20,
    },
    Line: {
        backgroundColor: '#64A51C'
    },
    images: {
        width: 150,
    },
    grid: {
        maxHeight: 400,
        minHeight: 200,

        overflow: 'auto'
    }
})


export default function Index({ data, open, setopen }) {

    return (
        <ModalCustom open={open} setOpen={setopen} >
            <Card data={data} setopen={setopen} />
        </ModalCustom>
    )
}




function Card({ data , setopen }) {

    let classes = useStyles();

    const [open, setOpen] = useState(false)

    return (
        <div className={`${classes['root']} bg-white shadow p-10`}>
            <div className={'d-flex justify-content-between align-items-center'}>
                <p>{data.body.title}</p>
                <CloseIcon onClick={() => setopen(prev => !prev)} className={'cursor-pointer'} />
            </div>
            <hr className={classes['Line']} />
            <div className={classes['grid']}>
                <div className={'d-flex justify-content-between align-items-center'}>
                    <div className={classes['images']}>
                        <img className={'w-100'} src={`data:image/png;base64,${data.body.image}`} alt="" />
                    </div>
                    <div className={'min-w-50 mt-5 text-center'}>
                        <p>
                            <span>امتیاز</span>:
                            <span>{data.body.required_bonus}</span>
                        </p>
                        <p>{data.body.name}</p>
                    </div>
                </div>
                <div className={'mt-5'}>
                    <p dangerouslySetInnerHTML={{ __html: data.body.detailed_description }}></p>
                </div>
            </div>
            <hr className={classes['Line']} />
            <div className={'d-flex justify-content-between align-items-center'}>
                <button type="button" className="btn btn-outline-success" onClick={() => setopen(prev => !prev)}>انصراف</button>
                <button type="button" className="btn btn-success" onClick={() => setOpen(prev => !prev)} >ثبت نهایی</button>
            </div>
            {
                open && (
                    <ModelInsert data={data} open={open} setopen={setOpen} />
                )
            }
        </div>
    )
}

