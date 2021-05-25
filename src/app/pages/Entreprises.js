/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Button } from 'react-bootstrap';
import SVG from 'react-inlinesvg';

import { toAbsoluteUrl } from '../../_metronic/_helpers';
import { useSubheader } from '../../_metronic/layout';
import { EntrepriseStagiaires } from '../components/EntrepriseStagiaires';
import { InformationsGroupe } from '../components/InformationsGroupe';

export const Entreprises = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Entreprises du groupe ' + JSON.parse(localStorage.getItem('groupe')).name );

  const theme = useTheme();
  
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const menuDroite =()=>{
    return(<Grid item  xs={12} sm={6} md={6} lg={6} xl={3} className='bg-white p-10'>
    <div className='my-4 bg-light-danger px-6 py-8 rounded-xl mb-7'>
      <span className='svg-icon svg-icon-3x svg-icon-danger d-block my-2'>
        <SVG
          src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')}
        ></SVG>
      </span>
      <a href='/' className=' text-dark font-weight-bolder mt-2 '>
        3 Entreprises
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
        <Grid container >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>          
                <InformationsGroupe />
            </Grid>
            {matchesLG && menuDroite()}
            <Grid item xs={12} xl={6}>   
                <Grid container style={{padding: '25px'}}>
                    <Grid item xs={12}>
                        <Grid container justify='space-between'  style={{paddingBottom: '25px'}}>
                            <h1 className='text-muted'>Entreprises</h1>
                            <Button variant='success'>Nouvelle</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <EntrepriseStagiaires/>
                            </Grid>
                            <Grid item xs={12}>
                                <EntrepriseStagiaires/>
                            </Grid>
                            <Grid item xs={12}>
                                <EntrepriseStagiaires/>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Grid>       
                
            </Grid>
            
            {!matchesLG && menuDroite()}
        </Grid>
  );
};
