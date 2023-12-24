import React from 'react'

export default function AddressPill() {
  return (
<>
<div
            className="tab-pane fade show"
            id="pills-address"
            role="tabpanel"
            aria-labelledby="pills-address-tab"
          >
            <div className="dashboard-address">
              <div className="title title-flex">
                <div>
                  <h2>My Address Book</h2>
                  <span className="title-leaf">
                    <svg className="icon-width bg-gray">
                      <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                    </svg>
                  </span>
                </div>
                <button
                  className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#add-address"
                >
                  <i data-feather="plus" className="me-2" /> Add New Address
                </button>
              </div>
              <div className="row g-sm-4 g-3">
                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                  <div className="address-box">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jack"
                          id="flexRadioDefault2"
                          defaultChecked=""
                        />
                      </div>
                      <div className="label">
                        <label>Home</label>
                      </div>
                      <div className="table-responsive address-table">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td colSpan={2}>Jack Jennas</td>
                            </tr>
                            <tr>
                              <td>Address :</td>
                              <td>
                                <p>
                                  8424 James Lane South San Francisco, CA 94080
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>Pin Code :</td>
                              <td>+380</td>
                            </tr>
                            <tr>
                              <td>Phone :</td>
                              <td>+ 812-710-3798</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="button-group">
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#editProfile"
                      >
                        <i data-feather="edit" />
                        Edit
                      </button>
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#removeProfile"
                      >
                        <i data-feather="trash-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                  <div className="address-box">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jack"
                          id="flexRadioDefault3"
                        />
                      </div>
                      <div className="label">
                        <label>Office</label>
                      </div>
                      <div className="table-responsive address-table">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td colSpan={2}>Terry S. Sutton</td>
                            </tr>
                            <tr>
                              <td>Address :</td>
                              <td>
                                <p>2280 Rose Avenue Kenner, LA 70062</p>
                              </td>
                            </tr>
                            <tr>
                              <td>Pin Code :</td>
                              <td>+25</td>
                            </tr>
                            <tr>
                              <td>Phone :</td>
                              <td>+ 504-228-0969</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="button-group">
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#editProfile"
                      >
                        <i data-feather="edit" />
                        Edit
                      </button>
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#removeProfile"
                      >
                        <i data-feather="trash-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                  <div className="address-box">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jack"
                          id="flexRadioDefault4"
                        />
                      </div>
                      <div className="label">
                        <label>Neighbour</label>
                      </div>
                      <div className="table-responsive address-table">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td colSpan={2}>Juan M. McKeon</td>
                            </tr>
                            <tr>
                              <td>Address :</td>
                              <td>
                                <p>1703 Carson Street Lexington, KY 40593</p>
                              </td>
                            </tr>
                            <tr>
                              <td>Pin Code :</td>
                              <td>+78</td>
                            </tr>
                            <tr>
                              <td>Phone :</td>
                              <td>+ 859-257-0509</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="button-group">
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#editProfile"
                      >
                        <i data-feather="edit" />
                        Edit
                      </button>
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#removeProfile"
                      >
                        <i data-feather="trash-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                  <div className="address-box">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jack"
                          id="flexRadioDefault5"
                        />
                      </div>
                      <div className="label">
                        <label>Home 2</label>
                      </div>
                      <div className="table-responsive address-table">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td colSpan={2}>Gary M. Bailey</td>
                            </tr>
                            <tr>
                              <td>Address :</td>
                              <td>
                                <p>
                                  2135 Burning Memory Lane Philadelphia, PA
                                  19135
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>Pin Code :</td>
                              <td>+26</td>
                            </tr>
                            <tr>
                              <td>Phone :</td>
                              <td>+ 215-335-9916</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="button-group">
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#editProfile"
                      >
                        <i data-feather="edit" />
                        Edit
                      </button>
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#removeProfile"
                      >
                        <i data-feather="trash-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                  <div className="address-box">
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="jack"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="label">
                        <label>Home 2</label>
                      </div>
                      <div className="table-responsive address-table">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td colSpan={2}>Gary M. Bailey</td>
                            </tr>
                            <tr>
                              <td>Address :</td>
                              <td>
                                <p>
                                  2135 Burning Memory Lane Philadelphia, PA
                                  19135
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>Pin Code :</td>
                              <td>+26</td>
                            </tr>
                            <tr>
                              <td>Phone :</td>
                              <td>+ 215-335-9916</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="button-group">
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#editProfile"
                      >
                        <i data-feather="edit" />
                        Edit
                      </button>
                      <button
                        className="btn btn-sm add-button w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#removeProfile"
                      >
                        <i data-feather="trash-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</>
  )
}
