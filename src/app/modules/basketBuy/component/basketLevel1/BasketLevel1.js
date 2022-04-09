import React, { useEffect, useState } from "react";
import BasketCard from "./BasketCard";
import { CircularProgress } from "@material-ui/core";

const BasketLevel1 = ({
  basketSubmiteReducer,
  setFlagApi,
  flagApi,
  setFlagComponent
}) => {
  // console.log(arrBonus.reduce((a, b) => a + b, 0));

  return (
    <>
      <div className="col-8">
        <div
          className="bg-white rounded-lg p-2 shadow mt-5 "
          style={{ height: "630px", overflow: "auto" }}
        >
          <div className="p-5">
            <div className=" d-flex mb-7">
              <h3 className="mr-2">
                {basketSubmiteReducer.data.length
                  ? "جوایز انتخابی"
                  : "سبد خرید شما خالی است"}
              </h3>
              {basketSubmiteReducer.loading && <CircularProgress size={20} />}
            </div>
            {basketSubmiteReducer?.data?.map((itm, ind) => (
              <BasketCard
                key={ind}
                itm={itm}
                setFlagApi={setFlagApi}
                flagApi={flagApi}
                basketSubmiteReducer={basketSubmiteReducer}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketLevel1;
