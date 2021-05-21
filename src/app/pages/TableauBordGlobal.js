import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import DashboardAdmin from '../components/DashboardAdmin';
import DasboardEntreprises from '../components/DashboardEntreprises';
import DashboardStagiaires from '../components/DashboardStagiaires';
import { nvAcces } from '../misc/enum';

const TableauBordGlobal = () => {
    const { user } = useSelector((state) => state.auth);
    const nvAccesUser = user.roles[0];

    return ( <>

        { nvAccesUser === nvAcces.coordonnateur && < DashboardAdmin /> } 
        { nvAccesUser === nvAcces.tuteur && 'dash tuteur' } 
        { nvAccesUser === nvAcces.entreprise && < DasboardEntreprises /> } 
        { nvAccesUser === nvAcces.stagiaire && < DashboardStagiaires /> } 
        </>
    );
};

export default TableauBordGlobal;

const Wrapper = styled.div ``;