import React from "react";

export default function ImageSlider({ filterSingle }) {
  return (
    <>
      <div className="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
        <div className="slider-image">
          <img className="w-100" src={filterSingle.thumbnail} alt="" />
        </div>
      </div>
    </>
  );
}
