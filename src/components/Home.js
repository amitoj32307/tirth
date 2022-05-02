import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Modal, Offcanvas, Tabs, Tab } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  const [show, setShow] = useState(false);

  const menuClose = () => setShow(false);
  const menuShow = () => setShow(true);

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
  const handleToggle5= () => {
    setActive5(!isActive4);
  };

  return (
    <section>
      <Header/>
      <article className="sliderBg wrapper">
        <div className="sliderBlock">
          <div className="container-fluid">
            <div className="mainSlider-outer mainSlider crslCntrls">
              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1} loop={true}>
                <SwiperSlide>
                  <div className="mainSldrSlide" style={{backgroundImage: `url("images/banner1.jpg")`}}>
                    <div className="mainSldrOverlay"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mainSldrSlide" style={{backgroundImage: `url("images/banner2.jpg")`}}>
                    <div className="mainSldrOverlay"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mainSldrSlide" style={{backgroundImage: `url("images/banner3.jpg")`}}>
                    <div className="mainSldrOverlay"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mainSldrSlide" style={{backgroundImage: `url("images/banner4.jpg")`}}>
                    <div className="mainSldrOverlay"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="searchAdvanceBlk wrapper py-40">
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
                  <button className="btn btnCommon btnWhite">Search</button>
                </div>
              </div>		
            </Form>		
          </div>
        </div>
      </article>
      <article className="exploreCityBlock wrapper py-80">
        <div className="exploreCityContainer">
          <div className="container">
            <div className="mainHeading headingWhite headingCenter">
              <p><i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i>Temples<i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i></p>
              <h2>Explore by Cities</h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="citiesSldrOuter crslCntrls">
              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={1} slidesPerView={5} centeredSlides={true} loop={true}>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/uttarakhand.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Uttarakhand</h4>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/dehradun.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Dehradun</h4>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/delhi.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Delhi</h4>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/kolkata.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Kolkata</h4>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/ahmedabad.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Ahmedabad</h4>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </article>
      <article className="homeAboutBlock wrapper pt-80">
        <div className="aboutContainer">
          <div className="aboutMedia">
            <img src="images/shivImg.png" />
            <div className="exprncTemple" style={{backgroundImage: `url("images/experienceBg.png")`}}>
              <div>
                <span>25<small>+</small></span>
                <p>Join Temple</p>
              </div>
            </div>
            <div className="omgImage">
              <img src="images/omImg.jpg" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md"></div>
              <div className="col-md">
                <div className="aboutContent">
                  <div className="mainHeading">
                    <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Education For All Rubal Children</p>
                    <h2>We Are A Hindu That Believes In Rama.</h2>
                  </div>
                  <div className="aboutDes">
                    <p>We are a Hindu that belives in Lord Rama and Vishnu Deva the followers and We are a Hindu that belives in Lord Rama and Vishnu Deva.</p>
                  </div>
                  <div className="abtFeaCol my-5 pb-3">
                    <div className="row">
                      <div className="col-md">
                        <div className="abtFeaCol d-flex align-items-center">
                          <div className="abtFeaIcon">
                            <span>
                              <img src="images/templeIcon.png" />
                            </span>
                          </div>
                          <div className="abtFeaInfo">
                            <h4>Temples</h4>
                            <p>Donation is a good act amet quam vehicula elementum sed.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="abtFeaCol d-flex align-items-center">
                          <div className="abtFeaIcon">
                            <span>
                              <img src="images/donationIcon.png" />
                            </span>
                          </div>
                          <div className="abtFeaInfo">
                            <h4>Donation</h4>
                            <p>Donation is a good act amet quam vehicula elementum sed.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lrnMoreBtn">
                    <Link to="" className="btnCommon btnDark">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="abtBottomDiv pt-80">
            <div className="container-fluid">
              <div className="abtBottomRow">
                <div className="row">
                  <div className="col-md-8">
                    <div className="needHelp" style={{backgroundImage: `url("images/bg4.jpg")`}}>
                      <p>Need Help, Call Our HOTLINE!</p>
                      <h3><Link to="tel:+1 212-683-9756">+1 212-683-9756</Link></h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="infoList">
                      <ul>
                        <li><i><img src="images/tickLight.png" /></i> Peace of Mind</li>
                        <li><i><img src="images/tickLight.png" /></i> 100% Satisfaction</li>
                        <li><i><img src="images/tickLight.png" /></i> Set For Pastor</li>
                        <li><i><img src="images/tickLight.png" /></i> Trusted Company</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="feaPanditBlock wrapper py-80">
        <div className="feaPanditContainer">
          <div className="container">
            <div className="mainHeading headingCenter">
              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Pandit/Poojari<i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i></p>
              <h2>Featured Pandit/Poojari</h2>
            </div>
            <div className="feaPanditSldr crslCntrls">
              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={20} slidesPerView={4} centeredSlides={false} loop={false}>
                  <SwiperSlide>
                    <div className="panditItem">
                        <div className="panditImg">
                          <Link to="/poojari-detail">
                              <img src="images/pandit1.jpg" />
                          </Link>
                          <div className="panditSocial">
                            <ul className={isActive1 ? null : "visible"}>
                              <li><Link to="" className="trigger-socials" onClick={handleToggle1}><i className="fa fa-plus"></i></Link></li>
                              <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                              <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                              <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="panditInfo">
                            <p>Temple Member</p>
                            <h3><Link to="/poojari-detail">Yeshvant Chopra</Link></h3>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="panditItem">
                        <div className="panditImg">
                          <Link to="/poojari-detail">
                              <img src="images/pandit2.jpg" />
                          </Link>
                          <div className="panditSocial">
                            <ul className={isActive2 ? null : "visible"}>
                              <li><Link to="" className="trigger-socials" onClick={handleToggle2}><i className="fa fa-plus"></i></Link></li>
                              <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                              <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                              <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="panditInfo">
                            <p>Pandit</p>
                            <h3><Link to="/poojari-detail">Rakesh K Panday</Link></h3>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="panditItem">
                        <div className="panditImg">
                          <Link to="/poojari-detail">
                              <img src="images/pandit3.jpg" />
                          </Link>
                          <div className="panditSocial">
                            <ul className={isActive3 ? null : "visible"}>
                              <li><Link to="" className="trigger-socials" onClick={handleToggle3}><i className="fa fa-plus"></i></Link></li>
                              <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                              <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                              <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="panditInfo">
                            <p>Temple Member</p>
                            <h3><Link to="/poojari-detail">Murli Parsad</Link></h3>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="panditItem">
                        <div className="panditImg">
                          <Link to="/poojari-detail">
                              <img src="images/pandit4.jpg" />
                          </Link>
                          <div className="panditSocial">
                            <ul className={isActive4 ? null : "visible"}>
                              <li><Link to="" className="trigger-socials" onClick={handleToggle4}><i className="fa fa-plus"></i></Link></li>
                              <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                              <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                              <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="panditInfo">
                            <p>Pandit</p>
                            <h3><Link to="/poojari-detail">Yesh Chopra</Link></h3>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="panditItem">
                        <div className="panditImg">
                          <Link to="/poojari-detail">
                              <img src="images/pandit1.jpg" />
                          </Link>
                          <div className="panditSocial">
                            <ul className={isActive5 ? null : "visible"}>
                              <li><Link to="" className="trigger-socials" onClick={handleToggle5}><i className="fa fa-plus"></i></Link></li>
                              <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                              <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                              <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="panditInfo">
                            <p>Temple Member</p>
                            <h3><Link to="/poojari-detail">Yeshvant Chopra</Link></h3>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="panditItem">
                        <div className="panditImg">
                          <Link to="/poojari-detail">
                              <img src="images/pandit2.jpg" />
                          </Link>
                          <div className="panditSocial">
                            <ul className={isActive2 ? null : "visible"}>
                              <li><Link to="" className="trigger-socials" onClick={handleToggle2}><i className="fa fa-plus"></i></Link></li>
                              <li><Link to="https://www.facebook.com/"><i className="fa fa-facebook-f"></i></Link></li>
                              <li><Link to="https://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
                              <li><Link to="https://www.instagram.com/"><i className="fa fa-instagram"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="panditInfo">
                            <p>Pandit</p>
                            <h3><Link to="/poojari-detail">Rakesh K Panday</Link></h3>
                        </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </article>
      <article className="feaTempleBlock wrapper py-80">
        <div className="feaTempleRow">
          <div className="feaTempleMainDiv">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 col-md-2">
                  <div className="ltstPrprtyCntnt">
                    <div className="mainHeading headingWhite m-0">
                      <p className="colorPink"><i className="d-inline-block px-2"><img src="images/hdngLight.png" /></i>Temples</p>
                      <h2>Featured Temples</h2>
                    </div>
                  </div>
                </div>
                <div className="col-sm-9"></div>
              </div>
            </div>
          </div>
          <div className="feaTempleSldrOuter crslCntrls">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={3.5} centeredSlides={false} loop={true}>
              <SwiperSlide>
                <div className="feaTempleItem">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="feaTempleItem">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="feaTempleItem">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="feaTempleItem">
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
      <article className="spclPujaBlock wrapper pt-80">
        <div className="spclPujaContainer">
          <div className="container">
            <div className="mainHeading headingCenter">
              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Special Pooja<i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i></p>
              <h2>Our Special Puja</h2>
            </div>
          </div>
          <div className="spclPujaOuter">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-md">
                  <div className="spclPujaCol spclPujaBigCol">
                    <div className="spclPujaImg" style={{backgroundImage: `url("images/puja1.png")`}}>
                      <div className="spclPujaOverlay"></div>
                    </div>
                    <div className="spclPujaInfo">
                      <h3>Bhagavati Seva</h3>
                      <p>We are a Hindu that belives in Lord Rama and Vishnu Deva the followers and We are a Hindu that belives in Lord Rama and Visvhnu Deva.</p>
                      <Link to="/pooja-detail" className="btnCommon">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="spclPujaCol">
                    <div className="spclPujaImg" style={{backgroundImage: `url("images/puja2.png")`}}>
                      <div className="spclPujaOverlay"></div>
                    </div>
                    <div className="spclPujaInfo">
                      <h3>Santoshi Puja</h3>
                      <p>The size and artistic value of temples range widely.</p>
                      <Link to="/pooja-detail" className="btnCommon">Learn More</Link>
                    </div>
                  </div>
                  <div className="spclPujaCol">
                    <div className="spclPujaImg" style={{backgroundImage: `url("images/puja3.png")`}}>
                      <div className="spclPujaOverlay"></div>
                    </div>
                    <div className="spclPujaInfo">
                      <h3>Vishnu Puja</h3>
                      <p>According to the texts on dharma, the duty.</p>
                      <Link to="/pooja-detail" className="btnCommon">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="cltrlSgnfcncBlock wrapper py-80">
        <div className="cltrlSgnfcncContainer">
          <div className="container">
            <div className="mainHeading m-0">
              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Religious Temples</p>
              <h2>Cultural Significance</h2>
            </div>
            <div className="cltrlSgnfcncSldr crslCntrlsUpRight crslCntrls">
              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={10} slidesPerView={3} centeredSlides={false} loop={false}>
                  <SwiperSlide>
                    <div className="cltrlSgnfcncItem">
                      <Link to="/cultural-significance-detail">
                          <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/culturalSignificanceImg1.jpg")`}}>
                          </div>
                          <div className="cltrlSgnfcncInfo">
                              <h4>Jainism <i><img src="images/arrowNext.png" /></i></h4>
                          </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cltrlSgnfcncItem">
                      <Link to="/cultural-significance-detail">
                          <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/culturalSignificanceImg2.jpg")`}}>
                          </div>
                          <div className="cltrlSgnfcncInfo">
                              <h4>Buddhism <i><img src="images/arrowNext.png" /></i></h4>
                          </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cltrlSgnfcncItem">
                      <Link to="/cultural-significance-detail">
                          <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/culturalSignificanceImg3.jpg")`}}>
                          </div>
                          <div className="cltrlSgnfcncInfo">
                              <h4>Sikhism <i><img src="images/arrowNext.png" /></i></h4>
                          </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cltrlSgnfcncItem">
                      <Link to="/cultural-significance-detail">
                          <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/culturalSignificanceImg1.jpg")`}}>
                          </div>
                          <div className="cltrlSgnfcncInfo">
                              <h4>Jainism <i><img src="images/arrowNext.png" /></i></h4>
                          </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cltrlSgnfcncItem">
                      <Link to="/cultural-significance-detail">
                          <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/culturalSignificanceImg2.jpg")`}}>
                          </div>
                          <div className="cltrlSgnfcncInfo">
                              <h4>Buddhism <i><img src="images/arrowNext.png" /></i></h4>
                          </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="cltrlSgnfcncItem">
                      <Link to="/cultural-significance-detail">
                          <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/culturalSignificanceImg3.jpg")`}}>
                          </div>
                          <div className="cltrlSgnfcncInfo">
                              <h4>Sikhism <i><img src="images/arrowNext.png" /></i></h4>
                          </div>
                      </Link>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </article>
      <article className="homeWhyChooseBlock wrapper pt-80">
        <div className="whyChooseRow">
          <div className="container">
            <div className="mainHeading headingWhite headingCenter">
              <p><i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i>Holy Books<i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i></p>
              <h2>Our Holy-Books Vedas</h2>
            </div>
            <div className="whyChooseInfoDiv">
              <div className="row">
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/rig-veda.png" />
                    </span>
                    <h4>Rig-Veda</h4>
                    <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/yajur-veda.png" />
                    </span>
                    <h4>Yajur-Veda</h4>
                    <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/sama-veda.png" />
                    </span>
                    <h4>Sama-Veda</h4>
                    <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="whyChooseInfoCol">
                    <span>
                      <img src="images/athar-veda.png" />
                    </span>
                    <h4>Athar-Veda</h4>
                    <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="portfolioBlock wrapper py-80">
        <div className="portfolioContainer">
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <div className="mainHeading">
                  <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Portfolio</p>
                  <h2>Pooja</h2>
                </div>
              </div>
              <div className="col"></div>
            </div>
            <div className="portfolioTabsOuter">
              <div className="defaultTabsRow">
                  <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="defaultTabs">
                      <Tab eventKey="all" title="All">
                          <div className="portfolioCatItems">
                              <div className="row filterMain g-4">
                                  <div className="col-md-4">
                                      <div className="portfolioItem">
                                          <Link to="">
                                              <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg1.jpg")`}}>
                                              </div>
                                              <div className="portfolioInfo">
                                                  <h4>Deepavali Diwali <i><img src="images/arrowNext.png" /></i></h4>
                                              </div>
                                          </Link>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="portfolioItem">
                                          <Link to="">
                                              <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg2.jpg")`}}>
                                              </div>
                                              <div className="portfolioInfo">
                                                  <h4>Janmashtmi <i><img src="images/arrowNext.png" /></i></h4>
                                              </div>
                                          </Link>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="portfolioItem">
                                          <Link to="">
                                              <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg3.jpg")`}}>
                                              </div>
                                              <div className="portfolioInfo">
                                                  <h4>Navarathri Celebrations <i><img src="images/arrowNext.png" /></i></h4>
                                              </div>
                                          </Link>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="portfolioItem">
                                          <Link to="">
                                              <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg4.jpg")`}}>
                                              </div>
                                              <div className="portfolioInfo">
                                                  <h4>Vinayaka Chathurthy <i><img src="images/arrowNext.png" /></i></h4>
                                              </div>
                                          </Link>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="portfolioItem">
                                          <Link to="">
                                              <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg5.jpg")`}}>
                                              </div>
                                              <div className="portfolioInfo">
                                                  <h4>Durga Mahastami <i><img src="images/arrowNext.png" /></i></h4>
                                              </div>
                                          </Link>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="portfolioItem">
                                          <Link to="">
                                              <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg6.jpg")`}}>
                                              </div>
                                              <div className="portfolioInfo">
                                                  <h4>Holi-Colour Festival <i><img src="images/arrowNext.png" /></i></h4>
                                              </div>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </Tab>
                      <Tab eventKey="durga-pooja" title="Durga Puja">
                        <div className="portfolioCatItems">
                          <div className="row filterMain g-4">
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg6.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Holi-Colour Festival <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg5.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Durga Mahastami <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg4.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Vinayaka Chathurthy <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="raksha-bandhan" title="Raksha Bandhan">
                        <div className="portfolioCatItems">
                          <div className="row filterMain g-4">
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg3.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Navarathri Celebrations <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg4.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Vinayaka Chathurthy <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg6.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Holi-Colour Festival <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="holi" title="Holi">
                        <div className="portfolioCatItems">
                          <div className="row filterMain g-4">
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg2.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Janmashtmi <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg5.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Durga Mahastami <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg6.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Holi-Colour Festival <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </Tab>
                      <Tab eventKey="diwali" title="Diwali">
                        <div className="portfolioCatItems">
                          <div className="row filterMain g-4">
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg4.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Vinayaka Chathurthy <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg6.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Holi-Colour Festival <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="portfolioItem">
                                      <Link to="">
                                          <div className="portfolioImg" style={{backgroundImage: `url("images/portfolioImg5.jpg")`}}>
                                          </div>
                                          <div className="portfolioInfo">
                                              <h4>Durga Mahastami <i><img src="images/arrowNext.png" /></i></h4>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </Tab>
                  </Tabs>				    
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="downloadAppBlock wrapper pt-80">
        <div className="downloadAppContainer">
          <div className="container">
            <div className="downloadAppRow">
              <div className="row">
                <div className="col-md">
                  <div className="mainHeading headingWhite">
                    <p className="colorPink"><i className="d-inline-block px-2"><img src="images/hdngLight.png" /></i>Ways We Can Help</p>
                    <h2>Download The App<br/>To Get Famous Temple<br/>& Popular Priests</h2>
                  </div>
                  <div className="appFeaColRow">
                    <div className="row">
                      <div className="col-sm-auto">
                        <div className="appFeaCol d-sm-flex align-items-center">
                          <div className="appFeaIcon">
                            <i><img src="images/appFeau1.png" /></i>
                          </div>
                          <div className="appFeaDes">
                            <h4>Cyber Secured</h4>
                            <p>No more Loop Holes </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div className="appFeaCol d-sm-flex align-items-center">
                          <div className="appFeaIcon">
                            <i><img src="images/appFeau2.png" /></i>
                          </div>
                          <div className="appFeaDes">
                            <h4>Easy Searching Process</h4>
                            <p>Search New Temples</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div className="appFeaCol d-sm-flex align-items-center">
                          <div className="appFeaIcon">
                            <i><img src="images/appFeau3.png" /></i>
                          </div>
                          <div className="appFeaDes">
                            <h4>Better Notifications</h4>
                            <p>Get to be Notified First</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-auto">
                  <div className="appScreen">
                    <img src="images/appSplashScreen.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="reviewsBlock reviewsHomeBlock wrapper">
        <div className="container">
          <div className="rvwsHdrDiv">
            <div className="row">
              <div className="col-sm">
                <div className="mainHeading">
                  <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Testimonials</p>
                  <h2>Our Priest &<br/>Worshiper Beliefs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviewSliderOuter">
          <div className="reviewSlider crslCntrls">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={3.8} centeredSlides={true} loop={true}>
              <SwiperSlide>
                <div className="reviewSlide">
                  <div className="reviewContent">
                    <p>If money help a man to do well to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.</p>
                  </div>
                  <div className="reviewTitle">
                    <h4>Karan Panday</h4>
                    <p>Pandit</p>
                  </div>
                  <div className="reviewAuthor">
                    <span>
                      <img src="images/user1.png" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviewSlide">
                  <div className="reviewContent">
                    <p>If money help a man to do well to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.</p>
                  </div>
                  <div className="reviewTitle">
                    <h4>Karan Panday</h4>
                    <p>Pandit</p>
                  </div>
                  <div className="reviewAuthor">
                    <span>
                      <img src="images/user2.png" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviewSlide">
                  <div className="reviewContent">
                    <p>If money help a man to do well to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better.</p>
                  </div>
                  <div className="reviewTitle">
                    <h4>Karan Panday</h4>
                    <p>Pandit</p>
                  </div>
                  <div className="reviewAuthor">
                    <span>
                      <img src="images/user3.png" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
      <article className="newsBlock wrapper py-80">
        <div className="container">
          <div className="mainHeading text-center">
            <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Blog<i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i></p>
            <h2>News Feed</h2>
          </div>
          <div className="newsSliderOuter">
            <div className="newsSlider crslCntrls">
              <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={30} slidesPerView={4} centeredSlides={false} loop={false}>
                <SwiperSlide>
                  <div className="newsSlideItem">
                    <Link to="">
                      <div className="newsSlideMedia">
                        <div className="newsImg" style={{backgroundImage: `url("images/newsImg1.png")`}}>
                          <div className="newsOverlay"></div>
                        </div>
                        <span className="newsDate">Jan 19, 2022</span>
                        <div className="newsCategory">
                          <h5>Mythology, Religion, Temple</h5>
                        </div>
                      </div>
                      <div className="newsTitle">
                        <h4>Mahashivratri Temple</h4>
                      </div>
                      <div className="newsAuthor">
                        <i><img src="images/user2.png" /></i>
                        <span>By <font>Murli Parsad</font></span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="newsSlideItem">
                    <Link to="">
                      <div className="newsSlideMedia">
                        <div className="newsImg" style={{backgroundImage: `url("images/newsImg2.png")`}}>
                          <div className="newsOverlay"></div>
                        </div>
                        <span className="newsDate">Jan 19, 2022</span>
                        <div className="newsCategory">
                          <h5>Festivals, Mythology</h5>
                        </div>
                      </div>
                      <div className="newsTitle">
                        <h4>Varanasi At Night</h4>
                      </div>
                      <div className="newsAuthor">
                        <i><img src="images/user3.png" /></i>
                        <span>By <font>Dharmendra Ram</font></span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="newsSlideItem">
                    <Link to="">
                      <div className="newsSlideMedia">
                        <div className="newsImg" style={{backgroundImage: `url("images/newsImg3.png")`}}>
                          <div className="newsOverlay"></div>
                        </div>
                        <span className="newsDate">Jan 19, 2022</span>
                        <div className="newsCategory">
                          <h5>Mythology, Religion, Temple</h5>
                        </div>
                      </div>
                      <div className="newsTitle">
                        <h4>OM Mahashivratri</h4>
                      </div>
                      <div className="newsAuthor">
                        <i><img src="images/user2.png" /></i>
                        <span>By <font>Murli Parsad</font></span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="newsSlideItem">
                    <Link to="">
                      <div className="newsSlideMedia">
                        <div className="newsImg" style={{backgroundImage: `url("images/newsImg1.png")`}}>
                          <div className="newsOverlay"></div>
                        </div>
                        <span className="newsDate">Jan 19, 2022</span>
                        <div className="newsCategory">
                          <h5>Festivals, Mythology</h5>
                        </div>
                      </div>
                      <div className="newsTitle">
                        <h4>Varanasi At Night</h4>
                      </div>
                      <div className="newsAuthor">
                        <i><img src="images/user3.png" /></i>
                        <span>By <font>Dharmendra Ram</font></span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="newsSlideItem">
                    <Link to="">
                      <div className="newsSlideMedia">
                        <div className="newsImg" style={{backgroundImage: `url("images/newsImg1.png")`}}>
                          <div className="newsOverlay"></div>
                        </div>
                        <span className="newsDate">Jan 19, 2022</span>
                        <div className="newsCategory">
                          <h5>Mythology, Religion, Temple</h5>
                        </div>
                      </div>
                      <div className="newsTitle">
                        <h4>Mahashivratri Temple</h4>
                      </div>
                      <div className="newsAuthor">
                        <i><img src="images/user2.png" /></i>
                        <span>By <font>Murli Parsad</font></span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="newsSlideItem">
                    <Link to="">
                      <div className="newsSlideMedia">
                        <div className="newsImg" style={{backgroundImage: `url("images/newsImg2.png")`}}>
                          <div className="newsOverlay"></div>
                        </div>
                        <span className="newsDate">Jan 19, 2022</span>
                        <div className="newsCategory">
                          <h5>Festivals, Mythology</h5>
                        </div>
                      </div>
                      <div className="newsTitle">
                        <h4>Varanasi At Night</h4>
                      </div>
                      <div className="newsAuthor">
                        <i><img src="images/user3.png" /></i>
                        <span>By <font>Dharmendra Ram</font></span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </article>
      <article className="nwsltrBlock wrapper">
        <div className="container">
          <div className="nwsltrRow">
            <span className="orText">or</span>
            <div className="row h-100">
              <div className="col">
                <div className="nwsltrCol">
                  <div className="nwsltrHeading">
                    <p>Ways We Can Help</p>
                    <h3>Learn To Be Sustainably Happy!</h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="nwsltrCol">
                  <div className="nwsltrForm">
                    <form>
                      <div className="form-group">
                        <input className="form-control" type="email" id="" name="" placeholder="Enter email address..." />
                        <button className="btn sbscrbBtn" type="Submit">
                          <img src="images/subscribeIcon.png" />
                        </button>
                        <p><i><img src="images/lockIcon.png" /></i> Your are 100% protected with us</p>
                      </div>
                    </form>
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
export default Home;