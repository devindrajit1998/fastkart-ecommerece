import React from 'react'
import { UserDataProvider } from '../ContextAPI/UserContext'

export default function PasswordModal() {
    const {TogglePassword} = UserDataProvider();
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
            <div className="modal-header" >
              <h5 className="modal-title" id="exampleModalLabel2">
                Edit Password
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={TogglePassword}
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
                        value={123456789}
                      />
                      <label>Old Password</label>
                    </div>
                    <div className="form-floating theme-form-floating mt-4">
                      <input
                        type="text"
                        className="form-control"
                        value={123456789}
                      />
                      <label>New Password</label>
                    </div>
                    <div className="form-floating theme-form-floating mt-4">
                      <input
                        type="password"
                        className="form-control"
                        value={123456789}
                      />
                      <label>Confirm New Password</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-animation btn-md fw-bold"
                onClick={TogglePassword}
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
  )
}
