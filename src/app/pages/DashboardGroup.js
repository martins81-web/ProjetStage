import React from 'react';
import { useSubheader } from '../../_metronic/layout';
import { InformationsGroupe } from '../components/InformationsGroupe';
import { ApercuStagiaires } from '../components/ApercuStagiaires';
import { ActivitesRecentes } from '../components/ActivitesRecentes';
import { CommunauteDaide } from '../components/CommunauteDaide/CommunauteDaide';
import { GraphiqueSanteGroupe } from '../components/graphiques/GraphiqueSanteGroupe';
import { Row, Col, Card, Image } from 'react-bootstrap';
export const DashboardGroup = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Tableau de bord du groupe');
  return (
    <>
      <Row>
        <Col xs='3'>
          <InformationsGroupe />
          <ApercuStagiaires />
        </Col>
        <Col xs='9'>
          {/* Section message important */}
          <Row className='pr-2 my-5'>
            <Card className='bg-white d-flex'>
              <Card.Body className='d-flex'>
                <Image alt='test' />
                <Card.Text>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className='pr-2'>
            {/* Section graphiques et Communaute d'aide */}
            <Col xs='8'>
              <Row className='d-flex justify-content-between'>
                <Col xs='6' className='pl-0'>
                  <GraphiqueSanteGroupe />
                </Col>
                <Col xs='6' className='pr-0'>
                  <GraphiqueSanteGroupe />
                </Col>
              </Row>
              <Row>
                <CommunauteDaide />
              </Row>
            </Col>
            {/* Timeline */}
            <Col xs='4'>
              <ActivitesRecentes className='h-100' />
            </Col>
          </Row>
          <Row>Sections Tuteurs</Row>
        </Col>
      </Row>
    </>
  );
};
