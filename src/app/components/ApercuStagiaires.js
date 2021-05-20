import { Grid } from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import React from 'react';
import { Button, Col } from 'react-bootstrap';

import { IconeNomEmploi } from './cards/IconeNomEmploi';

export const ApercuStagiaires = (props) => {
  return (
    <Col className='bg-white py-4'>
      <Grid container direction='column' spacing={4}>
        {/* <Grid item xs={12}>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item>
              <h4 className='font-weight-bolder'>Stagiaires</h4>
            </Grid>
            <Grid item>
              <Button variant='light-info font-weight-bolder '>Ajouter</Button>
            </Grid>
          </Grid>
        </Grid> */}

        <Grid item xs={12}>
          <Grid container direction='column' spacing={2}>
            <Grid item xs={12}>
              <Grid container alignItems='center'>
                <Grid item xs={10}>
                  <IconeNomEmploi
                    firstname={props.firstname}
                    lastname={props.lastname}
                    entreprise={props.entreprise}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify='flex-end'>
                    <StarsIcon className=' mt-0 text-success' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* <Grid item xs={12}>
              <Grid container alignItems='center'>
                <Grid item xs={10}>
                  <IconeNomEmploi />
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify='flex-end'>
                    <StarsIcon className=' mt-0 text-danger' />
                  </Grid>
                </Grid>
              </Grid>
            </Grid> */}

            {/* <Grid item xs={12}>
              <Grid container alignItems='center'>
                  <Grid item xs={10}>
                    <IconeNomEmploi />
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container justify='flex-end'>
                      <StarsIcon className=' mt-0 text-warning' />
                    </Grid>
                  </Grid>     
              </Grid>
            </Grid> */}

            {/* <Grid item xs={12}>
              <Grid container alignItems='center'>
                  <Grid item xs={10}>
                    <IconeNomEmploi />
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container justify='flex-end'>
                      <StarsIcon className=' mt-0 text-primary' />
                    </Grid>
                  </Grid>     
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Col>
  );
};
