import { Box, Grid } from '@material-ui/core';
import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';
import { ButtonGroup, Dropdown, SplitButton } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../_metronic/_helpers';
import CardGroupe from '../components/cards/CardGroupe';

const groupe={
    title: 'GROUPE #1034',
    subTitle: "Genie mécanique NW.1045",
    debut: '15-06-2021',
    fin: '15-05-2021',
    nbStagiaires: '17',
    type: 'Alternance travail-études'
  }

const sessions=['Hiver 2021', 'Automne 2021', 'Été 2021', 'Hiver 2020', 'Automne 2020', 'Été 2020', 'Hiver 2019', 'Automne 2019'];

const TableauBordGlobal =()=>{
    const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false,
        height: 300,
        allowResizeX: false,
        allowResizeY: false
        // all options from https://xdsoft.net/jodit/doc/
	}

    const [buttonMessageValue, setButtonMessageValue] = useState('Envoyer à tous les stagiaires');

    return (
        <Wrapper>
            <Grid container>
                <Grid item xs={9} className='paddingSection'>
                    <Grid container>
                        <Grid item xs={12} className='marginSections'>
                            <Grid container  justify='space-between'>
                                <h1 className='text-muted'>Stages actifs</h1>
                                <ButtonNouveauStage className='buttonNouveauStage'>Créer un nouveau stage</ButtonNouveauStage>
                            </Grid>
                        </Grid>
                        <Grid item xs className='marginSections'>
                            <Grid container spacing={5}>
                                {[1,2,3,4,5,6].map( item=>
                                    <Grid item xs={12} sm={6} md={6} lg={4}>
                                        <CardGroupe groupe={groupe}/>
                                    </Grid>
                                )}
                                
                               
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className='marginSections'>
                            <Grid container>
                                <Grid item xs={12} >
                                    <h1 className='text-muted'>Annonce rapide</h1>
                                </Grid>
                                <Grid item xs={12} >
                                    <Box boxShadow={2}>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            onChange={newContent => {}}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className='buttonMessage' >
                                        <SplitButton
                                            as={ButtonGroup}
                                            id={`dropdown-button-drop`}
                                            size="md"
                                            variant="primary"
                                            title={buttonMessageValue}
                                            //onClick
                                        >
                                            <Dropdown.Item eventKey="1" onClick={()=>setButtonMessageValue('Envoyer à tous les stagiaires')}>Tous les stagiaires</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onClick={()=>setButtonMessageValue('Envoyer au groupe 3034')}>Groupe 3034</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onClick={()=>setButtonMessageValue('Envoyer au groupe 1017')}>Groupe 1017</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onClick={()=>setButtonMessageValue('Envoyer au groupe 1054')}>Groupe 1054</Dropdown.Item>
                                        </SplitButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} className='paddingSection bgArchives'>
                    <Grid container>
                        <Grid xs={12}>
                            <h1 className='text-muted'>Archives</h1>
                        </Grid>
                        <Grid xs={12}>
                            <Grid container spacing={10}>
                                <Grid item xs={12}>
                                    <Grid container justify='space-between'>
                                        <Grid item>
                                            <h5><b>Par session</b></h5>
                                        </Grid>
                                        <Grid item>
                                            <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-vertical.svg")} />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        {sessions.map(session=>
                                        <Grid item xs={6}>
                                            <span className="symbol circle symbol-25 symbol-light-success mr-2">
                                                <span className="symbol-label">
                                                    <span className="svg-icon svg-icon-sm svg-icon-success ">
                                                        <SVG  src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
                                                    </span>
                                                </span>
                                            </span>
                                            <a href='/' className='text-dark text-hover-primary '><b>{session}</b></a>
                                        </Grid>
                                        )}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justify='space-between'>
                                        <Grid item>
                                            <h5><b>Par programme</b></h5>
                                        </Grid>
                                        <Grid item>
                                            <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-vertical.svg")} />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <div className='d-flex'>
                                                <span className="symbol circle symbol-40 symbol-light-danger mr-5">
                                                    <span className="symbol-label">
                                                        <span className="svg-icon svg-icon-lg svg-icon-danger ">
                                                            <SVG  src={toAbsoluteUrl("/media/svg/icons/General/Attachment2.svg")} />
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className='d-flex flex-column flex-grow-1 font-weight-bold'> 
                                                    <a href='/' className='text-dark text-hover-primary mb-1 font-size-lg'>
                                                        Réseaux et cybersécurité
                                                    </a>
                                                    <span class="text-muted">Hiver 2021</span>
                                                </div>
                                            </div>
                                            
                                        </Grid>
                                        <Grid item xs={12}>
                                           
                                            <div className='d-flex'>
                                                <span className="symbol circle symbol-40 symbol-light-primary mr-5">
                                                    <span className="symbol-label">
                                                        <span className="svg-icon svg-icon-lg svg-icon-primary ">
                                                            <SVG  src={toAbsoluteUrl("/media/svg/icons/Communication/Group-chat.svg")} />
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className='d-flex flex-column flex-grow-1 font-weight-bold'> 
                                                    <a href='/' className='text-dark text-hover-primary mb-1 font-size-lg'>
                                                        Dévelopment web
                                                    </a>
                                                    <span class="text-muted">Éte 2021</span>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                           
                                            <div className='d-flex'>
                                                <span className="symbol circle symbol-40 symbol-light-success mr-5">
                                                    <span className="symbol-label">
                                                        <span className="svg-icon svg-icon-lg svg-icon-success ">
                                                            <SVG  src={toAbsoluteUrl("/media/svg/icons/Communication/Shield-user.svg")} />
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className='d-flex flex-column flex-grow-1 font-weight-bold'> 
                                                    <a href='/' className='text-dark text-hover-primary mb-1 font-size-lg'>
                                                        Design et intégration Web
                                                    </a>
                                                    <span class="text-muted">Automne 2020</span>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                           
                                            <div className='d-flex'>
                                                <span className="symbol circle symbol-40 symbol-light-warning mr-5">
                                                    <span className="symbol-label">
                                                        <span className="svg-icon svg-icon-lg svg-icon-warning ">
                                                            <SVG  src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
                                                        </span>
                                                    </span>
                                                </span>
                                                <div className='d-flex flex-column flex-grow-1 font-weight-bold'> 
                                                    <a href='/' className='text-dark text-hover-primary mb-1 font-size-lg'>
                                                        Techniques de génie industriel
                                                    </a>
                                                    <span class="text-muted">Automne 2020</span>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default  TableauBordGlobal;

const Wrapper = styled.div`
.paddingSection{
    padding: 40px;
}
.bgArchives{
    background-color: white;
}
.marginSections{
    margin-top: 50px
}
.buttonMessage{
    margin-top: 10px
}




`

const ButtonNouveauStage = styled.button`
    background-color: #eee5ff;
    color: #8951fc;
    font-size: 1em;
    font-weight: bold;
    padding: 0.25em 2em;
    border: none;
    border-radius: 5px;
    &:hover{
        color: #eee5ff;
        background-color: #8951fc;
    }
`;