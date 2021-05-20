import React from 'react';
import { Modal } from 'react-bootstrap';

import { FormNewEditTask } from '../forms/FormNewEditTask';


export function TaskEditDialog({ task, onClose }) {
  console.log(task);
  return (
    <Modal
      size="lg"
      show={true}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Éditer la tâche {task.name}</Modal.Title>
      </Modal.Header>
      <FormNewEditTask task={task}/>     
    </Modal>
  );
}
