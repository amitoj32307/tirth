import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Button, Form, ProgressBar, Breadcrumb, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function BlogDetail() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section>
      <Header/>
      <article className="pageBannerBlock wrapper pt-80" style={{backgroundImage: `url("images/blogBig6.jpg")`}}>
        <div className="container">
          <div className="pageBannerText pt-80">
            <div className="pageBorderTop">
              <span></span>
            </div>
            <div className="pageTitle">
              <h2>Know the Basic Tenets With Traditional Definitions.</h2>
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/blog-list">All Posts</Breadcrumb.Item>
                    <Breadcrumb.Item active>Know the Basic Tenets With Traditional Definitions</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
            </div>
            <div className="pageBorderBottom">
              <span></span>
            </div>
          </div>
        </div>
      </article>
      <article className="blogDetailBlock lightGradientBg wrapper py-80">
        <div className="container">
            <div className="row g-5">
                <div className="col-sm-4 col-md-3 order2">
                  <div className="rightSidebar">
                    <div className="sdbrWdgt sdbrProWdt">
                      <div className="sdbrHdng">
                        <h4>About Author</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrProCol">
                        <div className="row g-3 d-sm-flex align-items-center">
                          <div className="col-auto">
                            <div className="sdbrProMedia">
                              <Link to="/poojari-detail">
                                <div className="sdbrProImg" style={{backgroundImage: `url("images/yeshwantPandit.jpg")`}}></div>
                              </Link>
                            </div>
                          </div>
                          <div className="col">
                            <div className="sdbrProInfo">
                              <h4><Link to="/poojari-detail">Yeshwant Parsad</Link></h4>
                              <h5>Temple Member</h5>
                              <p><i><img src="images/locIconWhite.png" /></i> 24 Fifth St., New York, US</p>
                            </div>
                          </div>
                        </div>
                        <div className="sdbrProContt">
                          <ul>
                            <li>
                              <Link to="tel:(123)-456-7890-8">
                                <i><img src="images/callIconWhite.png" /></i> (123)-456-7890-8
                              </Link>
                            </li>
                            <li>
                              <Link to="mailto:info@example.com">
                                <i><img src="images/mailIconWhite.png" /></i> info@example.com
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="sdbrProScl">
                          <Link to="https://www.facebook.com/" target="_blank">
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                          </Link>
                          <Link to="https://www.twitter.com/" target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </Link>
                          <Link to="https://www.youtube.com/" target="_blank">
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                          </Link>
                        </div>
                        <div className="sdbrProBtn mt-4">
                          <Link to="" className="btnCommon btnWhite btnRadiusNone w-100">Book Appointment</Link>
                      </div>
                      </div>
                    </div>
                    <div className="sdbrWdgt sdbrSearchWdt">
                      <div className="sdbrHdng">
                        <h4>Search</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrSearchCol">
                        <Form className="sdbrSearchForm">
                          <Form.Group className="sdrbrSrchInput" controlId="">
                            <input type="submit" class="search-submit" value="Search" />
                            <i>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </i>
                            <Form.Control type="text" placeholder="Search..." />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div className="sdbrWdgt sdbrCatWdt">
                      <div className="sdbrHdng">
                        <h4>Categories</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrCatCol">
                        <div className="catCloud">
                          <ul>
                            <li><Link to="/blog-detail">Mythology</Link></li>
                            <li><Link to="/blog-detail">Religion</Link></li>
                            <li><Link to="/blog-detail">Festivals</Link></li>
                            <li><Link to="/blog-detail">Temple</Link></li>
                            <li><Link to="/blog-detail">Yoga</Link></li>
                            <li><Link to="/blog-detail">Meditation</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="sdbrWdgt sdbrPoojariWdt">
                      <div className="sdbrHdng">
                        <h4>Most Popular</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrPoojariCol">
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/blog1.jpg")`}}></div>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">Understand Concepts with the Orthodox Interpretation</Link></h4>
                                <h5>
                                  <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                    <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                      </path>
                                    <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg> March 17, 2022
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/blog2.jpg")`}}></div>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">Dealing with Uncertainty and Distress of Daily Routine</Link></h4>
                                <h5>
                                  <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                    <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                      </path>
                                    <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg> March 17, 2022
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/blog7.jpg")`}}></div>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">Solitude of Mountains in the Middle East</Link></h4>
                                <h5>
                                  <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                    <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                      </path>
                                    <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg> March 17, 2022
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/blog4.jpg")`}}></div>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">The Wisdon of Buddha in a Few Words</Link></h4>
                                <h5>
                                  <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.2" d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" fill="currentColor"></path>
                                    <path d="M18.75 25.0012H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M18.75 31.2512H31.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.9375 7.8136H39.0625C39.4769 7.8136 39.8743 7.97822 40.1674 8.27124C40.4604 8.56427 40.625 8.9617 40.625 9.3761V39.0636C40.625 40.3068 40.1311 41.4991 39.2521 42.3782C38.373 43.2572 37.1807 43.7511 35.9375 43.7511H14.0625C12.8193 43.7511 11.627 43.2572 10.7479 42.3782C9.86886 41.4991 9.375 40.3068 9.375 39.0636V9.3761C9.375 8.9617 9.53962 8.56427 9.83265 8.27124C10.1257 7.97822 10.5231 7.8136 10.9375 7.8136Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                      </path>
                                    <path d="M15.625 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M25 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M34.375 4.68872V10.9387" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg> March 17, 2022
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sdbrWdgt sdbrCatWdt">
                      <div className="sdbrHdng">
                        <h4>Tags</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrTagsCol">
                        <div className="tagCloud">
                          <Link to="/blog-detail">Articles</Link>
                          <Link to="/blog-detail">Celebration</Link>
                          <Link to="/blog-detail">Event</Link>
                          <Link to="/blog-detail">Joy</Link>
                          <Link to="/blog-detail">Mantra</Link>
                          <Link to="/blog-detail">Meditation</Link>
                          <Link to="/blog-detail">Practice</Link>
                          <Link to="/blog-detail">Workshop</Link>
                          <Link to="/blog-detail">Yoga</Link>
                        </div>
                      </div>
                    </div>
                    <div className="sdbrWdgt sdbrFormWdt">
                      <div className="sdbrHdng sdbrHdngWhite">
                        <h4>Enquiry Now</h4>
                      </div>
                      <div className="sdbrWdgtContent commonForm sdbrFormCol">
                        <Form>
                          <Form.Group className="mb-4" controlId="formEnquiryName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="formEnquiryEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="formEnquiryPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="" />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="formEnquiryMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="formEnquiryCheckbox">
                            <Form.Check type="checkbox" label="By submitting this form I agree to Terms of Use" />
                          </Form.Group>
                          <div className="btnHoverWhite">
                            <Button className="btnCommon btnDark btnRadiusNone w-100" variant="primary" type="submit">Enquiry Now</Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                    <div className="blogMainContent">
                        <div className="blogDescptnDiv">
                          <div class="mainHeading">
                            <p><i class="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Post</p>
                            <h2>Know the Basic Tenets With Traditional Definitions.</h2>
                          </div>
                          <div className="blogListOptions">
                            <Link to="/blog-detail">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 16.5L12 21.75L21 16.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 12L12 17.25L21 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> Festivals, Religion
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
                              </svg> 8 comments
                            </Link>
                          </div>
                          <div className="blogDtlDes">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.</p>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem.</p>
                            <ul>
                              <li>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
                              <li>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</li>
                              <li>Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae.</li>
                              <li>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</li>
                            </ul>
                            <p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril deleni.</p>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                          </div>
                          <div className="blockquoteDiv">
                            <div className="blockquoteInfo">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i>By Akshardham<i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i></p>
                              <h2>Some Hindu teachers insist that believing in rebirth is necessary for living an ethical life. Their concern is that if there is no fear of karmic repercussions in future lifetimes</h2>
                            </div>
                          </div>
                          <div className="blogDtlDes">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.</p>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem.</p>
                            <ul>
                              <li>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
                              <li>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</li>
                              <li>Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae.</li>
                              <li>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</li>
                            </ul>
                            <p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril deleni.</p>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                          </div>
                        </div>
                        <div className="blogShareDiv">
                          <div className="row d-sm-flex align-items-center justify-space-between">
                            <div className="col-md">
                              <div className="blogShareTags tagCloud">
                                <span>Tags:</span>
                                <Link to="/blog-detail">Articles</Link>
                                <Link to="/blog-detail">Celebration</Link>
                                <Link to="/blog-detail">Event</Link>
                                <Link to="/blog-detail">Joy</Link>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="blogShareLinks">
                                <span>Share:</span>  
                                <Link to="https://www.facebook.com/" target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </Link>
                                <Link to="https://www.twitter.com/" target="_blank">
                                  <i className="fa fa-twitter" aria-hidden="true"></i>
                                </Link>
                                <Link to="https://www.youtube.com/" target="_blank">
                                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="blogDtlCmntDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Comments</p>
                              <h2>Leave a comment</h2>
                          </div>
                          <div className="cmntForm conttForm">
                            <Form className="formStyle">
                              <div class="row g-4">
                                <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Your Name*" />
                                </div>
                                <div class="col-6">
                                    <input type="email" class="form-control" placeholder="Your E-mail*" />
                                </div>
                                <div class="col-12">
                                    <textarea type="text" class="form-control" placeholder="Your comment*"></textarea>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="rememberCheck" />
                                        <label class="form-check-label" for="rememberCheck">By using this form you agree with the storage and handling of your data by this website. *</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btnCommon btnRadiusNone">
                                        Leave a Comment <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                              </div>
                            </Form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
      <Footer/>
    </section>
  );
}
export default BlogDetail;