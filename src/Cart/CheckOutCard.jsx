import React from "react";
import { useProductProvider } from "../ContextAPI/ProductContext";
import { Link } from "react-router-dom";

export default function CheckOutCard() {
  const {
    total,
    cart,
    handleOnChange,
    cupon,
    matchCupon,
    checkOutPrice,
    finalTotalSave,
    offerDiscount,
  } = useProductProvider();

  // checkout page redirect checkin------------------->
  let link = "";

  if (cart.length > 0) {
    link = "/checkout";
  } else {
    link = "";
  }

  return (
    <>
      <div className="summery-box p-sticky">
        <div className="summery-header">
          <h3>Cart Total</h3>
        </div>
        <div className="summery-contain">
          <div className="coupon-cart">
            <h6 className="text-content mb-2">Cupon Apply</h6>
            <div className="mb-3 coupon-box input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Coupon Code Here..."
                onChange={handleOnChange}
                value={cupon}
              />
              <button className="btn-apply" onClick={() => matchCupon(cupon)}>
                Apply
              </button>
            </div>
          </div>
          <ul>
            <li>
              <h4>Subtotal</h4>
              <h4 className="price">${total}</h4>
            </li>
            <li>
              <h4>Coupon Discount</h4>
              <h4 className="price">- ${offerDiscount}</h4>
            </li>
            <li>
              <h4>Total Discount</h4>
              <h4 className="price">- ${finalTotalSave}</h4>
            </li>
            {/* <li className="align-items-start">
                                            <h4>Shipping</h4>
                                            <h4 className="price text-end">$6.90</h4>
                                        </li> */}
          </ul>
        </div>
        <ul className="summery-total">
          <li className="list-total border-top-0">
            <h4>Total</h4>
            <h4 className="price theme-color">${checkOutPrice}</h4>
          </li>
        </ul>
        <div className="button-group cart-button">
          <ul>
            <li>
              <Link
                to={link}
                onClick={() => matchCupon(cupon)}
                className="btn btn-animation proceed-btn fw-bold"
              >
                Process To Checkout
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="btn btn-light shopping-button text-dark"
              >
                <i className="fa-solid fa-arrow-left-long me-2" />
                Return To Shopping
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
