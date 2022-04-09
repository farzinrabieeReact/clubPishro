import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../../../redux/education/competitions_select_activeCompetitions/index.js";
import { useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import CardNoData from "./../../../common/components/cardNoData";
import { useSubheader } from "../../../../_metronic/layout/index.js";

export default function CompetitionsSelectActiveCompetitions() {
  const dispatsh = useDispatch();
  const state = useSelector(state => state.reducer_select_activeCompetitions);

  const suhbeader = useSubheader();
  suhbeader.setTitle("مسابقات");

  useEffect(() => {
    dispatsh({ type: actionTypes.activeCompetitionsAsync }); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white rounded-lg py-10 px-3 shadow m-5">
      <div>
        <Link to="/competitions/ICompetitions">
          <button
            className="btn btn-sm btn-light font-weight-bold py-2 px-4 px-xxl-5 my-1 h5 "
            style={{ marginLeft: "10px" }}
          >
            مسابقات من
          </button>
        </Link>
        <Link to="/competitions/archive">
          <button className="btn btn-sm btn-light font-weight-bold py-2 px-4 px-xxl-5 my-1 h5">
            آرشیو مسابقات
          </button>
        </Link>
      </div>

      {state.data?.length === 0 ? (
        <div className="mt-5">
          <CardNoData text="در حال حاضر مسابقه ای برای نمایش وجود ندارد." />
        </div>
      ) : (
        <>
          {state.data.map((item, ind) => (
            <Card key={ind} data={item} />
          ))}
        </>
      )}
    </div>
  );
}
