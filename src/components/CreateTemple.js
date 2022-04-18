import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Containerfuild, Row, Col } from "react-bootstrap";
import Header  from "./Header";
import Footer  from "./Footer";
import CreateTempleForm  from "./Forms/CreateTempleForm";
function CreateTemple() {
  return (
    <section>
      <article className="createTempleBlock">
        <div className="createTempleContain">
          <Row className="g-0">
            <Col md={{ span: 8 }} className="">
              <div className="createTempleContOuter d-sm-flex align-items-center justify-content-center">
                <div class="loginLogoCol d-none d-lg-inline-block">
                    <Link to="/"><img src="images/logoLight.png" alt="..." /></Link>
                </div>
                <div className="createTempleCont">
                  <h3>Create Temple</h3>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4 }} className="">
              <div className="createTempleFormOuter">
                <CreateTempleForm />
              </div>
            </Col>
          </Row>
        </div>
      </article>
    </section>
  );
}
export default CreateTemple;