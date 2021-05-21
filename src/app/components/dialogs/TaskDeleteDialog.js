import React, { useEffect, useMemo } from 'react';
import { Modal } from 'react-bootstrap';


export function TaskDeleteDialog({ id, onClose}) {


  // looking for loading/dispatch

  const deleteTask = () => {
    onClose();
  };

  return (
    <Modal
      show={true}
      aria-labelledby="example-modal-sizes-title-lg"
      onHide={onClose}

    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Supprimer tâche 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <span>Êtes-vous sûr de supprimer définitivement cette tâche</span>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-light btn-elevate"
          >
            Annuler
          </button>
          <> </>
          <button
            type="button"
            onClick={deleteTask}
            className="btn btn-primary btn-elevate"
          >
            Supprimer
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
