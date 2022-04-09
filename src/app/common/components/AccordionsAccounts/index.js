import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(theme => ({
  title: {
    // textAlign: "center",
  },
  text: {
    // fontSize: theme.fontSize.xLarge,
    fontWeight: "bold",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginBottom: 80,
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      width: "90%"
      // margin: 'auto',
    }
  },
  svg: {
    width: 17,
    height: 17,
    display: "block",
    margin: "auto",
    position: "absolute",
    bottom: -30,
    right: "calc(56% - 8.5px)",
    // fill: theme.palette.light.type2,
    [theme.breakpoints.down("sm")]: {
      right: "calc(50% - 8.5px)",
      left: "auto!important"
    }
  },
  bottomRight: {
    left: 0
  },
  // bottomCenter: {
  //     right: "calc(50% - 8px)",
  // },
  centerRight: {
    top: 9,
    left: -20
  }
}));
export default function Index({ state, accounts }) {
  const classes = useStyles();
  const [stateArray, setStateArray] = useState([]);
  let AcoordinRef = useRef();

  // const handelClick = () => {
  //   let elem = AcoordinRef.current;
  //
  //   elem.classList.toggle("active");
  //   let panel = elem.nextElementSibling;
  //
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //     panel.style.paddingBottom = null;
  //   } else {
  //     panel.style.maxHeight = panel.scrollHeight + 10 + "px";
  //     panel.style.paddingBottom = 10 + "px";
  //   }
  // };

  const removeDuplicate = () => {
    let dup;

    let arayy = [];
    let allarray = [];
    state.map((item, index) => {
      if (item.Group !== dup) {
        arayy.push(item.Group);

        allarray = arayy.filter((itm, ind) => {
          return arayy.indexOf(itm) === ind;
        });
      }
      dup = item.Group;
    });
    // let ary= state.filter((itm,ind)=>{
    //    return state.indexOf(itm.Group)===ind
    //  })

    setStateArray(allarray);
  };

  useEffect(() => {
    // console.log("srrayyyyy",stateArray)
    removeDuplicate();
  }, [state]);

  return (
    <Paper className={classes.root}>
      {accounts.loading && (
        <div className="d-flex justify-content-center align-items-center h-100px">
          <CircularProgress />
        </div>
      )}
      <TableContainer className={classes.container}>
        {stateArray?.map((itm, ind) => (
          <>
            <span
              className="p-4 d-flex justify-content-center align-items-center  font-weight-bolder font-size-h4  w-100 my-5"
              style={{
                color: "#038903",
                borderBottom: "1px solid #038903"
              }}
            >
              {itm}
            </span>
            <Table aria-label="table">
              <TableHead>
                <TableRow>
                  {columns.map((column, ind) => (
                    <TableCell
                      key={ind}
                      align={column.id === "phone" ? "right" : "center"}
                      style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <>
                {state.map((item, ind) =>
                  item.Group === itm ? (
                    <TableBody>
                      <TableRow>
                        <TableCell>{item.Bank}</TableCell>
                        <TableCell>{item.Branch ? item.Branch : "-"}</TableCell>
                        <TableCell>{item.Number}</TableCell>
                        <TableCell>{item.Sheba}</TableCell>
                      </TableRow>
                    </TableBody>
                  ) : null
                )}
              </>
            </Table>
          </>
        ))}
      </TableContainer>
    </Paper>
  );
}

const columns = [
  { id: "bank", label: "بانک", minWidth: 170, align: "center" },
  { id: "branch", label: "شعبه", minWidth: 170, align: "center" },
  { id: "acountNumber", label: "شماره حساب", minWidth: 170, align: "center" },
  { id: "shaba", label: "شبا", minWidth: 100, align: "center" }
];
