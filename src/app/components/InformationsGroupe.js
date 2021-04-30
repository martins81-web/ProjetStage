import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styled from 'styled-components';

const groupe={
  nom: 'Reseautique et support technique',
  debut: '2012-12-12',
  id: '#1028',
  Stagiaires: 15,
  Type: 'distance'
}

export const InformationsGroupe = () => {
  const  {nom,debut,id,Stagiaires,Type}=groupe;
  return (
    <Wrapper className='bg-danger px-3 pt-2 text-white'>
      <DropdownButton
        id='dropdown-item-button'
        title='Changer de groupe'
        className='text-right text-white pb-5 '
        variant='transparent-white'
      >
        <Dropdown.Item as='button'>Action</Dropdown.Item>
        <Dropdown.Item as='button'>Another action</Dropdown.Item>
        <Dropdown.Item as='button'>Something else</Dropdown.Item>
      </DropdownButton>
      <h2>{nom}</h2>
      <p>
        Debut: <span>{debut}</span>
      </p>
      <p>
        Fin: <span>2012-12-12</span>
      </p>
      <p>
        Session: <span>ete 2012</span>
      </p>
      <p>
        Stagiaires: <span>{Stagiaires}</span>
      </p>
      <p>
        Type: <span>{Type}</span>
      </p>
      <h1 className='text-right mb-0'>{id}</h1>
      
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
`;
