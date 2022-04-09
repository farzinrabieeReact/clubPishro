import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import GiftSelectList from "../../modules/gift/gift_select_list";
import { Switch, Route } from "react-router-dom";
import GiftSelectOrder from "../../modules/gift/gift_select_order";
import GiftSelectAffordable from "../../modules/gift/gift_select_affordable";
import { Bonus } from "../../modules/Bonus/bonus_select-list";
// import Btn from '../../modules/gift/gift_select_order/Btn'

export default function Index({ match }) {
  const suhbeader = useSubheader();
    suhbeader.setTitle("جوایز");

  return (
    <div className="bg-white rounded-lg p-1">
      <Switch>
        <Route exact path={"/myGift"}>
          <GiftSelectAffordable />
        </Route>
        <Route exact path={"/bonus"}>
          <Bonus />
        </Route>
       
        <Route exact path={"/marketMap/giftOrder"}>
          <GiftSelectOrder />
        </Route>

        <Route exact path={"/gift"}>
          <GiftSelectList />
        </Route>
      
      </Switch>
    </div>
  );
}
