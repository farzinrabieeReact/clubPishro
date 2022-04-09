import React, { useEffect, useState } from "react";
import { makeStyles, Box, LinearProgress, Tooltip } from "@material-ui/core";
import Category from "./category";
import SubCategory from "./subCategory";
import { useHistory } from "react-router-dom";
import { Search } from "@material-ui/icons";
import FilterItem from "./filterItem";
import { useSelector } from "react-redux";
import SortIcon from "./SortIcon";

let useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: "0 10px",
    boxShadow: "rgba(0, 0, 0, 0.15) 3px 3px 7px",
    borderRadius: "0 0 10px 10px",
    ["@media (max-width:780px)"]: {
      justifyContent: "flex-end",
    },
  },
  icons: {
    width: "80%",
    display: "flex",
    justifyContent: "flex-end",
  },
  menuIcon: {
    width: 30,
    height: 30,
    cursor: "pointer",
    marginRight: 15,
  },
  menuIcon2: {
    width: 30,
    height: 30,
    cursor: "pointer",
    marginRight: 15,
    transform: "rotate(180deg)",
  },
  btn: {
    border: "1px solid #64A51C",
    backgroundColor: "white",
    color: "#64A51C",
    marginTop: "auto",
    padding: "5px 8px",
    borderRadius: 8,
    width: "",
    "&:hover": {
      backgroundColor: "#64A51C",
      color: "white",
    },
  },
  anime: {
    visibility: "hidden",
    opacity: 0,
    transition: "all 0.5s",
  },
  animatedItem: {
    animation: `$myEffect 500ms `,
    display: "flex",
    alignItems: "center",
  },

  "@keyframes myEffect": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
    },
    "100%": {
      visibility: "visibale",
      opacity: 1,
    },
  },

  "@keyframes myEffectExit": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
    },
    "100%": {
      visibility: "visibale",
      opacity: 1,
    },
  },
}));

export default function Index() {
  let classes = useStyles();
  let { push } = useHistory();

  const [category, setcategory] = useState(null);
  const [tabs, setTabs] = useState(false);
  const [flagFilter, setflagFilter] = useState(false);
  const [stateFilter, setstateFilter] = useState({
    name: "",
  });
  const [apiCallFlag, setapiCallFlag] = useState(false);
  const [flagTextSearch, setflagTextSearch] = useState(false);
  const [exit, setexit] = useState(false);
  const [value, setValue] = React.useState(0);
  const [dataSort, setdataSort] = useState([]);
  const [directionSort, setdirectionSort] = useState("null");

  const reducerAllGift = useSelector(
    (state) => state.reducergiftSelectActiveList
  );

  const sortData = () => {
    let coptReducer = [...reducerAllGift.data];
    let infoSort = reducerAllGift.data;
    let res = [];
    if (directionSort === "up") {
      infoSort = coptReducer?.sort(function(a, b) {
        return b.body.required_bonus - a.body.required_bonus;
      });
    } else if (directionSort === "down") {
      infoSort = coptReducer?.sort(function(a, b) {
        return a.body.required_bonus - b.body.required_bonus;
      });
    } else if (directionSort === "null") {
      infoSort = coptReducer?.sort(function(a, b) {
        return b.body.remained_capacity - a.body.remained_capacity;
      });
    }
    res = [...infoSort];
    setdataSort(res);
  };

  const handleSort = () => {
    handelDirection();
  };

  useEffect(() => {
    sortData();
  }, [directionSort]);

  const handelDirection = () => {
    switch (directionSort) {
      case "null":
        setdirectionSort("up");
        return;
      case "up":
        setdirectionSort("down");
        return;
      case "down":
        setdirectionSort("null");
        return;
      default:
        break;
    }
  };

  useEffect(() => {
    setdataSort(reducerAllGift.data);
    sortData();
  }, [reducerAllGift]);

  const handelRout = () => {
    push({
      pathname: "/marketMap/giftOrder",
    });
  };

  const handleFilter = () => {
    setflagFilter((prev) => !prev);
  };

  const handeleFilter = (value, type) => {
    setstateFilter({
      [type]: value,
    });
  };

  const handleSubmitFilter = () => {
    setapiCallFlag(true);
    setTabs(true);
    setflagTextSearch(true);
  };
  const handleSerchData = (data) => {
    setapiCallFlag(false);
  };
  const handleExit = () => {
    setflagFilter(false);
    setTabs(false);
    setflagTextSearch(false);
    setValue(0);
    setexit((prev) => !prev);
    setstateFilter({
      name: "",
    });
  };

  useEffect(() => {
    if (!flagFilter) {
      handleExit();
    }
  }, [flagFilter]);

  return (
    <div style={{ paddingTop: !reducerAllGift.load ? "4px" : "0" }}>
      {reducerAllGift.load && <LinearProgress />}
      <Box className={"row d-flex m-0"}>
        <Box
          className={
            "col-lg-2 mb-5 mt-3 d-flex flex-column align-content-between "
          }
        >
          <Category
            apiCallFlag={apiCallFlag}
            flagTextSearch={flagTextSearch}
            setflagTextSearch={setflagTextSearch}
            setTabs={setTabs}
          >
            {(giftCategory) => setcategory(giftCategory)}
          </Category>
          <button className={classes.btn} onClick={() => handelRout()}>
            لیست درخواست ها
          </button>
        </Box>
        <Box className={`${"col-lg-10 p-0"} ${classes.media}`}>
          <div className={classes["header"]}>
            <h5 className="text-left titleHead d-none d-md-block">
              جوایز باشگاه مشتریان
            </h5>
            <div className={classes["icons"]}>
              <div
                className={!flagFilter ? classes.anime : classes.animatedItem}
              >
                <FilterItem
                  handeleFilter={handeleFilter}
                  stateFilter={stateFilter}
                  handleSubmitFilter={handleSubmitFilter}
                  handleExit={handleExit}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <Tooltip title="جستجو در تمامی جوایز" placement="bottom">
                  <Search
                    size={"normal"}
                    className={classes["menuIcon"]}
                    onClick={() => handleFilter()}
                  />
                </Tooltip>
                <div className="ms-4">
                  <SortIcon
                    handleSort={handleSort}
                    directionSort={directionSort}
                  />
                </div>
              </div>
            </div>
          </div>

          {category && (
            <SubCategory
              loading={reducerAllGift.load}
              exit={exit}
              dataSort={dataSort}
              setValue={setValue}
              value={value}
              tabs={tabs}
              category={category}
              stateFilter={stateFilter}
              apiCallFlag={apiCallFlag}
              handleExit={handleExit}
              setapiCallFlag={setapiCallFlag}
              handleSerchData={handleSerchData}
            />
          )}
        </Box>
      </Box>
    </div>
  );
}
