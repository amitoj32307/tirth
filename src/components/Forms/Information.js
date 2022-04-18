import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.templeTitle) ||
      validator.isEmpty(values.headPoojari) ||
      validator.isEmpty(values.trustName) ||
      validator.isEmpty(values.templeDescription)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <Form onSubmit={submitFormData} className="createTempleForm formStyle">
      <div className="createTempleFormHdr">
        <span className="formNumber">1</span>
        <h5>Temple Details</h5>
        <h4>Information</h4>
        <span className="formCount">1/8</span>
      </div>
      <div className="createTempleFormBody">
        <div className="createTempleFormList">
          <Form.Group className="mb-3">
            <Form.Label>Temple Title <span className="astrickSign">*</span></Form.Label>
            <Form.Control
              style={{ border: error ? "2px solid #db4242" : "" }}
              name="templeTitle"
              defaultValue={values.templeTitle}
              type="text"
              placeholder=""
              onChange={handleFormData("templeTitle")}
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
            <Form.Label>Head Poojari <span className="astrickSign">*</span></Form.Label>
            <Form.Control
              style={{ border: error ? "2px solid #db4242" : "" }}
              name="headPoojari"
              defaultValue={values.headPoojari}
              type="text"
              placeholder=""
              onChange={handleFormData("headPoojari")}
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
            <Form.Label>Trust Name <span className="astrickSign">*</span></Form.Label>
            <Form.Control
              style={{ border: error ? "2px solid #db4242" : "" }}
              name="trustName"
              defaultValue={values.trustName}
              type="text"
              placeholder=""
              onChange={handleFormData("trustName")}
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
            <Form.Label>Temple Description <span className="astrickSign">*</span></Form.Label>
            <Form.Control
              style={{ border: error ? "2px solid #db4242" : "" }}
              name="templeDescription"
              defaultValue={values.templeDescription}
              type="text"
              placeholder=""
              onChange={handleFormData("templeDescription")}
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
          <Form.Group className="">
            <Form.Label>Temple Social</Form.Label>
            <div className="scl-grp mb-2">
              <div class="scl-frm-icon">
                <span class="fb-bg">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
              </div>
              <Form.Control
                name="templeFacebook"
                defaultValue={values.templeFacebook}
                type="text"
                placeholder="https://www.facebook.com/tirthgaman"
              />
            </div>
            <div className="scl-grp mb-2">
              <div class="scl-frm-icon">
                <span class="twtr-bg">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              <Form.Control
                name="templeTwitter"
                defaultValue={values.templeTwitter}
                type="text"
                placeholder="https://www.twitter.com/tirthgaman"
              />
            </div>
            <div className="scl-grp mb-2">
              <div class="scl-frm-icon">
                <span class="lnkdn-bg">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
              </div>
              <Form.Control
                name="templeLinkedin"
                defaultValue={values.templeLinkedin}
                type="text"
                placeholder="https://www.linkedin.com/tirthgaman"
              />
            </div>
            <div className="scl-grp">
              <div class="scl-frm-icon">
                <span class="whtsap-bg">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </span>
              </div>
              <Form.Control
                name="templeWhatsapp"
                defaultValue={values.templeWhatsapp}
                type="text"
                placeholder="(123)-456-7890-8"
              />
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="createTempleFormFtr">
        <Button className="btn btnCommon btnDark btnRadiusNone">Go Back</Button>
        <Button type="submit" className="btn btnCommon btnRadiusNone">Continue</Button>
      </div>
    </Form>
  );
};

export default StepOne;