import React, { useState, useEffect } from "react";

import { actionTypes } from "../../../../../redux/gift/gift_select_activeSubCategory";
import { actionTypes as selectSub_category } from "../../../../../redux/gift/gift_select_activeGift";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Box, Typography, Tabs, Tab } from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "../Accordions/card";
import CardNoData from "../../../../common/components/cardNoData"
import Styles from './index.module.scss'


const useStyles = makeStyles(() => ({
  boxTitle: {
    display: "flex",
    alignItems: "center",
    padding: 5,
    height: 60,
  },
 
  boxTitleChild: {
    width: "95%",
    marginLeft: 33,
    marginRight: 10,
    marginTop: 1,
    backgroundColor: "#ffd8b6",
    borderRadius: 13,
    boxShadow: "rgba(0, 0, 0, 0.15) 3px 3px 7px",
    ["@media (max-width:576px)"]: {// eslint-disable-line no-useless-computed-key
      marginRight: 25,
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  // console.log("index",index)
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Index({
  category,
  stateFilter,
  apiCallFlag,
  handleSerchData,
  tabs,
  setValue,
  value,
  exit,
  loading,
  dataSort
}) {
  const classes = useStyles();
  let dispatch = useDispatch();
  // const [value, setValue] = React.useState(0);
  const [infoSubCategory, setinfoSubCategory] = useState(null);
  const [state, setstate] = useState([]);
  const [indexAccordion, SetIndexAccordion] = useState(0); //eslint-disable-line
  // const [titleBottom, settitleBottom] = useState(" ");



  let reducerGiftActive = useSelector(
    (state) => state.reducergiftSelectActiveList
  );

  let reducerGiftSubCategory = useSelector(
    (state) => state.reducerGiftSelectActiveSubCategoryList
  );

  useEffect(() => {
    if (reducerGiftActive.data) {
      setstate(reducerGiftActive.data);
    }
  }, [reducerGiftActive]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (category) {
      let data = {
        gift_category: category.gift_category,
      };
      dispatch({
        type: actionTypes.giftSelectActiveSubCategoryAsync,
        payload: data,
      });

      SetIndexAccordion(0);
    }
  }, [category]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let data = {
      gift_category: category.gift_category,
      gift_sub_category: infoSubCategory,
    };


    dispatch({
      type: selectSub_category.giftSelectActiveListAsync,
      payload: data,
    });
  }, [category, value]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (apiCallFlag) {
      let data = {
        ...stateFilter,
        // gift_category: category.gift_category,
        // gift_sub_category: infoSubCategory
        //   ? infoSubCategory
        //   : reducerGiftSubCategory.data[0]?.body.gift_sub_category,
      };
      dispatch({
        type: selectSub_category.giftSelectActiveListAsync,
        payload: data,
      });
    }
  }, [apiCallFlag]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let data = {
      gift_category: category.gift_category,
      gift_sub_category: infoSubCategory,
    };

    dispatch({
      type: selectSub_category.giftSelectActiveListAsync,
      payload: data,
    });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setValue(0);
  }, [category]);//eslint-disable-line

  useEffect(() => {
    handleSerchData(reducerGiftActive);
  }, [reducerGiftActive]);//eslint-disable-line

  useEffect(() => {
    let data = {
      gift_category: category.gift_category,
      gift_sub_category: reducerGiftSubCategory.data[0]?.body.gift_sub_category,
    };

    dispatch({
      type: selectSub_category.giftSelectActiveListAsync,
      payload: data,
    });
  }, [reducerGiftSubCategory.data, exit]); //eslint-disable-line react-hooks/exhaustive-deps

  const handle = (e, index) => {
    setinfoSubCategory(e.target.innerText);
  };

  const handleLabel = (label) => {
    if (label.includes(":")) {
      let str = label.split(":")[0];
      return str;
    } else {
      return label;
    }
  };


  return (
    <div className="w-100">
      <Box sx={{ width: "100%" }}>
  
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {!tabs ? (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"//eslint-disable-line react/jsx-no-duplicate-props
            >
              {reducerGiftSubCategory.data.map((item, index) => (
                <Tab
                  label={handleLabel(item.body.gift_sub_category)}
                  {...a11yProps(`${index}`)}
                  onClick={(e) => handle(e, index)}
                />
              ))}
            </Tabs>
          ) : (
              <div></div>
            )}
        </Box>
      </Box>
      <Box
        className={`${Styles.scroll} row`}
        style={{
          width: "101%",
          overflowY: "auto",
          overflowX: "hidden",
          height: 415,
          position: "relative",
        }}
      >
        {dataSort.map((item, index) => {
          return (
            <Box className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex">
              <Card key={index} data={item} dataSort={dataSort}/>
            </Box>
          );
        })}
        {state.length === 0 && (
          <Box className="col-12">
            <CardNoData text={loading ? 'در حال بارگذاری' : 'داده ای برای نمایش موجود نمی باشد'} />
          </Box>
        )}
      </Box>
      <Box className={`${"row"} ${classes.boxTitle}`}>
        {category.gift_category === "کتاب" && (
          <div className={`${"alert"} ${classes.boxTitleChild}`}>
            {
              "هزینه ارسال برای یک جلد کتاب 28 امتیاز و برای دو جلد و بیشتر 56 امتیاز محاسبه و کسر می گردد"
            }
          </div>
        )}
      </Box>

      {/* 
        //   <Accordions
            key={index}
            index={index}
            indexAccordion={indexAccordion}
            subCategory={item}
            category={category}
            flagClose={indexAccordion === index ? true : false}
            SetIndexAccordion={SetIndexAccordion}
          />
      */}
    </div>
  );
}
