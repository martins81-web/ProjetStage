import { Grid } from '@material-ui/core';
import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

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
  return (
    <>
    <Grid container>
      <Grid item xs={2}>
          <InformationsGroupe  />
          <ApercuStagiaires />
      </Grid>
      <Grid item xs={10}>
        <Grid container className='p-5' direction='column'>
          <Grid item xs={12}> 
            {/* Section message important */}
            <Card className='bg-white d-flex'>
              <Card.Body className='d-flex'>
                <Image alt='Image a definir' />
                <div>
                  <h1 className='text-muted text-uppercase'>
                    message important
                  </h1>
                  <p className='text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ullamcorper enim quis consectetur volutpat. Curabitur
                    cursus metus nisi, in blandit ligula ornare a. Fusce
                    facilisis, enim sit amet finibus suscipit, mi mi efficitur
                    diam, a vulputate ante enim nec orci. Maecenas at dolor nec
                    ligula auctor imperdiet id ut quam.
                  </p>
                  </div>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Grid container> 
              <Grid item xs={8}>
                <Grid container spacing={2} className='pt-5 '>
                  {/* Section graphiques et Communaute d'aide */}
                  <Grid item xs={6}>
                    <GraphTaches
                        className="card-stretch card-stretch-half gutter-b"
                        symbolShape="circle"
                        baseColor="success"
                      />         
                  </Grid>
                  <Grid item xs={6}>
                    <GraphSante className="card-stretch card-stretch-half gutter-b" />
                  </Grid>
                  <Grid item xs={12}>
                    <CommunauteDaide />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} className='pt-5 pl-5'>
                <ActivitesRecentes className='h-100' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className='pt-10'>
            <Grid container>
              {/* Tuteurs */}
              <Grid item xs={12}>
                <h1 className='text-muted'>Tuteurs du groupes : 1038</h1>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {
                    [1,2,3,4].map( item=>
                      <Grid key={item} item xs={3}>
                        <CardTuteur />
                      </Grid>
                  )}
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
