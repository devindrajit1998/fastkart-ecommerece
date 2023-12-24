import React from "react";
import Layout from "../Layout/Layout";
import Breadcum from "../common/Breadcum";
import { useProductProvider } from "../ContextAPI/ProductContext";
import ProductBox from "./ProductBox";
import Pagination from "../common/Pagination";
import ProductModal from "../common/ProductModal";
export default function Shop() {
  const { AllCategory, shopData, filterByCategory, openModal, modalData } = useProductProvider();

  return (
    <>
      <Layout />
      <Breadcum page="Shop Page" />
      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-custome-3">
              <div className="left-box wow fadeInUp">
                <div className="shop-left-sidebar">
                  <ul
                    className="nav nav-pills mb-3 custom-nav-tab"
                    id="pills-tab"
                    role="tablist"
                  >
                    {AllCategory.map((curElem) => {
                      return (
                        <li
                          className="nav-item"
                          role="presentation"
                          key={curElem.id}
                        >
                          <button
                            className="nav-link "
                            onClick={() => filterByCategory(curElem.name)}
                          >
                            {curElem.name}
                            {/* <img
                              src={`images/category/${curElem.img}`}
                              className="blur-up lazyload"
                              alt=""
                            /> */}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-custome-9">
              <div class="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                {shopData.map((items) => {
                  return <ProductBox items={items} />;
                })}
              </div>
              <Pagination />
            </div>
          </div>
          {openModal && (
            <ProductModal />
          )}
        </div>
      </section>
    </>
  );
}
