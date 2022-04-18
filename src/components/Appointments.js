import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Breadcrumb, Form, Table, Dropdown, Pagination } from "react-bootstrap";
import $ from "jquery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header1  from "./Header1";
import Footer  from "./Footer";
import PoojariAccountHeader  from "./PoojariAccountHeader";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Appointments() {
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
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section>
      <Header1/>
      <article className="dashboardAccountBlock poojariDetailSlider wrapper">
        <div className="poojariMainSliderOuter">
          <div className="poojariMainSlider">
            <div className="poojariMainSldrSlide" style={{backgroundImage: `url("images/bg2.jpg")`}}></div>
          </div>
          <div className="poojariMainSldrBarDiv">
            <div className="poojariMainSldrTextDiv">
              <div className="container">
                <div className="d-md-flex align-items-center">
                  <div className="poojariSldrProImg">
                    <span style={{backgroundImage: `url("images/yeshwantPandit1.jpg")`}}></span>
                  </div>
                  <div className="poojariMainSldrText">
                    <h1>Yeshvant Parsad</h1>
                    <h5><i><img src="images/verifiedIcon.png" /></i> Verified</h5>
                    <p><i><img src="images/locIconWhite.png" /></i> 24 Fifth St., New York, US</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="poojariMainSliderOptions">
          <div className="container">
            <div className="poojariSldrOptionsCol">
              <div class="row align-items-center">
                <div class="col-md">
                  <div className="templeContt">
                    <Link to="tel:(123)-456-7890-8">
                      <i><img src="images/callIconWhite.png" /></i> (123)-456-7890-8
                    </Link>
                    <Link to="mailto:info@example.com">
                      <i><img src="images/mailIconWhite.png" /></i> info@example.com
                    </Link>
                  </div>
                </div>
                <div class="col-md">
                  <div className="templeShare">
                    <Link to="" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="" target="_blank">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="" target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link to="" target="_blank">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </Link>
                  </div>
                  <div className="templeEnquireBtn">
                      <Link to="" className="btnCommon btnRadiusNone">Book Appointment</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accMenuDiv">
          <div className="container">
            <div className="accMenuCol">
              <ul>
                <li>
                  <Link to="/poojari-dashboard">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3H3V10H10V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M21 3H14V10H21V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M21 14H14V21H21V14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M10 14H3V21H10V14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Overview</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                      <path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                      <path d="M7.9751 24.9218C8.72836 23.4408 9.87675 22.1971 11.2931 21.3284C12.7095 20.4598 14.3387 20 16.0002 20C17.6617 20 19.2909 20.4598 20.7073 21.3284C22.1237 22.1971 23.272 23.4407 24.0253 24.9217" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/add-blog">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                      <path d="M8.25 12H15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M12 8.25V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Add Blog</span>
                  </Link>
                </li>
                <li>
                  <Link to="/my-blog-list">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 9.75L12 15.75L22.5 9.75L12 3.75L1.5 9.75Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.5 13.5L12 19.5L22.5 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Blog List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/enquiries">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 14.25H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9 11.25H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.0002 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75H8.9998" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M8.25 6.75V6C8.25 5.00544 8.64509 4.05161 9.34835 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6517 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V6.75H8.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Enquiries</span>
                  </Link>
                </li>
                <li>
                  <Link to="/transactions">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18V6C21.75 5.58579 21.4142 5.25 21 5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.7495 15.75H18.7495" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M11.2495 15.75H12.7495" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M2.24951 9.08008H21.7495" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Transactions</span>
                  </Link>
                </li>
                <li className="active">
                  <Link to="/appointments">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                      <path d="M8.25 12H15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M12 8.25V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Appointments</span>
                  </Link>
                </li>
                <li>
                  <Link to="/account-settings">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M11.5193 4.13952L9.75029 2.81315C9.65538 2.74175 9.54485 2.69393 9.42783 2.67363C9.3108 2.65332 9.19063 2.66112 9.07721 2.69638C8.52933 2.86794 7.99778 3.08787 7.48884 3.35355C7.38349 3.40881 7.29279 3.48834 7.22422 3.58556C7.15566 3.68278 7.1112 3.79492 7.09452 3.91271L6.78179 6.10186C6.66259 6.20753 6.54589 6.31742 6.43169 6.43156C6.31752 6.54573 6.2076 6.66246 6.10191 6.78176L6.10186 6.78179L3.9131 7.09479C3.7955 7.11142 3.68353 7.15576 3.58642 7.22415C3.48932 7.29254 3.40986 7.38303 3.35459 7.48816C3.08849 7.99689 2.86814 8.52826 2.69613 9.076C2.66071 9.18957 2.65281 9.30994 2.67307 9.42717C2.69334 9.5444 2.7412 9.65513 2.81269 9.75022L4.13952 11.5193C4.12995 11.6783 4.12514 11.8385 4.12509 12C4.12509 12.1614 4.1299 12.3217 4.13953 12.4808L4.13952 12.4809L2.81315 14.2499C2.74175 14.3448 2.69393 14.4553 2.67363 14.5723C2.65332 14.6894 2.66112 14.8095 2.69638 14.923C2.86794 15.4708 3.08787 16.0024 3.35355 16.5113C3.40881 16.6167 3.48834 16.7074 3.58556 16.776C3.68278 16.8445 3.79492 16.889 3.91271 16.9057L6.10186 17.2184C6.20752 17.3376 6.31742 17.4543 6.43156 17.5685C6.54572 17.6827 6.66245 17.7926 6.78175 17.8983L6.78179 17.8983L7.09479 20.0871C7.11142 20.2047 7.15575 20.3167 7.22415 20.4138C7.29254 20.5109 7.38303 20.5903 7.48816 20.6456C7.99688 20.9117 8.52825 21.132 9.07599 21.304C9.18957 21.3395 9.30994 21.3474 9.42716 21.3271C9.54439 21.3068 9.65512 21.259 9.75021 21.1875L11.5193 19.8607C11.6783 19.8702 11.8385 19.875 12 19.8751C12.1614 19.8751 12.3217 19.8703 12.4808 19.8607L12.4809 19.8607L14.2499 21.187C14.3448 21.2584 14.4553 21.3063 14.5723 21.3266C14.6894 21.3469 14.8095 21.3391 14.923 21.3038C15.4708 21.1322 16.0024 20.9123 16.5113 20.6466C16.6167 20.5914 16.7074 20.5118 16.776 20.4146C16.8445 20.3174 16.889 20.2053 16.9057 20.0875L17.2184 17.8983C17.3376 17.7927 17.4543 17.6828 17.5685 17.5686C17.6827 17.4545 17.7926 17.3377 17.8983 17.2184L17.8983 17.2184L20.0871 16.9054C20.2047 16.8888 20.3167 16.8444 20.4138 16.776C20.5109 16.7076 20.5903 16.6172 20.6456 16.512C20.9117 16.0033 21.132 15.4719 21.304 14.9242C21.3395 14.8106 21.3474 14.6902 21.3271 14.573C21.3068 14.4558 21.259 14.3451 21.1875 14.25L19.8607 12.4809C19.8702 12.3219 19.875 12.1616 19.8751 12.0002C19.8751 11.8387 19.8703 11.6785 19.8607 11.5194L19.8607 11.5193L21.187 9.75029C21.2584 9.65538 21.3063 9.54485 21.3266 9.42783C21.3469 9.3108 21.3391 9.19063 21.3038 9.07721C21.1322 8.52933 20.9123 7.99778 20.6466 7.48884C20.5914 7.38349 20.5118 7.29279 20.4146 7.22422C20.3174 7.15566 20.2053 7.1112 20.0875 7.09452L17.8983 6.78179C17.7927 6.66259 17.6828 6.54589 17.5686 6.43169C17.4545 6.31752 17.3377 6.2076 17.2184 6.10191L17.2184 6.10186L16.9054 3.9131C16.8888 3.7955 16.8444 3.68353 16.776 3.58642C16.7076 3.48932 16.6172 3.40986 16.512 3.35459C16.0033 3.08849 15.4719 2.86814 14.9242 2.69613C14.8106 2.66071 14.6902 2.65281 14.573 2.67307C14.4558 2.69334 14.3451 2.7412 14.25 2.81269L12.4809 4.13952C12.3219 4.12995 12.1616 4.12514 12.0002 4.12509C11.8387 4.12509 11.6785 4.1299 11.5194 4.13953L11.5193 4.13952Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Account Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/close-account">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.25 5.25L3.75 5.25001" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.75 9.75V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M14.25 9.75V15.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Close Account</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <article className="accntContentBlock wrapper py-60">
        <div className="container">
          <div className="accPageHdrRow mb-4">
            <div className="row align-items-center justify-content-between">
              <div className="col-md">
                <div class="sdbrHdng m-0">
                  <h4>Appointments</h4>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/poojari-dashboard">Dashbaord</Breadcrumb.Item>
                    <Breadcrumb.Item active>Appointments</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>
          </div>
          <div className="searchAdvanceBlk inrPageSearchBlock accFltrsOuter p-4 mb-4">
            <Form className="advncSearchForm accFltrsForm">
              <div className="row align-items-center">
                  <div className="col-md-1">
                      <div className="form-group">
                      <label>Filters :</label>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="form-group">
                        <input type="text" class="form-control" placeholder="Name, Keyword..." />
                        <i>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M21.0004 21.0004L16.6504 16.6504" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </i>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="form-group">
                        <div className="dateCalender">
                          <DatePicker className="form-control" selected={startDate} onChange={(date:Date) => setStartDate(date)} placeholder="Enter Date" />
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
                  <div className="col-md-2">
                      <div className="form-group">
                        <select ref={selectRef1} className="wide">
                          <option value="0">Alphabetically</option>
                          <option value="india">A - Z</option>
                          <option value="italy">Z - A</option>
                        </select>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="form-group">
                        <select ref={selectRef2} className="wide">
                          <option value="All">All</option>
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                  </div>
                  <div className="col-md-2">
                      <button className="btn btnCommon btnDark w-100">Search</button>
                  </div>
              </div>		
            </Form>
          </div>
          <div className="accntTableCol">
            <div className="accntTableRow transctnTableRow common-table">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th className="smallTableColumn">#</th>
                    <th className="largeTableColumn">Date</th>
                    <th className="smallTableColumn">User Details</th>
                    <th className="largeTableColumn">Appointment Date</th>
                    <th className="mediumTableColumn">Status</th>
                    <th className="smallTableColumn">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td align="center">1</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 2nd, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit1.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 4th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--success">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </span> Accepted
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">2</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 4th, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit2.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 6th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--pending">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                            </svg>
                          </span> Pending
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">3</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 6th, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit4.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 8th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--failed">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                            </svg>
                          </span> Rejected
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">4</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 8th, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit3.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 10th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--pending">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                            </svg>
                          </span> Pending
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">5</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 2nd, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit1.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 4th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--success">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </span> Accepted
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">6</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 4th, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit2.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 6th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--pending">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                            </svg>
                          </span> Pending
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">7</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 6th, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit4.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 8th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--failed">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                            </svg>
                          </span> Rejected
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">8</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 8th, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit3.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 10th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--pending">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                            </svg>
                          </span> Pending
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">9</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 2nd, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit1.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 4th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--success">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </span> Accepted
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">10</td>
                    <td align="center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 4th, 2022
                    </td>
                    <td>
                      <div className="tblSrvcCol d-flex align-items-center">
                        <div className="tblSrvcImgDiv">
                          <div className="tblSrvcImg" style={{backgroundImage: `url("images/pandit2.jpg")`}}></div>
                        </div>
                        <div className="tblSrvcTtl">Mark<br/>
                          <small>
                            <Link to="mailto:>mark@example.com">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.1689 6.64844C14.9318 6.8536 15.6274 7.25561 16.186 7.8142C16.7445 8.37279 17.1466 9.06835 17.3517 9.83121" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> mark@example.com
                            </Link>
                          </small><br/>
                          <small className="usrCall">
                            <Link to="tel:(123)-456-7890-8">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.25L12 13.5L3 5.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.3638 12L3.23145 18.538" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.7692 18.5381L13.6367 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg> (123)-456-7890-8
                            </Link>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td align="center">
                      <span class="tblPrice">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-miterlimit="10"></path>
                        <path d="M12 6.75V12H17.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg> Wed, March 6th, 2022
                      </span>
                    </td>
                    <td>
                      <div class="tag-status tag-status--pending">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                            </svg>
                          </span> Pending
                      </div>
                    </td>
                    <td align="center">
                      <div className="tbl-actn">
                        <div className="optnDropdown statusOptnDropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="currentColor"></path>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="currentColor"></path>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1875 5.0625L7.3125 12.9372L3.375 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                </span>
                                <p>Accepted</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12.375 7.875C12.375 8.08211 12.2071 8.25 12 8.25C11.7929 8.25 11.625 8.08211 11.625 7.875C11.625 7.66789 11.7929 7.5 12 7.5C12.2071 7.5 12.375 7.66789 12.375 7.875Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"></path>
                                  </svg>
                                </span>
                                <p>Pending</p>
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <span>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9.75V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.702 3.74857L2.45423 17.9978C2.32226 18.2258 2.25266 18.4846 2.25244 18.748C2.25222 19.0115 2.32139 19.2703 2.45299 19.4986C2.58459 19.7268 2.77397 19.9163 3.00209 20.0481C3.2302 20.1799 3.489 20.2493 3.75245 20.2493H20.248C20.5114 20.2493 20.7702 20.1799 20.9984 20.0481C21.2265 19.9163 21.4159 19.7268 21.5474 19.4986C21.679 19.2703 21.7482 19.0115 21.748 18.748C21.7478 18.4846 21.6782 18.2258 21.5462 17.9978L13.2984 3.74857C13.1667 3.52093 12.9774 3.33193 12.7495 3.20055C12.5216 3.06916 12.2632 3 12.0002 3C11.7372 3 11.4788 3.06916 11.2509 3.20055C11.0231 3.33193 10.8338 3.52093 10.702 3.74857V3.74857Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 18C12.6213 18 13.125 17.4963 13.125 16.875C13.125 16.2537 12.6213 15.75 12 15.75C11.3787 15.75 10.875 16.2537 10.875 16.875C10.875 17.4963 11.3787 18 12 18Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <p>Rejected</p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="pgntnOuter text-center mt-4">
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item active>{11}</Pagination.Item>
                <Pagination.Item disabled>{13}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </div>
      </article>
      <Footer/>
    </section>
  );
}
export default Appointments;