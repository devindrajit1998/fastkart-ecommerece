import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import Breadcum from "../Breadcum";
import { Link, useNavigate } from "react-router-dom";
import { UserDataProvider } from "../../ContextAPI/UserContext";

export default function Login() {
  const { handleLoginUser, loginUser, loginSubmit, session } = UserDataProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (session !== false) {
      navigate("/user")
    } else {
      navigate("/login")
    }
  }, [session]);

  // console.log("userName====>", loginUser)
  return (
    <>
      <Layout />
      <Breadcum page="Login" />
      <section className="log-in-section background-image-2 section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="images/inner-page/log-in.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Fastkart</h3>
                  <h4>Log In Your Account</h4>
                </div>
                <div className="input-box">
                  <form className="row g-4">
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="email"
                          className="form-control my_input"
                          onChange={handleLoginUser}
                          name="userName"
                          value={loginUser.userName}
                          placeholder="Email Address"
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="password"
                          className="form-control my_input"
                          id="password"
                          placeholder="Password"
                          name="password"
                          value={loginUser.password}
                          onChange={handleLoginUser}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    {/* <div className="col-12">
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
                            Remember me
                          </label>
                        </div>
                        <a href="forgot.html" className="forgot-password">
                          Forgot Password?
                        </a>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <button
                        className="btn btn-animation w-100 justify-content-center"
                        type="button"
                        onClick={loginSubmit}
                      >
                        Log In
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
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        Log In with Google
                      </Link>
                    </li>
                    <li>
                      <Link className="btn google-button w-100">
                        <img
                          src="images/inner-page/facebook.png"
                          className="blur-up lazyloaded"
                          alt=""
                        />
                        Log In with Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="other-log-in"></div>
                <div className="sign-up-box">
                  <h4>Don't have an account?</h4>
                  <Link to="/signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
