import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AddProducts from "../products/AddProducts";


export default function AdminLayout() {
  return (
    <>
      <div className="page-wrapper compact-wrapper">
        <Header />
        <div class="page-body-wrapper">
          <Sidebar/>
          <AddProducts/>
        </div>
      </div>
    </>
  );
}
