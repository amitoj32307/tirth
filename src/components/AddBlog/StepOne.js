import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import $ from "jquery";
import validator from "validator";
window.jQuery = window.$ = $;
require("jquery-nice-select");

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
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

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.blogTitle) ||
      validator.isEmpty(values.blogSubtitle) ||
      validator.isEmpty(values.blogTag) ||
      validator.isEmpty(values.blogDescription)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <Form onSubmit={submitFormData} className="createBlogForm formStyle">
      <div className="row g-5">
        <div className="col-lg-4 col-md-5">
          <div className="createBlogHdngDiv">
            <span className="blogFormCount">1/3</span>
            <div className="createBlogHdng">
              <span className="blogStepIcon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 9.75L12 15.75L22.5 9.75L12 3.75L1.5 9.75Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M1.5 13.5L12 19.5L22.5 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
              <div>
                <h5>Steps 01</h5>
                <h4>Basic Info</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="createBlogFormBody">
            <div className="createBlogFormList">
              <Form.Group className="mb-3">
                <div className="sectionLabel">
                  <Form.Label>Basic Info</Form.Label>
                </div>
                <Form.Label>Blog Title <span className="astrickSign">*</span></Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid #db4242" : "" }}
                  name="blogTitle"
                  defaultValue={values.blogTitle}
                  type="text"
                  placeholder=""
                  onChange={handleFormData("blogTitle")}
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
                <Form.Label>Blog Subtitle <span className="astrickSign">*</span></Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid #db4242" : "" }}
                  name="blogSubtitle"
                  defaultValue={values.blogSubtitle}
                  type="text"
                  placeholder=""
                  onChange={handleFormData("blogSubtitle")}
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
                <Form.Label>Blog Category <span className="astrickSign">*</span></Form.Label>
                <select ref={selectRef} className="wide">
                  <option value="0">Select Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tags <span className="astrickSign">*</span></Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid #db4242" : "" }}
                  name="blogTag"
                  defaultValue={values.blogTag}
                  type="text"
                  placeholder=""
                  onChange={handleFormData("blogTag")}
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
                <Form.Label>Blog Description <span className="astrickSign">*</span></Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid #db4242" : "" }}
                  name="blogDescription"
                  defaultValue={values.blogDescription}
                  type="text"
                  placeholder=""
                  onChange={handleFormData("blogDescription")}
                  as="textarea"
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
          <div className="createBlogFormFtr">
            <Button className="btn btnCommon btnDark btnRadiusNone">Go Back</Button>
            <Button type="submit" className="btn btnCommon btnRadiusNone">Continue</Button>
          </div>
        </div> 
      </div>
    </Form>
  );
};

export default StepOne;