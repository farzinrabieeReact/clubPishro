import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import Category from "./category";
import SubCategory from "./subCategory";
import { useSubheader } from "../../../../_metronic/layout";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import CardNoData from "./../../../common/components/cardNoData";
import { useHistory } from "react-router";







let useStyles = makeStyles((theme) => ({
  btn: {
    border: "1px solid #64A51C",
    backgroundColor: "white",
    color: "#64A51C",
    // marginTop: "auto",
    width:'90%',
    padding: "5px 8px",
    margin:'0 auto',
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#64A51C",
      color: "white",
    },
    '@media (max-width: 768px)' : {
      width: '98%'
    }
  },
  
}));

export default function Index() { 

  const classes = useStyles()
  const suhbeader = useSubheader();
  suhbeader.setTitle("جوایز قابل انتخاب من");
  let { push } = useHistory();

  const handelRout = () => {
    push({
      pathname: "/marketMap/giftOrder",
    });
  };

  const [category, setcategory] = useState(null);
  let reducerGiftSelectAffordable = useSelector(
    (state) => state.reducergiftMeSelectAffordable
  );
  let reducerGiftActiveCategoris = useSelector(
    (state) => state.reducergiftSelectActiveCategorisList
  );

  return (
    <div
      style={{
        paddingTop:
          !reducerGiftSelectAffordable.loading ||
          reducerGiftActiveCategoris.loading
            ? "4px"
            : "0",
      }}
    >
      {reducerGiftSelectAffordable.loading && <LinearProgress />}
      {reducerGiftActiveCategoris.loading && <LinearProgress />}

      {!category && (
        <div>
          <CardNoData
            text={
              reducerGiftActiveCategoris.loading ? "درحال بارگذاری..." : null
            }
          />
        </div>
      )}

      {/* {loading && <LinearProgress />} */}
      <Box className={"row mt-5 d-flex "}>
        <Box className="col-lg-3 mb-2 d-flex flex-column-reverse justify-content-between ">
          <button className={classes.btn} onClick={() => handelRout()}>
            لیست درخواست ها
          </button>
          <Category>{(giftCategory) => setcategory(giftCategory)}</Category>
        </Box>
        <Box className={"col-lg-9"}>
          {category && <SubCategory category={category} />}
        </Box>
      </Box>
    </div>
  );
}
