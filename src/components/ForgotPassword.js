import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Accordion } from "react-bootstrap";
function ForgotPassword() {
   
  return (
    <section>
      <article class="loginSignupOuter">
        <div class="container">
            <div id="loginSignupDiv" class="loginSignup">
                <div class="loginLogoCol d-none d-lg-inline-block">
                    <Link to="/"><img src="images/logoLight.png" alt="..." /></Link>
                </div>
                <div class="loginSignupPage d-none d-lg-block">
                    <div class="row g-0 minH100vh align-items-center">
                        <div class="col-lg-6">
                            <div class="lgTriigerCol">
                                <h4>Remembered your<br/> password?</h4>
                                <Link to="/signup" class="btn btnCommon btnWhite btnRadiusNone signUpBtn">
                                    Login <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-6"></div>
                    </div>
                </div>
                <div class="loginSignupFormCol">
                    <div class="lContent">
                        <div class="row g-0 h-100 align-items-center">
                            <div class="loginSignContent">
                                <div class="loginContent">
                                    <div class="loginLogoCol d-lg-none">
                                        <a href="javascript:void(0)"><img src="images/logoLight.png" alt="..." /></a>
                                    </div>
                                    <h5>Forgot Password</h5>
                                    <h4>Request new password</h4>
                                    <form class="formStyle">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <label for="emailFld" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="emailFld" placeholder="john.doe@gmail.com" />
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btnCommon btnRadiusNone w-100">
                                                    Submit <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
    </section>
  );
}
export default ForgotPassword;