/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Button } from 'react-bootstrap';

import { useSubheader } from '../../_metronic/layout';
import { ApercuStagiaires } from '../components/ApercuStagiaires';
import { ApercuTachesEtudiant } from '../components/cards/ApercuTachesEtudiant';
import { CardEntrepriseContact } from '../components/cards/CardEntrepriseContact';
import { CardStagiaireContact } from '../components/cards/CardStagiaireContact';
import { CardTuteur } from '../components/cards/CardTuteur';
import { GraphEvaluationTaches } from '../components/graphiques/GraphEvaluationTaches';
import { InformationsGroupe } from '../components/InformationsGroupe';

export const ListeTachesEtudiant = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Liste des taches de l'etudiant");

  const theme = useTheme();
  
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));


  const Infos =()=>{
    return(
        <Grid item xs={12} sm={6} md={6} lg={5} xl={3} className='p-5 mb-5 bg-white'>
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
        </Grid>
    );
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={5} md={5} lg={6} xl={3}>
          <InformationsGroupe />
          <ApercuStagiaires />
        </Grid>
        {matchesLG && <Grid  item sm={1}></Grid>}
        {matchesLG && Infos()}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6} className='px-10'>
          <GraphEvaluationTaches />
          <h1 className='py-5 mt-10'>Tâches</h1>
          <ApercuTachesEtudiant />
          <ApercuTachesEtudiant />
          <ApercuTachesEtudiant />
          <ApercuTachesEtudiant />
          <div className='text-center'>
            <Button className='mb-3'>Voir plus</Button>
          </div>
        </Grid>
        {!matchesLG && Infos()}
      </Grid>
    </>
  );
};
