/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';
import SVG from 'react-inlinesvg';

import { toAbsoluteUrl } from '../../_metronic/_helpers';
import { CardEntrepriseContact } from './cards/CardEntrepriseContact';
import { IconeNomEmploi } from './cards/IconeNomEmploi';


export const EntrepriseStagiaires = () => {



  return (
        <Grid container style={{backgroundColor: 'white', padding: '40px'}}>
            <Grid item xs={12} sm={6} >
                <CardEntrepriseContact />
            </Grid>
            <Grid item xs={12} sm={6} >
                <Grid container direction='column' spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify='space-between' alignItems='center'>
                            <span className='text-muted'>Ses stagiaires</span>
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
                    </Grid>
                    <Grid item xs={12}>
                        <IconeNomEmploi />
                    </Grid>
                    <Grid item xs={12}>
                        <IconeNomEmploi />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='success'>Associer un nouveau stagiaire</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid> 
  );
};