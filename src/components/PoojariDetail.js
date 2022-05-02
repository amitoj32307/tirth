import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Button, Form, ProgressBar, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function PoojariDetail() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section>
      <Header/>
      <article className="poojariDetailSlider wrapper">
        <div className="poojariMainSliderOuter">
            <div className="poojariMainSlider crslCntrls crslCntrlsWhite">
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1} loop={true}>
                    <SwiperSlide>
                        <div className="poojariMainSldrSlide" style={{backgroundImage: `url("images/poojariBanner1.jpg")`}}>
                            <div className="poojariMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="poojariMainSldrSlide" style={{backgroundImage: `url("images/poojariBanner2.jpg")`}}>
                            <div className="poojariMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="poojariMainSldrSlide" style={{backgroundImage: `url("images/poojariBanner3.jpg")`}}>
                            <div className="poojariMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="poojariMainSldrSlide" style={{backgroundImage: `url("images/poojariBanner4.jpg")`}}>
                            <div className="poojariMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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
                    <Link to="" className="btnCommon btnWhite btnRadiusNone">Book Appointment</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="poojariDetailBlock wrapper py-80">
        <div className="container">
            <div className="row g-5">
                <div className="col-sm-4 col-md-3 order2">
                  <div className="rightSidebar">
                    <div className="sdbrWdgt sdbrProWdt">
                      <div className="sdbrHdng">
                        <h4>Contact Poojari</h4>
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
                    <div className="sdbrWdgt sdbrBlockquoteWdt">
                      <div className="blockquoteDiv">
                        <div className="blockquoteInfo">
                          <p><i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i>By Akshardham<i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i></p>
                          <h3>Some Hindu teachers insist that believing in rebirth is necessary for living an ethical life.</h3>
                        </div>
                      </div>
                    </div>
                    <div className="sdbrWdgt sdbrPoojariWdt">
                      <div className="sdbrHdng">
                        <h4>Similar Poojari</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrPoojariCol">
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/pandit1.jpg")`}}></div>
                                </Link>
                                <Link to="" className="plusIcon">
                                  <i className="fa fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">Yeshvant Chopra</Link></h4>
                                <h5>Temple Member</h5>
                                <p><i><img src="images/locIconRed.png" /></i> Dwarka, Gujarat</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/pandit2.jpg")`}}></div>
                                </Link>
                                <Link to="" className="plusIcon">
                                  <i className="fa fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">Rakesh K</Link></h4>
                                <h5>Pandit</h5>
                                <p><i><img src="images/locIconRed.png" /></i> Odisa</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/pandit3.jpg")`}}></div>
                                </Link>
                                <Link to="" className="plusIcon">
                                  <i className="fa fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">Murli Parsad</Link></h4>
                                <h5>Temple Member</h5>
                                <p><i><img src="images/locIconRed.png" /></i> Uttrakhand</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sdbrPoojariItem">
                          <div className="row g-3 d-flex align-items-center">
                            <div className="col-auto">
                              <div className="sdbrPoojariMedia">
                                <Link to="">
                                  <div className="sdbrPoojariImg" style={{backgroundImage: `url("images/pandit4.jpg")`}}></div>
                                </Link>
                                <Link to="" className="plusIcon">
                                  <i className="fa fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="col">
                              <div className="sdbrPoojariDes">
                                <h4><Link to="">Yesh Chopra</Link></h4>
                                <h5>Pandit</h5>
                                <p><i><img src="images/locIconRed.png" /></i> Dehradun</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sdbrWdgt sdbrEvntWdt">
                      <div className="sdbrHdng">
                        <h4>Upcoming Events</h4>
                      </div>
                      <div className="sdbrWdgtContent upcmngEvntContent">
                        <div className="upcmngEvntRow">
                          <div className="upcmngEvntColDiv">
                            <div className="upcmngEvntCol d-flex align-items-center">
                              <div className="upcmngEvntDate">
                                <span>03</span>
                                <p>Dec’21</p>
                              </div>
                              <div className="upcmngEvntInfo">
                                <h4>People ask questions related to Hinduism</h4>
                                <h5><i className="d-inline-block pe-1"><img src="images/clockIcon.png" /></i> Friday | 02:00pm</h5>
                              </div>
                            </div>
                          </div>
                          <div className="upcmngEvntColDiv">
                            <div className="upcmngEvntCol d-flex align-items-center">
                              <div className="upcmngEvntDate">
                                <span>20</span>
                                <p>Jan’22</p>
                              </div>
                              <div className="upcmngEvntInfo">
                                <h4>Temple is a place where Hindu worship</h4>
                                <h5><i className="d-inline-block pe-1"><img src="images/clockIcon.png" /></i> Thursday | 10:00am</h5>
                              </div>
                            </div>
                          </div>
                          <div className="upcmngEvntColDiv">
                            <div className="upcmngEvntCol d-flex align-items-center">
                              <div className="upcmngEvntDate">
                                <span>04</span>
                                <p>Feb’22</p>
                              </div>
                              <div className="upcmngEvntInfo">
                                <h4>Should I Believe in Rebirth?</h4>
                                <h5><i className="d-inline-block pe-1"><img src="images/clockIcon.png" /></i> Friday | 07:00am</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                    <div className="poojariMainContent">
                        <div className="dtlAboutDiv">
                          <div className="mainHeading">
                            <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Pandit</p>
                            <h2>About Yeshvant Parsad</h2>
                          </div>
                          <div className="dtlAboutDes">
                            <p>Our mission is to share the Good of Hinduism, Loving, Faith and Serving. People ask questions related to Hinduism. Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Some Hindu teachers insist that believing in rebirth is necessary for living an ethical life. Their concern is that if there is no fear of karmic repercussions in future lifetimes</p>
                            <p>Temple is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortor industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type, People ask questions related to Hinduism.</p>
                          </div>
                        </div>
                        <div className="dtlHighlightsDiv">
                          <div className="mainHeading">
                            <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Pandit Highlights</p>
                            <h2>Highlights</h2>
                          </div>
                          <div className="row">
                            <div className="col-md-8">
                              <div className="dtlHighlightsCol">
                                <ul>
                                    <li><i><img src="images/checkIcon1.png" /></i> Opened 6th November 2005</li>
                                    <li><i><img src="images/checkIcon1.png" /></i> Inspired by HH Yogiji Maharaj (1892-1971 CE)</li>
                                    <li><i><img src="images/checkIcon1.png" /></i> Created by His Holiness Pramukh Swami Maharaj</li>
                                    <li><i><img src="images/checkIcon1.png" /></i> More than 300,000,000 volunteer hours went into making the complex</li>
                                    <li><i><img src="images/checkIcon1.png" /></i> Over 8,000 volunteers from across the world participated in building it</li>
                                    <li><i><img src="images/checkIcon1.png" /></i> Mandir built from intricately carved sandstone and marble</li>
                                    <li><i><img src="images/checkIcon1.png" /></i> Open gardens, water bodies and step-well styled courtyard</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="dtlsafetyCol">
                                <div className="dtlsafetyInfo">
                                  <span><img src="images/donationIconWhite.png" /></span>
                                  <h3>Trust & Safety</h3>
                                  <p>Vestibulum ac diam sit amet quam vehicula elementum</p>
                                </div>
                                <div className="dtlsafetyList">
                                  <ul>
                                      <li><i><img src="images/tickLight.png" /></i> Kandariya Mahadev Temple</li>
                                      <li><i><img src="images/tickLight.png" /></i> Amarnath Cave Temple</li>
                                      <li><i><img src="images/tickLight.png" /></i> Kashi Vishwanath Temple</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlHistoryDiv">
                          <div className="mainHeading">
                            <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Experties</p>
                            <h2>Poojari Expertise</h2>
                          </div>
                          <div className="dtlHistoryCntntDiv dtlHistoryCntntLeftDiv">
                            <div className="row align-items-center">
                              <div className="col-md-6 pe-0">
                                <div className="historyCntnt">
                                  <div className="mainHeading headingSmall headingWhite mb-3">
                                    <h2>2004</h2>
                                  </div>
                                  <div className="historySldr crslCntrls crslCntrlsWhite">
                                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1} loop={true}>
                                      <SwiperSlide>
                                          <div className="historySldrCol">
                                              <h4>Our Mission</h4>
                                              <p>Suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.</p>
                                              <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                                          </div>
                                      </SwiperSlide>
                                    </Swiper>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="historyImgDiv">
                                  <div className="historyImg">
                                    <img src="images/bellImg.png" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlAartiDiv">
                          <div className="row g-5 align-items-center">
                            <div className="col-md-5">
                              <div className="skillsPrgrssRow">
                                <div className="skillsPrgrssCol">
                                  <div className="skillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Charity</h5> <span>84%</span></div>
                                  <ProgressBar now={84} />
                                </div>
                                <div className="skillsPrgrssCol">
                                  <div className="skillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Helped</h5> <span>70%</span></div>
                                  <ProgressBar now={70} />
                                </div>
                                <div className="skillsPrgrssCol">
                                  <div className="skillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Donation</h5> <span>85%</span></div>
                                  <ProgressBar now={85} />
                                </div>
                                <div className="skillsPrgrssCol">
                                  <div className="skillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Food</h5> <span>92%</span></div>
                                  <ProgressBar now={92} />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="dtlHistoryInfo">
                                <div className="row g-5 align-items-center justify-space-between">
                                  <div className="col-sm">
                                    <div className="mainHeading">
                                      <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Aarti</p>
                                      <h2>Poojari Skills</h2>
                                    </div>
                                    <div className="aartiListInfo mt-5">
                                      <ul>
                                        <li>
                                          <i><img src="images/tickDark.png" /></i> We never believe in reborn
                                        </li>
                                        <li>
                                          <i><img src="images/tickDark.png" /></i> We never believe in reborn
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-sm-auto">
                                    <img src="images/pattimg1.png" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlLiveBroadcastDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Temples</p>
                              <h2>Temple Associated</h2>
                          </div>
                          <div className="dtlLiveBroadcastRow">
                            <div className="row">
                              <div className="col-sm">
                                <div className="liveBroadcastCol">
                                  <div className="liveBroadcastImg" style={{backgroundImage: `url("images/broadcastImg1.jpg")`}}>
                                  </div>
                                  <div className="liveBroadcastInfo">
                                    <h4>Kailasanathar Temple</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm">
                                <div className="liveBroadcastCol">
                                  <div className="liveBroadcastImg" style={{backgroundImage: `url("images/broadcastImg2.jpg")`}}>
                                  </div>
                                  <div className="liveBroadcastInfo">
                                    <h4>Lingaraja Temple</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm">
                                <div className="liveBroadcastCol">
                                  <div className="liveBroadcastImg" style={{backgroundImage: `url("images/broadcastImg3.jpg")`}}>
                                  </div>
                                  <div className="liveBroadcastInfo">
                                    <h4>Mahashivratri Temple</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlPujaDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Temple Pooja</p>
                              <h2>Special Pooja</h2>
                          </div>
                          <div className="dtlPujaRow">
                            <div className="row g-4">
                              <div className="col-md">
                                <div className="spclPoojaItem">
                                  <Link to="">
                                      <div className="spclPoojaImg" style={{backgroundImage: `url("images/santoshiPuja.jpg")`}}>
                                        <div className="spclPoojaOverlay"></div>
                                      </div>
                                      <div className="spclPoojaInfo">
                                        <h4>Santoshi Puja</h4>
                                      </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-md">
                                <div className="spclPoojaItem">
                                  <Link to="">
                                      <div className="spclPoojaImg" style={{backgroundImage: `url("images/vishnuPuja.jpg")`}}>
                                        <div className="spclPoojaOverlay"></div>
                                      </div>
                                      <div className="spclPoojaInfo">
                                        <h4>Durga Puja</h4>
                                      </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-md">
                                <div className="spclPoojaItem">
                                  <Link to="">
                                      <div className="spclPoojaImg" style={{backgroundImage: `url("images/kaliPuja.jpg")`}}>
                                        <div className="spclPoojaOverlay"></div>
                                      </div>
                                      <div className="spclPoojaInfo">
                                        <h4>Kali Puja</h4>
                                      </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlWhyChoose whyChooseInfoDiv whyChooseColorful">
                          <div className="row g-0">
                              <div className="col-md-4">
                                  <div className="whyChooseInfoCol">
                                      <span>
                                      <img src="images/rig-veda.png" />
                                      </span>
                                      <h4>Hindu Temple</h4>
                                      <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="whyChooseInfoCol">
                                      <span>
                                      <img src="images/yajur-veda-white.png" />
                                      </span>
                                      <h4>Priest & Gods</h4>
                                      <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="whyChooseInfoCol">
                                      <span>
                                      <img src="images/sama-veda.png" />
                                      </span>
                                      <h4>Puja</h4>
                                      <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className="dtlLocationMapDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Poojari Location</p>
                              <h2>Should I Believe in Rebirth?</h2>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <div className="aartiListInfo aartiRedListInfo">
                                <ul>
                                  <li>
                                    <i><img src="images/tickRed.png" /></i> People ask questions related to Hinduism
                                  </li>
                                  <li>
                                    <i><img src="images/tickRed.png" /></i> We never believe in reborn
                                  </li>
                                  <li>
                                    <i><img src="images/tickRed.png" /></i> People ask questions related to Hinduism
                                  </li>
                                  <li>
                                    <i><img src="images/tickRed.png" /></i> We never believe in reborn
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="dtlLocationMap dtlLocationSmallMap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50455.54904998494!2d-122.5016869793055!3d37.77898120783132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586c32feb43f3%3A0x4b47ec8fa06de88a!2sSan%20Francisco%2C%20CA%2094129%2C%20USA!5e0!3m2!1sen!2sin!4v1645523300485!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlGalleryDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Gallery Images/videos</p>
                              <h2>Our Gallery</h2>
                          </div>
                          <div className="dtlGalleryRow">
                            <div className="row g-2">
                              <div className="col-md-6">
                                <div className="dtlGalColItem dtlGalColBigItem">
                                  <Link to="">
                                    <div className="dtlGalColImg" style={{backgroundImage: `url("images/galImg1.jpg")`}}>
                                      <div className="dtlGalColOverlay"></div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="row g-2">
                                  <div className="col-md-6">
                                    <div className="dtlGalColItem">
                                      <Link to="">
                                        <div className="dtlGalColImg" style={{backgroundImage: `url("images/galImg2.jpg")`}}>
                                          <div className="dtlGalColOverlay"></div>
                                        </div>
                                        <div className="dtlGalvdoIcon"><img src="images/playIcon.png" /></div>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="dtlGalColItem">
                                      <Link to="">
                                        <div className="dtlGalColImg" style={{backgroundImage: `url("images/galImg3.jpg")`}}>
                                          <div className="dtlGalColOverlay"></div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="dtlGalColItem">
                                      <Link to="">
                                        <div className="dtlGalColImg" style={{backgroundImage: `url("images/galImg4.jpg")`}}>
                                          <div className="dtlGalColOverlay"></div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="dtlGalColItem">
                                      <Link to="">
                                        <div className="dtlGalColImg" style={{backgroundImage: `url("images/galImg5.jpg")`}}>
                                          <div className="dtlGalColOverlay"></div>
                                        </div>
                                        <div className="dtlGalvdoIcon"><img src="images/playIcon.png" /></div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlRvwRtngDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Poojari Rating</p>
                              <h2>Rating & Reviews</h2>
                          </div>
                          <div className="rvwRtngAvrgOuter">
                            <div className="row g-5">
                              <div className="col-sm">
                                <div className="rvwRtngAvrgColDiv">
                                  <div className="rvwRtngAvrgCol">
                                    <h5>Avarage User Rating</h5>
                                    <h3>4.6<small><sub>/ 5</sub></small></h3>
                                    <div className="rvwRtngAvrgStars">
                                      <i class="fa fa-star ylowBgStar" aria-hidden="true"></i>
                                      <i class="fa fa-star ylowBgStar" aria-hidden="true"></i>
                                      <i class="fa fa-star ylowBgStar" aria-hidden="true"></i>
                                      <i class="fa fa-star ylowBgStar" aria-hidden="true"></i>
                                      <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm">
                                <div className="rvwRtngPrgrsCol">
                                    <h5>Rating Breakdown</h5>
                                    <div className="rvwRtngPrgrsRow">
                                      <div className="rvwRtngPrgrsItem">
                                        <div className="rvwRtngPrgrsStars">
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                        </div>
                                        <ProgressBar variant="warning" now={60} />
                                        <span>60%</span>
                                      </div>
                                      <div className="rvwRtngPrgrsItem">
                                        <div className="rvwRtngPrgrsStars">
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <ProgressBar variant="warning" now={40} />
                                        <span>40%</span>
                                      </div>
                                      <div className="rvwRtngPrgrsItem">
                                        <div className="rvwRtngPrgrsStars">
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <ProgressBar variant="warning" now={30} />
                                        <span>30%</span>
                                      </div>
                                      <div className="rvwRtngPrgrsItem">
                                        <div className="rvwRtngPrgrsStars">
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <ProgressBar variant="warning" now={18} />
                                        <span>18%</span>
                                      </div>
                                      <div className="rvwRtngPrgrsItem">
                                        <div className="rvwRtngPrgrsStars">
                                          <i class="fa fa-star ylowStar" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <ProgressBar variant="warning" now={12} />
                                        <span>12%</span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="writeRtngHdng">
                            <h4>Write a Review</h4>
                          </div>
                          <div className="writeRtngOuter">
                            <div className="row g-5">
                              <div className="col-sm">
                                <div className="writeRtngRow">
                                  <div className="row">
                                    <div className="col-sm">
                                      <div className="writeRtngCol">
                                        <p>Quality</p>
                                        <div className="writeRtngDiv">
                                          <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm">
                                      <div className="writeRtngCol">
                                        <p>Hospitality</p>
                                        <div className="writeRtngDiv">
                                          <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm">
                                      <div className="writeRtngCol">
                                        <p>Hospitality</p>
                                        <div className="writeRtngDiv">
                                          <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm">
                                      <div className="writeRtngCol">
                                        <p>Hospitality</p>
                                        <div className="writeRtngDiv">
                                          <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-auto">
                                <div className="writeRtngAvrgCol">
                                  <h3>3.00</h3>
                                  <p>Average Rating</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rvwFormOuter">
                            <h5>Your email address will not be published.</h5>
                            <div className="commonForm rvwFormDiv">
                              <Form>
                                <div className="row mb-4">
                                  <div className="col-sm">
                                    <Form.Group className="" controlId="formBasicName">
                                      <Form.Control type="text" placeholder="Your Name *" />
                                    </Form.Group>
                                  </div>
                                  <div className="col-sm">
                                    <Form.Group className="" controlId="formBasicEmail">
                                      <Form.Control type="email" placeholder="Email *" />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-sm">
                                    <Form.Group className="" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" label="Save my name, email and website in this browser for the next time I comment." />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-sm">
                                    <Form.Group className="" controlId="formBasicMessage">
                                      <Form.Control as="textarea" rows={3} placeholder="Add Review" />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div className="fromBtn">
                                  <Button className="btnCommon btnDark btnRadiusNone" variant="primary" type="submit">Submit Review</Button>
                                </div>
                              </Form>
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
export default PoojariDetail;