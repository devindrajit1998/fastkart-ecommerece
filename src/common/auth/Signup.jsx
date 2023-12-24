import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import Breadcum from "../Breadcum";
import { Link, useNavigate } from "react-router-dom";
import { UserDataProvider } from "../../ContextAPI/UserContext";

export default function Signup() {

  const {SignupHandle, SignupSubmit, session} = UserDataProvider();
  const navigate = useNavigate();
  useEffect(() => {
    if (session === true) {
      navigate("/login")
    } else {
      navigate("/signup")
    }
  }, [session])

  return (
    <>
      <Layout />
      <Breadcum page="Sign In" />
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="images/inner-page/sign-up.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Fastkart</h3>
                  <h4>Create New Account</h4>
                </div>
                <div className="input-box">
                  <form className="row g-4">
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Full Name"
                          onChange={SignupHandle}
                          required
                        />


                        <label htmlFor="fullname">Full Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="email"
                          className="form-control"
                          name="userName"
                          placeholder="Email Address"
                          onChange={SignupHandle}
                          required
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          onChange={SignupHandle}
                         required
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I agree with
                            <span>Terms</span> and <span>Privacy</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button onClick={SignupSubmit} className="btn btn-animation w-100" type="button">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div className="other-log-in">
                  <h6>or</h6>
                </div>
                <div className="log-in-button">
                  <ul>
                    <li>
                      <Link className="btn google-button w-100">
                        <img
                          src="images/inner-page/google.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                        Sign up with Google
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.facebook.com/"
                        className="btn google-button w-100"
                      >
                        <img
                          src="images/inner-page/facebook.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                        Sign up with Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="other-log-in"></div>
                <div className="sign-up-box">
                  <h4>Already have an account?</h4>
                  <Link to="/login">Log In</Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6" />
          </div>
        </div>
      </section>
    </>
  );
}
