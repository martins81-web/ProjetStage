import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import DashboardAdmin from '../components/DashboardAdmin';
import { nvAcces } from '../misc/enum';


const TableauBordGlobal = () => {
 
  const { user } = useSelector((state) => state.auth);
  
  return (
    <>
    {user.roles[0]===nvAcces.coordonnateur && <DashboardAdmin/>}
    {user.roles[0]===nvAcces.tuteur && "Dash Tuteur"}
    {user.roles[0]===nvAcces.entreprise && "Dash entreprise"}
    {user.roles[0]===nvAcces.stagiaire && "Dash stagiaire"}
    </>
  );
};

export default TableauBordGlobal;

const Wrapper = styled.div`
  
`;
