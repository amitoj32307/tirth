import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Breadcrumb, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
function FAQ() {
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
              <h2>Frequently Asked Questions</h2>
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
            </div>
            <div className="pageBorderBottom">
              <span></span>
            </div>
          </div>
        </div>
      </article>
      <article className="faqBlock lightGradientBg wrapper py-80">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="faqCol">
                <div className="mainHeading mb-4">
                  <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>FAQ</p>
                  <h2>Temple</h2>
                </div>
                <div className="faqAccRow">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>What is a Temple?</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Getting Started with an Temple</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Do i have the latest version?</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>How can I change header</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faqCol">
                <div className="mainHeading mb-4">
                  <p><i className="d-inline-block px-2"><img src="images/hdngOmDark.png" /></i>FAQ</p>
                  <h2>Poojari</h2>
                </div>
                <div className="faqAccRow">
                  <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How many times can I use a Temple?</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How to migrate my website?</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>How to migrate my website?</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Changing the site footer</Accordion.Header>
                      <Accordion.Body>Temple is as place where Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin eget tortos risus. Vivamus magna justo. People ask questions related to Hinduism</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
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
export default FAQ;