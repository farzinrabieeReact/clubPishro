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
    label: "خانه",
    route: "home"
  },
  // {
  //   label: "سامانه ها",
  //   route: "systems"
  // },
  {
    label: "اوراق بهادار",
    route: "oragh",
    children: [
      { label: "اوراق بهادار", route: "stock", active: "oragh" },
      { label: "عرضه اولیه", route: "ipo", active: "oragh" }
    ]
  },
  {
    label: "تالار گفتگو",
    route: "posts"
  },
  {
    label: "اعتبارات",
    route: "credit",
    children: [
      {
        label: "شرایط و ضوابط دریافت اعتبار ",
        route: "creadit",
        active: "credit"
      }
    ]
  },
  {
    label: "آموزش",
    route: "education",
    children: [
      {
        label: "نرم افزار ها",
        route: "softWare",
        active: "education"
      },
      {
        label: "دوره های آموزشی",
        route: "courses",
        active: "education"
      },
      {
        label: "مسابقات",
        route: "competitions",
        active: "education"
      },

    ]
  },
  {
    label: "جوایز",
    route: "marketMap",
    children: [
     
      { label: "جوایز", route: "gift", active: "marketMap" },
      { label: "جزئیات امتیازات کسب شده", route: "bonus", active: "marketMap" },
      { label: "جوایز قابل انتخاب من", route: "myGift", active: "marketMap" },
      { label: "قرعه کشی ", route: "lottery/select", active: "marketMap" },
    ]
  },
  {
    label: "ارتباط با ما",
    route: "contactUs",
    children: [
      { label: "سوالات متداول", route: "faq", active: "contactUs" },
      { label: "شعب کارگزاری", route: "branchPage", active: "contactUs" },
      {
        label: "شماره حساب های کارگزاری ",
        route: "accounts",
        active: "contactUs" 
      },
      { label: "دفاتر پیشخوان دولت", route: "goverments", active: "contactUs" , disable : true },
      {
        label: "فرصت های شغلی",
        route: "jobOpportunities",
        active: "contactUs",
        disable : true
      },
      { label: "درباره باشگاه", route: "about", active: "contactUs" },
      { label: "صدای مشتری", route: "feedback", active: "contactUs" , disable : true },
      { label: "اعلانات", route: "notifications", active: "contactUs" , disable : true },
      { label: "راهنمای ثبت نام", route: "help", active: "contactUs", disable : true }
    ]
  },
  {
    label: "نقشه بازار",
    route: "treemap"
  },
  // {label: "نمودار شاخص", route: "chart" },
  // {label: "معرفی باشگاه", route: "" },
];
