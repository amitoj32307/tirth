import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Accordion } from "react-bootstrap";
function NewPassword() {
  return (
    <section>
      <article class="loginSignupOuter">
        <div class="container">
            <div id="loginSignupDiv" class="loginSignup actSignup">
                <div class="loginLogoCol d-none d-lg-inline-block">
                    <Link to="/"><img src="images/logoLight.png" alt="..." /></Link>
                </div>
                <div class="loginSignupPage d-none d-lg-block">
                    <div class="row g-0 minH100vh align-items-center">
                        <div class="col-lg-6"></div>
                        <div class="col-lg-6">
                            <div class="lgTriigerCol">
                                <h4>Have an Account?</h4>
                                <Link to="/signup" class="btn btnCommon btnWhite btnRadiusNone loginBtn">
                                    Login <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="loginSignupFormCol">
                    <div class="sContent">
                        <div class="row g-0 h-100 align-items-center">
                            <div class="loginSignContent">
                                <div class="SignupContent">
                                    <div class="loginLogoCol d-lg-none">
                                        <a href="javascript:void(0)"><img src="images/logo.png" alt="..." /></a>
                                    </div>
                                    <h5>Hello!</h5>
                                    <h4>New Password</h4>
                                    <form class="formStyle">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <label for="passwordFld2" class="form-label">New Password</label>
                                                <input type="password" class="form-control" id="passwordFld2" placeholder="Password" />
                                            </div>
                                            <div class="col-12">
                                                <label for="passwordFld2" class="form-label">Confirm Password</label>
                                                <input type="password" class="form-control" id="passwordFld2" placeholder="Confirm Password" />
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
                                    <div class="lgTriigerCol d-lg-none">
                                        <h4>Have an Account?</h4>
                                        <a href="javascript:void(0)" class="btn btnCommon btnRadiusNone loginBtn">Login</a>
                                    </div>
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
export default NewPassword;