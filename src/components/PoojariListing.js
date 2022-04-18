import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
function PoojariListing() {

    const [isActive1, setActive1] = useState("false");
    const handleToggle1 = () => {
        setActive1(!isActive1);
    };

    const [isActive2, setActive2] = useState("false");
    const handleToggle2 = () => {
        setActive2(!isActive2);
    };

    const [isActive3, setActive3] = useState("false");
    const handleToggle3 = () => {
        setActive3(!isActive3);
    };

    const [isActive4, setActive4] = useState("false");
    const handleToggle4= () => {
        setActive4(!isActive4);
    };

    const [isActive5, setActive5] = useState("false");
    const handleToggle5 = () => {
        setActive5(!isActive5);
    };

    const [isActive6, setActive6] = useState("false");
    const handleToggle6 = () => {
        setActive6(!isActive6);
    };

    const [isActive7, setActive7] = useState("false");
    const handleToggle7 = () => {
        setActive7(!isActive7);
    };

    const [isActive8, setActive8] = useState("false");
    const handleToggle8= () => {
        setActive8(!isActive8);
    };

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
                              <p className="m-0"><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>120 Pandit Found<i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i></p>
                              <h2>Yeshvant Chopra</h2>
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
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive1 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle1}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit1.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Temple Member</h6>
                                                <h4>Yeshvant Chopra</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> Dwarka, Gujarat</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive2 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle2}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit3.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Temple Member</h6>
                                                <h4>Pandit</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> SVDK, JK</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive3 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle3}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit4.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Pandit</h6>
                                                <h4>Yesh Chopra</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> Dwarka, Gujarat</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive4 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle4}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit2.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Temple Member</h6>
                                                <h4>Rakesh K Panday</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> Dwarka, Gujarat</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive5 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle5}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit1.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Temple Member</h6>
                                                <h4>Yeshvant Chopra</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> Dwarka, Gujarat</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive6 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle6}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit3.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Temple Member</h6>
                                                <h4>Pandit</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> SVDK, JK</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive7 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle7}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit4.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Pandit</h6>
                                                <h4>Yesh Chopra</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> Dwarka, Gujarat</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feaTempleItem listPoojariItem">
                                        <div className="panditSocial panditSocialSimple">
                                            <ul className={isActive8 ? null : "visible"}>
                                                <li><Link to="" className="trigger-socials" onClick={handleToggle8}><i className="fa fa-plus"></i></Link></li>
                                                <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                                                <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <Link to="/poojari-detail">
                                            <div className="feaTempleImg" style={{backgroundImage: `url("images/pandit2.jpg")`}}>
                                                <div className="feaTempleOverlay"></div>
                                            </div>
                                            <div className="feaTempleInfo">
                                                <h6>Temple Member</h6>
                                                <h4>Rakesh K Panday</h4>
                                                <p><i><img src="images/locIconWhite.png" /></i> Dwarka, Gujarat</p>
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
export default PoojariListing;