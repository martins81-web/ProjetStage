import { TextField } from '@material-ui/core';
import React from 'react';
import { Modal } from 'react-bootstrap';


export const FormNewEditTask = ({task, onClose}) => {
    const [values, setValues] = React.useState(task);

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
    console.log(task)
  return (
    <>  
    
        <Modal.Body className="overlay overlay-block cursor-default">
            
            <TextField
                id="filled-name"
                label="Name"
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="filled"
            />
            
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-light btn-elevate"
          >
            Annuler
          </button>
          <button
            type="submit"
            //onClick={
            className="btn btn-primary btn-elevate"
          >
            Sauvegarder
          </button>
        </Modal.Footer>
    </>
  );
};
