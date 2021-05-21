import { Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../../_metronic/_helpers';

const avatars=[
  "001-boy.svg",
  "002-girl.svg",
  "003-girl-1.svg",
  "004-boy-1.svg",
  "005-girl-2.svg",
  "006-girl-3.svg",
  "007-boy-2.svg",
  "008-boy-3.svg",
  "009-boy-4.svg",
  "010-girl-4.svg",
  "011-boy-5.svg",
  "012-girl-5.svg",
  "013-girl-6.svg",
  "014-girl-7.svg",
  "015-boy-6.svg",
  "016-boy-7.svg",
  "017-girl-8.svg",
  "018-girl-9.svg",
  "019-girl-10.svg",
  "020-girl-11.svg",
  "021-boy-8.svg",
  "022-girl-12.svg",
  "023-girl-13.svg",
  "024-boy-9.svg",
  "025-girl-14.svg",
  "026-boy-10.svg",
  "027-girl-15.svg",
  "028-girl-16.svg",
  "029-boy-11.svg",
  "030-girl-17.svg",
  "031-boy-12.svg",
  "032-boy-13.svg",
  "033-girl-18.svg",
  "034-boy-14.svg",
  "035-boy-15.svg",
  "036-girl-19.svg",
  "037-girl-20.svg",
  "038-boy-16.svg",
  "039-girl-21.svg",
  "040-boy-17.svg",
  "041-girl-22.svg",
  "042-girl-23.svg",
  "043-boy-18.svg",
  "044-boy-19.svg",
  "045-boy-20.svg",
  "046-girl-24.svg",
  "047-girl-25.svg",
  "048-boy-21.svg",
  "049-boy-22.svg",
  "050-girl-26.svg"
];

export const CardTuteur = () => {
  const [contacter, setContacter] = useState(false);
  const [avatar] = useState(
    avatars[Math.floor(Math.random() * 49) + 0]
  );
  return (
    <Wrapper>
      <Card className='bg-white'>
        <Card.Body className='p-0 m-0'>
          <Grid container alignItems='flex-end'>
            <Grid item xs={7} className='p-5'>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <h5 className='font-weight-bold mb-0'>Ginnette Reanaud</h5>
                  <p className='text-muted mb-0'>Services solutions</p>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='info'
                    className='btn-contacter'
                    onClick={setContacter}
                  >
                    Contacter
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container justify='center'>
                <span className='symbol circle symbol-100'>
                  <Image
                    src={toAbsoluteUrl('/media/svg/avatars/' + avatar)}
                  />
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Card.Body>
        {contacter && (
          <Card.Body className='p-5 m-0'>
            <Grid container direction='column' spacing={1}>
              <Grid item xs={12}>
                <TextField
                  id='filled-textarea'
                  label='Message'
                  multiline
                  variant='filled'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justify='flex-end' spacing={1}>
                  <Grid item>
                    <Button variant='primary'>Envoyer</Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='danger'
                      onClick={() => setContacter(false)}
                    >
                      Annuler
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card.Body>
        )}
      </Card>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .btn-contacter {
    border-radius: 15px;
  }
  .card{
    border: none;
  }
`;
