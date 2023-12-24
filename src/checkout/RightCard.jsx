import React from "react";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function RightCard() {
  const {cart,total,offerDiscount,checkOutPrice,finalTotalSave}= useProductProvider();
const subTotal = (total - finalTotalSave).toFixed(2)
  return (
    <>
      <div className="right-side-summery-box">
        <div className="summery-box-2">
          <div className="summery-header">
            <h3>Order Summery</h3>
          </div>
          <ul className="summery-contain">

            {cart.map((items)=>{
              return (
                <li>
                <img
                  src={items.thumbnail}
                  className="img-fluid blur-up lazyloaded checkout-image"
                  alt=""
                />
                <h4>
                {items.name} <span>X {items.quantity}</span>
                </h4>
                <h4 className="price">${items.offerPrice}</h4>
              </li>
              )
            })}
           
          </ul>
          <ul className="summery-total">
            <li>
              <h4>Subtotal</h4>
              <h4 className="price">${subTotal}</h4>
            </li>
            {/* <li>
              <h4>Shipping</h4>
              <h4 className="price">+ $8.90</h4>
            </li> */}
            <li>
              <h4>Coupon/Code</h4>
              <h4 className="price">- ${offerDiscount}</h4>
            </li>
            <li className="list-total">
              <h4>Total </h4>
              <h4 className="price">${checkOutPrice}</h4>
            </li>
          </ul>
        </div>
        <div className="checkout-offer">
          <div className="offer-title">
            <div className="offer-icon">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/offer.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="offer-name">
              <h6>Available Offers</h6>
            </div>
          </div>
          <ul className="offer-detail">
            <li>
              <p>
                Combo: BB Royal Almond/Badam Californian, Extra Bold 100 gm...
              </p>
            </li>
          </ul>
        </div>
        <button className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">
          Place Order
        </button>
      </div>
    </>
  );
}
