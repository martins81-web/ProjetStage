import { format } from 'date-fns';
import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


export const InformationsGroupe = () => {
  const [groupe, setGroup] = useState(JSON.parse(localStorage.getItem('groupe')));
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('arrayOfGroupe')));
  
  const history= useHistory();
  // Affichage du dropdown si le user est admin 
  const changeGroupAccess = () =>{
    const role = localStorage.getItem('role')
    if(role == '001'){
      return (
        <DropdownButton
        id='dropdown-item-button'
        title='Changer de groupe'
        className='text-right text-white pb-5 '
        variant='transparent-white'
      >
         {groups && groups.length>0 && groups.map((groupe, i) => (
        <Dropdown.Item as='button' key={groupe+i+'dropdown_info'} onClick={
          ()=>{
            localStorage.setItem('groupe', JSON.stringify(groupe)) 
          history.push('/tableau-de-bord-groupe/groupe/' + groupe.name)
          setGroup(groupe);
        }} >
              Groupe - {groupe.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      )
    }
  }
  
  return (
    groupe &&
    <Wrapper className='bg-danger px-3 pt-2 text-white'>
      {changeGroupAccess()}

      <p>
        Debut: <span> {format(new Date(groupe.startDate), 'PPPP')}</span>
      </p>
      <p>
        Fin: <span> {format(new Date(groupe.endDate), 'PPPP')}</span>
      </p>
      <p>
        Session: <span></span>
      </p>
      <p>
        Stagiaires: <span></span>
      </p>
      <p>
        Type: <span> {groupe.type}</span> 
      </p>
      <h1 className='text-right mb-0'>{'#'+groupe.name}</h1>
      
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
