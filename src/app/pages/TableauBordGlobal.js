import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import DashboardAdmin from '../components/DashboardAdmin';
import { nvAcces } from '../misc/enum';


const TableauBordGlobal = () => {
 
  const { user } = useSelector((state) => state.auth);
  const nvAccesUser=user.roles[0];

  return (
    <>
    {nvAccesUser===nvAcces.coordonnateur && <DashboardAdmin/>}
    {nvAccesUser===nvAcces.tuteur && "Dash Tuteur"}
    {nvAccesUser===nvAcces.entreprise && "Dash entreprise"}
    {nvAccesUser===nvAcces.stagiaire && "Dash stagiaire"}
    </>
  );
};

export default TableauBordGlobal;

const Wrapper = styled.div`
  
`;
