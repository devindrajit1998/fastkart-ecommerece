import React from 'react'

export default function DeliveryOption() {
  return (
   <>
   <li>
  <div className="checkout-icon">
    <lord-icon
      target=".nav-item"
      src="https://cdn.lordicon.com/oaflahpk.json"
      trigger="loop-on-hover"
      colors="primary:#0baf9a"
      className="lord-icon"
    ></lord-icon>
  </div>
  <div className="checkout-box">
    <div className="checkout-title">
      <h4>Delivery Option</h4>
    </div>
    <div className="checkout-detail">
      <div className="row g-4">
        <div className="col-xxl-6">
          <div className="delivery-option">
            <div className="delivery-category">
              <div className="shipment-detail">
                <div className="form-check custom-form-check hide-check-box">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="standard"
                    id="standard"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="standard">
                    Standard Delivery Option
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="delivery-option">
            <div className="delivery-category">
              <div className="shipment-detail">
                <div className="form-check mb-0 custom-form-check show-box-checked">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="standard"
                    id="future"
                  />
                  <label className="form-check-label" htmlFor="future">
                    Future Delivery Option
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 future-box">
          <div className="future-option">
            <div className="row g-md-0 gy-4">
              <div className="col-md-6">
                <div className="delivery-items">
                  <div>
                    <h5 className="items text-content">
                      <span>3 Items</span>@ $693.48
                    </h5>
                    <h5 className="charge text-content">
                      Delivery Charge $34.67
                      <button
                        type="button"
                        className="btn p-0"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Extra Charge"
                      >
                        <i className="fa-solid fa-circle-exclamation" />
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <form className="form-floating theme-form-floating date-box">
                  <input type="date" className="form-control" />
                  <label>Select Date</label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>

   </>
  )
}
