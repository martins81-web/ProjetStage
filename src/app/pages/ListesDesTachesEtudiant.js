import React from 'react';
import { useSubheader } from '../../_metronic/layout';
import { DetailsGroupe } from '../components/DetailsGroupe/DetailsGroupe';
import { PetiteListeStagiaires } from '../components/PetiteListeStagiaires/PetiteListeStagiaires';
import { Row, Col } from 'react-bootstrap';
export const ListeDesTachesEtudiant = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle('Liste des taches des Etudiants');

  return (
    <>
      <Row className='bg-light'>
        <Col xs='3'>
          <DetailsGroupe />
          <PetiteListeStagiaires />
        </Col>
        <Col xs='6' className='px-5 bg-white'>
          <Row>Graphique</Row>
          <Row>Taches</Row>
        </Col>
        {/* Tuteurs du groupes */}
        <Col xs='3'>
          <p className='bg-white'>Profil</p>
        </Col>
      </Row>
    </>
  );
};
