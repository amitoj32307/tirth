import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import $ from "jquery";
import validator from "validator";
window.jQuery = window.$ = $;
require("jquery-nice-select");

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const selectRef = useRef();
  useEffect(() => {
    $(selectRef.current).niceSelect();
  }, []);
  const selectRef1 = useRef();
  useEffect(() => {
    $(selectRef1.current).niceSelect();
  }, []);
  const selectRef2 = useRef();
  useEffect(() => {
    $(selectRef2.current).niceSelect();
  }, []);

   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (
      validator.isEmpty(values.templePostalCode) ||
      validator.isEmpty(values.templeStreet)
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
          <span className="formNumber">2</span>
          <h5>Temple Details</h5>
          <h4>Location</h4>
          <span className="formCount">2/8</span>
        </div>
        <div className="createTempleFormBody">
          <div className="createTempleFormList">
            <Form.Group className="mb-4">
              <Button variant="primary" className="btn btnCommon btnDark"><i className="d-inline-block pe-2"><img src="images/locIconWhite.png" /></i> Use Current Location</Button>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country/Region <span className="astrickSign">*</span></Form.Label>
              <select ref={selectRef} className="wide">
                <option value="0">Select Country/Region</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Form.Group>
            <div className="row">
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>State <span className="astrickSign">*</span></Form.Label>
                  <select ref={selectRef1} className="wide">
                    <option value="0">Select State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>City <span className="astrickSign">*</span></Form.Label>
                  <select ref={selectRef2} className="wide">
                    <option value="0">Select City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="mb-3">
                  <Form.Label>Postal Code <span className="astrickSign">*</span></Form.Label>
                  <Form.Control
                    style={{ border: error ? "2px solid #db4242" : "" }}
                    name="templePostalCode"
                    defaultValue={values.templePostalCode}
                    type="text"
                    placeholder=""
                    onChange={handleFormData("templePostalCode")}
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
            <Form.Group className="mb-3">
              <Form.Label>Street <span className="astrickSign">*</span></Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #db4242" : "" }}
                name="templeStreet"
                defaultValue={values.templeStreet}
                type="text"
                placeholder="..."
                onChange={handleFormData("templeStreet")}
              />
              {error ? (
                <Form.Text style={{ color: "#db4242" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="crtTmplAddress">
              <Form.Label>Detailed address</Form.Label>
              <p>1110 Pennsylvania Avenue NW, Washington, DC 20230</p>
              <div className="crtTmplMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50455.54904998494!2d-122.5016869793055!3d37.77898120783132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586c32feb43f3%3A0x4b47ec8fa06de88a!2sSan%20Francisco%2C%20CA%2094129%2C%20USA!5e0!3m2!1sen!2sin!4v1645523300485!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
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

export default StepTwo;