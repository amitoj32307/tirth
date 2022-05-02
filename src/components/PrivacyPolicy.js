import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Breadcrumb, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
function PrivacyPolicy() {
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
              <h2>Privacy Policy</h2>
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Privacy Policy</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
            </div>
            <div className="pageBorderBottom">
              <span></span>
            </div>
          </div>
        </div>
      </article>
      <article className="prvcyContntBlock lightGradientBg wrapper py-80">
        <div className="container">
          <div className="mainHeading mb-4">
            <p>Updated: Wed 16 March, 2022</p>
            <h2>Introduction</h2>
          </div>
          <div class="prvcyContntDiv">
            <p>'Akshardham' means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham at New Delhi is a Mandir – an abode of God, a Hindu house of worship, and a spiritual and cultural campus dedicated to devotion, learning and harmony.</p>
            <p>Timeless Hindu spiritual messages, vibrant devotional traditions and ancient architecture all are echoed in its art and architecture.The mandir is a humble tribute to Bhagwan Swaminarayan (1781- 1830), the avatars, devas and great sages of Hinduism. The traditionally-styled complex was inaugurated on 6 November 2005 with the blessings of HH Pramukh Swami Maharaj and through the devoted efforts of skilled artisans and volunteers.</p>
            <h3>Terms of Use</h3>
            <ul>
              <li>Opened 6th November 2005</li>
              <li>Constructed by Bochasanwasi Shri Akshar Purushottam Swaminarayan Sanstha (BAPS)</li>
              <li>Inspired by HH Yogiji Maharaj (1892-1971 CE)</li>
              <li>Created by His Holiness Pramukh Swami Maharaj</li>
              <li>More than 300,000,000 volunteer hours went into making the complex</li>
              <li>Over 8,000 volunteers from across the world participated in building it</li>
              <li>Mandir built from intricately carved sandstone and marble</li>
              <li>Exhibitions on Hinduism, including Bhagwan Swaminarayan's life and teachings such as prayer and non-violence.</li>
              <li>Open gardens, water bodies and step-well styled courtyard</li>
            </ul>
            <p>Timeless Hindu spiritual messages, vibrant devotional traditions and ancient architecture all are echoed in its art and architecture.The mandir is a humble tribute to Bhagwan Swaminarayan (1781- 1830), the avatars, devas and great sages of Hinduism. The traditionally-styled complex was inaugurated on 6 November 2005 with the blessings of HH Pramukh Swami Maharaj and through the devoted efforts of skilled artisans and volunteers.</p>
            <h3>Limitation of Liability</h3>
            <p>'Akshardham' means the divine abode of God. It is hailed as an eternal place of devotion, purity and peace. Swaminarayan Akshardham at New Delhi is a Mandir – an abode of God, a Hindu house of worship, and a spiritual and cultural campus dedicated to devotion, learning and harmony.</p>
            <p>Timeless Hindu spiritual messages, vibrant devotional traditions and ancient architecture all are echoed in its art and architecture.The mandir is a humble tribute to Bhagwan Swaminarayan (1781- 1830), the avatars, devas and great sages of Hinduism. The traditionally-styled complex was inaugurated on 6 November 2005 with the blessings of HH Pramukh Swami Maharaj and through the devoted efforts of skilled artisans and volunteers.</p>
            <h4>Limited Usage Granted</h4>
            <ul>
              <li>More than 300,000,000 volunteer hours went into making the complex</li>
              <li>Over 8,000 volunteers from across the world participated in building it</li>
              <li>Mandir built from intricately carved sandstone and marble</li>
              <li>Exhibitions on Hinduism, including Bhagwan Swaminarayan's life and teachings such as prayer and non-violence.</li>
              <li>Open gardens, water bodies and step-well styled courtyard</li>
            </ul>
            <p>Timeless Hindu spiritual messages, vibrant devotional traditions and ancient architecture all are echoed in its art and architecture.The mandir is a humble tribute to Bhagwan Swaminarayan (1781- 1830), the avatars, devas and great sages of Hinduism. The traditionally-styled complex was inaugurated on 6 November 2005 with the blessings of HH Pramukh Swami Maharaj and through the devoted efforts of skilled artisans and volunteers.</p>
          </div>
        </div>
      </article>
      <Footer/>
    </section>
  );
}
export default PrivacyPolicy;