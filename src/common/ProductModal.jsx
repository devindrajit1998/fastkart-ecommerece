import React from "react";
import { useProductProvider } from "../ContextAPI/ProductContext";
import { Link } from "react-router-dom";

export default function ProductModal(id) {

  const { ToggleModal, modalData, addCart } = useProductProvider();
  const updatedData = [modalData];
  


  return (
    <>
      <div
        className="fade theme-modal view-modal show"
        id="view"

      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header p-0">
              <button
                type="button"
                className="btn-close"
                onClick={ToggleModal}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            {updatedData.map((curElem) => {
              // console.log('new page modal data', updatedData)
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
              } = curElem;
              return (
                <>
                  <div className="modal-body" key={id}>
                    <div className="row g-sm-4 g-2">
                      <div className="col-lg-6">
                        <div className="slider-image">
                          <img
                            src={thumbnail}
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-sidebar-modal">
                          <h4 className="title-name">
                            {name}
                          </h4>
                          <h4 className="price">$ {price}</h4>
                          <div className="product-rating">
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
                            {/* <span className="ms-2">8 Reviews</span>
                            <span className="ms-2 text-danger">
                              6 sold in last 16 hours
                            </span> */}
                          </div>
                          <div className="product-detail">
                            <h4>Product Details :</h4>
                            <p>
                             {description}
                            </p>
                          </div>
                          <ul className="brand-list">
                            <li>
                              <div className="brand-box">
                                <h5>Brand Name:</h5>
                                <h6>{brand}</h6>
                              </div>
                            </li>
                            <li>
                              <div className="brand-box">
                                <h5>Product Code:</h5>
                                <h6>{model}</h6>
                              </div>
                            </li>
                            <li>
                              <div className="brand-box">
                                <h5>Product Type:</h5>
                                <h6>{subcategory} ( {subSubcategory})</h6>
                              </div>
                            </li>
                          </ul>
                          <div className="modal-button">
                            <button
                              onClick={()=>addCart(id)}
                              className="btn btn-md add-cart-button icon"
                            >
                              Add To Cart
                            </button>
                            <Link
                              to={`/product/${id}`}
                              className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                            >
                              View More Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
