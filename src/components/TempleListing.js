import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Button, Form, ProgressBar, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
function TempleListing() {
  const gridHandleClick = () => {
    const div = document.getElementById('listingCntntDiv');
    const div1 = document.getElementById('viewBtn');
    const div2 = document.getElementById('viewBtn1');
    div.classList.add("gridListingView");
    div.classList.remove("listListingView");
    div1.classList.add("active");
    div2.classList.remove("active");
  }
  const listHandleClick = () => {
    const div = document.getElementById('listingCntntDiv');
    const div1 = document.getElementById('viewBtn');
    const div2 = document.getElementById('viewBtn1');
    div.classList.add("listListingView");
    div.classList.remove("gridListingView");
    div1.classList.remove("active");
    div2.classList.add("active");
  }
  return (
    <section>
      <Header/>
      <article className="searchAdvanceBlk inrPageSearchBlock wrapper py-40">
        <div className="container">		
            <Form className="advncSearchForm">
                <div className="row d-flex align-items-center">
                    <div className="col-md-auto">
                        <div className="form-group">
                        <label>Search Temple/Poojari :</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search Temple or Poojari..." />
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="form-group">
                        <select className="form-select" aria-label="Default select example" name="type">
                            <option value="0" selected="">Choose Type</option>
                            <option value="1">Pandit/Poojari</option>
                            <option value="2">Temple</option>												
                        </select>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="form-group">
                        <select className="form-select" aria-label="Default select example" name="type">
                            <option value="0" selected="">Choose Temple/Poojari</option>
                            <option value="1">Temple</option>
                            <option value="2">Pandit/Poojari</option>														
                        </select>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="form-group">
                        <select className="form-select" aria-label="Default select example" name="type">
                            <option value="0" selected="">Choose State</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>															
                        </select>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btnCommon btnDark">Search</button>
                    </div>
                </div>		
            </Form>		
        </div>
      </article>
      <article className="templeListingBlock wrapper">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-sm-6 col-md-7">
                    <div className="listingMapCol">
                        <div className="listingMapDiv">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50455.54904998494!2d-122.5016869793055!3d37.77898120783132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586c32feb43f3%3A0x4b47ec8fa06de88a!2sSan%20Francisco%2C%20CA%2094129%2C%20USA!5e0!3m2!1sen!2sin!4v1645523300485!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5">
                    <div className="listingCntntCol">
                        <div className="listingCntntHdngDiv d-flex align-items-center justify-content-between">
                            <div className="mainHeading headingSmall m-0">
                              <p className="m-0"><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>420 Temple Found<i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i></p>
                              <h2>Shree Dwarkadhish</h2>
                            </div>
                            <div class="listSortBy d-flex align-items-center">
                                <div class="listType d-flex align-items-center">
                                    <a id="viewBtn" href="javascript:void(0);" onClick={gridHandleClick} className="active">
                                        <i class="fa fa-th-large" aria-hidden="true"></i>
                                    </a>
                                    <a id="viewBtn1" href="javascript:void(0);" onClick={listHandleClick}>
                                        <i class="fa fa-list-ul" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <select class="form-select listSortSelect" aria-label="Default select example">
                                    <option value="0">Select Here</option>
                                    <option value="1" selected="">Relevance</option>
                                    <option value="2">Newest</option>
                                    <option value="3">Oldest</option>
                                </select>
                            </div>
                        </div>
                        <div id="listingCntntDiv" className="listingCntntListRow">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple3.jpg")`}}>
                                            <   div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Kailasanathar</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Karuppadithattadai, Tamil Nadu</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple2.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Yamunotri</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Uttarakhand</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple1.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Shree Dwarkadhish</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Dwarka, Gujarat</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple4.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Lingaraja Temple</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Bhubaneswar, Odisha</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple3.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Kailasanathar</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Karuppadithattadai, Tamil Nadu</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple2.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Yamunotri</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Uttarakhand</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple1.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Shree Dwarkadhish</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Dwarka, Gujarat</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listTempleItem">
                                        <Link to="/temple-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/temple4.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h4>Lingaraja Temple</h4>
                                                <p><i><img src="images/locIcon.png" /></i> Bhubaneswar, Odisha</p>
                                            </div>
                                        </Link>
                                    </div>
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
export default TempleListing;