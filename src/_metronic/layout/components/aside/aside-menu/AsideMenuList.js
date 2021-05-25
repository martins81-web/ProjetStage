/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import { getAllGroups } from '../../../../../app/services/Groupes';
import { checkIsActive, toAbsoluteUrl } from '../../../../_helpers';

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [groups, setGroups] = useState([]);

  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          'menu-item-active'} menu-item-open menu-item-not-hightlighted`
      : '';
  };

  useEffect(() => {
    if(user.role=== '001'){
      getAllGroups()
        .then(reponse=> {
          localStorage.setItem('arrayOfGroupe', JSON.stringify(reponse.data))
          setGroups(reponse.data);
        })
    }

  }, [])
      

  


  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li 
          className={`menu-item ${getMenuItemActive('/dashboard', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/dashboard' >
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Home.svg')} />
            </span>
            <span className='menu-text'>Tableau de bord</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Groupe Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/groupes',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/groupes'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl(
                  '/media/svg/icons/Layout/Layout-top-panel-3.svg'
                )}
              />
            </span>
            {location.pathname.includes('/groupe/') ? (
              <span className='menu-text'>Changer de groupe</span>
            ) : (
              <span className='menu-text'>Sélectionner un groupe</span>
            )}

            <i className='menu-arrow' />
          </NavLink>
          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Groupes</span>
                </span>
              </li>

              {/*begin::Map numero Groupe*/}
              {groups.length>0 && groups.map((groupe) => (
                <li key={'groupeNb:'+groupe.name}
                  className={`menu-item ${getMenuItemActive(
                    '/tableau-de-bord-groupe/groupe/'+groupe.name
                  )}`}
                  aria-haspopup='true'
                  onClick={()=>localStorage.setItem('groupe', JSON.stringify(groupe)) }
                >
                  <NavLink
                    className='menu-link'
                    to={'/tableau-de-bord-groupe/groupe/' + groupe.name}
                  >
                    <i className='menu-bullet menu-bullet-dot'>
                      <span />
                    </i>
                    <span className='menu-text'>Groupe - {groupe.name}</span>
                  </NavLink>
                </li>
              ))}
              {/*end::Map numero Groupe*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Custom */}
        {/* begin::section */}
        {location.pathname.includes('/groupe/') && (
          <>
            <li className='menu-section '>
              <h4 className='menu-text' style={{ color: 'white' }}>
              Groupe: 
              {/* {localStorage.getItem('groupeNb')} */}
              &nbsp;
              {groups.length>0 && groups.map((groupe) => (
                getMenuItemActive(
                      '/tableau-de-bord-groupe/groupe/'+groupe.name).includes('menu-item-active') &&  <span> {groupe.name}</span>
              ))}
              {groups.length>0 && groups.map((groupe) => (
                getMenuItemActive(
                      '/liste-stagiaires/groupe/'+groupe.name).includes('menu-item-active') &&  <span> {groupe.name}</span>
              ))}
              {groups.length>0 && groups.map((groupe) => (
                getMenuItemActive(
                      '/tuteurs/groupe/'+groupe.name).includes('menu-item-active') &&  <span> {groupe.name}</span>
              ))}
              {groups.length>0 && groups.map((groupe) => (
                getMenuItemActive(
                      '/entreprises/groupe/'+groupe.name).includes('menu-item-active') &&  <span> {groupe.name}</span>
              ))}
              {groups.length>0 && groups.map((groupe) => (
                getMenuItemActive(
                      '/liste-taches-etudiant/groupe/'+groupe.name).includes('menu-item-active') &&  <span> {groupe.name}</span>
              ))}

              </h4>
              <i className='menu-icon flaticon-more-v2'></i>
            </li>

            <li
              className={`menu-item ${getMenuItemActive(
                '/liste-stagiaires/groupe/'+ localStorage.getItem('groupeNb'),
                false
              )}`}
              aria-haspopup='true'
            >
              <NavLink
                className='menu-link'
              to={'/liste-stagiaires/groupe/'+ localStorage.getItem('groupeNb')}
              >
                <span className='svg-icon menu-icon'>
                  <SVG
                    src={toAbsoluteUrl(
                      '/media/svg/icons/Communication/Group.svg'
                    )}
                  />
                </span>
                <span className='menu-text'>Stagiaires</span>
              </NavLink>
            </li>

            <li
              className={`menu-item ${getMenuItemActive(
                '/tuteurs/groupe/'+ localStorage.getItem('groupeNb'),
                false
              )}`}
              aria-haspopup='true'
            >
              <NavLink className='menu-link' to={'/tuteurs/groupe/'+ localStorage.getItem('groupeNb')} >
                <span className='svg-icon menu-icon'>
                  <SVG
                    src={toAbsoluteUrl(
                      '/media/svg/icons/Communication/Shield-user.svg'
                    )}
                  />
                </span>
                <span className='menu-text'>Tuteurs</span>
              </NavLink>
            </li>

            <li
              className={`menu-item ${getMenuItemActive(
                '/entreprises/groupe/'+JSON.parse(localStorage.getItem('groupe')).name,
                false
              )}`}
              aria-haspopup='true'
            >
              <NavLink
                className='menu-link'
                to={'/entreprises/groupe/'+JSON.parse(localStorage.getItem('groupe')).name}
              >
                <span className='svg-icon menu-icon'>
                  <SVG
                    src={toAbsoluteUrl('/media/svg/icons/Design/Sketch.svg')}
                  />
                </span>
                <span className='menu-text'>Entreprises</span>
              </NavLink>
            </li>
            
            <li
              className={`menu-item ${getMenuItemActive(
                '/liste-taches-etudiant/groupe/'+localStorage.getItem('groupeNb'),
                false
              )}`}
              aria-haspopup='true'
            >
              <NavLink
                className='menu-link'
                to={'/liste-taches-etudiant/groupe/'+localStorage.getItem('groupeNb')}
              >
                <span className='svg-icon menu-icon'>
                  <SVG
                    src={toAbsoluteUrl('/media/svg/icons/Design/Bezier-curve.svg')}
                  />
                </span>
                <span className='menu-text'>Tâches</span>
              </NavLink>
            </li>

            <li
              className={`menu-item ${getMenuItemActive(
                '/groupes/groupexxxx/evaluations',
                false
              )}`}
              aria-haspopup='true'
            >
              <NavLink
                className='menu-link'
                to='/groupes/groupexxxx/evaluations'
              >
                <span className='svg-icon menu-icon'>
                  <SVG
                    src={toAbsoluteUrl(
                      '/media/svg/icons/Communication/Write.svg'
                    )}
                  />
                </span>
                <span className='menu-text'>Évaluations</span>
              </NavLink>
            </li>

            <li
              className={`menu-item ${getMenuItemActive(
                '/groupes/groupexxxx/raportsDeStage',
                false
              )}`}
              aria-haspopup='true'
            >
              <NavLink
                className='menu-link'
                to='/groupes/groupexxxx/raportsDeStage'
              >
                <span className='svg-icon menu-icon'>
                  <SVG
                    src={toAbsoluteUrl(
                      '/media/svg/icons/General/Clipboard.svg'
                    )}
                  />
                </span>
                <span className='menu-text'>Rapports de stage</span>
              </NavLink>
            </li>

            <li
              className={`menu-item ${getMenuItemActive(
                '/groupes/groupexxxx/parametresDuStage',
                false
              )}`}
              aria-haspopup='true'
            >
              <NavLink
                className='menu-link'
                to='/groupes/groupexxxx/parametresDuStage'
              >
                <span className='svg-icon menu-icon'>
                  <SVG
                    src={toAbsoluteUrl(
                      '/media/svg/icons/General/Settings-2.svg'
                    )}
                  />
                </span>
                <span className='menu-text'>Paramètres du stage</span>
              </NavLink>
            </li>
          </>
        )}

        {/* end:: section */}

        {/* Custom */}
        {/* begin::section */}
        <li className='menu-section '>
          <h4 className='menu-text' style={{ color: 'white' }}>
            Gestion Globale
          </h4>
          <i className='menu-icon flaticon-more-v2'></i>
        </li>
        {/* end:: section */}

        {/* Calendrier Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/calendrier',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/calendrier'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Adjust.svg')} />
            </span>
            <span className='menu-text'>Calendrier</span>
            <i className='menu-arrow' />
          </NavLink>
          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Calendrier</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  '/calendrier/option1'
                )}`}
                aria-haspopup='true'
              >
                <NavLink className='menu-link' to='/calendrier/option1'>
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>option 1 (à changer)</span>
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
            '/taches',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/taches'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl(
                  '/media/svg/icons/Communication/Clipboard-list.svg'
                )}
              />
            </span>
            <span className='menu-text'>Tâches</span>
            <i className='menu-arrow' />
          </NavLink>
          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Tâches</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive('/taches/option1')}`}
                aria-haspopup='true'
              >
                <NavLink className='menu-link' to='/taches/option1'>
                  <i className='menu-bullet menu-bullet-dot'>
                    <span />
                  </i>
                  <span className='menu-text'>option 1 (à changer)</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive('/entraide', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/entraide'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Eraser.svg')} />
            </span>
            <span className='menu-text'>Entraide</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Entreprises Pages */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            '/allEntreprises',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/entreprise'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/Text/Bullet-list.svg')}
              />
            </span>
            <span className='menu-text'>Entreprises</span>
            <i className='menu-arrow' />
          </NavLink>
          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Entreprises</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  '/allEntreprises/ajout'
                )}`}
                aria-haspopup='true'
              >
                <NavLink className='menu-link' to='/allEntreprises/ajout'>
                  <span className='menu-text'>Ajouter une entreprise</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  '/allEntreprises/list'
                )}`}
                aria-haspopup='true'
              >
                <NavLink className='menu-link' to='/allEntreprises/list'>
                  <span className='menu-text'>Toutes les entreprises</span>
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
            '/stages',
            true
          )}`}
          aria-haspopup='true'
          data-menu-toggle='hover'
        >
          <NavLink className='menu-link menu-toggle' to='/stages'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/Shopping/Chart-bar1.svg')}
              />
            </span>
            <span className='menu-text'>Stages</span>
            <i className='menu-arrow' />
          </NavLink>
          <div className='menu-submenu '>
            <i className='menu-arrow' />
            <ul className='menu-subnav'>
              <li className='menu-item  menu-item-parent' aria-haspopup='true'>
                <span className='menu-link'>
                  <span className='menu-text'>Stages</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive('/stages/option1')}`}
                aria-haspopup='true'
              >
                <NavLink className='menu-link' to='/stages/option1'>
                  <span className='menu-text'>Option 1 - (à changer)</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive('/stages/option2')}`}
                aria-haspopup='true'
              >
                <NavLink className='menu-link' to='/stages/option2'>
                  <span className='menu-text'>Option 2 - (à changer)</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive('/utilisateurs', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/utilisateurs'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl(
                  '/media/svg/icons/Communication/Adress-book2.svg'
                )}
              />
            </span>
            <span className='menu-text'>Utilisateurs</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive('/programmes', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/programmes'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Polygon.svg')} />
            </span>
            <span className='menu-text'>Programmes</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Custom */}
        {/* begin::section */}
        <li className='menu-section '>
          <h4 className='menu-text' style={{ color: 'white' }}>
            Vous
          </h4>
          <i className='menu-icon flaticon-more-v2'></i>
        </li>
        {/* end:: section */}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive('/preferences', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/preferences'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/General/User.svg')} />
            </span>
            <span className='menu-text'>Préférences</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive('/outils', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/outils'>
            <span className='svg-icon menu-icon'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/General/Settings-1.svg')}
              />
            </span>
            <span className='menu-text'>Outils</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive('/quitter', false)}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/logout'>
            <span className='svg-icon menu-icon'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Door-open.svg')} />
            </span>
            <span className='menu-text'>Quitter</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
