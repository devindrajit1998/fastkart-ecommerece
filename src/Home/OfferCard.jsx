import React from "react";

export default function OfferCard() {
  return (
    <>
      <div className="product-box-4 wow fadeInUp">
        <div className="product-image product-image-2">
          <a href="product-left-thumbnail.html">
            <img
              src="images/grocery/deal/1.png"
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>
          <ul className="option">
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Quick View"
            >
              <a href="!" data-bs-toggle="modal" data-bs-target="#view">
                <i className="iconly-Show icli" />
              </a>
            </li>
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Wishlist"
            >
              <a href="!" className="notifi-wishlist">
                <i className="iconly-Heart icli" />
              </a>
            </li>
            <li
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Compare"
            >
              <a href="compare.html">
                <i className="iconly-Swap icli" />
              </a>
            </li>
          </ul>
        </div>
        <div className="product-detail">
          <ul className="rating">
            <li>
              <i data-feather="star" className="fill" />
            </li>
            <li>
              <i data-feather="star" className="fill" />
            </li>
            <li>
              <i data-feather="star" className="fill" />
            </li>
            <li>
              <i data-feather="star" className="fill" />
            </li>
            <li>
              <i data-feather="star" />
            </li>
          </ul>
          <a href="product-left-thumbnail.html">
            <h5 className="name text-title">Potato Chips</h5>
          </a>
          <h5 className="price theme-color">
            $65.21<del>$71.25</del>
          </h5>
          <div className="addtocart_btn">
            <button className="add-button addcart-button btn buy-button text-light">
              <i className="fa-solid fa-plus" />
            </button>
            <div className="qty-box cart_qty">
              <div className="input-group">
                <button
                  type="button"
                  className="btn qty-left-minus"
                  data-type="minus"
                  data-field=""
                >
                  <i className="fa fa-minus" aria-hidden="true" />
                </button>
                <input
                  className="form-control input-number qty-input"
                  type="text"
                  name="quantity"
                  defaultValue={1}
                />
                <button
                  type="button"
                  className="btn qty-right-plus"
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
    </>
  );
}
