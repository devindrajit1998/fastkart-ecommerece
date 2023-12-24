import React from 'react'
import Layout from '../Layout/Layout'
import Breadcum from '../common/Breadcum'
import ProductData from './ProductData'
import CheckOutCard from './CheckOutCard'
export default function Cart() {
    return (
        <>
            <Layout />
            <Breadcum page="Cart Page" />
            <section class="cart-section section-b-space">
                <div class="container-fluid-lg">
                    <div class="row g-sm-5 g-3">
                        <div class="col-xxl-9">
                            <div className="cart-table">
                                <div className="table-responsive-xl">
                                    <table className="table">
                                        <tbody>
                                            <ProductData />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3">
                           <CheckOutCard/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
