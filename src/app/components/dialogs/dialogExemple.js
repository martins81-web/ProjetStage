import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core/';
import React from 'react';


export const DialogExemple = ({onClose, data}) => {
    
  return (
    <>  
        {/* Dialog toujours ouvert, c'est son parent qui controle son affichage */}
        {/* La fermeture est envoyé en callBack(onClose) au parent */}
        <Dialog open={true} onClose={onClose}>
               <DialogTitle>Dialog Title</DialogTitle>
               <DialogContent>
                    {data}
                  <DialogActions>
                     <Button variant="contained" color="primary" onClick={onClose}>
                        Close
                     </Button>
                  </DialogActions>
               </DialogContent>
        </Dialog>
      
    </>
  );
};


