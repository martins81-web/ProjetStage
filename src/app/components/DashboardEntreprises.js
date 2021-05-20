import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../modules/Auth/__mocks__/userTableMock';
import { Button } from 'react-bootstrap';

import { ApercuStagiaires } from './ApercuStagiaires';
import { DialogContactTuteurs } from './dialogs/DialogContactTuteurs';
const DashboardEntreprises = () => {
  const [openDialogContactTuteurs, setOpenDialogContactTuteurs] = useState(
    false
  );
  const handleCloseDialogContactTuteurs = () =>
    setOpenDialogContactTuteurs(false);
  return (
    <Wrapper>
      {user
        .filter((stagiaire) => stagiaire.entreprise.includes('entrepriseXYZ'))
        .map((filteredStagiaires, i) => (
          <div className='d-flex bg-white'>
            <ApercuStagiaires
              key={i}
              firstname={filteredStagiaires.firstname}
              lastname={filteredStagiaires.lastname}
              entreprise={filteredStagiaires.entreprise}
            />
            {/* All on modal ? */}
            <Button>Taches du stagiaires</Button>
            <Button>Effectuer evaluations</Button>
            <Button onClick={setOpenDialogContactTuteurs}>
              Communiquer <br /> avec tuteur
            </Button>
            <Button>
              Consulter rapport
              <br /> stage de letudiant
            </Button>
          </div>
        ))}

      {/* Dialog Contact Tuteur */}
      {openDialogContactTuteurs && (
        <DialogContactTuteurs onClose={handleCloseDialogContactTuteurs} />
      )}
      {/* <ApercuStagiaires /> */}
      <ul>
        <li>
          <del>Profil du stagiaires</del>
        </li>
        <li>Taches du stagiaires</li>
        <li>Noter taches</li>
        <li>Commenter taches</li>
        <li>Communiquer avec tuteurs</li>
        <li>Effectuer evaluation</li>
        <li>Consulter rapport stage de letudiant</li>
      </ul>
    </Wrapper>
  );
};

export default DashboardEntreprises;

const Wrapper = styled.div`
  .btn {
    margin: 1vh;
  }
`;
