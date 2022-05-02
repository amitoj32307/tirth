import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepSeven = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of state and city is empty show error else take to step 3
    if (
      validator.isEmpty(values.templePoojaTitle1) ||
      validator.isEmpty(values.templePoojaDescription1) ||
      validator.isEmpty(values.templePoojaTitle2) ||
      validator.isEmpty(values.templePoojaDescription2) ||
      validator.isEmpty(values.templePoojaTitle3) ||
      validator.isEmpty(values.templePoojaDescription3)
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
          <span className="formNumber">7</span>
          <h5>Temple Details</h5>
          <h4>Special Poojas</h4>
          <span className="formCount">7/8</span>
        </div>
        <div className="createTempleFormBody">
          <div className="createTempleFormList">
            <div className="sectionLabel">
              <Form.Label>Pooja 1</Form.Label>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Title</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="templePoojaTitle1"
                defaultValue={values.templePoojaTitle1}
                type="text"
                placeholder=""
                onChange={handleFormData("templePoojaTitle1")}
              />
              {error ? (
                <Form.Text style={{ color: "#db4242" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Image</Form.Label>
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
                  name="templePoojaIcon1"
                  defaultValue={values.templePoojaIcon1}
                  type="file"
                  placeholder=""
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Description</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="templePoojaDescription1"
                defaultValue={values.templePoojaDescription1}
                type="text"
                placeholder=""
                as="textarea"
                onChange={handleFormData("templePoojaDescription1")}
              />
              {error ? (
                <Form.Text style={{ color: "#db4242" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div className="doubleBorder"></div>
            <div className="sectionLabel">
              <Form.Label>Pooja 2</Form.Label>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Title</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="templePoojaTitle2"
                defaultValue={values.templePoojaTitle2}
                type="text"
                placeholder=""
                onChange={handleFormData("templePoojaTitle2")}
              />
              {error ? (
                <Form.Text style={{ color: "#db4242" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Image</Form.Label>
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
                  name="templePoojaIcon2"
                  defaultValue={values.templePoojaIcon2}
                  type="file"
                  placeholder=""
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Description</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="templePoojaDescription2"
                defaultValue={values.templePoojaDescription2}
                type="text"
                placeholder=""
                as="textarea"
                onChange={handleFormData("templePoojaDescription2")}
              />
              {error ? (
                <Form.Text style={{ color: "#db4242" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div className="doubleBorder"></div>
            <div className="sectionLabel">
              <Form.Label>Pooja 3</Form.Label>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Title</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="templePoojaTitle3"
                defaultValue={values.templePoojaTitle3}
                type="text"
                placeholder=""
                onChange={handleFormData("templePoojaTitle3")}
              />
              {error ? (
                <Form.Text style={{ color: "#db4242" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pooja Image</Form.Label>
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
                  name="templePoojaIcon3"
                  defaultValue={values.templePoojaIcon3}
                  type="file"
                  placeholder=""
                />
              </div>
            </Form.Group>
            <Form.Group className="">
              <Form.Label>Pooja Description</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="templePoojaDescription3"
                defaultValue={values.templePoojaDescription3}
                type="text"
                placeholder=""
                as="textarea"
                onChange={handleFormData("templePoojaDescription3")}
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
          <Button onClick={prevStep} className="btn btnCommon btnDark btnRadiusNone">Go Back</Button>
          <Button type="submit" className="btn btnCommon btnRadiusNone">Continue</Button>
        </div>
      </Form>
    </>
  );
};

export default StepSeven;