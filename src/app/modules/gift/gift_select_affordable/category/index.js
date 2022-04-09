import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import {distinctMethod} from '../../../../common/method/distinctMethod'
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../../../../../redux/gift/git_select_activeCategories';


const useStyles = makeStyles(() => ({
    list: {
        listStyle: 'none',
        textAlign: 'center',
        width: '100%',
        padding:0,
        '& > li': {
            height: 40,
            display: 'flex',
            alignItems: 'center',
            padding: ' 0px 10px',
            borderRadius: 8,
            marginBottom: 3,

            '&:hover': {
                backgroundColor: '#64A51C',
                color: 'white',
                opacity: 0.8,
                cursor: 'pointer'
            }
        }
    },
    active: {
        backgroundColor: '#64A51C',
        color: 'white'
    }
}));


export default function Index({ children }) {

    const classes = useStyles();
    const dispatch = useDispatch()

    const [state, setstate] = useState([])
    const [defaultSelectItem, setDefaultSelectItems] = useState({ index: 0, gift_category: null })


    let reducerGiftActiveCategoris = useSelector(state => state.reducergiftSelectActiveCategorisList)


    useEffect(() => {
        dispatch({ type: actionTypes.giftSelectActiveCategorisAsync })
    }, [])//eslint-disable-line react-hooks/exhaustive-deps



    
    useEffect(() => {
        if (defaultSelectItem.gift_category)
           children(defaultSelectItem)
    }, [defaultSelectItem])//eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        if (reducerGiftActiveCategoris.data) {
            let distinc = distinctMethod(reducerGiftActiveCategoris.data,['body','gift_category'])
            setstate(distinc)
            setDefaultSelectItems({ index: 0, gift_category: reducerGiftActiveCategoris.data[0]?.body.gift_category })
        }
    }, [reducerGiftActiveCategoris.data])

    

    return (
        <ul className={classes['list']}>
            {
                state.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={defaultSelectItem.index === index ? classes['active'] : ' '}
                            onClick={() => setDefaultSelectItems({ index: index, gift_category: item})}
                        >
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    )
}
