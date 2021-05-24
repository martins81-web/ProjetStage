import { Box, Grid } from '@material-ui/core';
import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';
import { ButtonGroup, Dropdown, SplitButton } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../_metronic/_helpers';
import CardGroupe from '../components/cards/CardGroupe';

const groupe = [
  {
    id: 1,
    title: '1038',
    subTitle: 'Genie mécanique NW.1045',
    debut: '15-06-2021',
    fin: '15-05-2021',
    nbStagiaires: '17',
    type: 'Alternance travail-études',
  },
  {
    id: 2,
    title: '1011',
    subTitle: 'Genie mécanique NW.1045',
    debut: '15-06-2021',
    fin: '15-05-2021',
    nbStagiaires: '17',
    type: 'Alternance travail-études',
  },
  {
    id: 3,
    title: '988',
    subTitle: 'Genie mécanique NW.1045',
    debut: '15-06-2021',
    fin: '15-05-2021',
    nbStagiaires: '17',
    type: 'Alternance travail-études',
  },
  {
    id: 4,
    title: '1144',
    subTitle: 'Genie mécanique NW.1045',
    debut: '15-06-2021',
    fin: '15-05-2021',
    nbStagiaires: '17',
    type: 'A distance',
  },
  {
    id: 5,
    title: '1609',
    subTitle: 'Genie mécanique NW.1045',
    debut: '15-06-2021',
    fin: '15-05-2021',
    nbStagiaires: '17',
    type: 'Temps partiel',
  },
  {
    id: 6,
    title: '1034',
    subTitle: 'Genie mécanique NW.1045',
    debut: '15-06-2021',
    fin: '15-05-2021',
    nbStagiaires: '17',
    type: 'Presentiel',
  },
];

const sessions = [
  'Hiver 2021',
  'Automne 2021',
  'Été 2021',
  'Hiver 2020',
  'Automne 2020',
  'Été 2020',
  'Hiver 2019',
  'Automne 2019',
];

const DashboardAdmin = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
    height: 300,
    allowResizeX: false,
    allowResizeY: false,
    // all options from https://xdsoft.net/jodit/doc/
  };

  const [buttonMessageValue, setButtonMessageValue] = useState(
    'Envoyer à tous les stagiaires'
  );

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={9} className='paddingSection'>
          <Grid container>
            <Grid item xs={12} className='marginSections'>
              <Grid container justify='space-between'>
                <h1 className='text-muted'>Stages actifs</h1>
                <ButtonNouveauStage className='buttonNouveauStage'>
                  Créer un nouveau stage
                </ButtonNouveauStage>
              </Grid>
            </Grid>
            <Grid item xs={12} className='marginSections'>
              <Grid container spacing={5}>
                {groupe.map((item, i) => (
                  <Grid key={item + i} item xs={12} sm={6} md={4} lg={4}>
                    <CardGroupe
                      key={i}
                      title={item.title}
                      subTitle={item.subTitle}
                      debut={item.debut}
                      fin={item.fin}
                      nbStagiaires={item.nbStagiaires}
                      type={item.type}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} className='marginSections'>
              <Grid container>
                <Grid item xs={12}>
                  <h1 className='text-muted'>Annonce rapide</h1>
                </Grid>
                <Grid item xs={12}>
                  <Box boxShadow={2}>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                      onChange={(newContent) => {}}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} className='buttonMessage'>
                  <SplitButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop`}
                    size='md'
                    variant='primary'
                    title={buttonMessageValue}
                    //onClick
                  >
                    <Dropdown.Item
                      eventKey='1'
                      onClick={() =>
                        setButtonMessageValue('Envoyer à tous les stagiaires')
                      }
                    >
                      Tous les stagiaires
                    </Dropdown.Item>
                    {groupe.map((groupe,i) => (
                      <Dropdown.Item key={groupe+i}>Groupe #{groupe.title}</Dropdown.Item>
                    ))}
                  </SplitButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={3}
          className='paddingArchives bgArchives'
        >
          <Grid container>
            <Grid item xs={12}>
              <h1 className='text-muted'>Archives</h1>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction='column'>
                <Grid item xs={12}>
                  <Grid container justify='space-between' className='mt-5'>
                    <h5>
                      <b>Par session</b>
                    </h5>
                    <SVG
                      src={toAbsoluteUrl(
                        '/media/svg/icons/Layout/Layout-vertical.svg'
                      )}
                    />
                  </Grid>
                  <Grid container>
                    {sessions.map((session) => (
                      <Grid key={session} item xs={6} className='mb-1'>
                        <span className='symbol circle symbol-25 symbol-light-success mr-2'>
                          <span className='symbol-label'>
                            <span className='svg-icon svg-icon-sm svg-icon-success '>
                              <SVG
                                src={toAbsoluteUrl(
                                  '/media/svg/icons/Home/Library.svg'
                                )}
                              />
                            </span>
                          </span>
                        </span>
                        <a href='/' className='text-dark text-hover-primary '>
                          <b>{session}</b>
                        </a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify='space-between' className='mt-10'>
                    <Grid item>
                      <h5>
                        <b>Par programme</b>
                      </h5>
                    </Grid>
                    <Grid item>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/Layout/Layout-vertical.svg'
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div className='d-flex'>
                        <span className='symbol circle symbol-40 symbol-light-danger mr-5'>
                          <span className='symbol-label'>
                            <span className='svg-icon svg-icon-lg svg-icon-danger '>
                              <SVG
                                src={toAbsoluteUrl(
                                  '/media/svg/icons/General/Attachment2.svg'
                                )}
                              />
                            </span>
                          </span>
                        </span>
                        <div className='d-flex flex-column flex-grow-1 font-weight-bold'>
                          <a
                            href='/'
                            className='text-dark text-hover-primary mb-1 font-size-lg'
                          >
                            Réseaux et cybersécurité
                          </a>
                          <span className='text-muted'>Hiver 2021</span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className='d-flex'>
                        <span className='symbol circle symbol-40 symbol-light-primary mr-5'>
                          <span className='symbol-label'>
                            <span className='svg-icon svg-icon-lg svg-icon-primary '>
                              <SVG
                                src={toAbsoluteUrl(
                                  '/media/svg/icons/Communication/Group-chat.svg'
                                )}
                              />
                            </span>
                          </span>
                        </span>
                        <div className='d-flex flex-column flex-grow-1 font-weight-bold'>
                          <a
                            href='/'
                            className='text-dark text-hover-primary mb-1 font-size-lg'
                          >
                            Dévelopment web
                          </a>
                          <span className='text-muted'>Éte 2021</span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className='d-flex'>
                        <span className='symbol circle symbol-40 symbol-light-success mr-5'>
                          <span className='symbol-label'>
                            <span className='svg-icon svg-icon-lg svg-icon-success '>
                              <SVG
                                src={toAbsoluteUrl(
                                  '/media/svg/icons/Communication/Shield-user.svg'
                                )}
                              />
                            </span>
                          </span>
                        </span>
                        <div className='d-flex flex-column flex-grow-1 font-weight-bold'>
                          <a
                            href='/'
                            className='text-dark text-hover-primary mb-1 font-size-lg'
                          >
                            Design et intégration Web
                          </a>
                          <span className='text-muted'>Automne 2020</span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className='d-flex'>
                        <span className='symbol circle symbol-40 symbol-light-warning mr-5'>
                          <span className='symbol-label'>
                            <span className='svg-icon svg-icon-lg svg-icon-warning '>
                              <SVG
                                src={toAbsoluteUrl(
                                  '/media/svg/icons/Design/Layers.svg'
                                )}
                              />
                            </span>
                          </span>
                        </span>
                        <div className='d-flex flex-column flex-grow-1 font-weight-bold'>
                          <a
                            href='/'
                            className='text-dark text-hover-primary mb-1 font-size-lg'
                          >
                            Techniques de génie industriel
                          </a>
                          <span className='text-muted'>Automne 2020</span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default DashboardAdmin;

const Wrapper = styled.div`
  .paddingSection {
    padding: 40px;
  }

  .paddingArchives {
    padding: 20px;
  }

  .bgArchives {
    background-color: white;
  }
  .marginSections {
    margin-top: 40px;
  }
  .buttonMessage {
    margin-top: 10px;
  }
`;

const ButtonNouveauStage = styled.button`
  background-color: #eee5ff;
  color: #8951fc;
  font-size: 1em;
  font-weight: bold;
  padding: 0.25em 2em;
  border: none;
  border-radius: 5px;
  &:hover {
    color: #eee5ff;
    background-color: #8951fc;
  }
`;
