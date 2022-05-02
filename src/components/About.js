import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Breadcrumb, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function About() {
  return (
    <section>
      <Header/>
      <article className="pageBannerBlock wrapper pt-80" style={{backgroundImage: `url("images/pageBanner.jpg")`}}>
        <div className="container">
          <div className="pageBannerText">
            <div className="pageBorderTop">
              <span></span>
            </div>
            <div className="pageTitle">
              <h2>Who We Are</h2>
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
            </div>
            <div className="pageBorderBottom">
              <span></span>
            </div>
          </div>
        </div>
      </article>
      <article className="homeAboutBlock lightGradientBg wrapper pt-140">
        <div className="aboutContainer pt-80">
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
      <article className="darkGradientBlock wrapper py-80">
        <div className="darkGradientBlockOuter containSmall">
          <div className="container">
            <div className="mainHeading headingWhite headingCenter">
              <p className="colorPink"><i className="d-inline-block px-2"><img src="images/hdngLight.png" /></i>About Us<i className="d-inline-block px-2"><img src="images/hdngLight.png" /></i></p>
              <h2>Learn About Our<br/>Capabilities</h2>
              <h5>Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. Praesent at nulla aliquam, fermentum ligula a eget, fermentum metus. Morbi auctor sed dui et rhoncus. Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam:</h5>
            </div>
            <div className="abtSkillsPrgrssRow">
              <div className="row g-5">
                <div className="col-md-6">
                  <div className="abtSkillsPrgrssCol">
                    <div className="abtSkillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Meditation</h5> <span>84%</span></div>
                    <ProgressBar now={84} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="abtSkillsPrgrssCol">
                    <div className="abtSkillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Yoga</h5> <span>70%</span></div>
                    <ProgressBar now={70} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="abtSkillsPrgrssCol">
                    <div className="abtSkillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Teaching</h5> <span>60%</span></div>
                    <ProgressBar now={60} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="abtSkillsPrgrssCol">
                    <div className="abtSkillsPrgrssTtl d-flex align-items-center justify-content-between"><h5>Inspiration</h5> <span>92%</span></div>
                    <ProgressBar now={92} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="reviewsBlock reviewsAboutBlock wrapper py-80">
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
      <article className="spclPujaBlock wrapper">
        <div className="spclPujaContainer">
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
                      <Link to="" className="btnCommon">Learn More</Link>
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
                      <Link to="" className="btnCommon">Learn More</Link>
                    </div>
                  </div>
                  <div className="spclPujaCol">
                    <div className="spclPujaImg" style={{backgroundImage: `url("images/puja3.png")`}}>
                      <div className="spclPujaOverlay"></div>
                    </div>
                    <div className="spclPujaInfo">
                      <h3>Vishnu Puja</h3>
                      <p>According to the texts on dharma, the duty.</p>
                      <Link to="" className="btnCommon">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="newsltrFormBlock lightGradientBg wrapper py-80">
        <div className="container">
          <div className="mainHeading headingCenter">
            <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Join<i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i></p>
            <h2>Learn To Be Sustainably Happy!</h2>
          </div>
          <div className="conttForm text-center">
            <Form className="formStyle">
              <div className="row g-3">
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Name*" />
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Mobile Number*" />
                </div>
                <div className="col-4">
                    <input type="email" className="form-control" placeholder="Email Address*" />
                </div>
                <div className="col-12 my-4">
                    <div className="form-check d-inline-block">
                        <input type="checkbox" className="form-check-input" id="rememberCheck" />
                        <label className="form-check-label" for="rememberCheck">I agree that my submitted data is being collected and stored.</label>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btnCommon">
                        Register Now <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </article>
      <Footer/>
    </section>
  );
}
export default About;