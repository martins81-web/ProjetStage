import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const DetailsGroupe = () => {
  return (
    <div className='bg-danger p-0 text-white px-5 py-1'>
      <Dropdown className='d-flex justify-content-end '>
        <Dropdown.Toggle variant='danger' id='dropdown-basic'>
          Changer de groupe
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h1>Reseau et support technique</h1>
      <p>
        Debut : <span>2120-202-22</span>
      </p>
      <p>
        Fin : <span>2120-202-22</span>
      </p>
      <p>
        Session : <span>Ete 2021</span>
      </p>
      <p>
        Stagiaires : <span>21</span>
      </p>
      <p>
        Type : <span>Teletravail</span>
      </p>
      <h1 className='text-right'>#1038</h1>
    </div>
  );
};
