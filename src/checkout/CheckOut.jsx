import React from "react";
import Layout from "../Layout/Layout";
import Breadcum from "../common/Breadcum";
import RightCard from "./RightCard";
import AdressCard from "./AdressCard";
import Payment from "./Payment";

export default function CheckOut() {
  return (
    <>
      <Layout />
      <Breadcum page="Checkout" />
      <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-lg-8">
              <div className="left-sidebar-checkout">
                <div className="checkout-detail-box">
                  <ul>
                    <AdressCard />
                    <Payment/>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <RightCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
