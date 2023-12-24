import React from "react";
import { Link } from "react-router-dom";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function RightBox({ filterSingle }) {
    const {addCart, addWish} = useProductProvider()
  const {
    id,
    category,
    subcategory,
    subSubcategory,
    name,
    brand,
    model,
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
  } = filterSingle;
  const keys = Object.keys(filterSingle.specifications);
  console.log(keys);
  return (
    <>
     
      <div className="right-box-contain">
        {/* <h6 className="offer-top">30% Off</h6> */}
        <h2 className="name">{name}</h2>
        <div className="price-rating">
          <h3 className="theme-color price">
            ${offerPrice} <del className="text-content">${price}</del>
            {/* <span className="offer theme-color">(8% off)</span> */}
          </h3>
        </div>
        <div className="procuct-contain">
          <p>{description}</p>
        </div>
        <div className="product-packege">
          <div className="product-title">{/* <h4>Weight</h4> */}</div>
          <ul className="select-packege">
            <li>
              <Link>{specifications.weight}</Link>
            </li>

            <li>
              <Link>{specifications.color}</Link>
            </li>
          </ul>
        </div>

        <div className="note-box product-packege">
          <button
           onClick={()=>addCart(id)}
            className="btn btn-md bg-dark cart-button text-white w-100">
            Add To Cart
          </button>
        </div>
        <div className="buy-box">
          <Link onClick={()=>addWish(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>Add To Wishlist</span>
          </Link>
        </div>
        <div className="pickup-box">
          {/* <div className="product-title">
            <h4>Store Information</h4>
          </div>
          <div className="pickup-detail">
            <h4 className="text-content">
              Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread
              sugar plum dessert powder cookie sweet brownie.
            </h4>
          </div> */}
          <div className="product-info">
            <ul className="product-info-list product-info-list-2">
              {keys.map((key, index) => {
                return (
                  <li key={index}>
                    {key} :
                    <Link>
                      {JSON.stringify(filterSingle.specifications[key])}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <div className="paymnet-option">
                    <div className="product-title">
                        <h4>Guaranteed Safe Checkout</h4>
                    </div>
                    <ul>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/1.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/2.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/3.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/4.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="!">
                                <img
                                    src="images/product/payment/5.svg"
                                    className="blur-up lazyloaded"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </div> */}
      </div>
    </>
  );
}
