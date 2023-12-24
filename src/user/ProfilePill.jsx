import React, { useEffect } from "react";
import { UserDataProvider } from "../ContextAPI/UserContext";
import { useNavigate } from "react-router-dom";
import EditCardProfile from "./EditCardProfile";

export default function ProfilePill() {
  const { Logout, session } = UserDataProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (session === true) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  }, [session]);
  return (
    <>
      <div
        className="tab-pane fade show"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <div className="dashboard-profile">
          <div className="title">
            <h2>My Profile</h2>
          </div>
          <div className="profile-detail dashboard-bg-box">
            <div className="dashboard-title">
              <h3>Profile Name</h3>
            </div>
            <div className="profile-name-detail">
              <div className="d-sm-flex align-items-center d-block">
                <h3>Vicki E. Pope</h3>
              </div>
              <a
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target="#editProfile"
              >
                Edit
              </a>
            </div>

            <div className="profile-description">
              <p>
                Residences can be classified by and how they are connected to
                neighbouring residences and land. Different types of housing
                tenure can be used for the same physical type.
              </p>
            </div>
          </div>
          <div className="profile-about dashboard-bg-box">
            <div className="row">
              <div className="col-xxl-7">
                <div className="dashboard-title mb-3">
                  <h3>Profile About</h3>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Gender :</td>
                        <td>Female</td>
                      </tr>
                      <tr>
                        <td>Birthday :</td>
                        <td>21/05/1997</td>
                      </tr>
                      <tr>
                        <td>Phone Number :</td>
                        <td>
                          <a href="javascript:void(0)">+91 846 - 547 - 210</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Address :</td>
                        <td>549 Sulphur Springs Road, Downers, IL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="dashboard-title mb-3">
                  <h3>Login Details</h3>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Email :</td>
                        <td>
                          <a href="javascript:void(0)">
                            vicki.pope@gmail.com
                            <span
                              data-bs-toggle="modal"
                              data-bs-target="#editProfile"
                            >
                              Edit
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Password :</td>
                        <td>
                          <a href="javascript:void(0)">
                            ●●●●●●
                            <span
                              data-bs-toggle="modal"
                              data-bs-target="#editProfile"
                            >
                              Edit
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            className="pointer btn btn-animation mt-5 text-white"
                            onClick={Logout}
                          >
                            <i class="fa-solid fa-arrow-right-from-bracket me-2" />
                            Logout{" "}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-xxl-5">
                <div className="profile-image">
                  <img
                    src="images/inner-page/dashboard-profile.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <EditCardProfile/> */}
    </>
  );
}
