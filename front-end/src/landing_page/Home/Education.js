import React from "react";
function Education() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <img src="media/images/education.svg" className="img-fluid" alt="varsity" />
                </div>
                <div className="col">
                    <h1 className="fs-2 mb-4">Free and open market education</h1>
                    <p className="mb-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="/" className="text-decoration-none mb-5">Varsity <i class="fa-solid fa-arrow-right" ></i></a>
                    <p className="mb-3 mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="/" className="text-decoration-none ">TradingQ&A <i class="fa-solid fa-arrow-right" ></i></a>
                </div>
            </div>
        </div>
    )
}
export default Education;