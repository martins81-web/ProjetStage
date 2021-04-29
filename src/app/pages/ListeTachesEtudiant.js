import React from 'react';
import { useSubheader } from '../../_metronic/layout';
import { InformationsGroupe } from '../components/InformationsGroupe';
import { ApercuStagiaires } from '../components/ApercuStagiaires';
import { ApercuTachesEtudiant } from '../components/cards/ApercuTachesEtudiant';
import { CardStagiaireContact } from '../components/cards/CardStagiaireContact';
import { CardTuteur } from '../components/cards/CardTuteur';
import { CardEntrepriseContact } from '../components/cards/CardEntrepriseContact';
import { Row, Col, Button } from 'react-bootstrap';
export const ListeTachesEtudiant = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Liste des taches de l'etudiant");
  return (
    <>
      <Row>
        <Col xs='3'>
          <InformationsGroupe />
          <ApercuStagiaires />
        </Col>
        <Col xs='7' className='pl-0'>
          <h1 className='py-5'>Tâches</h1>
          <ApercuTachesEtudiant />
          <ApercuTachesEtudiant />
          <ApercuTachesEtudiant />
          <ApercuTachesEtudiant />
          <center>
            <Button className='mb-3'>Voir plus</Button>
          </center>
        </Col>
        {/* className PX-4 est pour sajuster avec la card tuteur */}
        <Col xs='2' className='bg-white'>
          <h1 className='text-muted px-4 mt-5'>Profil</h1>
          <CardStagiaireContact />
          <h1 className='text-muted px-4 mt-5 mb-0'>Tuteur</h1>
          <CardTuteur />
          <h1 className='text-muted px-4'>Hote</h1>
          <CardEntrepriseContact />
        </Col>
      </Row>
    </>
  );
};
