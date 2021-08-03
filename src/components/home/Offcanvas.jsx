/** @format */

import React from "react";

function Offcanvas() {
  return (
    <>
      {/*
    <!-- Offcanvas end START -->
    */}

      <div
        className="offcanvas offcanvas-end bg-dark"
        tabindex="-1"
        id="offcanvasEnd"
        aria-labelledby="offcanvasEnd"
        style={{
          backgroundImage: "url(assets/images/bg/pattern/03.png)",
          backgroundPosition: "center left",
          backgroundSize: "cover",
        }}
      >
        <div className="offcanvas-header">
          <a
            className="ms-auto btn btn-primary btn-round zoom-hover"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fas fa-times p-0"></i>
          </a>
        </div>
        <div
          className="
          offcanvas-body
          vh-lg-100
          d-flex
          align-items-start
          flex-column
          px-5 px-md-6
        "
        >
          {/*
        <!-- Offcanvas inner START -->
        */}
          <ul className="nav dropdown-toggle-start-icon d-block flex-column mb-5">
            <li className="nav-item position-relative">
              <a
                href="index.html"
                className="nav-link text-white-stroke display-6 h5 d-block"
              >
                Home
              </a>
              {/*
            <!-- Offcanvas dropdown START -->
            */}
              <a
                className="dropdown-toggle collapsed"
                data-bs-toggle="collapse"
                href="#home-dropdown-collapse"
                role="button"
                aria-expanded="false"
                aria-controls="home-dropdown-collapse"
              ></a>
            </li>

            <li className="collapse" id="home-dropdown-collapse">
              <ul className="list-unstyled w-100 pb-4 pe-0 pe-lg-5">
                <li>
                  <a className="dropdown-item px-0 text-body" href="index.html">
                    classNameic Default
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-2.html"
                  >
                    Agency classNameic
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-3.html"
                  >
                    Agency Trendy
                    <span className="badge bg-danger ms-2">Hot</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-4.html"
                  >
                    Agency Modern
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-5.html"
                  >
                    Studio showcase
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-6.html"
                  >
                    Creative agency
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-7.html"
                  >
                    Digital studio
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-8.html"
                  >
                    Portfolio showcase
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-9.html"
                  >
                    Corporate
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item px-0 text-body"
                    href="index-10.html"
                  >
                    Personal Portfolio
                  </a>
                </li>
              </ul>
            </li>
            {/*
          <!-- Offcanvas dropdown END -->
          */}
            <li className="nav-item">
              <a className="nav-link text-white-stroke display-6 h5" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-stroke display-6 h5" href="#">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-stroke display-6 h5" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-stroke display-6 h5" href="#">
                Our Journal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-stroke display-6 h5" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mt-auto mb-5">
            <a
              href="#"
              className="font-heading text-white text-primary-hover d-block mb-3"
            >
              hello@folio.com
            </a>
            <a href="#" className="font-heading text-white text-primary-hover">
              +(251) 854-6308
            </a>
          </div>
          {/*
        <!-- Offcanvas inner END -->
        */}
        </div>
      </div>
      {/*
    <!-- Offcanvas end END -->
    */}
    </>
  );
}

export default Offcanvas;
