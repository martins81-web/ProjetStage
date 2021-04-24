import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { IconeNomEmploi } from './cards/IconeNomEmploi';
import StarsIcon from '@material-ui/icons/Stars';
export const ApercuStagiaires = () => {
  return (
    <Col className='bg-white py-4'>
      <Row className='d-flex justify-content-between px-5'>
        <h4 className='font-weight-bolder'>Stagiaires</h4>
        <Button variant='light-info font-weight-bolder '>Ajouter</Button>
      </Row>
      <Row className='d-flex justify-content-between'>
        <IconeNomEmploi />
        <StarsIcon className=' mt-0 text-success' fontSize='large' />
      </Row>
      <Row className='d-flex justify-content-between'>
        <IconeNomEmploi />
        <StarsIcon className=' mt-0 text-danger' fontSize='large' />
      </Row>
      <Row className='d-flex justify-content-between'>
        <IconeNomEmploi />
        <StarsIcon className=' mt-0 text-warning' fontSize='large' />
      </Row>
      <Row className='d-flex justify-content-between'>
        <IconeNomEmploi />
        <StarsIcon className=' mt-0 text-warning' fontSize='large' />
      </Row>
      <Row className='d-flex justify-content-between'>
        <IconeNomEmploi />
        <StarsIcon className=' mt-0 text-success' fontSize='large' />
      </Row>
      <Row className='d-flex justify-content-between'>
        <IconeNomEmploi />
        <StarsIcon className=' mt-0 text-danger' fontSize='large' />
      </Row>
    </Col>
  );
};
