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
      validator.isEmpty(values.blogTitle)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
    <Form onSubmit={submitFormData} className="createTempleForm formStyle">
      <div className="row g-5">
        <div className="col-lg-4 col-md-5">
          <div className="createBlogHdngDiv">
            <span className="blogFormCount">2/3</span>
            <div className="createBlogHdng">
              <span className="blogStepIcon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 9.75L12 15.75L22.5 9.75L12 3.75L1.5 9.75Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M1.5 13.5L12 19.5L22.5 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
              <div>
                <h5>Steps 02</h5>
                <h4>Features</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="createBlogFormBody">
            <div className="createBlogFormList">
            <Form.Group className="addListGroup mb-3">
              <div className="sectionLabel">
                <Form.Label>Facts & Figures</Form.Label>
              </div>
              <div className="addListInputRow">
                <div className="addListInput">
                  <i><img src="images/checkIcon1.png" /></i>
                  <Form.Control
                    style={{ border: error ? "2px solid #db4242" : "" }}
                    name="templeFact"
                    defaultValue={"Opened 6th November 2005"}
                    type="text"
                    placeholder=""
                  />
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
                <div className="addListInput">
                  <i><img src="images/checkIcon1.png" /></i>
                  <Form.Control
                    style={{ border: error ? "2px solid #db4242" : "" }}
                    name="templeFact"
                    defaultValue={"Constructed by Bochasanwasi Shri Akshar Purushottam Swaminarayan Sanstha (BAPS)"}
                    type="text"
                    placeholder=""
                  />
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
                <div className="addListInput">
                  <i><img src="images/checkIcon1.png" /></i>
                  <Form.Control
                    style={{ border: error ? "2px solid #db4242" : "" }}
                    name="templeFact"
                    defaultValue={"Inspired by HH Yogiji Maharaj (1892-1971 CE)"}
                    type="text"
                    placeholder=""
                  />
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
                <div className="addListInput">
                  <i><img src="images/checkIcon1.png" /></i>
                  <Form.Control
                    style={{ border: error ? "2px solid #db4242" : "" }}
                    name="templeFact"
                    defaultValue={"Created by His Holiness Pramukh Swami Maharaj"}
                    type="text"
                    placeholder=""
                  />
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
                <div className="addListInput">
                  <i><img src="images/checkIcon1.png" /></i>
                  <Form.Control
                    style={{ border: error ? "2px solid #db4242" : "" }}
                    name="templeFact"
                    defaultValue={values.templeFact}
                    type="text"
                    placeholder=""
                  />
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
              </div>
            </Form.Group>
            </div>
          </div>
          <div className="createBlogFormFtr">
            <Button onClick={prevStep} className="btn btnCommon btnDark btnRadiusNone">Go Back</Button>
            <Button type="submit" className="btn btnCommon btnRadiusNone">Continue</Button>
          </div>
        </div> 
      </div>
    </Form>
    </>
  );
};

export default StepTwo;