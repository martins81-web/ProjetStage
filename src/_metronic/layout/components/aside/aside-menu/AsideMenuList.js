/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import SVG from 'react-inlinesvg';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import { checkIsActive, toAbsoluteUrl } from '../../../../_helpers';

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">Tableau de bord</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Groupe Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/groupes",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/groupes">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-top-panel-3.svg")}
              />
            </span>
            <span className="menu-text">Sélectionner un groupe</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Groupes</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/groupes/groupe1")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/groupes/groupe1">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Groupe - 1</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

             {/*begin::2 Level*/}
             <li
                className={`menu-item ${getMenuItemActive("/groupes/groupe2")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/groupes/groupe2">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Groupe - 2</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}



       
        {/* Custom */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text" style={{color:'white'}}>Gestion Globale</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Calendrier Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/calendrier",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/calendrier">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
              />
            </span>
            <span className="menu-text">Calendrier</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Calendrier</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/calendrier/option1")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/calendrier/option1">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">option 1 (à changer)</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Tâches Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/taches",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/taches">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
              />
            </span>
            <span className="menu-text">Tâches</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Tâches</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/taches/option1")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/taches/option1">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">option 1 (à changer)</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

         {/*begin::1 Level*/}
         <li
          className={`menu-item ${getMenuItemActive("/entraide", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/entraide">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">Entraide</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

      {/* Entreprises Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/entreprises",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/entreprise">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
              />
            </span>
            <span className="menu-text">Entreprises</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Entreprises</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/entreprises/ajout")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/entreprises/ajout">
                  <span className="menu-text">Ajouter une entreprise</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/entreprises/list")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/entreprises/list">
                  <span className="menu-text">Toutes les entreprises</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

      {/* Stages Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/stages",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/stages">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
              />
            </span>
            <span className="menu-text">Stages</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Stages</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/stages/option1")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/stages/option1">
                  <span className="menu-text">Option 1 - (à changer)</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/stages/option2")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/stages/option2">
                  <span className="menu-text">Option 2 - (à changer)</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

            </ul>
          </div>
        </li>
        {/*end::1 Level*/}



      {/*begin::1 Level*/}
      <li
          className={`menu-item ${getMenuItemActive("/utilisateurs", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/utilisateurs">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">Utilisateurs</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/programmes", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/programmes">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">Programmes</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}


        {/* Custom */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text" style={{color:'white'}}>Vous</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

      {/*begin::1 Level*/}
      <li
          className={`menu-item ${getMenuItemActive("/preferences", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/preferences">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">Préférences</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}


        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/outils", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/outils">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">Outils</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

          {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/quitter", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/quitter">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
            </span>
            <span className="menu-text">Quitter</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}


      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
