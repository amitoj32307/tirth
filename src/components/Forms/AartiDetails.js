import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepFive = ({ nextStep, handleFormData, prevStep, values }) => {
  const [morningStartDate, setMorningStartDate] = useState(new Date());
  const [morningEndDate, setMorningEndDate] = useState(new Date());
  const [eveningStartDate, setEveningStartDate] = useState(new Date());
  const [eveningEndDate, setEveningEndDate] = useState(new Date());

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
          <span className="formNumber">5</span>
          <h5>Temple Details</h5>
          <h4>Aarti</h4>
          <span className="formCount">5/8</span>
        </div>
        <div className="createTempleFormBody">
          <div className="createTempleFormList">
            <div className="sectionLabel">
              <Form.Label>Aarti Timings</Form.Label>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Morning Timings <span className="astrickSign">*</span></Form.Label>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <div className="dateCalender">
                      <DatePicker className="form-control" selected={morningStartDate} onChange={(date:Date) => setMorningStartDate(date)} placeholder="From" />
                    </div>
                    <i>
                      <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                        <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </i>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <div className="dateCalender">
                      <DatePicker className="form-control" selected={morningEndDate} onChange={(date:Date) => setMorningEndDate(date)} placeholder="To" />
                    </div>
                    <i>
                      <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                        <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Evening Timings <span className="astrickSign">*</span></Form.Label>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <div className="dateCalender">
                      <DatePicker className="form-control" selected={eveningStartDate} onChange={(date:Date) => setEveningStartDate(date)} placeholder="From" />
                    </div>
                    <i>
                      <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                        <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </i>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <div className="dateCalender">
                      <DatePicker className="form-control" selected={eveningEndDate} onChange={(date:Date) => setEveningEndDate(date)} placeholder="To" />
                    </div>
                    <i>
                      <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                        <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </Form.Group>
            <div className="doubleBorder"></div>
            <div className="sectionLabel">
              <Form.Label>Aarti Images</Form.Label>
            </div>
            <Form.Group className="mb-3">
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
                  name="aartiImages"
                  defaultValue={values.aartiImages}
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

export default StepFive;