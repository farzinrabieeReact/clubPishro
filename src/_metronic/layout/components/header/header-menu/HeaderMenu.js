/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useLocation } from "react-router";
import { NavLink, Link } from "react-router-dom";
// import SVG from "react-inlinesvg";
import {
  // toAbsoluteUrl
  checkIsActive
} from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
  const [state, setState] = useState();

  const handleMenuClick = (e, id) => {
    e.stopPropagation();
    setState(id.active);
  };
  
  const handleNavClick = child => {
    if (!child) {
      setState("");
    }
  };

  const location = useLocation();
  const getMenuItemActive = url => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      {/*begin::Header Nav*/}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        {data.map((item, ind) => (
          // <li
          //   key={ind}
          //   data-menu-toggle={layoutProps.menuDesktopToggle}
          //   aria-haspopup="true"
          //   className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
          //     `/${item.route}`
          //   )}`}
          // >
          <li
            key={ind}
            data-menu-toggle={layoutProps.menuDesktopToggle}
            aria-haspopup="true"
            // className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
            //     `/${item.route}`
            // )}`}
            className={
              state === item.route || getMenuItemActive(item.route)
                ? "menu-item menu-item-submenu menu-item-rel menu-item-active"
                : "menu-item menu-item-submenu menu-item-rel"
            }
            onClick={() => handleNavClick(item.children)}
          >
            <NavLink
              className={`menu-link ${item.children ? "menu-toggle" : ""}`}
              to={`/${item.route}`}
            >
              <span className="menu-text">{item.label}</span>
              {
                item.children && (
                  <i className="menu-arrow"></i>
                )
              }
            </NavLink>

            {item.children && (
              <>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                  <ul className="menu-subnav">
                    {item.children.map((child, index) => {
                      return (
                        <li
                          className={`menu-item menu-item-submenu ${child.disable ? "disabledItems" : ""}  ${getMenuItemActive(
                            
                            `/${child.route}`
                          )}`}
                          data-menu-toggle="hover"
                          aria-haspopup="true"
                          key={index}
                          onClick={e => handleMenuClick(e, child)}
                        >
                          {/*<li*/}
                          {/*  className={`menu-item menu-item-submenu */}
                          {/*      )}`}*/}
                          {/*  data-menu-toggle="hover"*/}
                          {/*  aria-haspopup="true"*/}
                          {/*  key={index}*/}
                          {/*  onClick={() => handleMenuClick(child)}*/}
                          {/*>*/}
                          <Link className="menu-link" to={`/${child.route}`}>
                            <span className={`menu-text ${child.disable ? "disabledItems" : ""}`}>{child.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </li>
        ))}
        {/*end::1 Level*/}
      </ul>
      {/*end::Header Nav*/}
    </div>
  );
}

const data = [
  {
    label: "????????",
    route: "home"
  },
  // {
  //   label: "???????????? ????",
  //   route: "systems"
  // },
  {
    label: "?????????? ????????????",
    route: "oragh",
    children: [
      { label: "?????????? ????????????", route: "stock", active: "oragh" },
      { label: "???????? ??????????", route: "ipo", active: "oragh" }
    ]
  },
  {
    label: "?????????? ??????????",
    route: "posts"
  },
  {
    label: "????????????????",
    route: "credit",
    children: [
      {
        label: "?????????? ?? ?????????? ???????????? ???????????? ",
        route: "creadit",
        active: "credit"
      }
    ]
  },
  {
    label: "??????????",
    route: "education",
    children: [
      {
        label: "?????? ?????????? ????",
        route: "softWare",
        active: "education"
      },
      {
        label: "???????? ?????? ????????????",
        route: "courses",
        active: "education"
      },
      {
        label: "??????????????",
        route: "competitions",
        active: "education"
      },

    ]
  },
  {
    label: "??????????",
    route: "marketMap",
    children: [
     
      { label: "??????????", route: "gift", active: "marketMap" },
      { label: "???????????? ???????????????? ?????? ??????", route: "bonus", active: "marketMap" },
      { label: "?????????? ???????? ???????????? ????", route: "myGift", active: "marketMap" },
      { label: "???????? ?????? ", route: "lottery/select", active: "marketMap" },
    ]
  },
  {
    label: "???????????? ???? ????",
    route: "contactUs",
    children: [
      { label: "???????????? ????????????", route: "faq", active: "contactUs" },
      { label: "?????? ????????????????", route: "branchPage", active: "contactUs" },
      {
        label: "?????????? ???????? ?????? ???????????????? ",
        route: "accounts",
        active: "contactUs" 
      },
      { label: "?????????? ?????????????? ????????", route: "goverments", active: "contactUs" , disable : true },
      {
        label: "???????? ?????? ????????",
        route: "jobOpportunities",
        active: "contactUs",
        disable : true
      },
      { label: "???????????? ????????????", route: "about", active: "contactUs" },
      { label: "???????? ??????????", route: "feedback", active: "contactUs" , disable : true },
      { label: "??????????????", route: "notifications", active: "contactUs" , disable : true },
      { label: "?????????????? ?????? ??????", route: "help", active: "contactUs", disable : true }
    ]
  },
  {
    label: "???????? ??????????",
    route: "treemap"
  },
  // {label: "???????????? ????????", route: "chart" },
  // {label: "?????????? ????????????", route: "" },
];
