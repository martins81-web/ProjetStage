import React from 'react';
import { useSubheader } from '../../_metronic/layout';
import { InformationsGroupe } from '../components/InformationsGroupe';
import { ApercuStagiaires } from '../components/ApercuStagiaires';
import { Row, Col, Card } from 'react-bootstrap';
export const DashboardGroup = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Tableau de bord du groupe');

  return (
    <>
      <Row className='bg-light'>
        <Col xs='3'>
          <InformationsGroupe />
          <ApercuStagiaires />
        </Col>
        <Col xs='9' className=''>
          {/* Section message important */}
          <Row className='mr-2 mt-2'>
            <Card className='bg-white w-100'>
              <Col xs='4'></Col>
              <Col xs='8'></Col>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  );
};
