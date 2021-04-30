import { Grid } from '@material-ui/core';
import { Input } from '@material-ui/core/';
import React from 'react';
import { Button, Card, Col, Dropdown } from 'react-bootstrap';
import SVG from 'react-inlinesvg';

import { toAbsoluteUrl } from '../../../_metronic/_helpers';
import { DropdownCustomToggler } from '../../../_metronic/_partials/dropdowns';

export const CommunauteDaide = ({ className }) => {
  return (
    <>
      <Col xs='12' className='px-0 py-5 d-flex justify-content-between '>
        <Grid container justify='space-between'>
          <Grid item><h1 className='text-muted'>Communaute d'aide</h1></Grid>
          <Grid item><Button variant='light-info'>Voir tous les messages</Button></Grid>
        </Grid>
        
        
      </Col>
      <Col xs='12' className='px-0'>
        <Card>
          {/* Derniere demande */}
          <Card.Title>
            <Card.Header className='d-flex justify-content-between border-bottom-0'>
              <div xs='10' className='d-flex'>
                <div className='symbol symbol-40 symbol-light mr-5'>
                  <span className='symbol-label'>
                    <SVG
                      className='h-75 align-self-end'
                      src={toAbsoluteUrl('/media/svg/avatars/011-boy-5.svg')}
                    ></SVG>
                  </span>
                </div>
                <h3 className='card-title align-items-start flex-column'>
                  <span className='font-weight-bolder text-dark'>
                    Sophie Tremblay
                  </span>
                  <br className='border-light' />
                  <span className='text-muted mt-3 font-weight-bold font-size-sm'>
                    Hier a 18:09
                  </span>
                </h3>
              </div>
              <div xs='2' className=''>
                <Dropdown className='dropdown-inline' alignRight>
                  <Dropdown.Toggle
                    id='dropdown-toggle-top'
                    as={DropdownCustomToggler}
                  >
                    <i className='ki ki-bold-more-hor' />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='dropdown-menu dropdown-menu-sm dropdown-menu-right'></Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
          </Card.Title>
          <Card.Body>
            {/* Reste a defenir ce qui doit etre la  */}
            <hr />
              <Input
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
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
