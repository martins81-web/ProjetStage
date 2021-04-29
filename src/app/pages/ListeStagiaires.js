import React from 'react';
import { useSubheader } from '../../_metronic/layout';
import { InformationsGroupe } from '../components/InformationsGroupe';
import { TableauListeStagiaires } from '../components/TableauListeStagiaires';
import { FiltreStagiaires } from '../components/FiltreStagiaires';

import { Row, Col } from 'react-bootstrap';
export const ListeStagiaires = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Liste des stagiaires');
  return (
    <>
      <Row>
        <Col xs='2'>
          <InformationsGroupe />
        </Col>
        <Col xs='8' className='pl-0'>
          <h1 className='text-muted my-5'>Stagiaires</h1>

          <TableauListeStagiaires />
        </Col>
        <Col xs='2' className='bg-white'>
          <FiltreStagiaires />
        </Col>
      </Row>
    </>
  );
};
