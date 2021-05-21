/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

import { useSubheader } from '../../_metronic/layout';
import { ActivitesRecentes } from '../components/ActivitesRecentes';
import { ApercuStagiaires } from '../components/ApercuStagiaires';
import { CardTuteur } from '../components/cards/CardTuteur';
import { CommunauteDaide } from '../components/CommunauteDaide/CommunauteDaide';
import { GraphSante, GraphTaches } from '../components/graphiques/';
import { InformationsGroupe } from '../components/InformationsGroupe';

export const DashboardGroup = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Tableau de bord du groupe');

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  console.log(matchesMD);
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
          <InformationsGroupe />
          {/* Composant ou non ? */}
          <Grid item xs={12} className='bg-white pt-2 px-2'>
            <Grid container alignItems='center' justify='space-between'>
              <Grid item>
                <h4 className='font-weight-bolder'>Stagiaires</h4>
              </Grid>
              <Grid item>
                <Button variant='light-info font-weight-bolder '>
                  Ajouter
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <ApercuStagiaires />
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={9} xl={9}>
          <Grid container direction='column' className='p-5'>
            <Grid item xs={12}>
              {/* Section message important */}
              <Grid container className='pb-5'>
                <Card className='bg-white d-flex'>
                  <Card.Body className='d-flex'>
                    <Image alt='Image a definir' />
                    <div>
                      <h1 className='text-muted text-uppercase'>
                        message important
                      </h1>
                      <p className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce ullamcorper enim quis consectetur volutpat.
                        Curabitur cursus metus nisi, in blandit ligula ornare a.
                        Fusce facilisis, enim sit amet finibus suscipit, mi mi
                        efficitur diam, a vulputate ante enim nec orci. Maecenas
                        at dolor nec ligula auctor imperdiet id ut quam.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} lg={8}>
                  <Grid container className={matchesMD ? 'pr-0' : 'pr-5'}>
                    {/* Section graphiques et Communaute d'aide */}
                    <Grid item xs={12}>
                      {/* GRAPHIQUES */}
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <GraphTaches
                            className='card-stretch card-stretch-half gutter-b'
                            symbolShape='circle'
                            baseColor='success'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <GraphSante className='card-stretch card-stretch-half gutter-b' />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <CommunauteDaide />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  className={matchesMD ? 'pt-5' : 'pt-0'}
                >
                  <ActivitesRecentes className='h-100' />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className='pt-5'>
                {/* Tuteurs */}
                <Grid item xs={12}>
                  <h1 className='text-muted'>Tuteurs du groupes : {'#'+localStorage.getItem('groupeNb')}</h1>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4].map((item) => (
                      <Grid key={item} item xs={12} sm={6} md={6} lg={3}>
                        <CardTuteur />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
