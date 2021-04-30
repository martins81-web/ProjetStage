import { Grid } from '@material-ui/core';
import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../../_metronic/_helpers';

const avatars = [
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

export const IconeNomEmploi = () => {
  return (
    <Wrapper>
    <div className='d-flex'>
      <div className='symbol symbol-40 symbol-light-success mr-5'>
        <span className='symbol-label'>
          <SVG
            className='h-75 align-self-end'
            src={toAbsoluteUrl(
              '/media/svg/avatars/' +
                avatars[Math.floor(Math.random() * 50) + 1] 
            )}
          ></SVG>
        </span>
      </div>
      <div>
        <Grid container>
          <Grid item xs={12}><span className='fontSizeSmall'><b>Ginnette Renaud</b></span></Grid>
          <Grid item xs={12}><span className='text-muted fontSizeSmall'>services solutions</span></Grid>
        </Grid>
        
        
      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.fontSizeSmall{
font-size: 0.875rem
}

`