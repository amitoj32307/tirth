import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Pagination, Breadcrumb, Accordion } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
function CulturalSignificanceList() {
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
              <h2>All Cultural Significance</h2>
                <div className="breadcrumbsCol">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>All Cultural Significance</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
            </div>
            <div className="pageBorderBottom">
              <span></span>
            </div>
          </div>
        </div>
      </article>
      <article className="poojaListBlock lightGradientBg wrapper py-80">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/santoshiPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Santoshi Puja <i><img src="images/arrowNext.png" /></i></h4> 
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/vishnuPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Vishnu Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/kaliPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Kali Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/vishnuPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Vishnu Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/santoshiPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Santoshi Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/kaliPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Kali Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/santoshiPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Santoshi Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/vishnuPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Vishnu Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/kaliPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Kali Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/vishnuPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Vishnu Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/santoshiPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Santoshi Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cltrlSgnfcncItem">
                <Link to="/cultural-significance-detail">
                    <div className="cltrlSgnfcncImg" style={{backgroundImage: `url("images/kaliPuja.jpg")`}}>
                    </div>
                    <div className="cltrlSgnfcncInfo">
                        <h4>Kali Puja <i><img src="images/arrowNext.png" /></i></h4>
                    </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="pgntnOuter text-center mt-4">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item active>{11}</Pagination.Item>
              <Pagination.Item disabled>{13}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </article>
      <Footer/>
    </section>
  );
}
export default CulturalSignificanceList;