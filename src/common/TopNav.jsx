import React from 'react'

export default function TopNav() {
  return (
    <>
    <div className="top-nav sticky-header sticky-header-2">
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="navbar-top">
          <button
            className="navbar-toggler d-xl-none d-block p-0 me-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu"
          >
            <span className="navbar-toggler-icon">
              <i className="iconly-Category icli" />
            </span>
          </button>
          <a href="index.html" className="web-logo nav-logo">
            <img
              src="images/logo/4.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>
          <div className="search-full">
            <div className="input-group">
              <span className="input-group-text">
                <i data-feather="search" className="font-light" />
              </span>
              <input
                type="text"
                className="form-control search-type"
                placeholder="Search here.."
              />
              <span className="input-group-text close-search">
                <i data-feather="x" className="font-light" />
              </span>
            </div>
          </div>
          <div className="middle-box">
            <div className="center-box">
              <div className="searchbar-box-2 input-group d-xl-flex d-none">
                <button className="btn search-icon" type="button">
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products, styles,brands..."
                />
                <button className="btn search-button" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="rightside-menu support-sidemenu">
            <div className="support-box">
              <div className="support-image">
                <img
                  src="images/icon/support.png"
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </div>
              <div className="support-number">
                <h2>(123) 456 7890</h2>
                <h4>24/7 Support Center</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
