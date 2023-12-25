import React from "react";
import { UserDataProvider } from "../ContextAPI/UserContext";

export default function LeftBody() {

  const {loggedUser, handleImageUpload, ImageUpload} = UserDataProvider();

  return (
    <>
      <div className="dashboard-left-sidebar">
        <div className="close-button d-flex d-lg-none">
          <button className="close-sidebar">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="profile-box">
          <div className="cover-image">
            <img
              src="images/inner-page/cover-img.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </div>
          <div className="profile-contain">
            <div className="profile-image">
              <div className="position-relative">
                <img
                  src="images/inner-page/user/1.jpg"
                  className="blur-up lazyload update_img"
                  alt=""
                />
                <div className="cover-icon">
                  <i className="fa-solid fa-pen">
                  <input type="file" onChange={handleImageUpload} />
                  </i>
                </div>
              </div>
            </div>
            <div className="profile-name">
              <h3 onClick={ImageUpload}>{loggedUser.name}</h3>
              <h6 className="text-content">{loggedUser.userName}</h6>
            </div>
          </div>
        </div>
        <ul
          className="nav nav-pills user-nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-dashboard-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-dashboard"
              type="button"
              role="tab"
              aria-controls="pills-dashboard"
              aria-selected="true"
            >
              <i class="fa-solid fa-house me-2"/>
              DashBoard
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-order-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-order"
              type="button"
              role="tab"
              aria-controls="pills-order"
              aria-selected="false"
            >
              <i class="fa-solid fa-bag-shopping me-2" />
              Order
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-wishlist-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-wishlist"
              type="button"
              role="tab"
              aria-controls="pills-wishlist"
              aria-selected="false"
            >
            <i class="fa-solid fa-heart me-2"/>
              Wishlist
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-card-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-card"
              type="button"
              role="tab"
              aria-controls="pills-card"
              aria-selected="false"
            >
              <i class="fa-solid fa-credit-card me-2"/> Saved Card
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-address-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-address"
              type="button"
              role="tab"
              aria-controls="pills-address"
              aria-selected="false"
            >
             <i class="fa-solid fa-location-pin me-2"/>
              Address
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <i class="fa-solid fa-user me-2"/>
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-security-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-security"
              type="button"
              role="tab"
              aria-controls="pills-security"
              aria-selected="false"
            >
             <i class="fa-solid fa-shield me-2"/>
              Privacy
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
