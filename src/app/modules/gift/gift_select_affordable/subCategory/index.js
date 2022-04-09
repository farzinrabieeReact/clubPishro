import React, { useState, useEffect } from "react";

import { actionTypes } from "../../../../../redux/gift/giftMe_select_affordable";
import { useDispatch, useSelector } from "react-redux";
import Card from './card';
import CardNoData from './../../../../common/components/cardNoData';


export default function Index({ category }) {

  let dispatch = useDispatch();

  const [state, setstate] = useState([])


  let reducerGiftSelectAffordable = useSelector(state => state.reducergiftMeSelectAffordable)

  useEffect(() => {
    if (category) {
      let data = {
        gift_category: category.gift_category
      }
      dispatch({ type: actionTypes.giftMeSelectAffordableAsync, payload: data })
    }
  }, [category]);//eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    if (reducerGiftSelectAffordable.data) {
      setstate(reducerGiftSelectAffordable.data)
    }
  }, [reducerGiftSelectAffordable.data])


  


  return (
    <>

    <div>
      {
        !state.length  &&(
          <CardNoData text={reducerGiftSelectAffordable.loading?'درحال بارگذاری...':'امتیاز شما برای انتخاب از این دسته بندی کافی نمی باشد.'}/>
        )
        
      }
    </div>
    <div className="w-100 d-flex flex-wrap justify-content-around" style={{ height: "66vh", overflowY: "auto" }}>
      {
        state.map((item, index) => (
          <Card key={index} data={item} />
        ))}
    </div>
    </>
  );
}
