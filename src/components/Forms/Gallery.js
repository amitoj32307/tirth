import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepFour = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of state and city is empty show error else take to step 3
    if (
      validator.isEmpty(values.templeTitle)
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
          <span className="formNumber">4</span>
          <h5>Temple Details</h5>
          <h4>Gallery</h4>
          <span className="formCount">4/8</span>
        </div>
        <div className="createTempleFormBody">
          <div className="createTempleFormList">
            <Form.Group className="mb-3">
              <div className="sectionLabel">
                <Form.Label>Cover Images</Form.Label>
              </div>
              <div class="upload-drag" id="uploadMainImage">
                <label class="upload-draglabel" for="pro-photo">
                  <svg class="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <h4><span>Upload a file</span> or drag and drop</h4>
                  <span>PNG, JPG, GIF up to 10MB</span>
                </label>
                <Form.Control
                  id="pro-photo"
                  className="pro-fileinput"
                  style={{ border: error ? "2px solid #db4242" : "" }}
                  name="templeCoverImages"
                  defaultValue={values.templeCoverImages}
                  type="file"
                  placeholder=""
                />
              </div>
              <div className="doubleBorder"></div>
              <div className="sectionLabel">
                <Form.Label>Pictures of the Temple</Form.Label>
              </div>
              <div class="upload-drag" id="uploadMainImage">
                <label class="upload-draglabel" for="pro-photo">
                  <svg class="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <h4><span>Upload a file</span> or drag and drop</h4>
                  <span>PNG, JPG, GIF up to 10MB</span>
                </label>
                <Form.Control
                  id="pro-photo"
                  className="pro-fileinput"
                  style={{ border: error ? "2px solid #db4242" : "" }}
                  name="templeImages"
                  defaultValue={values.templeImages}
                  type="file"
                  placeholder=""
                />
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="createTempleFormFtr">
          <Button onClick={prevStep} className="btn btnCommon btnDark btnRadiusNone">Go Back</Button>
          <Button type="submit" className="btn btnCommon btnRadiusNone">Continue</Button>
        </div>
      </Form>
    </>
  );
};

export default StepFour;