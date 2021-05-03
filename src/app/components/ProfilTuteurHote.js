/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import React from 'react';

import { useSubheader } from '../../_metronic/layout';
import { CardEntrepriseContact } from '../components/cards/CardEntrepriseContact';
import { CardStagiaireContact } from '../components/cards/CardStagiaireContact';
import { CardTuteur } from '../components/cards/CardTuteur';


export const ProfilTuteurHote = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Liste des stagiaires');



  return (
        <Grid container>
            <Grid item xs={12} className='mt-10' >
              <h1 className='text-muted px-4'>Profil</h1>
              <CardStagiaireContact />
            </Grid>
            <Grid item xs={12}  className='mt-20'>
              <h1 className='text-muted px-4  mb-0'>Tuteur</h1>
              <CardTuteur />
            </Grid>
            <Grid item xs={12}  className='mt-20'>
              <h1 className='text-muted px-4'>Hote</h1>
              <CardEntrepriseContact />
            </Grid> 
          </Grid> 
  );
};