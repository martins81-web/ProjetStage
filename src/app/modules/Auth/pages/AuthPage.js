/* eslint-disable no-restricted-imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss';

import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';

import { toAbsoluteUrl } from '../../../../_metronic/_helpers';
import { ContentRoute } from '../../../../_metronic/layout';
import imgBg from '../../../media/graduate.jpg';
import imgBg2 from '../../../media/graduate2.jpg';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Registration from './Registration';

// eslint-disable-next-line no-restricted-imports
export function AuthPage() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(matches)
  return (
    <>
      <Grid container className='flex-root'>
        {/*begin::Login*/}
       
          {/*begin::Content*/}
          <Grid item xs={12} sm={12} md={6} className='bg-secondary' >
            {/* begin::Content body */} 
            <Grid container justify='center' alignItems='center' style={{height: '100%'}}>
              <Grid item xs={10} sm={10} md={8}>
                <Switch>
                  <ContentRoute path="/auth/login" component={Login} />
                  <ContentRoute
                    path="/auth/forgot-password"
                    component={ForgotPassword}
                  />
                  <Redirect from="/auth" exact={true} to="/auth/login" />
                  <Redirect to="/auth/login" />
                </Switch>
              </Grid>
            </Grid>
                  

            {/*end::Content body*/}
          </Grid>
          {/*end::Content*/}

          {/*begin::Aside*/}
          <Grid item xs={12} sm={12} md={6}  
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl(matches? imgBg2 : imgBg)})`,
            }}
          >
            <div>
            {/*begin: Aside Container*/}
            
            {/*end: Aside Container*/}
            </div>
          </Grid>
          {/*begin::Aside*/}

          
        {/*end::Login*/}
      </Grid>
    </>
  );
}

