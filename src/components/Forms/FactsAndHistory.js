import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
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
          <span className="formNumber">3</span>
          <h5>Temple Details</h5>
          <h4>Facts & History</h4>
          <span className="formCount">3/8</span>
        </div>
        <div className="createTempleFormBody">
          <div className="createTempleFormList">
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
            <div className="doubleBorder"></div>
            <Form.Group className="addListGroup">
              <div className="sectionLabel">
                <Form.Label>Temple  History</Form.Label>
              </div>
              <div className="addListInputRow">
                <div className="addListInput">
                  <i><img src="images/dotIcon.png" /></i>
                  <div className="addHstryCombo">
                    <Form.Control
                      className="mb-2"
                      style={{ border: error ? "2px solid #db4242" : "" }}
                      name="templeHistoryYear"
                      defaultValue={"1897"}
                      type="text"
                      placeholder="Year"
                    />
                    <Form.Control
                      style={{ border: error ? "2px solid #db4242" : "" }}
                      name="templeHistoryDescription"
                      defaultValue={"Suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat."}
                      type="text"
                      placeholder="Description"
                      as="textarea"
                    />
                  </div>
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
                <div className="addListInput">
                  <i><img src="images/dotIcon.png" /></i>
                  <div className="addHstryCombo">
                    <Form.Control
                      className="mb-2"
                      style={{ border: error ? "2px solid #db4242" : "" }}
                      name="templeHistoryYear"
                      defaultValue={"1990"}
                      type="text"
                      placeholder="Year"
                    />
                    <Form.Control
                      style={{ border: error ? "2px solid #db4242" : "" }}
                      name="templeHistoryDescription"
                      defaultValue={"Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,"}
                      type="text"
                      placeholder="Description"
                      as="textarea"
                    />
                  </div>
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
                <div className="addListInput">
                  <i><img src="images/dotIcon.png" /></i>
                  <div className="addHstryCombo">
                    <Form.Control
                      className="mb-2"
                      style={{ border: error ? "2px solid #db4242" : "" }}
                      name="templeHistoryYear"
                      defaultValue={values.templeHistoryYear}
                      type="text"
                      placeholder="Year"
                    />
                    <Form.Control
                      style={{ border: error ? "2px solid #db4242" : "" }}
                      name="templeHistoryDescription"
                      defaultValue={values.templeHistoryDescription}
                      type="text"
                      placeholder="Description"
                      as="textarea"
                    />
                  </div>
                  <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
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

export default StepThree;