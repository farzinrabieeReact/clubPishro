import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import BasketBuy from "../../modules/basketBuy/BasketBuy";

const Index = () => {
  const subheader = useSubheader();
  subheader.setTitle("سبد خرید");
  return (
    <>
      <BasketBuy />
    </>
  );
};

export default Index;
