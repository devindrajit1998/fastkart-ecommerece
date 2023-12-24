/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useProductProvider } from "../ContextAPI/ProductContext";
import { Link } from "react-router-dom";

export default function ProductBox(props) {
  const { ToggleModal, addCart, addWish } = useProductProvider();
  const {
    id,
    category,
    subcategory,
    subSubcategory,
    name,
    brand,
    description,
    specifications,
    price,
    offerPrice,
    stock,
    thumbnail,
    images,
    ratings,
    reviews,
    saleAvailable,
    featured,
  } = props.items;

  return (
    <>
      <div key={id}>
        <div className="product-box-3 h-100 wow fadeInUp pointer">
          <div className="product-header">
            <div className="product-image">
              <Link to={`/product/${id}`}>
                <img
                  src={thumbnail}
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </Link>
              <ul class="product-option">
                <li onClick={()=>ToggleModal(id)}>
                  <a>
                    <i className="fa-solid fa-eye" />
                  </a>
                </li>
                <li onClick={()=>addCart(id)}>
                  <a>
                    <i className="fa-solid fa-cart-shopping" />
                  </a>
                </li>
                <li onClick={()=>addWish(id)}>
                  <a class="notifi-wishlist">
                    <i className="fa-solid fa-heart" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-footer">
            <div className="product-detail">
              <span className="span-name">{subcategory}</span>
              <a href="product-left-thumbnail.html">
                <h5 className="name">{name}</h5>
              </a>
              <p className="text-content mt-1 mb-2 product-content">
                {description}
              </p>
              <div className="product-rating mt-2">
                <ul className="rating">
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>
                    <i className="fa-solid fa-star-half-stroke" />
                  </li>
                </ul>
                <span>({ratings.average})</span>
              </div>
              <h6 className="unit">{specifications.size}</h6>
              <h5 className="price">
                <span className="theme-color">${offerPrice}</span>{" "}
                <del>${price}</del>
              </h5>
              <div className="add-to-cart-box bg-white">
                <button className="btn btn-add-cart addcart-button" >
                  Add
                  <span className="add-icon bg-light-gray">
                    <i className="fa-solid fa-plus" />
                  </span>
                </button>
                <div className="cart_qty qty-box">
                  <div className="input-group bg-white">
                    <button
                      type="button"
                      className="qty-left-minus bg-gray"
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
                      className="qty-right-plus bg-gray"
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
    </>
  );
}
