import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SelectLottery from "./../../modules/lottery/select_lottery/index";

export default function Lottery() {
    return (
        <div>
            <Switch>
                <Route exact path="/lottery/select">
                    <SelectLottery />
                </Route>

                <Redirect from='lottery' to={'/lottery/select'} />
            </Switch>
        </div>
    );
}
