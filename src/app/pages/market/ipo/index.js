import React from "react";
import { useSubheader } from "../../../../_metronic/layout";
import RecordBy from "../../../modules/market/stock/ipo_insert_resgister";
import Table from "../../../modules/market/stock/ipo_select_registered";

const Index = () => {
  const subheader = useSubheader();
  subheader.setTitle("عرضه اولیه");

  return (
    <div className="row  mt-5">
      <div className="col-12 col-lg-4">
        <RecordBy />
      </div>
      <div className="col-12 col-lg-8">
        <Table />
      </div>
    </div>
  );
};

export default Index;
