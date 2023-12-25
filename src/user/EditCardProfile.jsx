import React from "react";
import { UserDataProvider } from "../ContextAPI/UserContext";
import City from "./City";
import Country from "./Country";
import State from "./State";

export default function EditCardProfile() {
  const { ToggleModal, HandleAddressEdit, EditAdress, newUser, user, loggedUser } =
    UserDataProvider();

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
              <button type="button" className="btn-close" onClick={ToggleModal}>
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
                        name="name"
                        value={newUser.name}
                        onChange={HandleAddressEdit}
                      />
                      <label>Full Name</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-6">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        className="form-control"
                        type="tel"
                        maxLength={10}
                        name="phone"
                        onChange={HandleAddressEdit}
                        value={newUser.phone}
                      />
                      <label>Phone</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-6">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        className="form-control"
                        type="tel"
                        maxLength={6}
                        name="pin"
                        onChange={HandleAddressEdit}
                        value={newUser.pin}
                      />
                      <label>Pin Code</label>
                    </div>
                  </form>
                </div>
                <div className="col-12">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <input
                        type="text"
                        className="form-control"
                        onChange={HandleAddressEdit}
                        value={newUser.address}
                        name="address"
                      />
                      <label>Add Address</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <select
                        className="form-select"
                        onChange={HandleAddressEdit}
                        value={newUser.country}
                        name="country"
                      >
                        <Country />
                      </select>
                      <label>Country</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <select
                        className="form-select"
                        onChange={HandleAddressEdit}
                        value={newUser.state}
                        name="state"
                      >
                        <State />
                      </select>
                      <label>State</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <select
                        className="form-select"
                        onChange={HandleAddressEdit}
                        value={newUser.city}
                        name="city"
                      >
                        <City />
                      </select>
                      <label>City</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-6">
                  <form>
                    <div className="form-floating theme-form-floating">
                      <select
                        className="form-select"
                        onChange={HandleAddressEdit}
                        value={newUser.gender}
                        name="gender"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <label>Gender</label>
                    </div>
                  </form>
                </div>
                <div className="col-xxl-6">
                  <form>
                    <div className="form-floating theme-form-floating">
                     <input type="date"  className="form-control" onChange={HandleAddressEdit} value={newUser.DOB} name="DOB"/>
                      <label>Date Of Birth</label>
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
              onClick={EditAdress}
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
