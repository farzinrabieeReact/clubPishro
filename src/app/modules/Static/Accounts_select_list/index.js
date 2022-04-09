import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccordionsAccounts from "../../../common/components/AccordionsAccounts";
import { actionTypes } from "../../../../redux/static/accounts/accounts_select_list";

export default function Index() {
  const dispatch = useDispatch();
  const accounts = useSelector(state => state.reducer_accounts_select_list);
  const [state, setstate] = useState([]);

  useEffect(() => {
    dispatch({ type: actionTypes.accountsAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (accounts.data.length > 0) {
      setstate(JSON.parse(accounts?.data[0]?.body.content));
      // console.log("stateeeee",JSON.parse(state[0]?.body?.content))
    }
  }, [accounts]);

  return (
    <div>
      <AccordionsAccounts state={state} accounts={accounts} />
    </div>
  );
}
