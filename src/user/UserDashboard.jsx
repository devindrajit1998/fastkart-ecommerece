import React from "react";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

export default function UserDashboard() {

  return (
    <>
      <section className="user-dashboard-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-lg-4">
              <LeftBody />
            </div>
            <div className="col-xxl-9 col-lg-8">
              <RightBody/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
