import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../../redux/gift/git_select_activeCategories";

const useStyles = makeStyles(() => ({
  list: {
    listStyle: "none",
    textAlign: "center",
    width: "100%",
    margin: 0,
    padding: 0,
    "& > li": {
      height: 40,
      display: "flex",
      alignItems: "center",
      padding: " 0px 10px",
      borderRadius: 8,
      marginBottom: 3,

      "&:hover": {
        backgroundColor: "#64A51C",
        color: "white",
        opacity: 0.8,
        cursor: "pointer",
      },
    },
  },
  active: {
    backgroundColor: "#64A51C",
    color: "white",
  },
}));

export default function Index({
  children,
  apiCallFlag,
  flagTextSearch,
  setflagTextSearch,
  setTabs,
}) {
  const classes = useStyles();
  let dispatch = useDispatch();

  const [state, setstate] = useState([]);
  const [defaultSelectItem, setDefaultSelectItems] = useState({
    index: 0,
    gift_category: null,
  });
  let reducerGiftCategory = useSelector(
    (state) => state.reducergiftSelectActiveCategorisList
  );

  useEffect(() => {
    dispatch({ type: actionTypes.giftSelectActiveCategorisAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (defaultSelectItem.gift_category) children(defaultSelectItem);
  }, [defaultSelectItem]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (reducerGiftCategory.data) {
      setstate(reducerGiftCategory.data);
      setDefaultSelectItems({
        index: 0,
        gift_category: reducerGiftCategory.data[0]?.body.gift_category,
      });
    }
  }, [reducerGiftCategory]);
  const handleClick = (index, item) => {
    setDefaultSelectItems({
      index: index,
      gift_category: item.body.gift_category,
    });
    setflagTextSearch(false);
    setTabs(false);
  };

  return (
    <ul className={classes["list"]}>
      {!flagTextSearch &&
        state.map((item, index) => {
          return (
            <li
              key={index}
              className={
                defaultSelectItem.index === index && !flagTextSearch
                  ? classes["active"]
                  : " "
              }
              onClick={() => handleClick(index, item)}
            >
              {item.body.gift_category}
            </li>
          );
        })}
        {flagTextSearch && <li className={classes["active"]}>جستجو در تمامی جوایز</li>}
      {/* {flagTextSearch ? <li className={classes["active"]}>جستجو در تمام جوایز</li> : null} */}
    </ul>
  );
}
