import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ContentRoute, LayoutSplashScreen } from '../_metronic/layout';
import { BuilderPage } from './pages/BuilderPage';
import { DashboardGroup } from './pages/DashboardGroup';
import { DashboardPage } from './pages/DashboardPage';
import { ListeStagiaires } from './pages/ListeStagiaires';
import { ListeTachesEtudiant } from './pages/ListeTachesEtudiant';
import { MyPage } from './pages/MyPage';

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
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
        <ContentRoute
          path='/tableau-de-bord-groupe'
          component={DashboardGroup}
        />
        <ContentRoute
          path='/liste-taches-etudiant'
          component={ListeTachesEtudiant}
        />
        {/* <Redirect to="/error/error-v1" /> */}
      </Switch>
    </Suspense>
  );
}
