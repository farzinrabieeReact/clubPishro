import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import { actionTypes } from "../../../../redux/about/about/about_select_list";
import { CircularProgress } from "@material-ui/core";

export default function Index() {
  const dispatch = useDispatch();
  const about = useSelector(state => state.reducer_about_select_list);

  const [state, setstate] = useState([]);

  useEffect(() => {
    dispatch({ type: actionTypes.aboutAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (about.data.length > 0) {
      setstate(about.data);
      // console.log("stateabout", about?.data[0]?.body?.content);
    }
  }, [about]);
  useEffect(() => {
    return () => {
      dispatch({ type: actionTypes.aboutRemove });
    };
  }, []);
  return (
    <div>
      {about.loading && <CircularProgress />}
      {state?.data?.length !== 0 &&
        state?.map(item => {
          let Content = JSON.parse(item.body.content);
          return Content.map((content, ind) => {
            return <Card key={ind} data={content} />;
          });
        })}
    </div>
  );
}
