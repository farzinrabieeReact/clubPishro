
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import ModalCard from '../../ModalCard';


let useStyles = makeStyles({

    root: {
        maxWidth: 300,
        minWidth:290
    },
    images: {
        textAlign:'center',
        paddingTop:10,
        '& > img': {
            height: 180,
             maxWidth: '95%'
        }
    },
    desc: {
        color: '#64A51C',
        cursor: 'pointer',
        marginLeft: 5
    }

})


export default function Index({ data }) {

    let classes = useStyles();
    const [open, setopen] = useState(false)

    return (
        <div className={`${classes['root']} shadow m-5 `}  >
            <div className={`${classes['images']} w-100 mb-10`}>
                <img  src={`data:image/png;base64,${data.body.image}`} alt="" />
            </div>
            <div className={'p-5'}>
                <div className={'d-flex justify-content-between align-itmes-center flex-wrap'}>
                    <p>
                        {data.body.name}
                    </p>
                    <p>
                        <span>امتیاز</span>:
                        <span>{data.body.required_bonus}</span>
                    </p>
                </div>
                <hr />
                <div>
                    <p>
                        <span>{data.body.description}</span>
                        <span className={classes['desc']} onClick={() => setopen(prev => !prev)} >توضیحات بیشتر</span>
                    </p>
                </div>
            </div>
            <ModalCard open={open} setopen={setopen} data={data} />
        </div>
    )
}
