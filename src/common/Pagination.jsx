/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Pagination() {
  return (
    <>
      <nav class="custome-pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="" tabindex="-1" aria-disabled="true">
              <i class="fa-solid fa-angles-left"></i>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="">
              1
            </a>
          </li>
          <li class="page-item" aria-current="page">
            <a class="page-link" href="">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="">
              <i class="fa-solid fa-angles-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
