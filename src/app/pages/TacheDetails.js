/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { format } from 'date-fns';
import React from 'react';
import GaugeChart from 'react-gauge-chart';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../_metronic/_helpers';
import { ApercuStagiaires } from '../components/ApercuStagiaires';
import { InformationsGroupe } from '../components/InformationsGroupe';
import { ProfilTuteurHote } from '../components/ProfilTuteurHote';

export const TacheDetails = () => {


  const theme = useTheme();
  
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));


  const Infos =()=>{
    return(
        <Grid item xs={12} sm={6} md={6} lg={5} xl={3} className='p-5 mb-5 bg-white'>
          <ProfilTuteurHote/>
        </Grid>
    );
  }

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} sm={5} md={5} lg={6} xl={3}>
          <InformationsGroupe />
          <ApercuStagiaires />
        </Grid>
        {matchesLG && <Grid  item sm={1}></Grid>}
        {matchesLG && Infos()}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6} className='p-10'>
          <Grid container >
                <Grid item xs={12} className='bg-white p-5'>
                    <Grid container justify='space-between' alignItems='center'>
                        <Grid item>
                            <p className='text-info font-weight-bold'>Détails de la tâche</p>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems='center'>
                                <Grid item>
                                    <GaugeChart id="gauge-chart8"
                                        style={{ width: '60%' }}
                                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                                        arcPadding={0.01}
                                        arcWidth={0.5}
                                        cornerRadius={0}
                                        hideText
                                    />
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems='center' spacing={1}>
                                        <Grid item className='text-muted'>15 tâches</Grid>
                                        <Grid item>
                                            <div className='symbol symbol-25 symbol-light-success'>
                                                <span className='symbol-label'>
                                                    <SVG
                                                        className='h-75 align-self-center'
                                                        src={toAbsoluteUrl(
                                                        '/media/svg/icons/Navigation/Angle-left.svg'  )}
                                                    ></SVG>
                                                </span>
                                            </div>
                                        </Grid>
                                        <Grid item>
                                            <div className='symbol symbol-25 symbol-light-success'>
                                                <span className='symbol-label'>
                                                    <SVG
                                                        className='h-75 align-self-center'
                                                        src={toAbsoluteUrl(
                                                        '/media/svg/icons/Navigation/Angle-right.svg'  )}
                                                    ></SVG>
                                                </span>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}  className='bg-white p-5 mt-1'>
                    <Grid container spacing={5} >
                        <Grid item xs={12}>
                            <Grid container justify='space-between'>
                                <h5>Trip Reminder. Thank you flying with us!</h5>
                                <p className='text-muted'>{format(new Date(), 'PPp')}</p>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>        
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify='space-between'>
                                <Grid item xs={12} sm> 
                                    <Grid container>                       
                                        <Grid item xs={12}>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfIcon />
                                            <StarBorderOutlinedIcon />
                                            <span className='text-muted ml-3'>Auto-Évaluation</span>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfIcon />
                                            <StarBorderOutlinedIcon />
                                            <span className='text-muted ml-3'>Tuteur</span>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarHalfIcon />
                                            <StarBorderOutlinedIcon />
                                            <span className='text-muted ml-3'>Responsable du stage</span>
                                        </Grid>
                                    </Grid> 
                                </Grid>
                                <Grid item className='mt-5'>
                                    <span className='text-muted'>Évaluation globale <br/></span>
                                    <StarIcon fontSize='large'/>
                                    <StarIcon fontSize='large'/>
                                    <StarIcon fontSize='large'/>
                                    <StarHalfIcon fontSize='large'/>
                                    <StarBorderOutlinedIcon fontSize='large'/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {!matchesLG && Infos()}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .MuiSvgIcon-root {
    color: #ffbb00;
  }
`;
