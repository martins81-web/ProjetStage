import React from 'react';
import { Modal } from 'react-bootstrap';

import { FormNewEditTask } from '../forms/FormNewEditTask';


export function NewTaskDialog({ onClose, task }) {
    console.log(task)
  return (
    <Modal
      size="lg"
      show={true}
      aria-labelledby="example-modal-sizes-title-lg"
      onHide={onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Creér nouvelle tâche</Modal.Title>
      </Modal.Header>
      <FormNewEditTask onClose={onClose} task={task}/>     
    </Modal>
  );
}
