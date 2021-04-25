import React from 'react';
import { Col, Row, Card, Button, Dropdown, Image } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
export const CommunauteDaide = ({ className }) => {
  return (
    <>
      <Col xs='12' className='px-0 py-5 d-flex justify-content-between'>
        <h1 className='text-muted'>Communaute d'aide</h1>
        <Button variant='light-info'>Voir tous les messages</Button>
      </Col>
      <Col xs='12' className='px-0'>
        <Card>
          {/* Derniere demande */}
          <Card.Title>
            <Card.Header className='d-flex justify-content-between border-bottom-0'>
              <div xs='10' className='d-flex'>
                <img alt='test' />
                <h3 className='card-title align-items-start flex-column'>
                  <span className='font-weight-bolder text-dark'>
                    Sophie Tremblay
                  </span>
                  <br />
                  <span className='text-muted mt-3 font-weight-bold font-size-sm'>
                    Hier a 18:09
                  </span>
                </h3>
              </div>
              <div xs='2' className=''>
                <p>Dropdown</p>
              </div>
            </Card.Header>
          </Card.Title>
          <Card.Body>
            {/* Reste a defenir ce qui doit etre la  */}
            <Card.Text>
              <TextField
                fullWidth
                multiline
                disableUnderline={true}
                inputProps={{ 'aria-label': 'naked' }}
                rows={4}
                placeholder='Repondre '
              />
              <Button variant='info' className='float-right'>
                Envoyer
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
