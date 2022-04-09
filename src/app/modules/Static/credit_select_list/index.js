import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import { actionTypes } from "../../../../redux/static/credit/credit_select_list";
import { CircularProgress } from "@material-ui/core";

export default function Index() {
  const dispatch = useDispatch();
  const credit = useSelector(state => state.reducer_credit_select_list);

  const [state, setstate] = useState([]);

  useEffect(() => {
    dispatch({ type: actionTypes.creditAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (credit.data.length > 0) {
      setstate(credit.data);
    }
  }, [credit]);
  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.creditRemove });
    };
  }, []);

  return (
    <div>
      {credit.loading && <CircularProgress />}
      {state?.map(item => {
        let Content = JSON.parse(item.body.content);
        return Content.map((content, ind) => {
          return <Card key={ind} data={content} />;
        });
      })}
    </div>
  );
}
