import React from 'react';
import { useSubheader } from '../../_metronic/layout';
import { InformationsGroupe } from '../components/InformationsGroupe';
import styled from 'styled-components';
import { CardPageTuteur } from '../components/cards/CardPageTuteur';
import { Row, Col, Button } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../_metronic/_helpers';
export const Tuteurs = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Tuteurs du groupe');
  return (
    <Wrapper>
      <Row>
        <Col xs='3'>
          <InformationsGroupe />
        </Col>
        <Col xs='7' className='pl-0'>
          <h1 className='pt-5 text-muted'>Tuteurs de stage</h1>

          <Button className='mb-3 float-right d-inline' variant='success'>
            <span className='svg-icon  my-2'>
              <SVG
                src={toAbsoluteUrl(
                  '/media/svg/icons/Communication/Add-user.svg'
                )}
              ></SVG>
            </span>
            Nouveau
          </Button>
          <div className='pt-20'>
            <CardPageTuteur />
            <CardPageTuteur />
            <CardPageTuteur />
          </div>
        </Col>
        <Col xs='2' className='bg-white'>
          {/* Tuteurs */}
          <div className='my-4 bg-light-danger px-6 py-8 rounded-xl mb-7'>
            <span className='svg-icon svg-icon-3x svg-icon-danger d-block my-2'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')}
              ></SVG>
            </span>
            <a href='#' className=' text-dark font-weight-bolder mt-2 '>
              3 Tuteurs
              <br />
              <span className='text-muted numeroGroupe'>#1080</span>
            </a>
          </div>
          {/* Stagiaires */}
          <div className='my-4 bg-light-danger px-6 py-8 rounded-xl mb-7'>
            <span className='svg-icon svg-icon-3x svg-icon-danger d-block my-2'>
              <SVG
                src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')}
              ></SVG>
            </span>
            <a href='#' className=' text-dark font-weight-bolder mt-2 '>
              9 Stagiaires
              <br />
              <span className='text-muted numeroGroupe'>#1080</span>
            </a>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .numeroGroupe {
    font-size: smaller;
  }
`;
