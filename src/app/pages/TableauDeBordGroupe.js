import React from 'react';
import { useSubheader } from '../../_metronic/layout';
import { DetailsGroupe } from '../components/DetailsGroupe/DetailsGroupe';
import { PetiteListeStagiaires } from '../components/PetiteListeStagiaires/PetiteListeStagiaires';
import { Row, Col } from 'react-bootstrap';
export const TableauDeBordGroupe = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Tableau de bord du groupe');

  return (
    <>
      <Row className='bg-light'>
        <Col xs='3'>
          <DetailsGroupe />
          <PetiteListeStagiaires />
        </Col>
        <Col xs='9'>
          {/* Message Tableau de bord */}
          <Row>Message important</Row>
          <Row>
            <Col xs='9'>
              <Row>
                {/* Graphiques */}
                <Col xs='6'>Graphiques</Col>
                <Col xs='6'>Graphiques</Col>
              </Row>
              {/* Communaute d'aide */}
              <Row>Communaute d'aide</Row>
            </Col>
            {/* Activites Recentes */}
            <Col xs='3'>Activites recentes</Col>
          </Row>
        </Col>
        {/* Tuteurs du groupes */}
        <Col xs='12'>Tuteurs du groupe</Col>
      </Row>
    </>
  );
};
