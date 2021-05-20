import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core/';
import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';

export const DialogContactTuteurs = ({ onClose }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
    height: 300,
    allowResizeX: false,
    allowResizeY: false,
    // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <>
      {/* Dialog toujours ouvert, c'est son parent qui controle son affichage */}
      {/* La fermeture est envoyé en callBack(onClose) au parent */}
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Envoyer un message au tuteur de </DialogTitle>
        <DialogContent>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
          <DialogActions>
            <Button variant='contained' color='primary' onClick={onClose}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
