import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MiniSlider() {
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={4} loop="true" autoplay="true">
        <SwiperSlide>
          <div>
            <div className=" banner-contain-3 hover-effect">
              <a href="!">
                <img
                  src="images/grocery/banner/2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
              <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
                <div>
                  <h5 className="fw-light mb-2">50% Discount</h5>
                  <h4 className="fw-bold mb-0">Summer Ice Cream</h4>
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
                  >
                    Shop Now <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=" banner-contain-3 hover-effect">
              <a href="!">
                <img
                  src="images/grocery/banner/2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
              <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
                <div>
                  <h5 className="fw-light mb-2">50% Discount</h5>
                  <h4 className="fw-bold mb-0">Summer Ice Cream</h4>
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
                  >
                    Shop Now <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=" banner-contain-3 hover-effect">
              <a href="!">
                <img
                  src="images/grocery/banner/2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
              <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
                <div>
                  <h5 className="fw-light mb-2">50% Discount</h5>
                  <h4 className="fw-bold mb-0">Summer Ice Cream</h4>
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
                  >
                    Shop Now <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=" banner-contain-3 hover-effect">
              <a href="!">
                <img
                  src="images/grocery/banner/2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
              <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
                <div>
                  <h5 className="fw-light mb-2">50% Discount</h5>
                  <h4 className="fw-bold mb-0">Summer Ice Cream</h4>
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
                  >
                    Shop Now <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=" banner-contain-3 hover-effect">
              <a href="!">
                <img
                  src="images/grocery/banner/2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
              <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
                <div>
                  <h5 className="fw-light mb-2">50% Discount</h5>
                  <h4 className="fw-bold mb-0">Summer Ice Cream</h4>
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
                  >
                    Shop Now <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
