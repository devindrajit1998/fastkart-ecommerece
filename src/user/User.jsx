import React from "react";
import Layout from "../Layout/Layout";
import Breadcum from "../common/Breadcum";
import UserDashboard from "./UserDashboard";

export default function User() {
  return (
    <>
      <Layout />
      <Breadcum page="User Dashboard" />
      <UserDashboard/>
    </>
  );
}
