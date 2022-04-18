import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepEight = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of state and city is empty show error else take to step 3
    if (
      validator.isEmpty(values.TempleAssociatedPoojari1)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <>
      <Form onSubmit={submitFormData} className="createTempleForm formStyle">
        <div className="createTempleFormHdr">
          <span className="formNumber">8</span>
          <h5>Temple Details</h5>
          <h4>Associated Poojari's</h4>
          <span className="formCount">8/8</span>
        </div>
        <div className="createTempleFormBody">
          <div className="createTempleFormList">
            <Form.Group className="mb-3">
              <Form.Label>Associated Poojari's</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="TempleAssociatedPoojari1"
                defaultValue={values.TempleAssociatedPoojari1}
                type="text"
                placeholder=""
                onChange={handleFormData("TempleAssociatedPoojari1")}
              />
              {error ? (
                <Form.Text style={{ color: "#db4242" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
          </div>
        </div>
        <div className="createTempleFormFtr">
          <Button onClick={prevStep} className="btn btnCommon btnDark btnRadiusNone">Previous</Button>
          <Button type="submit" className="btn btnCommon btnRadiusNone">Preview</Button>
        </div>
      </Form>
    </>
  );
};

export default StepEight;