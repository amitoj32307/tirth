import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Final = ({ prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

  };
  
  //destructuring the object from values
  const { templeTitle, headPoojari, trustName, templeDescription, templePostalCode, templeStreet } = values;
  return (
    <>
      <Form onSubmit={submitFormData} className="createTempleForm formStyle">
        <div className="createTempleFormHdr">
          <span className="formNumber">🎉</span>
          <h5>Temple Details</h5>
          <h4>Congratulations</h4>
        </div>
        <div className="createTempleFormBody">
          <div className="createTempleFormList">
            <Form.Group className="mb-3">
              <Form.Label>Excellent, congratulations on completing the listing, it is waiting to be reviewed for publication</Form.Label>
            </Form.Group>
            <div className="sectionLabel">
              <Form.Label>This is your listing</Form.Label>
            </div>
            <div className="templePreviewCol">
              <div className="row g-4">
                <div className="col-md-8">
                    <div className="feaTempleItem listTempleItem">
                        <Link to="/temple-detail">
                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple3.jpg")`}}>
                            <   div className="feaTempleOverlay"></div>
                            </div>
                            <div className="feaTempleInfo">
                                <h4>{templeTitle}{" "}</h4>
                                <p><i><img src="images/locIcon.png" /></i> New Delhi</p>
                            </div>
                        </Link>
                    </div>
                </div>
              </div>
              <div className="templePreviewColBtns mt-4">
                <Link to="/create-temple" className="btn btnCommon btnDark btnRadiusNone">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Edit
                </Link>
                <Link to="/temple-detail" className="btn btnCommon btnRadiusNone">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> Preview
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="createTempleFormFtr">
          <Link to="/create-temple" className="btn btnCommon btnDark btnRadiusNone">Go Back</Link>
          <Button type="submit" className="btn btnCommon btnRadiusNone">Publish Listing</Button>
        </div>
      </Form>
    </>
  );
};

export default Final;