import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Form, ProgressBar, Accordion } from "react-bootstrap";
function LoginSignup() {
    const signuupHandleClick = () => {
        const div = document.getElementById('loginSignupDiv');
        div.classList.add("actSignup");
    }
    const loginHandleClick = () => {
        const div = document.getElementById('loginSignupDiv');
        div.classList.remove("actSignup");
    }
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
                                <h4>Create Account</h4>
                                <a href="javascript:void(0)" class="btn btnCommon btnWhite btnRadiusNone signUpBtn" onClick={signuupHandleClick}>
                                    Sign Up <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="lgTriigerCol">
                                <h4>Have an Account?</h4>
                                <a href="javascript:void(0)" class="btn btnCommon btnWhite btnRadiusNone loginBtn" onClick={loginHandleClick}>
                                    Login <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="userSclOptions">
                        <li className="fbColor">
                            <Link to="#">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <span>Facebook</span>
                            </Link>
                        </li>
                        <li className="twtrColor">
                            <Link to="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <span>Twitter</span>
                            </Link>
                        </li>
                        <li className="gglColor">
                            <Link to="#">
                            <i className="fa fa-google" aria-hidden="true"></i>
                            <span>Google</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="loginSignupFormCol">
                    <div class="lContent">
                        <div class="row g-0 h-100 align-items-center">
                            <div class="loginSignContent">
                                <div class="loginContent">
                                    <div class="loginLogoCol d-lg-none">
                                        <a href="javascript:void(0)"><img src="images/logoLight.png" alt="..." /></a>
                                    </div>
                                    <h5>Welcome back</h5>
                                    <h4>Login to your account</h4>
                                    <form class="formStyle">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <label for="emailFld" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="emailFld" placeholder="john.doe@gmail.com" />
                                            </div>
                                            <div class="col-12">
                                                <label for="passwordFld" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="passwordFld" placeholder="Password" />
                                            </div>
                                            <div class="col">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="rememberCheck" />
                                                    <label class="form-check-label" for="rememberCheck">Remember me</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <Link to="/forgot-password">Forgot password?</Link>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btnCommon btnRadiusNone w-100">
                                                    Login <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="lgTriigerCol d-lg-none">
                                        <h4>Create Account</h4>
                                        <a href="javascript:void(0)" class="btn btnCommon btnRadiusNone signUpBtn">
                                            Sign Up <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 12H20.25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sContent">
                        <div class="row g-0 h-100 align-items-center">
                            <div class="loginSignContent">
                                <div class="SignupContent">
                                    <div class="loginLogoCol d-lg-none">
                                        <a href="javascript:void(0)"><img src="images/logo.png" alt="..." /></a>
                                    </div>
                                    <h5>Hello!</h5>
                                    <h4>Sign Up to Get Started</h4>
                                    <form class="formStyle">
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <div class="form-check d-inline-block">
                                                    <input type="radio" class="form-check-input" name="signupType" id="templeCheck" value="temple" />
                                                    <label class="form-check-label" for="templeCheck">Temple</label>
                                                </div>
                                                <div class="form-check d-inline-block ms-4">
                                                    <input type="radio" class="form-check-input" name="signupType" id="poojariCheck" value="poojari" />
                                                    <label class="form-check-label" for="poojariCheck">Poojari</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="fullNameFld" class="form-label">First Name</label>
                                                <input type="text" class="form-control" id="fullNameFld" placeholder="John" />
                                            </div>
                                            <div class="col-12">
                                                <label for="fullNameFld" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="fullNameFld" placeholder="Doe" />
                                            </div>
                                            <div class="col-12">
                                                <label for="emailFld2" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" id="emailFld2" placeholder="john.doe@gmail.com" />
                                            </div>
                                            <div class="col-12">
                                                <label for="emailFld2" class="form-label">Phone Number </label>
                                                <input type="text" class="form-control" id="emailFld2" placeholder="ex.+91-99999-88888" />
                                            </div>
                                            <div class="col-12">
                                                <label for="passwordFld2" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="passwordFld2" placeholder="Password" />
                                            </div>
                                            <div class="col-12">
                                                <label for="passwordFld2" class="form-label">Confirm Password</label>
                                                <input type="password" class="form-control" id="passwordFld2" placeholder="Confirm Password" />
                                            </div>
                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="acceptCheck" />
                                                    <label class="form-check-label" for="acceptCheck">I accept our <a href="javascript:void(0)">Terms of use</a> and our <a href="javascript:void(0)">Privacy policy</a></label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btnCommon btnRadiusNone w-100">
                                                    Register <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
export default LoginSignup;