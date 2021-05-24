import axios from 'axios';
import React, { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';

import { ContentRoute, LayoutSplashScreen } from '../_metronic/layout';
import { BuilderPage } from './pages/BuilderPage';
import { DashboardGroup } from './pages/DashboardGroup';
import { DashboardPage } from './pages/DashboardPage';
import { DialogParent } from './pages/Dialog';
import { Entreprises } from './pages/Entreprises';
import { ListeStagiaires } from './pages/ListeStagiaires';
import { ListeTachesEtudiant } from './pages/ListeTachesEtudiant';
import { MyPage } from './pages/MyPage';
import { TacheDetails } from './pages/TacheDetails';
import { Tuteurs } from './pages/Tuteurs';
import { getAllGroups } from './services/Api';


export default function BasePage() {
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes('/groupe/') && localStorage.setItem('groupeNb', location.pathname.substr(location.pathname.length - 4));
    getAllGroups()
          .then( response => {
            console.log(response.data);
           
          })
          .catch(() => {
           
          });
  }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect


  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from='/' to='/dashboard' />
        }
        <ContentRoute path='/dashboard' component={DashboardPage} />
        <ContentRoute path='/liste-stagiaires' component={ListeStagiaires} />
        <ContentRoute path='/builder' component={BuilderPage} />
        <ContentRoute path='/my-page' component={MyPage} />
        <ContentRoute path='/dialog' component={DialogParent} />
        <ContentRoute
          path='/tableau-de-bord-groupe/groupe/:title'
          component={DashboardGroup}
        />
        <ContentRoute
          path='/liste-taches-etudiant'
          component={ListeTachesEtudiant}
        />
        <ContentRoute path='/tache/details' component={TacheDetails} />
        <ContentRoute path='/tuteurs' component={Tuteurs} />
        <ContentRoute path='/entreprises' component={Entreprises} />
        {/* <Redirect to="/error/error-v1" /> */}
      </Switch>
    </Suspense>
  );
}
