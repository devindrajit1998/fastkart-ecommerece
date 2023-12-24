import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useProductProvider } from "../ContextAPI/ProductContext";
import { Link } from "react-router-dom";

export default function CategorySlider() {
  const { AllCategory, NavFilter } = useProductProvider();

  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={8} loop="true" autoplay="true">
        {AllCategory.map((curElem) => {
          return (
            <SwiperSlide>
              <div className="category-box-list" key={curElem.id}>
                <a href="!" className="category-name">
                  <h4>{curElem.name}</h4>
                  {/* <h6>25 items</h6> */}
                </a>
                <div className="category-box-view">
                  <a href="!">
                    <img
                      src={`images/category/${curElem.img}`}
                      className="img-fluid blur-up lazyload cate_img"
                      alt=""
                    />
                  </a>
                  <Link to="/shop"
                    onClick={()=>NavFilter(curElem.name)}
                    className="btn shop-button"
                  >
                    <span>Shop Now</span>
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
