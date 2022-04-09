import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Search, Close } from "@material-ui/icons";
import DatePicker from "../../../../common/components/DatePicker";

const useStyles = makeStyles(() => ({
  head: {
    height: 50,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    ["@media (max-width:576px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: 50,
      width: "90%",
      margin:'0 auto'
    },
  },

  btn: {
    color: "rgb(100,165,28)",
    backgroundColor: "white",
    borderRadius: 3,
    marginRight: 5,
    margin: "0 5px",
    fontSize: 25 ,
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "&:hover": {
      color: "white",
      backgroundColor: "rgb(100,165,28)",
    },
  },
  btn2: {
    color: "#fe534a",
    backgroundColor: "white",
    borderRadius: 3,
    marginRight: 5,
    fontSize: 25 ,
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "&:hover": {
      color: "white",
      backgroundColor: "#fe534a",
    },

  },
}));

const Index = ({

  setstateFilter,
  setflagFilter,
  handelChangeDate,
  stateFilter,
  submit
}) => {
  const classes = useStyles();
  const handleExit = () => {
    setflagFilter(false)
    setstateFilter({
      from_date: null,
      to_date:null
    });
  };

  return (
    <>
      <>
        <div className={classes.head}>
          <Box
            className="me-md-3 me-1 mb-1"
           
          >
            <DatePicker
              label="از تاریخ"
       
              value={
                stateFilter.from_date?.includes("undefined")
                  ? null
                  : stateFilter.from_date
              }
              setValue={(data) => handelChangeDate(data, "from_date")}
            />
          </Box>

          <Box
            className="me-1 me-md-3 mb-1"
          >
            <DatePicker
              label="تا تاریخ"
              value={stateFilter.to_date}
         
              setValue={(data) => handelChangeDate(data, "to_date")}
            />{" "}
          </Box>

          <div className="d-flex mt-5 align-items-start align-items-sm-start">
            <Search
              className={classes.btn}
              onClick={submit}
            />
            <Close
              style={{ }}
              onClick={handleExit}
              className={classes.btn2}
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Index;
