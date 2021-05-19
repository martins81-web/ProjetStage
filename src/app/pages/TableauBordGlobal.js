import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import DashboardAdmin from '../components/DashboardAdmin';
import DashboardStagiaires from '../components/DashboardStagiaires';
import { nvAcces } from '../misc/enum';

const TableauBordGlobal = () => {
 
  const { user } = useSelector((state) => state.auth);
  const nvAccesUser=user.roles[0];

  return (
    <>
    {nvAccesUser===nvAcces.coordonnateur && <DashboardAdmin/>}
    {nvAccesUser===nvAcces.tuteur && "Dash tuteur"}
    {nvAccesUser===nvAcces.entreprise && "Dash entreprise"}
    {nvAccesUser===nvAcces.stagiaire && <DashboardStagiaires/>}
    </>
  );
};

export default TableauBordGlobal;

const Wrapper = styled.div`
  
`;
