/** @format */

import React from "react";

function Footer() {
  return (
    <>
      {/*
    <!-- =======================
Footer START -->
    */}
      <footer className="bg-dark pt-7 pattern-overlay-6">
        <div className="container">
          {/*
        <!-- NewsLetter -->
        */}
          <div className="row pb-5 justify-content-center">
            <div className="col-md-7">
              <h3 className="text-white text-center">
                Subscribe to our newsletter or
                <a href="#" className="text-primary">
                  follow @foliotheme
                </a>{" "}
                on Instagram for latest update
              </h3>
              <form className="p-0 px-xl-8 my-4">
                <div className="input-group">
                  <input
                    className="form-control border-0 h-auto"
                    type="email"
                    placeholder="Your email address"
                  />
                  <button type="button" className="btn btn-white btn-lg mb-0">
                    Subscribe
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span className="text-danger">*</span> We will not share your
                  personal information with anyone
                </div>
              </form>
            </div>
          </div>
          {/*
        <!-- Divider -->
        */}
          <div className="divider-light opacity-1"></div>
          {/*
        <!-- Clients -->
        */}
          <div className="row py-4 justify-content-center">
            <div className="col-12">
              <div className="tiny-slider">
                <div
                  className="tiny-slider-inner"
                  data-arrow="false"
                  data-dots="false"
                  data-gutter="80"
                  data-items-xl="6"
                  data-items-lg="5"
                  data-items-md="5"
                  data-items-sm="4"
                  data-items-xs="2"
                  data-autoplay="3800"
                >
                  {/*
                <!-- Slide items START -->
                */}
                  <div className="item">
                    <img
                      className="opacity-5"
                      src="assets/images/clients/light/01.svg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="opacity-5"
                      src="assets/images/clients/light/02.svg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="opacity-5"
                      src="assets/images/clients/light/03.svg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="opacity-5"
                      src="assets/images/clients/light/04.svg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="opacity-5"
                      src="assets/images/clients/light/05.svg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="opacity-5"
                      src="assets/images/clients/light/06.svg"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className="opacity-5"
                      src="assets/images/clients/light/07.svg"
                      alt=""
                    />
                  </div>
                  {/*
                <!-- Slide items END -->
                */}
                </div>
              </div>
            </div>
          </div>
          {/*
        <!-- Divider -->
        */}
          <div className="divider-light opacity-1"></div>
          {/*
        <!-- Main Footer -->
        */}
          <div className="row pb-4 pt-6">
            {/*
          <!-- Footer widget item -->
          */}
            <div className="col-md-4 mb-4">
              <h5 className="mb-4 text-white">
                About Folio<span className="text-primary">.</span>
              </h5>
              <p>
                Folio is a highly creative, modern, visually stunning and
                Bootstrap 5 Creative Multi-purpose corporate and portfolio HTML5
                template.
              </p>
              {/*
            <!-- Social icons -->
            */}
              <ul className="list-unstyled list-group-inline display-9">
                <li>
                  <a className="text-facebook me-2" href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a className="text-instagram mx-2" href="#">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                </li>
                <li>
                  <a className="text-twitter mx-2" href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a className="text-linkedin mx-2" href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <div className="my-4">
                ©2021
                <a href="https://www.webestica.com/" target="_blank">
                  Webestica
                </a>
                . All rights reserved
              </div>
            </div>
            {/*
          <!-- Footer widget item -->
          */}
            <div className="col-sm-6 col-md-2 offset-lg-1 mb-5">
              <h5 className="mb-4 text-white">What we do</h5>
              <ul className="nav flex-column text-primary-hover">
                <li className="nav-item">
                  <a className="nav-link pt-0" href="#">
                    Our Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Develop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Builder
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Market
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            {/*
          <!-- Footer widget item -->
          */}
            <div className="col-sm-6 col-md-2 mb-5">
              <h5 className="mb-4 text-white">Discover</h5>
              <ul className="nav flex-column text-primary-hover">
                <li className="nav-item">
                  <a className="nav-link pt-0" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Career <span className="badge bg-danger ms-2">2 Job</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Work
                  </a>
                </li>
              </ul>
            </div>
            {/*
          <!-- Footer widget item -->
          */}
            <div className="col-md-3">
              <h5 className="mb-4 text-white">Where we are</h5>
              <address>
                1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.
              </address>
              <p>
                <a className="text-primary-hover" href="#">
                  hello@Folio.com
                </a>
              </p>
              <p>
                <a className="text-primary-hover" href="#">
                  +(251) 854-6308
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*
    <!-- =======================
Footer END -->
    */}
    </>
  );
}

export default Footer;
