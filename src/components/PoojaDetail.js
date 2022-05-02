import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Breadcrumb, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
function PoojaDetail() {
  return (
    <section>
      <Header/>
      <article className="pageBannerBlock wrapper pt-80" style={{backgroundImage: `url("images/templeSubheader.jpg")`}}>
        <div className="container">
          <div className="pageBannerText pt-80">
            <div className="pageBorderTop">
              <span></span>
            </div>
            <div className="pageTitle">
              <h2>Durga Pooja</h2>
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/pooja-list">All Poojas</Breadcrumb.Item>
                    <Breadcrumb.Item active>Durga Pooja</Breadcrumb.Item> 
                  </Breadcrumb>
                </div>
            </div>
            <div className="pageBorderBottom">
              <span></span>
            </div>
          </div>
        </div>
      </article>
      <article className="poojaDetailBlock lightGradientBg wrapper py-80">
        <div className="container">
          <div className="poojaTopOuter">
              <div className="poojaTopMedia" style={{backgroundImage: `url("images/poojaDetailImg.jpg")`}}>
                <div className="poojaTopInfo">
                  <ul>
                    <li>
                      <h5>Puja:</h5>
                      <p>Durga Puja</p>
                    </li>
                    <li>
                      <h5>Date:</h5>
                      <p>December 8, 2022</p>
                    </li>
                    <li>
                      <h5>Category:</h5>
                      <p>Festivals, Geeta</p>
                    </li>
                  </ul>
                  <div className="poojaShare">
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
            <div className="blogMainContent poojaMainContent">
              <div className="blogDescptnDiv poojaDescptnDiv">
                <div class="mainHeading">
                  <p><i class="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Post</p>
                  <h2>Know the Basic Tenets With Traditional Definitions.</h2>
                </div>
                <div className="blogDtlDes">
                  <p>Building a temple, which belongs to whoever paid for it or to the community that occupies it, is believed to be a meritorious deed recommended to anyone desirous of heavenly reward. The choice of a site, which should be serene and lovely, is determined by astrology and divination as well as by its proximity to human dwellings. The size and artistic value of temples range widely, from small village shrines with simple statuettes to great temple-cities whose boundary walls, pierced by monumental gates (gopura), enclose various buildings.</p>
                  <p>The three main classes in the classic division of Indian society are the Brahmans, the warriors, and the commoners. The Brahmans, whatever their worldly avocations, claim to have by virtue of their birth the authority to teach the Veda, perform ritual sacrifices for others, and accept gifts and subsistence. The term alms is misleading; the dakshina offered at the end of a rite to a Brahman officiant is not a fee but an oblation through which the rite is made complete.</p>
                </div>
                <div className="poojaDtlGraphRow">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="poojaGraph">
                          <img src="images/poojaGraph.png" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="poojaGraphTtl">
                        <div className="mainHeading">
                          <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>Benefits</p>
                          <h2>Daily Pujas & Temple Worship</h2>
                        </div>
                        <p>The morning and evening adorations (sandhya), being a very important duty of the traditional householder, are mainly Vedic in character but have become lengthy because of the addition of Puranic and Tantric elements.</p>
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
                <div className="blogDtlDes">
                  <p>According to the texts on dharma, the duty of the fourth class (the Shudras) was to serve the others. According to Hindu tradition, the Veda should not be studied in the presence of Shudras, but they may listen to the recitation of epics and Puranas. They are permitted to perform the five main acts of worship (without Vedic mantras) and undertake observances, but even today they maintain various ceremonies of their own, carried out without Brahmanic assistance.</p>
                  <p>Yet despite the statements in the texts on dharma, there was considerable fluidity in the status of the castes. Communities such as the Vellalas, for instance, are regarded as Shudras by Brahmans but as a high caste by other groups. Gayetri Mantra Yet despite the statements in the texts on dharma, there was considerable fluidity in the status of the castes. Communities such as the Vellalas, for instance, are regarded as Shudras by Brahmans but as a high caste by other groups. Sacred times and festivalsAccording to Hindu tradition, the Veda should not be studied in the presence of Shudras, but they may listen to the recitation of epics and Puranas. They are permitted to perform the five main acts of worship (without Vedic mantras) and undertake observances, but even today they maintain various ceremonies of their own, carried out without Brahmanic assistance. According to the texts on dharma, the duty of the fourth class (the Shudras) was to serve the others.</p>
                  <ul>
                    <li>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
                    <li>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</li>
                    <li>Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae.</li>
                    <li>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</li>
                  </ul>
                </div>
                <div className="poojaDtlImgsRow">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="poojaDtlImgCol">
                        <div className="poojaDtlImg" style={{backgroundImage: `url("images/newsImg1.png")`}}></div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="poojaDtlImgCol">
                        <div className="poojaDtlImg" style={{backgroundImage: `url("images/newsImg2.png")`}}></div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="poojaDtlImgCol">
                        <div className="poojaDtlImg" style={{backgroundImage: `url("images/newsImg3.png")`}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="postNextPrevDiv">
                <div className="row d-md-flex align-items-center justify-space-between">
                  <div className="col-md">
                    <div className="postNextPrevBtn postPrevBtn">
                      <Link to="/pooja-detail">
                        <p>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg> Previous
                        </p>
                        <h4>Kali Puja</h4>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="postNextPrevBtn postNextBtn">
                      <Link to="/pooja-detail">
                        <p>
                          Next  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                        </p>
                        <h4>Special Puja</h4>
                      </Link>
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
export default PoojaDetail;