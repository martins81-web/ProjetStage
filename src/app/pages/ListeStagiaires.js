/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';

import { useSubheader } from '../../_metronic/layout';
import { FiltreStagiaires } from '../components/FiltreStagiaires';
import { InformationsGroupe } from '../components/InformationsGroupe';
import { TableauListeStagiaires } from '../components/TableauListeStagiaires';

export const ListeStagiaires = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Liste des stagiaires');

  const theme = useTheme();
  
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const Filtre=()=>{
    return(
      <Grid item xs={12} sm={6} md={6} lg={6} xl={3} className='p-10 bg-white' >
        <FiltreStagiaires />
      </Grid>
    );
  }

  return (
    <>
    <Grid container>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>          
        <InformationsGroupe />
      </Grid>
      {matchesLG && Filtre()}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={6} className='p-10'>
        <h1 className='text-muted my-5'>Stagiaires</h1>
        <TableauListeStagiaires />
      </Grid>
      {!matchesLG && Filtre()}
    </Grid>
    </>
  );
};
