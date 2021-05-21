import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Modal } from 'react-bootstrap';

import { DatePickerField, Input, Select } from '../../../_metronic/_partials/controls';




export const FormNewEditTask = ({task, onClose}) => {
    
  return (
    <>  
    <Formik
        enableReinitialize={true}
        initialValues={task}
        onSubmit={(values) => {
          console.log('save:', values)
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              <Form className="form form-label-right">
                <div className="form-group row">
                  {/* name */}
                  <div className="col-lg-4">
                    <Field
                      name="name"
                      component={Input}
                      placeholder="Nom"
                      label="Nom"
                    />
                  </div>
                  {/* description */}
                  <div className="col-lg-4">
                    <Field
                      name="description"
                      component={Input}
                      placeholder="Description"
                      label="Description"
                    />
                  </div>
                  {/* Login */}
                  <div className="col-lg-4">
                    <Field
                      name="autoEval"
                      component={Input}
                      placeholder="Auto évaluation"
                      label="Auto évaluation"
                    />
                  </div>
                </div>
                {/* managerEval */}
                <div className="form-group row">
                  <div className="col-lg-4">
                    <Field
                      type="number"
                      name="managerEval"
                      component={Input}
                      placeholder="Évaluation Entreprise"
                      label="Évaluation Entreprise"
                    />
                  </div>
                  {/* tuteurEval */}
                  <div className="col-lg-4">
                    <Field
                      type="number"
                      name="tutorEval"
                      component={Input}
                      placeholder="Évaluation tuteur"
                      label="Évaluation tuteur"
                    />
                  </div>
                  {/* level */}
                  <div className="col-lg-4">
                    <Field
                      type="number"
                      name="level"
                      component={Input}
                      placeholder="Niveau"
                      label="Niveau"
                    />
                  </div>
                  
                </div>
                <div className="form-group row">
                  {/* Date de debut */}
                  <div className="col-lg-4">
                    <DatePickerField
                      name="startDate"
                      label="Date de début"
                    />
                  </div>
                  {/* Date de fin */}
                  <div className="col-lg-4">
                    <DatePickerField
                      name="endDate"
                      label="Date de fin"
                    />
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
};
