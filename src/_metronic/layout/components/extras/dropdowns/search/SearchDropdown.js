import React, { useEffect, useState, useMemo } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../../_partials/dropdowns";
import { Autocomplete } from "@material-ui/lab";
import { LinearProgress, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes as actionTypesStockSearch } from "../../../../../../redux/market/stock_select_summaries_search/sock_select_summries_search";
import { useHistory } from "react-router-dom";



export function SearchDropdown(props) {

  const [searchValue, setSearchValue] = useState(null);

  const stateStock = useSelector((state) => state.reducerStockListSearch.data);
  const stateStockload = useSelector((state) => state.reducerStockListSearch.load);
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [searchOnline, setsearchOnline] = useState({
    short_name: "",
    full_name: "",
  });
  let timeoutId;

  const [flagSearch, setflagSearch] = useState(false);//eslint-disable-line no-unused-vars

  const clearTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  };

  const handleSearchChange = (event, val) => {
    // setData(null);
    setSearchValue(val);
    // console.log('searchValue',searchValue)
    // console.log('val',val)

    if (val) {
      push({
        pathname: "/symbolnformation",
        state: { isin: val.body.isin },
      });
    }

    // if (event.target.value.length > 2) {
    //   clearTimeout();
    //
    //   setLoading(true);
    //
    //   // simulate getting search result
    //   timeoutId = setTimeout(() => {
    //     setData(fakeData);
    //     setLoading(false);
    //   }, 500);
    // }
  };

  // const clear = () => {
  //   setData(null);
  //   setSearchValue("");
  // };

  // useEffect(() => {
  //   let obj = {}
  //   if (searchValue !== "") {
  //     obj ={
  //       short_name:
  //     }
  //     // dispatch({ type: actionTypesStockSearch.stockListSearchAsync,payload:searchOnline });
  //   }
  // }, [searchValue]);

  const handleChangeText = (e) => {
    // setsearchOnline(e.target.value);
    let obj = {
      short_name: `${e.target.value}`,
      full_name: `${e.target.value}`,
    };
    setsearchOnline(obj);
  };

  useEffect(() => {
    if (Object.keys(searchOnline).length) {
      if (
        searchOnline["short_name"] !== "" &&
        searchOnline["full_name"] !== ""
      ) {
        let data = {
          table: "stock",
          method_type: "select_summaries",
          data: { ...searchOnline },
        };
        dispatch({
          type: actionTypesStockSearch.stockListSearchAsync,
          payload: { ...data },
        });
      } else {
        let data = {
          table: "stock",
          method_type: "select_summaries",
          from: 0,
          size: 100,
          data: {},
        };
        dispatch({
          type: actionTypesStockSearch.stockListSearchAsync,
          payload: { ...data },
        });
      }
    } else {
      let data = {
        table: "stock",
        method_type: "select_summaries",
        from: 0,
        size: 100,
        data: {},
      };
      dispatch({
        type: actionTypesStockSearch.stockListSearchAsync,
        payload: { ...data },
      });
    }
  }, [searchOnline]);//eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    setflagSearch((prev) => !prev);
    setsearchOnline({
      short_name: "",
      full_name: "",
    });
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []); //eslint-disable-line react-hooks/exhaustive-deps 

  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.search.layout") ===
        "offcanvas",
    };
  }, [uiService]);

  return (
    <>
      {layoutProps.offcanvas && (
        <div className="topbar-item ">
          <div
            className="btn btn-icon btn-clean btn-lg mr-1"
            id="kt_quick_search_toggle"
          >
            <span className="svg-icon svg-icon-xl svg-icon-primary">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")} />
            </span>
          </div>
        </div>
      )}
      {!layoutProps.offcanvas && (
        <Dropdown
          alignRight
          drop="down"
          onToggle={() => {
            // setData(null);
            // setLoading(false);
            // setSearchValue("");
          }}
          id="kt_quick_search_toggle"
        >
          <Dropdown.Toggle as={DropdownTopbarItemToggler}>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="search-panel-tooltip">
                  <span style={{color:'grey',fontWeight:'bold'}}>
                  جستجو نماد
                  </span>
                </Tooltip>
              }
            >
              <div className="btn btn-icon btn-hover-transparent-white btn-lg btn-dropdown mr-1">
                <span className="svg-icon svg-icon-xl" onClick={handleClick}>
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")}
                  />
                </span>
              </div>
            </OverlayTrigger>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
            <div id="kt_quick_search_dropdown">
              {stateStockload && <LinearProgress/>}

              <form className="quick-search-form">
                {/* {stateStock.length !== 0 && ( */}
                <Autocomplete
                  noOptionsText={"اطاعاتی وجود ندارد"}
                  // loading={true}
                  style={{boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                  fullWidth
                  id="symbolInformation"
                  options={stateStock}
                  getOptionLabel={(option) =>
                    `${option.body.short_name} ${"--"} ${option.body.full_name}`
                  }
                  // getOptionSelected={(option) => option?.body?.short_name }
                  getOptionSelected={(option) =>
                    option?.body?.short_name === searchValue.body?.short_name
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="نمادها"
                      variant="outlined"
                      onChange={(e) => handleChangeText(e)}
                      // style={{boxShadow:'0 0 100px black'}}
                    />
                  )}
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                {/* )} */}
              </form>
              {/*<SearchResult data={data} />*/}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
}
