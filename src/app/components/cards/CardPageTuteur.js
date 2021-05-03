import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../../_metronic/_helpers';
import { IconeNomEmploi } from './IconeNomEmploi';

const avatars = [
  '001-boy',
  '002-girl',
  '003-girl-1',
  '004-boy-1',
  '005-girl-2',
  '006-girl-3',
  '007-boy-2',
  '008-boy-3',
  '009-boy-4',
  '010-girl-4',
  '011-boy-5',
  '012-girl-5',
  '013-girl-6',
  '014-girl-7',
  '015-boy-6',
  '016-boy-7',
  '017-girl-8',
  '018-girl-9',
  '019-girl-10',
  '020-girl-11',
  '021-boy-8',
  '022-girl-12',
  '023-girl-13',
  '024-boy-9',
  '025-girl-14',
  '026-boy-10',
  '027-girl-15',
  '028-girl-16',
  '029-boy-11',
  '030-girl-17',
  '031-boy-12',
  '032-boy-13',
  '033-girl-18',
  '034-boy-14',
  '035-boy-15',
  '036-girl-19',
  '037-girl-20',
  '038-boy-16',
  '039-girl-21',
  '040-boy-17',
  '041-girl-22',
  '042-girl-23',
  '043-boy-18',
  '044-boy-19',
  '045-boy-20',
  '046-girl-24',
  '047-girl-25',
  '048-boy-21',
  '049-boy-22',
  '050-girl-26',
];

export const CardPageTuteur = () => {
  const [contacter, setContacter] = useState(false);
  const [avatar, setAvatar] = useState(
    avatars[Math.floor(Math.random() * 50) + 1]
  );
  return (
    <Wrapper>
      <Card className='bg-white my-3'>
        <Card.Body className='p-5 m-0 rounded-0'>
          <Grid container>
            <Grid item xs={12} sm={6} className='p-5'>
              <Grid container spacing={1}>
                <Grid item>
                  <h5 className='font-weight-bold mb-0'>Ginnette Reanaud</h5>
                  <p className='text-muted mb-0'>Services solutions</p>
                  <h2 className='text-info font-weight-bold'>3 Stagiaires</h2>
                </Grid>
                <Grid item>
                  <span className='symbol circle symbol-75'>
                    <Image
                      src={toAbsoluteUrl(
                        '/media/svg/avatars/' + avatar + '.svg'
                      )}
                    />
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <Button variant='success'>
                    Associer un nouveau stagiaire
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}  sm={6} >
              <Grid
                container
                justify='space-between'
                className='align-items-end py-4 px-5'
              >
                <span className='text-muted font-weight-bold mb-0 '>
                  Ses stagiaires
                </span>
                <div>
                  <a
                    href='/'
                    className='btn btn-icon btn-light btn-hover-primary btn-sm mx-3'
                  >
                    <span className='svg-icon svg-icon-md svg-icon-primary'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/Communication/Write.svg'
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href='/'
                    className='btn btn-icon btn-light btn-hover-primary btn-sm'
                  >
                    <span className='svg-icon svg-icon-md svg-icon-primary'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/General/Trash.svg'
                        )}
                      ></SVG>
                    </span>
                  </a>
                </div>
              </Grid>
              <Grid container direction='column' spacing={1}>
                <Grid item xs={12}>
                  <IconeNomEmploi />
                </Grid>
                <Grid item xs={12}>
                  <IconeNomEmploi />
                </Grid>
                <Grid item xs={12}>
                  <IconeNomEmploi />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .card {
    border-radius: 0 !important;
  }
`;
