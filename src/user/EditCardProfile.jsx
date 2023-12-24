import React from "react";
import { UserDataProvider } from "../ContextAPI/UserContext";

export default function EditCardProfile() {
  const {ToggleModal} = UserDataProvider();
  return (
    <>
      <div
        className="modal fade theme-modal show"
        id="editProfile"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel2"
        style={{ display: "block", paddingLeft: 0 }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header" style={{}}>
              <h5 className="modal-title" id="exampleModalLabel2">
                Edit Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={ToggleModal}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="row g-4">
                <div className="col-xxl-12">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="pname"
                        defaultValue="Jack Jennas"
                      />
                      <label htmlFor="pname">Full Name</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-6">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email1"
                        defaultValue="vicki.pope@gmail.com"
                      />
                      <label htmlFor="email1">Email address</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-6">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        className="form-control"
                        type="tel"
                        defaultValue={4567891234}
                        name="mobile"
                        id="mobile"
                        maxLength={10}
                        oninput=""
                      />
                      <label htmlFor="mobile">Email address</label>
                    </div>
                  </form>
                </div>
                <div className="col-12">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="address1"
                        defaultValue="8424 James Lane South San Francisco"
                      />
                      <label htmlFor="address1">Add Address</label>
                    </div>
                  </form>
                </div>
                <div className="col-12">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        defaultValue="CA 94080"
                      />
                      <label htmlFor="address2">Add Address 2</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <select
                        className="form-select"
                        id="floatingSelect1"
                        aria-label="Floating label select example"
                      >
                        <option selected="">Choose Your Country</option>
                        <option value="kindom">United Kingdom</option>
                        <option value="states">United States</option>
                        <option value="fra">France</option>
                        <option value="china">China</option>
                        <option value="spain">Spain</option>
                        <option value="italy">Italy</option>
                        <option value="turkey">Turkey</option>
                        <option value="germany">Germany</option>
                        <option value="russian">Russian Federation</option>
                        <option value="malay">Malaysia</option>
                        <option value="mexico">Mexico</option>
                        <option value="austria">Austria</option>
                        <option value="hong">Hong Kong SAR, China</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="thailand">Thailand</option>
                        <option value="saudi">Saudi Arabia</option>
                        <option value="canada">Canada</option>
                        <option value="singa">Singapore</option>
                      </select>
                      <label htmlFor="floatingSelect">Country</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <select className="form-select" id="floatingSelect">
                        <option selected="">Choose Your City</option>
                        <option value="kindom">India</option>
                        <option value="states">Canada</option>
                        <option value="fra">Dubai</option>
                        <option value="china">Los Angeles</option>
                        <option value="spain">Thailand</option>
                      </select>
                      <label htmlFor="floatingSelect">City</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="address3"
                        defaultValue={94080}
                      />
                      <label htmlFor="address3">Pin Code</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-animation btn-md fw-bold"
                onClick={ToggleModal}
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn theme-bg-color btn-md fw-bold text-light"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
