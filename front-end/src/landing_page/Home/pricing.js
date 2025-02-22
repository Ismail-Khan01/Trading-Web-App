import React from "react";
function Pricing() {
    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-5">
        //             <h1>Unbeatable pricing</h1>
        //             <p> We pioneered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges.</p>
        //             <a href="/" className="text-decoration-none">See Pricing <span ><i class="fa-solid fa-arrow-right" ></i></span></a>
        //         </div>
        //         <div className="col-7">
        //             <div className="row">
        //                 <div className="col-4 d-flex position-relavtive">
        //                     <img src="media/images/pricing0.svg" />
        //                     <p className="small"> Free account
        //                         opening</p>
        //                 </div>
        //                 <div className="col-4">
        //                     <img src="" />
        //                 </div>
        //                 <div className="col-4"></div>

        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="container py-5">
            <div className="row">
                {/* Left Section */}
                <div className="col-md-5">
                    <h1 className="fs-2">Unbeatable pricing</h1>
                    <p className="text-muted">
                        We pioneered the concept of discount broking and price transparency in India. <br />
                        Flat fees and no hidden charges.
                    </p>
                    <a href="/" className="text-primary text-decoration-none fw-medium">
                        See Pricing <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>

                {/* Right Section */}
                <div className="col-md-7">
                    <div className="row">
                        {/* Free Account Opening */}
                        <div className="col-4 d-flex align-items-center">
                            <img src="media/images/pricing0.svg" alt="₹0" className="img-fluid" style={{ width: "6.8rem" }} />
                            <span className=" small text-muted price-text">Free account opening</span>
                        </div>

                        {/* Free Equity Delivery */}
                        <div className="col-5 d-flex align-items-center">
                            <img src="media/images/pricing0.svg" alt="₹0" className="img-fluid" style={{ width: "6.8rem" }} />
                            <span className=" small text-muted price-text ">Free equity delivery and direct mutual funds</span>
                        </div>

                        {/* ₹20 Intraday & F&O */}
                        <div className="col-3 d-flex align-items-center">
                            <img src="media/images/intradayTrades.svg" alt="₹20" className="img-fluid" style={{ width: "6rem" }} />
                            <span className=" small text-muted price-text">Intraday and F&O</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;