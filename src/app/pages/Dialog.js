import { Button } from '@material-ui/core/';
import React, { useState } from 'react';

import { DialogExemple } from '../components/dialogs/dialogExemple';




export const DialogParent = () => {
  const [openDialog, setOpenDialog]= useState(false);
  const data='this is my data';

  const handleClose =()=>setOpenDialog(false);


  return (
    <>  
    <Button variant="contained" color='primary' onClick={setOpenDialog}>Open Dialog</Button>



    {/* L'ouverture et la fermeture du dialog sont controlés par le parent */}
    {/* Toujours mettre ce but de code à la fin apres tout le code markdown html */}
    {/* D'autres fonctions comme par ex. sauvegarder se fait toujours dans le parent */}
    { openDialog && <DialogExemple onClose={handleClose} data={data}/> }
    </>
  );
};
