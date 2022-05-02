import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Button, Form, Modal, ProgressBar, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function TempleDetail() {
    const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section>
      <Header/>
      <article className="templeDetailSlider wrapper">
        <div className="templeMainSliderOuter">
            <div className="templeMainSlider crslCntrls crslCntrlsWhite">
                <Swiper modules={[Controller, Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1} loop={true} getSwiper={updateSwiper}>
                    <SwiperSlide>
                        <div className="templeMainSldrSlide" style={{backgroundImage: `url("images/templeBanner1.jpg")`}}>
                            <div className="templeMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="templeMainSldrSlide" style={{backgroundImage: `url("images/templeBanner2.jpg")`}}>
                            <div className="templeMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="templeMainSldrSlide" style={{backgroundImage: `url("images/templeBanner3.jpg")`}}>
                            <div className="templeMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="templeMainSldrSlide" style={{backgroundImage: `url("images/templeBanner4.jpg")`}}>
                            <div className="templeMainSldrOverlay"></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="templeMainThumbSlider d-none">
                <Swiper modules={[Controller]} spaceBetween={0} slidesPerView={4} loop={false} centeredSlides={true} getSwiper={updateSwiperThumbs}>
                    <SwiperSlide>
                        <div className="templeSldrThumbSlide">
                            <img src="images/templeBanner1.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="templeSldrThumbSlide">
                            <img src="images/templeBanner1.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="templeSldrThumbSlide">
                            <img src="images/templeBanner1.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="templeSldrThumbSlide">
                            <img src="images/templeBanner1.jpg" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="templeMainSldrBarDiv">
                <div className="templeMainSldrTextDiv">
                    <div className="container">
                        <div className="templeMainSldrText">
                            <h1>Swaminarayan Akshardham</h1>
                            <h4>Hindu Temple</h4>
                            <p><i><img src="images/locIconWhite.png" /></i> New Delhi</p>
                        </div>
                    </div>
                </div>
                <div className="templeMainSliderOptions">
                  <div className="container">
                    <div className="templeSldrOptionsCol">
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
                          <Link to="" className="btnCommon btnWhite btnRadiusNone">Enquire Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </article>
      <article className="templeDetailBlock wrapper py-80">
        <div className="container">
            <div className="row g-5">
                <div className="col-sm-4 col-md-3 order2">
                  <div className="rightSidebar">
                    <div className="sdbrWdgt sdbrProWdt">
                      <div className="sdbrHdng">
                        <h4>Temple Contact User</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrProCol">
                        <div className="row g-3 d-sm-flex align-items-center">
                          <div className="col-auto">
                            <div className="sdbrProMedia">
                              <Link to="">
                                <div className="sdbrProImg" style={{backgroundImage: `url("images/pandit2.jpg")`}}></div>
                              </Link>
                            </div>
                          </div>
                          <div className="col">
                            <div className="sdbrProInfo">
                              <h4><Link to="">Rakesh K Panday</Link></h4>
                              <h5>Temple Member</h5>
                              <p>628 34****** <Link to="">Show</Link></p>
                            </div>
                          </div>
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
                    <div className="sdbrWdgt sdbrPoojariWdt">
                      <div className="sdbrHdng">
                        <h4>Associated Poojari</h4>
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
                    <div className="sdbrWdgt sdbrFeaTempleWdt">
                      <div className="sdbrHdng">
                        <h4>Featured Temples</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrFeaTempleCol crslCntrls">
                        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1} centeredSlides={false} loop={true}>
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
                    <div className="sdbrWdgt sdbrSpeakerWdt">
                      <div className="sdbrHdng">
                        <h4>Speakers</h4>
                      </div>
                      <div className="sdbrWdgtContent sdbrSpeakerCol">
                        <div className="spkrAccrdnCol">
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <div className="spkrTop d-flex align-items-center">
                                  <div className="spkrImg">
                                    <span>
                                      <img src="images/speaker1.png" />
                                    </span>
                                  </div>
                                  <div className="spkrInfo">
                                    <div className="spkrTtl">Thomas Taylor</div>
                                    <div className="spkrTime">2:00 - 4:00 pm</div>
                                  </div>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <p>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</p>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                <div className="spkrTop d-flex align-items-center">
                                  <div className="spkrImg">
                                    <span>
                                      <img src="images/speaker2.png" />
                                    </span>
                                  </div>
                                  <div className="spkrInfo">
                                    <div className="spkrTtl">Aaron Williams</div>
                                    <div className="spkrTime">4:00 - 6:00 pm</div>
                                  </div>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <p>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</p>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                <div className="spkrTop d-flex align-items-center">
                                  <div className="spkrImg">
                                    <span>
                                      <img src="images/speaker3.png" />
                                    </span>
                                  </div>
                                  <div className="spkrInfo">
                                    <div className="spkrTtl">John Doe</div>
                                    <div className="spkrTime">8:00 - 9:00 pm</div>
                                  </div>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <p>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                    <div className="templeMainContent">
                        <div className="dtlAboutDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Swaminarayan Akshardham</p>
                              <h2>Temple Description</h2>
                          </div>
                          <div className="dtlAboutDes">
                              <p>'Akshardham' means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham at New Delhi is a Mandir – an abode of God, a Hindu house of worship, and a spiritual and cultural campus dedicated to devotion, learning and harmony.</p>
                              <p>Timeless Hindu spiritual messages, vibrant devotional traditions and ancient architecture all are echoed in its art and architecture.The mandir is a humble tribute to Bhagwan Swaminarayan (1781- 1830), the avatars, devas and great sages of Hinduism. The traditionally-styled complex was inaugurated on 6 November 2005 with the blessings of HH Pramukh Swami Maharaj and through the devoted efforts of skilled artisans and volunteers.</p>
                          </div>
                        </div>
                        <div className="dtlHighlightsDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Highlights</p>
                              <h2>Facts & Figures</h2>
                          </div>
                          <div className="dtlHighlightsCol">
                              <ul>
                                <li><i><img src="images/checkIcon1.png" /></i> Opened 6th November 2005</li>
                                <li><i><img src="images/checkIcon1.png" /></i> Constructed by Bochasanwasi Shri Akshar Purushottam Swaminarayan Sanstha (BAPS)</li>
                                <li><i><img src="images/checkIcon1.png" /></i> Inspired by HH Yogiji Maharaj (1892-1971 CE)</li>
                                <li><i><img src="images/checkIcon1.png" /></i> Created by His Holiness Pramukh Swami Maharaj</li>
                                <li><i><img src="images/checkIcon1.png" /></i> More than 300,000,000 volunteer hours went into making the complex</li>
                                <li><i><img src="images/checkIcon1.png" /></i> Over 8,000 volunteers from across the world participated in building it</li>
                                <li><i><img src="images/checkIcon1.png" /></i> Mandir built from intricately carved sandstone and marble</li>
                                <li><i><img src="images/checkIcon1.png" /></i> Exhibitions on Hinduism, including Bhagwan Swaminarayan's life and teachings such as prayer and non-violence.</li>
                                <li><i><img src="images/checkIcon1.png" /></i> Open gardens, water bodies and step-well styled courtyard</li>
                              </ul>
                          </div>
                        </div>
                        <div className="dtlWhyChoose whyChooseInfoDiv">
                          <div className="row">
                              <div className="col-md-4">
                                  <div className="whyChooseInfoCol">
                                      <span>
                                      <img src="images/rig-veda.png" />
                                      </span>
                                      <h4>Rig-Veda</h4>
                                      <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="whyChooseInfoCol">
                                      <span>
                                      <img src="images/yajur-veda.png" />
                                      </span>
                                      <h4>Yajur-Veda</h4>
                                      <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="whyChooseInfoCol">
                                      <span>
                                      <img src="images/sama-veda.png" />
                                      </span>
                                      <h4>Sama-Veda</h4>
                                      <p>It was popularised in the 1960s with the release of sheets Lorem Ipsum passages.</p>
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
                            <div className="row g-5">
                              <div className="col-sm">
                                <div className="cltrlSgnfcncItem">
                                  <Link to="">
                                      <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/santoshiPuja.jpg")`}}>
                                      </div>
                                      <div className="cltrlSgnfcncInfo">
                                          <h4>Santoshi Puja <i><img src="images/arrowNext.png" /></i></h4>
                                      </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-sm">
                                <div className="cltrlSgnfcncItem">
                                  <Link to="">
                                      <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/vishnuPuja.jpg")`}}>
                                      </div>
                                      <div className="cltrlSgnfcncInfo">
                                          <h4>Vishnu Puja <i><img src="images/arrowNext.png" /></i></h4>
                                      </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="blockquoteDiv">
                          <div className="blockquoteInfo">
                            <p><i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i>By Akshardham<i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i></p>
                            <h2>Some Hindu teachers insist that believing in rebirth is necessary for living an ethical life. Their concern is that if there is no fear of karmic repercussions in future lifetimes</h2>
                          </div>
                        </div>
                        <div className="dtlAartiDiv">
                          <div className="row g-5 align-items-center">
                            <div className="col-sm-auto">
                              <div className="dtlAartiMedia">
                                <ul>
                                  <li>
                                    <img src="images/aartiImg1.jpg" />
                                  </li>
                                  <li>
                                    <img src="images/aartiImg2.jpg" />
                                  </li>
                                  <li>
                                    <img src="images/aartiImg3.jpg" />
                                  </li>
                                  <li>
                                    <img src="images/aartiImg4.jpg" />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="dtlHistoryInfo">
                                <div className="row g-5 align-items-center justify-space-between">
                                  <div className="col-sm">
                                    <div className="mainHeading">
                                      <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Aarti</p>
                                      <h2>Akshardham Aarti Timing</h2>
                                    </div>
                                  </div>
                                  <div className="col-sm-auto">
                                    <img src="images/aartiThali.png" />
                                  </div>
                                </div>
                                <div className="aartiListInfo mt-5">
                                  <ul>
                                    <li>
                                      <i><img src="images/tickDark.png" /></i> Morning Timings: 06:00 AM - 07:00 AM
                                    </li>
                                    <li>
                                      <i><img src="images/tickDark.png" /></i> Evening Timings: 07:00 AM - 07:30 AM
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlHistoryDiv">
                          <div className="mainHeading">
                            <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>History</p>
                            <h2>A Brief History of Akshardham Temple</h2>
                          </div>
                          <div className="dtlHistoryCntntDiv">
                            <div className="row align-items-center">
                              <div className="col-md-6">
                                <div className="historyImgDiv">
                                  <div className="historyImg">
                                    <img src="images/bellImg.png" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 ps-0">
                                <div className="historyCntnt">
                                  <div className="mainHeading headingSmall headingWhite mb-3">
                                    <h2>Akshardham Temple</h2>
                                  </div>
                                  <div className="historySldr crslCntrls crslCntrlsWhite">
                                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation spaceBetween={0} slidesPerView={1} loop={true}>
                                      <SwiperSlide>
                                          <div className="historySldrCol">
                                              <h4>1897</h4>
                                              <p>Suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.</p>
                                              <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                                          </div>
                                      </SwiperSlide>
                                    </Swiper>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlLiveBroadcastDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Watch Video</p>
                              <h2>Our Live Broadcast</h2>
                          </div>
                          <div className="dtlLiveBroadcastRow">
                            <div className="row">
                              <div className="col-sm">
                                <div className="liveBroadcastCol">
                                  <div className="liveBroadcastImg" style={{backgroundImage: `url("images/broadcastImg1.jpg")`}}>
                                    <Link to="" onClick={handleShow} className="brdcstPlayIcon">
                                      <img src="images/playIcon.png" />
                                    </Link>
                                    <div className="liveBroadcastOverlay"></div>
                                  </div>
                                  <div className="liveBroadcastInfo">
                                    <h4>Varansi at Night</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm">
                                <div className="liveBroadcastCol">
                                  <div className="liveBroadcastImg" style={{backgroundImage: `url("images/broadcastImg2.jpg")`}}>
                                    <Link to="" onClick={handleShow} className="brdcstPlayIcon">
                                      <img src="images/playIcon.png" />
                                    </Link>
                                    <div className="liveBroadcastOverlay"></div>
                                  </div>
                                  <div className="liveBroadcastInfo">
                                    <h4>Chaar Dhaam Yatra</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm">
                                <div className="liveBroadcastCol">
                                  <div className="liveBroadcastImg" style={{backgroundImage: `url("images/broadcastImg3.jpg")`}}>
                                    <Link to="" onClick={handleShow} className="brdcstPlayIcon">
                                      <img src="images/playIcon.png" />
                                    </Link>
                                    <div className="liveBroadcastOverlay"></div>
                                  </div>
                                  <div className="liveBroadcastInfo">
                                    <h4>Mahashivratri Temple</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dtlLocationMapDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Temple Map</p>
                              <h2>Our Location</h2>
                          </div>
                          <div className="dtlLocationMap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50455.54904998494!2d-122.5016869793055!3d37.77898120783132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586c32feb43f3%3A0x4b47ec8fa06de88a!2sSan%20Francisco%2C%20CA%2094129%2C%20USA!5e0!3m2!1sen!2sin!4v1645523300485!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                          </div>
                        </div>
                        <div className="dtlRvwRtngDiv">
                          <div className="mainHeading">
                              <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Temple Rating</p>
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
      <article className="exploreCityBlock rltdTempleBlock wrapper py-80">
        <div className="exploreCityContainer">
          <div className="container">
            <div className="mainHeading headingWhite headingCenter">
              <p><i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i>Temples<i className="d-inline-block px-2"><img src="images/hdngOm.png" /></i></p>
              <h2>Related Temples</h2>
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
                          <h4>Kedarnath</h4>
                          <p><i><img src="images/locIconWhite.png" /></i> Uttarakhand</p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/temple7.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Kailasanathar</h4>
                          <p><i><img src="images/locIconWhite.png" /></i> Karuppadithattadai, Tamil Nadu</p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/temple6.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Lingaraja Temple</h4>
                          <p><i><img src="images/locIconWhite.png" /></i> Bhubaneswar, Odisha</p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/temple1.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Shree Dwarkadhish</h4>
                          <p><i><img src="images/locIconWhite.png" /></i> Dwarka, Gujarat</p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="explrCityItem">
                      <Link to="">
                        <div className="explrCityImg" style={{backgroundImage: `url("images/temple5.jpg")`}}>
                          <div className="explrCityOverlay"></div>
                        </div>
                        <div className="explrCityInfo">
                          <h4>Yamunotri</h4>
                          <p><i><img src="images/locIconWhite.png" /></i> Uttarakhand</p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </article>
      <Modal show={show} onHide={handleClose} dialogClassName="videoPopDialog modal-lg">
        <Modal.Header closeButton>
          <Modal.Title className="mdlHeading">Varansi at Night</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="videoPopup">
            <iframe src="https://www.youtube.com/embed/C7i0W3z2Cfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Modal.Body>
      </Modal>
      <Footer/>
    </section>
  );
}
export default TempleDetail;