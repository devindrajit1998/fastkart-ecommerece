import React, { useEffect, useState } from "react";
import { UserDataProvider } from "../ContextAPI/UserContext";
import { Link, useNavigate } from "react-router-dom";
import EditCardProfile from "./EditCardProfile";
import PasswordModal from "./PasswordModal";


export default function ProfilePill() {
  
  const { Logout, session, loggedUser,open, ToggleModal, openPassword, TogglePassword , user} = UserDataProvider();
  const navigate = useNavigate();
  const[userData, setUserData]= useState({});

useEffect(()=>{
  if(loggedUser && loggedUser.length > 0){
    const findUser = user.find((item)=>item.id === loggedUser.id);
    setUserData(findUser)
  }
},[session])

 
  console.log("userData", userData)

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
                <h3>{loggedUser.name}</h3>
              </div>
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
                        <td>{loggedUser.gender}</td>
                      </tr>
                      <tr>
                        <td>Birthday :</td>
                        <td>{loggedUser.DOB}</td>
                      </tr>
                      <tr>
                        <td>Phone Number :</td>
                        <td>{loggedUser.phone}</td>
                      </tr>
                      <tr>
                        <td>Address :</td>
                        <td>{loggedUser.address}</td>
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
                          <Link>{loggedUser.userName}</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Password :</td>
                        <td>
                          <Link >
                            ●●●●●●
                            <span
                              onClick={TogglePassword}
                            >
                              Edit
                            </span>
                          </Link>
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
      {/* {open && <EditCardProfile />} */}
      {openPassword && <PasswordModal/>}
    </>
  );
}
