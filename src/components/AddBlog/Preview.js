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
  const { blogTitle, blogSubtitle, blogTag, blogDescription } = values;
  return (
    <>
      <Form onSubmit={submitFormData} className="createBlogForm formStyle">
        <div className="row g-5">
          <div className="col-lg-4 col-md-5">
            <div className="createBlogHdngDiv">
              <span className="blogFormCount">🎉</span>
              <div className="createBlogHdng">
                <span className="blogStepIcon">🎉</span>
                <div>
                  <h5>Steps 03</h5>
                  <h4>Congratulations</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="createBlogFormBody">
              <div className="createBlogFormList">
                <Form.Group className="mb-3">
                  <Form.Label>🎉 Excellent, congratulations on completing the listing, it is waiting to be reviewed for publication</Form.Label>
                </Form.Group>
                <div className="sectionLabel">
                  <Form.Label>This is your listing</Form.Label>
                </div>
                <div className="blogPreviewCol">
                  <div className="blogListRow blogPreviewListRow">
                    <div className="blogListCol">
                      <div className="blogListDes">
                        <h3><Link to="/blog-detail">Indian Mantras for Meditation</Link></h3>
                        <div className="blogListOptions">
                          <Link to="/blog-detail">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 16.5L12 21.75L21 16.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M3 12L12 17.25L21 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg> Temple, Religion
                          </Link>
                          <Link to="/blog-detail">
                            <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                              <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg> March 17, 2022
                          </Link>
                          <Link to="/blog-detail">
                            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.19421 12.4454C2.35557 11.0316 2.06187 9.36037 2.36826 7.74539C2.67466 6.13042 3.56006 4.68285 4.85823 3.6745C6.15639 2.66615 7.77801 2.16638 9.41858 2.26904C11.0592 2.3717 12.6058 3.06973 13.7681 4.23206C14.9305 5.39438 15.6285 6.94104 15.7312 8.58161C15.8339 10.2222 15.3341 11.8438 14.3257 13.142C13.3174 14.4401 11.8698 15.3256 10.2549 15.632C8.63989 15.9384 6.96862 15.6447 5.55486 14.806L5.55488 14.806L3.22356 15.4721C3.12711 15.4996 3.02504 15.5009 2.92793 15.4757C2.83082 15.4506 2.74221 15.3999 2.67128 15.3289C2.60034 15.258 2.54967 15.1694 2.52451 15.0723C2.49935 14.9752 2.50061 14.8731 2.52817 14.7767L3.19426 12.4453L3.19421 12.4454Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M9.19375 9C9.19375 9.10701 9.10701 9.19375 9 9.19375C8.89299 9.19375 8.80625 9.10701 8.80625 9C8.80625 8.89299 8.89299 8.80625 9 8.80625C9.10701 8.80625 9.19375 8.89299 9.19375 9Z" fill="currentColor" stroke="currentColor" stroke-width="1.3"></path>
                              <path d="M5.625 9.84375C6.09099 9.84375 6.46875 9.46599 6.46875 9C6.46875 8.53401 6.09099 8.15625 5.625 8.15625C5.15901 8.15625 4.78125 8.53401 4.78125 9C4.78125 9.46599 5.15901 9.84375 5.625 9.84375Z" fill="currentColor"></path>
                              <path d="M12.375 9.84375C12.841 9.84375 13.2188 9.46599 13.2188 9C13.2188 8.53401 12.841 8.15625 12.375 8.15625C11.909 8.15625 11.5312 8.53401 11.5312 9C11.5312 9.46599 11.909 9.84375 12.375 9.84375Z" fill="currentColor"></path>
                            </svg> 2 comments
                          </Link>
                        </div>
                        <div className="blogListInfo">
                          <p>'Akshardham' means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham at New Delhi is a Mandir – an abode of God, a Hindu house of worship, and a spiritual and cultural campus dedicated to devotion, learning and harmony.</p>
                        </div>
                        <div className="blogAuthor">
                          <i><img src="images/user2.png" /></i>
                          <span>By <font>Murli Parsad</font></span>
                        </div>
                      </div>
                      <div className="blogListImg" style={{backgroundImage: `url("images/blog3.jpg")`}}>
                        <Link to="/blog-detail">
                          <div className="blogListOverlay"></div>
                          <div className="blogListIcon">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path><path d="M8.25 12H15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12 8.25V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="blogPreviewColBtns mt-4">
                    <Link to="/add-blog" className="btn btnCommon btnDark btnRadiusNone">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Edit
                    </Link>
                    <Link to="/blog-detail" className="btn btnCommon btnRadiusNone">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="createBlogFormFtr">
              <Link to="/add-blog" className="btn btnCommon btnDark btnRadiusNone">Go Back</Link>
              <Button type="submit" className="btn btnCommon btnRadiusNone">Publish Listing</Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Final;