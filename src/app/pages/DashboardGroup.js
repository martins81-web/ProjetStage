import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

import { useSubheader } from '../../_metronic/layout';
import { ActivitesRecentes } from '../components/ActivitesRecentes';
import { ApercuStagiaires } from '../components/ApercuStagiaires';
import { CardTuteur } from '../components/cards/CardTuteur';
import { CommunauteDaide } from '../components/CommunauteDaide/CommunauteDaide';
import { GraphiqueSanteGroupe } from '../components/graphiques/GraphiqueSanteGroupe';
import { InformationsGroupe } from '../components/InformationsGroupe';

export const DashboardGroup = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Tableau de bord du groupe');
  return (
    <>
      <Row>
        <Col xs='2'>
          <InformationsGroupe />
          <ApercuStagiaires />
        </Col>
        <Col xs='10'>
          {/* Section message important */}
          <Row className='pr-2 my-5'>
            <Card className='bg-white d-flex'>
              <Card.Body className='d-flex'>
                <Image alt='Image a definir' />
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
                  {/* <GraphiqueTaches /> */}
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
          {/* Tuteurs */}
          <Row>
            <Col xs='12' className='px-0 py-5'>
              <h1 className='text-muted'>Tuteurs du groupes : 1038</h1>
            </Col>
            <CardTuteur />
            <CardTuteur />
            <CardTuteur />
          </Row>
        </Col>
      </Row>
    </>
  );
};
