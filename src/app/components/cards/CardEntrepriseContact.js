import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CardEntrepriseContact = ({contacter}) => {
  return (
    <>
      <Wrapper className='px-4 '>
        <img alt='a definir si import ou non' />
        <p className=''>Adresse</p>
        <p className=' mb-3'>Ville region zip</p>
        <p className=''>Telephone</p>
        <p className=' mb-3'>Siteweb</p>
        <h4 className='font-weight-bold mb-2'>Responsable </h4>
        <p className=''>Nom</p>
        <p className=' mb-3'>Email</p>
        {contacter && <Button variant='info'>Contacter</Button>}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  div {
    background-color: white;
  }
`;
