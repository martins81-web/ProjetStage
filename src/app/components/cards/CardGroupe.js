import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { DashboardGroup } from '../../pages/DashboardGroup';

const CardGroupe = (props) => {
  //   const { title, subTitle, debut, fin, nbStagiaires, type } = groupe;

  return (
    <Wrapper>
      <Card>
        <Card.Body className='cardBody'>
          <div className='bodyInfos'>
            <Card.Title>
              <h3>
                {/* {this.props.groupe.title} */}
                <b>GROUPE #{props.title}</b>
              </h3>
            </Card.Title>
            <Card.Subtitle className='subTitle'>{props.subTitle}</Card.Subtitle>
            <div className='mt-4'>
              <div>
                <b>Début:</b>
                {props.debut}
              </div>
              <div>
                <b>Fin:</b>
                {props.fin}
              </div>
              <div>
                <b>Stagiaires:</b>
                {props.nbStagiaires}
              </div>
              <div>
                <b>Type:</b>
                {props.type}
              </div>
            </div>
          </div>
          <Link to={'/tableau-de-bord-groupe/groupe/' + props.title}>
            <Button variant='danger' className='button' onClick={()=>localStorage.setItem('groupeNb', props.title)}  >
              Accéder
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default CardGroupe;

const Wrapper = styled.div`
  .cardBody {
    padding: 0px;
  }
  .button {
    width: 100%;
    border-radius: 0px;
  }

  .bodyInfos {
    padding: 25px;
  }

  .subTitle {
    color: darkgray;
  }
`;
