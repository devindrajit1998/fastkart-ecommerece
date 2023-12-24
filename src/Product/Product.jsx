import React from 'react'
import Layout from '../Layout/Layout'
import Breadcum from '../common/Breadcum'
import ImageSlider from './ImageSlider'
import RightBox from './RightBox'
import { useParams } from 'react-router-dom'
import { useProductProvider } from '../ContextAPI/ProductContext'

export default function Product() {
    const {id}= useParams()
    const numericId = parseInt(id);
    const {allData} = useProductProvider();

    const filterSingle = allData.find((items)=>items.id === numericId);
    // console.log("single filter ===============>",filterSingle)
    return (
        <>
            <Layout />
            <Breadcum page="Product Page" />
            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div
                            className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp"
                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                            <div className="row g-4">
                                <div
                                    className="col-xl-6 wow fadeInUp"
                                    style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                    <div className="product-left-box">
                                        <div className="row g-2">
                                            <ImageSlider filterSingle={filterSingle} />

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-6 wow fadeInUp"
                                    style={{visibility: "visible",
                                        animationDelay: "0.1s",
                                        animationName: "fadeInUp"}}>
                                    <RightBox filterSingle={filterSingle} />
                                </div>
                                {/* <div className="col-12">
                                    <div class="tab-content custom-tab">
                                        <div className="tab-pane d-block">
                                            <div className="table-responsive">
                                                <table className="table info-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Specialty</td>
                                                            <td>Vegetarian</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ingredient Type</td>
                                                            <td>Vegetarian</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Brand</td>
                                                            <td>Lavian Exotique</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Form</td>
                                                            <td>Bar Brownie</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Package Information</td>
                                                            <td>Box</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Manufacturer</td>
                                                            <td>Prayagh Nutri Product Pvt Ltd</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Item part number</td>
                                                            <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Net Quantity</td>
                                                            <td>40.00 count</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
