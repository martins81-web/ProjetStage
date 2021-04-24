import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';



const CardGroupe =({groupe})=>{

    const {title, subTitle, debut,fin,nbStagiaires,type} = groupe;

    return (
        <Wrapper>
            <Card >
                <Card.Body className='cardBody'>
                    <div className='bodyInfos'>
                        <Card.Title><h3><b>{title}</b></h3></Card.Title>
                        <Card.Subtitle className='subTitle'>{subTitle}</Card.Subtitle>
                        <div className='mt-4'>
                            <div><b>Début:</b> {debut}</div>
                            <div><b>Fin:</b> {fin}</div>
                            <div><b>Stagiaires:</b> {nbStagiaires}</div>
                            <div><b>Type:</b> {type}</div>
                        </div>
                    </div>
                <Button variant="danger" className='button'>Accéder</Button>
                </Card.Body>
            </Card>
        </Wrapper>
    );
}

export default CardGroupe;


const Wrapper = styled.div`
.cardBody{
    padding: 0px
}
.button {
    width: 100%;
    border-radius: 0px;

}


.bodyInfos{
    padding: 25px;

}

.subTitle{
    color: darkgray
}

`