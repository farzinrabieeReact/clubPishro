import React, { useEffect, useState } from "react";
import { ArrowBack, Delete } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import {
  actionTypes,
  basket_Select_Submitted_reducer
} from "../../../redux/basket/basket_select_submited_gifts";
import BasketLevel1 from "./component/basketLevel1/BasketLevel1";
import BasketLevel2 from "./component/basketLevel2/BasketLevel2";
import FactorBasket from "./component/FactorBasket";
import BasketLevel3 from "./component/basketLevel3/BasketLevel3";
export const typeComponent = {
  baskeLevel1: "basket level1",
  baskeLevel2: "basket level2",
  baskeLevel3: "basket level3"
};

const BasketBuy = () => {
  const [stateInput, setStateInput] = useState({
    provinceName: "",
    cityName: "",
    street: "",
    alley: "",
    pk: "",
    description: "",
    postalCode: ""
  });
  const [flagApi, setFlagApi] = useState(false);

  const [flagComponent, setFlagComponent] = useState(typeComponent.baskeLevel1);
  const disptach = useDispatch();

  const basketSubmiteReducer = useSelector(
    state => state.basket_Select_Submitted_reducer
  );

  useEffect(() => {
    disptach({ type: actionTypes.basketSelectSubmitedAsync });
  }, [flagApi]);

  return (
    <>
      <div className="row">
        {flagComponent === typeComponent.baskeLevel1 ? (
          <BasketLevel1
            setFlagComponent={setFlagComponent}
            basketSubmiteReducer={basketSubmiteReducer}
            setFlagApi={setFlagApi}
            flagApi={flagApi}
          />
        ) : flagComponent === typeComponent.baskeLevel2 ? (
          <BasketLevel2 state={stateInput} setState={setStateInput} />
        ) : (
          flagComponent === typeComponent.baskeLevel3 && <BasketLevel3 />
        )}
        <FactorBasket
          basketSubmiteReducer={basketSubmiteReducer}
          setFlagComponent={setFlagComponent}
          flagComponent={flagComponent}
          stateInput={stateInput}
          typeComponent={typeComponent}
          setStateInput={setStateInput}
        />
      </div>
    </>
  );
};

export default BasketBuy;
