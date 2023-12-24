import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useProductProvider } from "../ContextAPI/ProductContext";

export default function MainSlider() {
  const { banner } = useProductProvider();

  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={1} loop="true" autoplay="true">
        {banner.map((item) => {
          return (
            <>
              <SwiperSlide>
                <div className="home-contain rounded-0 p-0">
                  <img
                    src={item.image}
                    className="img-fluid bg-img blur-up lazyload"
                    alt=""/>
                  <div className="home-detail home-big-space p-center-left home-overlay position-relative">
                    <div className="container-fluid-lg">
                      <div>
                        <h6 className="ls-expanded theme-color text-uppercase">
                        {item.tagline}
                        </h6>
                        <h1 className="heding-2">{item.title}</h1>
                        <h2 className="content-2">
                        {item.subTitle}
                        </h2>
                        <h5 className="text-content">
                        {item.tagline2}
                        </h5>
                        <button
                          className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                          onclick="location.href = 'shop-left-sidebar.html';"
                        >
                          Shop Now{" "}
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
