import React from 'react'

export default function WishPill() {
  return (
    <>
      <div
            className="tab-pane fade show"
            id="pills-wishlist"
            role="tabpanel"
            aria-labelledby="pills-wishlist-tab"
          >
            <div className="dashboard-wishlist">
              <div className="title">
                <h2>My Wishlist History</h2>
              </div>
              <div className="row g-sm-4 g-3">
                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-box-3 theme-bg-white h-100">
                    <div className="product-header">
                      <div className="product-image">
                        <a href="product-left-thumbnail.html">
                          <img
                            src="images/cake/product/2.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </a>
                        <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                            <i className='fa-solid fa-xmark'/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <div className="product-detail">
                        <span className="span-name">Vegetable</span>
                        <a href="product-left-thumbnail.html">
                          <h5 className="name">
                            Fresh Bread and Pastry Flour 200 g
                          </h5>
                        </a>
                        <p className="text-content mt-1 mb-2 product-content">
                          Cheesy feet cheesy grin brie. Mascarpone cheese and
                          wine hard cheese the big cheese everyone loves smelly
                          cheese macaroni cheese croque monsieur.
                        </p>
                        <h6 className="unit mt-1">250 ml</h6>
                        <h5 className="price">
                          <span className="theme-color">$08.02</span>
                          <del>$15.15</del>
                        </h5>
                        <div className="add-to-cart-box mt-2">
                          <button
                            className="btn btn-add-cart addcart-button"
                            tabIndex={0}
                          >
                            Add
                            <span className="add-icon">
                              <i className="fa-solid fa-plus" />
                            </span>
                          </button>
                          <div className="cart_qty qty-box">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                defaultValue={0}
                              />
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
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
