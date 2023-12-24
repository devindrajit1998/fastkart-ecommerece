import React from "react";
import DashboardPill from "./DashboardPill";
import OrderPill from "./OrderPill";
import AddressPill from "./AddressPill";
import CardPill from "./CardPill";
import ProfilePill from "./ProfilePill";
import PrivacyPill from "./PrivacyPill";
import WishPill from "./WishPill";


export default function RightBody() {


  return (
    <>
      <div className="dashboard-right-sidebar">
        <div className="tab-content" id="pills-tabContent">
          <DashboardPill/>
          <OrderPill />
          <WishPill/>
          <AddressPill />
          <CardPill />
          <ProfilePill />
          <PrivacyPill />
        </div>
      </div>
    </>
  );
}
