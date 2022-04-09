import { Button, Checkbox, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StepOneContent from "./content";
import Styles from "./index.module.scss";
import {actionTypes as actionTypesNotif} from '../../../../redux/notificationAlert'





const OrangeCheckbox = withStyles({
  root: {
    color: grey[600],
    "&$checked": {
      color: '#ef6d22',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const StepOne = ({step,setstep,handleNextStep,apiCallSelectStepOne,setnationalState,nationalState,setcode,sejamInfoState}) => {
  
  // -----------------------------------state-------------------------------
  const dispatch = useDispatch()
  const [checkedStepOne, setcheckedStepOne] = useState(false);

  // ------------------------------------function-------------------------------

  const handleChange = (event) => {
    setcheckedStepOne((prev) => !prev);
  };

  const handleClickCheckBox =()=>{
    if(!checkedStepOne){
      dispatch({
        type: actionTypesNotif.warning,
        textAlert: "لطفا اطلاعات خود را تایید نمایید"
      });
      return
    }
    
    handleNextStep()
  }

 

  return (
    <>
      <div className={Styles["stepOne-Parent"]}>
        <div className={Styles["stepOne-scroll"]}>
          <div className={Styles["stepOne-main"]}>
            <StepOneContent sejamInfoState={sejamInfoState}/>
          </div>
        </div>
        <div className={Styles["stepOne-footer"]}>
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ marginTop: -5 }}>
              <OrangeCheckbox checked={checkedStepOne} onChange={handleChange} />
            </div>
            <div className={Styles["stepOne-content-text"]}>اطلاعات مورد تایید است</div>
          </div>
          <Button className={checkedStepOne ? Styles["stepOne-footer-button-active"]: Styles["stepOne-footer-button"]} onClick={handleClickCheckBox}>
            مرحله بعدی
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepOne;

let data = [
  {
    title: "اطلاعات فردی",
  },
  {
    title: "اطلاعات شناسنامه",
  },
  {
    title: "اطلاعات تماس",
  },
  {
    title: "اطلاعات شغلی",
  },
  {
    title: "اطلاعات حساب بانکی",
  },
  {
    title: "اطلاعات مالی",
  },
];
