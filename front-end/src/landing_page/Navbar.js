import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container p-2">
                <Link class="navbar-brand" to="/"><img src="media/images/logo.svg" className="img-fluid" style={{ width: "25%" }} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

                    <form class="d-flex " role="search">
                        <ul class="navbar-nav mb-lg-0 ">
                            <li class="nav-item">
                                <Link
                                    class="nav-link active" to="signup">Sign up</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="support">Support</Link>
                            </li>


                        </ul>
                    </form>
                </div>
            </div>
        </nav>





        // {/* <nav
        //     class="navbar navbar-expand-lg border-bottom"
        //     style={{ backgroundColor: "#FFF" }}
        // >
        //     <div class="container p-2">
        //         <a class="navbar-brand" href="#">
        //             <img
        //                 src="media/images/logo.svg"
        //                 style={{ width: "25%" }}
        //                 alt="Logo"
        //             />
        //         </a>
        //         <button
        //             class="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarSupportedContent"
        //             aria-controls="navbarSupportedContent"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <form class="d-flex" role="search">
        //                 <ul class="navbar-nav mb-lg-0">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="#">
        //                             Signup
        //                         </a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link active" href="#">
        //                             About
        //                         </a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link active" href="#">
        //                             Product
        //                         </a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link active" href="#">
        //                             Pricing
        //                         </a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link active" href="#">
        //                             Support
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </form>
        //         </div>
        //     </div>
        // </nav> */}
    )
}
export default Navbar;