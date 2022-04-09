import React, { useEffect } from "react";
import { Box, LinearProgress } from "@material-ui/core";
import Table from "./table";
import Title from "./title";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../redux/bonus/bonus/bonus_select-list";
import { useSubheader } from "../../../../_metronic/layout";

export const Bonus = () => {
  const bonus = useSelector((state) => state.reducer_bonus_select_list.data);
  const loading = useSelector((state) => state.reducer_bonus_select_list.load);
  const dispatch = useDispatch();

  const suhbeader = useSubheader();
  suhbeader.setTitle("جزییات امتیاز کسب شده");

  useEffect(() => {
    dispatch({ type: actionTypes.bonusAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-white rounded-lg m-5 border">
      {loading && <LinearProgress />}
      <Box>
        <Title />
        <Table data={bonus} loading={loading} />
      </Box>
    </div>
  );
};
