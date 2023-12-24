import React from 'react'

export default function CardPill() {
  return (
    <>
     <div
            className="tab-pane fade show"
            id="pills-card"
            role="tabpanel"
            aria-labelledby="pills-card-tab"
          >
            <div className="dashboard-card">
              <div className="title title-flex">
                <div>
                  <h2>My Card Details</h2>
                </div>
                <button
                  className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#editCard"
                >
                  <i data-feather="plus" className="me-2" /> Add New Card
                </button>
              </div>
              <div className="row g-4">
                <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                  <div className="payment-card-detail">
                    <div className="card-details">
                      <div className="card-number">
                        <h4>XXXX - XXXX - XXXX - 2548</h4>
                      </div>
                      <div className="valid-detail">
                        <div className="title">
                          <span>valid</span>
                          <span>thru</span>
                        </div>
                        <div className="date">
                          <h3>08/05</h3>
                        </div>
                        <div className="primary">
                          <span className="badge bg-pill badge-light">
                            primary
                          </span>
                        </div>
                      </div>
                      <div className="name-detail">
                        <div className="name">
                          <h5>Audrey Carol</h5>
                        </div>
                        <div className="card-img">
                          <img
                            src="images/payment-icon/1.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="edit-card">
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#editCard"
                        href="javascript:void(0)"
                      >
                        <i className="far fa-edit" /> edit
                      </a>
                      <a
                        href="javascript:void(0)"
                        data-bs-toggle="modal"
                        data-bs-target="#removeProfile"
                      >
                        <i className="far fa-minus-square" /> delete
                      </a>
                    </div>
                  </div>
                  <div className="edit-card-mobile">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#editCard"
                      href="javascript:void(0)"
                    >
                      <i className="far fa-edit" /> edit
                    </a>
                    <a href="javascript:void(0)">
                      <i className="far fa-minus-square" />
                      delete
                    </a>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
    </>
  )
}
