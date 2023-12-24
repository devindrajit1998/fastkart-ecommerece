import React from "react";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function ProductData() {
  const { cart, incr, decr, removeSingle } = useProductProvider();
  let hide = "";
  if (cart.length === 0) {
    hide = "d-block";
  } else {
    hide = "d-none";
  }
  return (
    <>
      <h2 className={`border-0 ${hide}`}>Please add items to cart !</h2>
      {cart.map((items) => {
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
          quantity,
        } = items;
        const saving = price - offerPrice;
        const formattedNum = saving.toFixed(2);
        const singleTotal = offerPrice * quantity;
        const formatSingleTotal = singleTotal.toFixed(2);
        
        return (
          <>
            <tr className="product-box-contain" key={id}>
              <td className="product-detail">
                <div className="product border-0">
                  <a
                    href="product-left-thumbnail.html"
                    className="product-image"
                  >
                    <img
                      src={thumbnail}
                      className="img-fluid blur-up lazyloaded"
                      alt=""
                    />
                  </a>
                  <div className="product-detail">
                    <ul>
                      <li className="name">
                        <a href="!">{name}</a>
                      </li>
                      <li className="text-content">
                        <span className="text-title">Sold By:</span> {brand}
                      </li>
                      <li className="text-content">
                        <span className="text-title">Quantity</span> {quantity}
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td className="price">
                <h4 className="table-title text-content">Price</h4>
                <h5>
                  ${offerPrice} 
                  <del className="text-content">${price}</del>
                </h5>
                <h6 className="theme-color">You Save : ${formattedNum}</h6>
              </td>
              <td className="quantity">
                <h4 className="table-title text-content">Qty</h4>
                <div className="quantity-price">
                  <div className="cart_qty">
                    <div className="input-group">
                      <button
                        type="button"
                        className="btn qty-left-minus"
                        onClick={() => decr(id)}
                      >
                        <i className="fa fa-minus ms-0" aria-hidden="true" />
                      </button>
                      <input
                        className="form-control input-number qty-input"
                        type="text"
                        name="quantity"
                        value={quantity}
                      />
                      <button
                        type="button"
                        className="btn qty-right-plus"
                        onClick={() => incr(id)}
                      >
                        <i className="fa fa-plus ms-0" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <td className="subtotal">
                <h4 className="table-title text-content">Total</h4>
                <h5>$ {formatSingleTotal}</h5>
              </td>
              <td className="save-remove">
                <h4 className="table-title text-content">Action</h4>
                {/* <a className="save notifi-wishlist" href="!">
                  Save for later
                </a> */}
                <button
                  className="remove close_button cart_remove"
                  onClick={() => removeSingle(id)}
                >
                  <i class="fa-solid fa-trash-can me-2" />
                  <span>Remove</span>
                </button>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
}
