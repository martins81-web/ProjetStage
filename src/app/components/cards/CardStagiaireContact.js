import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
export const CardStagiaireContact = () => {
  return (
    <Wrapper className='px-4'>
      <h2>Ginette Lebrun</h2>
      <div className='d-flex'>
        <Button variant='info' className='mr-4'>
          Modifier
        </Button>
        <Button variant='light-info'>Contacter</Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
