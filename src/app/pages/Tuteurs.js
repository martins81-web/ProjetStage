/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Button } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../_metronic/_helpers';
import { useSubheader } from '../../_metronic/layout';
import { CardPageTuteur } from '../components/cards/CardPageTuteur';
import { InformationsGroupe } from '../components/InformationsGroupe';


export const Tuteurs = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Tuteurs du groupe');
  const theme = useTheme();
  
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const menuDroite =()=>{
    return(<Grid item  xs={12} sm={6} md={6} lg={5} xl={3} className='bg-white p-10'>
    <div className='my-4 bg-light-danger px-6 py-8 rounded-xl mb-7'>
      <span className='svg-icon svg-icon-3x svg-icon-danger d-block my-2'>
        <SVG
          src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')}
        ></SVG>
      </span>
      <a href='/' className=' text-dark font-weight-bolder mt-2 '>
        3 Tuteurs
        <br />
        <span className='text-muted numeroGroupe'>{'#'+localStorage.getItem('groupeNb')}</span>
      </a>
    </div>
    {/* Stagiaires */}
    <div className='my-4 bg-light-danger px-6 py-8 rounded-xl mb-7'>
      <span className='svg-icon svg-icon-3x svg-icon-danger d-block my-2'>
        <SVG
          src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')}
        ></SVG>
      </span>
      <a href='/' className=' text-dark font-weight-bolder mt-2 '>
        9 Stagiaires
        <br />
        <span className='text-muted numeroGroupe'>{'#'+localStorage.getItem('groupeNb')}</span>
      </a>
    </div>
  </Grid>);
  }

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} sm={5} md={5} lg={6} xl={3}>
          <InformationsGroupe />
        </Grid>
        {matchesLG && <Grid  item sm={1}></Grid>}
        {matchesLG && menuDroite()}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6} className='p-10'>
          <h1 className='pt-5 text-muted'>Tuteurs de stage</h1>
          <Button className='mb-3 float-right d-inline' variant='success'>
            <span className='svg-icon  my-2'>
              <SVG
                src={toAbsoluteUrl(
                  '/media/svg/icons/Communication/Add-user.svg'
                )}
              ></SVG>
            </span>
            Nouveau
          </Button>
          <div className='pt-20'>
            <CardPageTuteur />
            <CardPageTuteur />
            <CardPageTuteur />
          </div>
        </Grid>
        {!matchesLG && menuDroite()}
      </Grid>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .numeroGroupe {
    font-size: smaller;
  }
`;
