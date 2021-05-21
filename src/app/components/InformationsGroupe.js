import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styled from 'styled-components';



export const InformationsGroupe = () => {
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
      <h2></h2>
      <p>
        Debut: <span></span>
      </p>
      <p>
        Fin: <span></span>
      </p>
      <p>
        Session: <span></span>
      </p>
      <p>
        Stagiaires: <span></span>
      </p>
      <p>
        Type: <span></span>
      </p>
      <h1 className='text-right mb-0'>{'#'+localStorage.getItem('groupeNb')}</h1>
      
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
