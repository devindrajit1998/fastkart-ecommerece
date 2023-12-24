import React from "react";

export default function OrderPill() {
  return (
    <>
      <div
        className="tab-pane fade show"
        id="pills-order"
        role="tabpanel"
        aria-labelledby="pills-order-tab"
      >
        <div className="dashboard-order">
          <div className="title">
            <h2>My Orders History</h2>
          </div>
          <div className="order-contain">
            <div className="order-box dashboard-bg-box">
              <div className="order-container">
                <div className="order-icon">
                  <i data-feather="box" />
                </div>
                <div className="order-detail">
                  <h4>
                    Delivere <span>Panding</span>
                  </h4>
                  <h6 className="text-content">
                    Gouda parmesan caerphilly mozzarella cottage cheese
                    cauliflower cheese taleggio gouda.
                  </h6>
                </div>
              </div>
              <div className="product-order-detail">
                <a href="product-left-thumbnail.html" className="order-image">
                  <img
                    src="images/vegetable/product/1.png"
                    className="blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="order-wrap">
                  <a href="product-left-thumbnail.html">
                    <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                  </a>
                  <p className="text-content">
                    Cheddar dolcelatte gouda. Macaroni cheese cheese strings
                    feta halloumi cottage cheese jarlsberg cheese triangles say
                    cheese.
                  </p>
                  <ul className="product-size">
                    <li>
                      <div className="size-box">
                        <h6 className="text-content">Price : </h6>
                        <h5>$20.68</h5>
                      </div>
                    </li>
                    <li>
                      <div className="size-box">
                        <h6 className="text-content">Sold By : </h6>
                        <h5>Fresho</h5>
                      </div>
                    </li>
                    <li>
                      <div className="size-box">
                        <h6 className="text-content">Quantity : </h6>
                        <h5>250 G</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
