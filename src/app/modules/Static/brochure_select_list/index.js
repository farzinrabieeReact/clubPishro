import React, { useEffect } from "react";
import BoxImage from "./boximage";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../redux/static/brochure/brochure_select_list";

const Brochure = () => {
  const allData = useSelector(state => state.reducer_brochure_select_list);

  // console.log("data", allData.data[0]?.body.content);
  let dataa = allData.data[0]
    ? JSON.parse(allData.data[0]?.body.content)
    : null;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.brochureAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (!dataa) {
    return null;
  }

  return (
    <div className="container px-20">
      {dataa.map((item, index) => (
        <BoxImage key={index} item={item} />
      ))}
    </div>
  );
};

export default Brochure;
