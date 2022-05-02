import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Breadcrumb, Form, Table, Pagination } from "react-bootstrap";
import Header1  from "./Header1";
import Footer  from "./Footer";
import PoojariAccountHeader  from "./PoojariAccountHeader";
function PoojariDashboard() {
  return (
    <section>
      <Header1/>
      <PoojariAccountHeader/>
      <article className="accntContentBlock wrapper py-60">
        <div className="container">
          <div className="accPageHdrRow mb-4">
            <div className="row align-items-center justify-content-between">
              <div className="col-md">
                <div class="sdbrHdng m-0">
                  <h4>Overview</h4>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/poojari-dashboard">Dashbaord</Breadcrumb.Item>
                    <Breadcrumb.Item active>Overview</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>
          </div>
          <div className="accOverviewOuter">
            <div className="accOvrvwCountsRow">
              <div className="row g-4">
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg1">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/parsadIcon.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3>36</h3>
                      <h4>Prasad</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg2">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/donationIcon1.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3><sup><small>$</small></sup>26</h3>
                      <h4>Donations</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg3">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/ePoojaIcon.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3>24</h3>
                      <h4>e-Puja</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg4">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/eDarshanIcon.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3>36</h3>
                      <h4>e-Darshan</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg5">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/eAartiIcon.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3>16</h3>
                      <h4>e-Aarti</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg6">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/bookingIcon.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3>42</h3>
                      <h4>Bookings</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg7">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/festivalIcon.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3>32</h3>
                      <h4>Festival</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="accOvrvwCountsCol d-sm-flex align-items-center justify-content-between accOvrvwCountsBg8">
                    <div className="accOvrvwCountsImg m-0">
                      <span>
                        <img src="images/panchangIcon.png" />
                      </span>
                    </div>
                    <div className="accOvrvwCountsInfo">
                      <h3>24</h3>
                      <h4>Panchang</h4>
                    </div>
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
export default PoojariDashboard;