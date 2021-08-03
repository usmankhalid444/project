/** @format */

import React from "react";

// images starat
import about06 from "../assets/images/about/06.jpg";
import folio06 from "../assets/images/portfolio/06.jpg";
import folio11 from "../assets/images/portfolio/11.jpg";
import folio07 from "../assets/images/portfolio/07.jpg";
import folio04 from "../assets/images/portfolio/04.jpg";
import folio03 from "../assets/images/portfolio/03.jpg";
import folio02 from "../assets/images/portfolio/02.jpg";
import blog01 from "../assets/images/blog/01.jpg";
import blog02 from "../assets/images/blog/02.jpg";
import blog03 from "../assets/images/blog/03.jpg";
import blog04 from "../assets/images/blog/04.jpg";
import blog05 from "../assets/images/blog/05.jpg";

// images end
function Main() {
  return (
    <>
      {/*
    <!-- **************** MAIN CONTENT START **************** -->
    */}
      <main>
        {/*
      <!-- =======================
Main Banner START-->
      */}
        <section className="position-relative bg-dark p-0">
          {/*
        <!-- Email link left -->
        */}
          <div
            className="
            position-absolute
            bottom-0
            start-0
            m-6
            z-index-9
            d-none d-xxl-block
          "
          >
            <a href="#" className="text-white lead">
              support@folio.com
            </a>
          </div>
          {/*
        <!-- Social sites link right -->
        */}
          <div
            className="
            position-absolute
            bottom-0
            end-0
            m-6
            z-index-9
            d-none d-xxl-block
          "
          >
            <div className="d-flex">
              <h6 className="text-white mt-2 me-4">Follow us:</h6>
              <div className="list-group-inline list-unstyled text-primary-hover">
                <a
                  href="#"
                  className="list-group-item text-white bg-transparent"
                >
                  Fb
                </a>
                <a
                  href="#"
                  className="list-group-item text-white bg-transparent"
                >
                  Tw
                </a>
                <a
                  href="#"
                  className="list-group-item text-white bg-transparent me-0"
                >
                  In
                </a>
              </div>
            </div>
          </div>

          {/*
        <!-- Banner START -->
        */}
          <div className="tiny-slider dots-white dots-bordered dots-end">
            <div
              className="tiny-slider-inner h-500 h-sm-600 h-lg-800"
              data-autoplay="true"
              data-autoplaytime="7000"
              data-gutter="0"
              data-arrow="false"
              data-dots="true"
              data-items="1"
            >
              {/*
            <!-- Slide 1 START -->
            */}
              <div
                className="h-500 h-sm-600 h-lg-800 bg-dark-overlay-4 bg-dark"
                style={{
                  backgroundImage: { blog03 },
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="container h-100">
                  <div className="row d-flex h-100">
                    <div
                      className="
                      col-md-8 col-xl-7
                      justify-content-center
                      align-self-center align-items-start
                    "
                    >
                      <div className="slider-content text-start">
                        <h2
                          className="
                          animate__animated animate__fadeInUp
                          text-white
                          display-3
                          d-block
                        "
                        >
                          <span className="text-white-stroke">We scale</span>
                          Brands
                        </h2>
                        <p
                          className="
                          animate__animated animate__fadeInUp animate__delay-1s
                          lead
                          text-white
                          mt-0 mt-md-4
                        "
                        >
                          We're digital creative agency. We help our customers
                          better manage their web presence in order to achieve
                          greater success online.
                        </p>
                        <div
                          className="
                          animate__animated animate__fadeInUp
                          mt-4
                          animate__delay-2s
                        "
                        >
                          <a
                            href="#"
                            className="btn btn-primary btn-lg btn-line"
                          >
                            How it works
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Slide 1 END -->
            */}{" "}
              {/*
            <!-- Slide 2 START -->
            */}
              <div
                className="h-100 bg-dark-overlay-4 bg-dark"
                style={{
                  backgroundImage: { blog04 },
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="container h-100">
                  <div className="row d-flex h-100">
                    <div
                      className="
                      col-md-8 col-xl-7
                      justify-content-center
                      align-self-center align-items-start
                    "
                    >
                      <div className="slider-content text-start">
                        <h2
                          className="
                          animate__animated animate__fadeInUp
                          text-white
                          display-4
                          d-block
                        "
                        >
                          <span className="text-white bg-primary px-2 pt-3">
                            We create
                          </span>
                          Difference
                        </h2>
                        <p
                          className="
                          animate__animated animate__fadeInUp animate__delay-1s
                          lead
                          text-white
                          mt-0 mt-md-4
                        "
                        >
                          Building a strong brand. Distinctive, recognizable and
                          consistent. Effective communication campaigns that
                          activate your target group.
                        </p>
                        <div
                          className="
                          animate__animated animate__fadeInUp
                          mt-4
                          animate__delay-2s
                        "
                        >
                          <a href="#" className="btn btn-white btn-lg btn-line">
                            Get a quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Slide 2 END -->
            */}
            </div>
          </div>
        </section>
        {/*
      <!-- =======================
Main banner END-->
      */}{" "}
        {/*
      <!-- =======================
About START -->
      */}
        <section>
          <div className="container">
            <div className="row d-flex justify-content-lg-between">
              {/*
            <!-- About left -->
            */}
              <div className="col-md-6 col-xl-5">
                {/*
              <!-- Since text -->
              */}
                <span
                  className="
                  font-alt
                  fw-normal
                  display-8
                  bg-light
                  text-primary
                  float-start
                  d-inline-block
                  mb-n5
                  ms-lg-n2
                  px-3
                  rotate-10
                  z-index-9
                  position-relative
                "
                >
                  Passion, dedication & a lot of coffee 🤘
                </span>

                {/*
              <!-- Image -->
              */}
                <div
                  className="reveal-item bg-light rounded"
                  data-aos="reveal-item"
                >
                  <div
                    className="reveal-animation reveal-end reveal-primary aos"
                    data-aos="reveal-end"
                  ></div>
                  <img
                    className="rounded w-100"
                    src={about06}
                    alt="Portfolio image"
                  />
                </div>
                {/*
              <!-- Text -->
              */}
                <div className="mt-n6 ms-3 position-relative z-index-9">
                  <span className="bg-dark text-white p-2">
                    Making clients happy since
                  </span>
                  <h2 className="display-4 text-dark-stroke text-primary-shadow">
                    2003
                  </h2>
                </div>
              </div>

              {/*
            <!-- About Right -->
            */}
              <div className="col-md-6">
                {/*
              <!-- Title -->
              */}
                <span className="font-alt fw-normal display-8 d-block mb-3 mt-4">
                  We are creating smart websites.
                </span>
                <h2 className="display-7">Start off on the right foot</h2>

                {/*
              <!-- Tab START -->
              */}
                <div className="mt-5 mt-md-0">
                  <ul className="nav nav-tabs nav-tabs-line">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#tab-7-1"
                      >
                        <i className="far fa-edit me-2"></i>Work process
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#tab-7-2"
                      >
                        <i className="far fa-folder-open me-2"></i>Our vision
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#tab-7-3"
                      >
                        <i className="far fa-sun me-2"></i>Our goal
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mb-0">
                    <div className="tab-pane show active" id="tab-7-1">
                      <h5>The process that acquaints our exciting results</h5>
                      <p>
                        Our friendly team members are always willing to help you
                        understand your present technology requirements and
                        provide suggestions on your future needs.
                      </p>
                      <ul
                        className="
                        list-group
                        list-group-borderless
                        list-group-icon-primary-bg
                        my-4
                      "
                      >
                        <li className="list-group-item">
                          <span>01</span>Collect Information from all around
                        </li>
                        <li className="list-group-item">
                          <span>02</span>Effective procedures for a positive
                          result
                        </li>
                        <li className="list-group-item">
                          <span>03</span>Making a thriving launch
                        </li>
                        <li className="list-group-item">
                          <span>04</span>Steadily climbing up the mountain
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="tab-7-2">
                      <h5>Our Mission & Vision</h5>
                      <p>
                        Tried law yet style child. The bore of true of no be
                        deal. Frequently sufficient to be unaffected. The
                        furnished she concluded depending procuring concealed.
                      </p>
                      <blockquote className="blockquote mt-4">
                        <p className="mb-0">
                          Sometimes when you innovate, you make mistakes. It is
                          best to admit them quickly, and get on with improving
                          your other innovation
                        </p>
                        <footer className="blockquote-footer">
                          Steve Jobs @{" "}
                          <cite title="Source Title">Apple Inc</cite>
                        </footer>
                      </blockquote>
                    </div>
                    <div className="tab-pane" id="tab-7-3">
                      <p>
                        We have a strong foundation built on legacy and emerging
                        technologies, including excellent track record of
                        on-time deliveries. We are emerging as one of the most
                        promising private talent sourcing and management firms
                        in the world. The real challenge before companies in
                        today's world is to make their products and services
                        appealing to everyone.
                      </p>
                      <div className="d-flex">
                        <i className="display-5 text-primary bi bi-bullseye"></i>
                        <div className="mt-3 ms-4">
                          <p className="lead">
                            "Transform your enterprise with resolutions tailored
                            to your requirements & goals."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*
              <!-- Tab END -->
              */}
              </div>
            </div>
          </div>
        </section>
        {/*
      <!-- =======================
About END -->
      */}{" "}
        {/*
      <!-- =======================
Services START -->
      */}
        <section className="pt-8">
          <div className="container">
            <div className="row">
              {/*
            <!-- Service item -->
            */}
              <div className="col-md-4 mb-4">
                <i className="display-6 text-primary bi bi-sliders"></i>
                <h4 className="my-3">Enterprise digital asset management</h4>
                <p>
                  Smart use of data & technology for the automation of your
                  business. Two before narrow not relied how except moment
                  myself Dejection assurance
                </p>
              </div>
              {/*
            <!-- Service item -->
            */}
              <div className="col-md-4 mb-4">
                <i className="display-6 text-primary bi bi-droplet-half"></i>
                <h4 className="my-3">UI/UX app design & graphics design</h4>
                <p>
                  The right mix of resources for achieving your online goals.
                  Mrs led certainly So gate at no only none open Betrayed at
                  properly it of graceful
                </p>
              </div>
              {/*
            <!-- Service item -->
            */}
              <div className="col-md-4 mb-4">
                <i className="display-6 text-primary bi bi-graph-up"></i>
                <h4 className="my-3">Google Analytics Measurement Protocol</h4>
                <p>
                  Achieving your online goals for the automation of your
                  business Dinner abroad am depart ye turned hearts as me wished
                  Therefore allowance
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*
      <!-- =======================
Services END -->
      */}{" "}
        {/*
      <!-- =======================
Portfolio START -->
      */}
        <section className="bg-dark pattern-overlay-5">
          <div className="container">
            {/*
          <!-- Title -->
          */}
            <div className="row text-center">
              <div className="col-md-8 mx-auto mb-7">
                <span className="font-alt fw-normal text-white display-8 d-block">
                  We are creating smart websites.
                </span>
                <h2 className="display-7 text-white mb-5">
                  See what we've done.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-9 mt-n9 pt-0 position-relative z-index-9">
          <div className="container">
            <div className="row g-0 mb-n9">
              {/*
            <!-- Card item START -->
            */}
              <div className="col-sm-6 col-md-4">
                <div className="card">
                  <div className="position-relative">
                    {/*
                  <!-- Card Image -->
                  */}
                    <img
                      className="card-img-top rounded-0"
                      src={folio06}
                      alt="card image"
                    />
                  </div>
                  {/*
                <!-- Card body -->
                */}
                  <div
                    className="
                    card-body
                    position-absolute
                    bottom-0
                    w-100
                    card-element-hover
                  "
                  >
                    <div className="p-4 bg-white">
                      <p className="display-9 font-alt fw-normal">Furniture</p>
                      <h5 className="card-title">
                        <a href="#">Unique wooden pieces of furniture</a>
                      </h5>
                      <a href="#" className="btn btn-line text-dark">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Card item END -->
            */}{" "}
              {/*
            <!-- Card item START -->
            */}
              <div className="col-sm-6 col-md-4">
                <div className="card">
                  <div className="position-relative">
                    {/*
                  <!-- Card Image -->
                  */}
                    <img
                      className="card-img-top rounded-0"
                      src={folio11}
                      alt="card image"
                    />
                  </div>
                  {/*
                <!-- Card body -->
                */}
                  <div
                    className="
                    card-body
                    position-absolute
                    bottom-0
                    w-100
                    card-element-hover
                  "
                  >
                    <div className="p-4 bg-white">
                      <p className="display-9 font-alt fw-normal">Website</p>
                      <h5 className="card-title">
                        <a href="#">Thinking forward in a circle </a>
                      </h5>
                      <a href="#" className="btn btn-line text-dark">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Card item END -->
            */}{" "}
              {/*
            <!-- Card item START -->
            */}
              <div className="col-sm-6 col-md-4">
                <div className="card">
                  <div className="position-relative">
                    {/*
                  <!-- Card Image -->
                  */}
                    <img
                      className="card-img-top rounded-0"
                      src={folio07}
                      alt="card image"
                    />
                  </div>
                  {/*
                <!-- Card body -->
                */}
                  <div
                    className="
                    card-body
                    position-absolute
                    bottom-0
                    w-100
                    card-element-hover
                  "
                  >
                    <div className="p-4 bg-white">
                      <p className="display-9 font-alt fw-normal">
                        Food / Branding
                      </p>
                      <h5 className="card-title">
                        <a href="#">Art collector and architect</a>
                      </h5>
                      <a href="#" className="btn btn-line text-dark">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Card item END -->
            */}{" "}
              {/*
            <!-- Card item START -->
            */}
              <div className="col-sm-6 col-md-4">
                <div className="card">
                  <div className="position-relative">
                    {/*
                  <!-- Card Image -->
                  */}
                    <img
                      className="card-img-top rounded-0"
                      src={folio04}
                      alt="card image"
                    />
                  </div>
                  {/*
                <!-- Card body -->
                */}
                  <div
                    className="
                    card-body
                    position-absolute
                    bottom-0
                    w-100
                    card-element-hover
                  "
                  >
                    <div className="p-4 bg-white">
                      <p className="display-9 font-alt fw-normal">Branding</p>
                      <h5 className="card-title">
                        <a href="#">A master of his own craft</a>
                      </h5>
                      <a href="#" className="btn btn-line text-dark">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Card item END -->
            */}{" "}
              {/*
            <!-- Card item START -->
            */}
              <div className="col-sm-6 col-md-4">
                <div className="card">
                  <div className="position-relative">
                    {/*
                  <!-- Card Image -->
                  */}
                    <img
                      className="card-img-top rounded-0"
                      src={folio03}
                      alt="card image"
                    />
                  </div>
                  {/*
                <!-- Card body -->
                */}
                  <div
                    className="
                    card-body
                    position-absolute
                    bottom-0
                    w-100
                    card-element-hover
                  "
                  >
                    <div className="p-4 bg-white">
                      <p className="display-9 font-alt fw-normal">Graphics</p>
                      <h5 className="card-title">
                        <a href="#">A tale of dual addresses</a>
                      </h5>
                      <a href="#" className="btn btn-line text-dark">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Card item END -->
            */}{" "}
              {/*
            <!-- Card item START -->
            */}
              <div className="col-sm-6 col-md-4">
                <div className="card">
                  <div className="position-relative">
                    {/*
                  <!-- Card Image -->
                  */}
                    <img
                      className="card-img-top rounded-0"
                      src={folio02}
                      alt="card image"
                    />
                  </div>
                  {/*
                <!-- Card body -->
                */}
                  <div
                    className="
                    card-body
                    position-absolute
                    bottom-0
                    w-100
                    card-element-hover
                  "
                  >
                    <div className="p-4 bg-white">
                      <p className="display-9 font-alt fw-normal">Restaurant</p>
                      <h5 className="card-title">
                        <a href="#">It’s gonna be extraordinary </a>
                      </h5>
                      <a href="#" className="btn btn-line text-dark">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*
            <!-- Card item END -->
            */}
            </div>
          </div>
        </section>
        {/*
      <!-- =======================
Portfolio END -->
      */}{" "}
        {/*
      <!-- =======================
Work Process START -->
      */}
        <section className="bg-light pattern-overlay-7 pb-2">
          <div className="container">
            <div className="row">
              {/*
            <!-- Step item -->
            */}
              <div className="col-sm-12 col-md-4 mb-5">
                <div className="d-flex">
                  <h2
                    className="
                    display-3
                    mt-lg-n3
                    me-3
                    text-light-stroke text-light-shadow
                  "
                  >
                    01
                  </h2>
                  <div>
                    <h4>Research and analytics</h4>
                    <p>
                      We start with Research also to image Seas Void Great day
                      sea don't creature
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <!-- Step item -->
            */}
              <div className="col-sm-12 col-md-4 mb-5">
                <div className="d-flex">
                  <h2
                    className="
                    display-3
                    mt-lg-n3
                    me-3
                    text-light-stroke text-light-shadow
                  "
                  >
                    02
                  </h2>
                  <div>
                    <h4>Design and Develop</h4>
                    <p>
                      In this step our Them Subdue you life created day given
                      light gathering
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <!-- Step item -->
            */}
              <div className="col-sm-12 col-md-4 mb-5">
                <div className="d-flex">
                  <h2
                    className="
                    display-3
                    mt-lg-n3
                    me-3
                    text-light-stroke text-light-shadow
                  "
                  >
                    03
                  </h2>
                  <div>
                    <h4>Testing and Launch</h4>
                    <p>
                      Final step of success firmament of also it great have set
                      behold land third
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
      <!-- =======================
Work Process END -->
      */}{" "}
        {/*
      <!-- =======================
Blog START -->
      */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span className="font-alt fw-normal display-8">
                  Ideas, stories and thoughts
                </span>
                <h2 className="display-7 mb-5">Latest Blogs</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tiny-slider dots-bordered mb-7">
                  <div
                    className="tiny-slider-inner"
                    data-autoplay="false"
                    data-arrow="false"
                    data-dots="true"
                    data-items-xl="3"
                    data-items-md="2"
                    data-items-sm="2"
                    data-items-xs="1"
                  >
                    {/*
                  <!-- Card item START -->
                  */}
                    <div className="item">
                      <div className="card card-metro">
                        {/*
                      <!-- Card Image -->
                      */}
                        <div className="card-image">
                          <img src={blog01} alt="card image " />
                        </div>
                        {/*
                      <!-- Card Overlay -->
                      */}
                        <div className="card-img-overlay d-flex flex-column">
                          <div className="mt-auto card-text">
                            {/*
                          <!-- Featured label-->
                          */}
                            <span
                              className="featured-label"
                              title="Featured Blog"
                            >
                              <i className="fas fa-star"></i>
                            </span>

                            <div
                              className="
                              card-meta
                              mb-3
                              d-flex
                              flex-row
                              align-items-center
                              text-white
                            "
                            >
                              {/*
                            <!-- Card Categories -->
                            */}
                              <div className="text-primary-hover">
                                <a href="#" className="text-white me-2">
                                  Business
                                </a>
                              </div>
                              {/*
                            <!-- Divider -->
                            */}
                              <i className="fas fa-circle smaller me-2 fw-bold"></i>
                              {/*
                            <!-- Min of read -->
                            */}
                              <span>5 min read</span>
                            </div>

                            <h4>
                              <a
                                href="#"
                                className="text-white text-primary-hover"
                              >
                                Reliable sources to learn about folio
                              </a>
                            </h4>
                            <p className="text-white text-truncate">
                              He moonlights difficult engrossed it, sportsmen.
                              Interested has all Devonshire difficulty gay
                              assistance joy
                            </p>
                            <a
                              href="#"
                              className="btn btn-line text-white mb-0"
                            >
                              Read Article
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*
                  <!-- Card item END -->
                  */}{" "}
                    {/*
                  <!-- Card item START -->
                  */}
                    <div className="item">
                      <div className="card card-metro">
                        {/*
                      <!-- Card Image -->
                      */}
                        <div className="card-image">
                          <img src={blog02} alt="card image" />
                        </div>
                        {/*
                      <!-- Card Overlay -->
                      */}
                        <div className="card-img-overlay d-flex flex-column">
                          <div className="mt-auto card-text">
                            <div
                              className="
                              card-meta
                              mb-3
                              d-flex
                              flex-row
                              align-items-center
                              text-white
                            "
                            >
                              {/*
                            <!-- Card Categories -->
                            */}
                              <div className="text-primary-hover">
                                <a href="#" className="text-white me-2">
                                  Start-up
                                </a>
                              </div>
                              {/*
                            <!-- Divider -->
                            */}
                              <i className="fas fa-circle smaller me-2 fw-bold"></i>
                              {/*
                            <!-- Min of read -->
                            */}
                              <span>3 min read</span>
                            </div>
                            <h4>
                              <a
                                href="#"
                                className="text-white text-primary-hover"
                              >
                                Never underestimate the influence of folio
                              </a>
                            </h4>
                            <p className="text-white text-truncate">
                              See resolved goodness felicity shy civility
                              domestic had but. Drawings offended yet answered
                              Jennings
                            </p>
                            <a
                              href="#"
                              className="btn btn-line text-white mb-0"
                            >
                              Read Article
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*
                  <!-- Card item END -->
                  */}{" "}
                    {/*
                  <!-- Card item START -->
                  */}
                    <div className="item">
                      <div className="card card-metro">
                        {/*
                      <!-- Card Image -->
                      */}
                        <div className="card-image">
                          <img src={blog03} alt="card image" />
                        </div>
                        {/*
                      <!-- Card Overlay -->
                      */}
                        <div className="card-img-overlay d-flex flex-column">
                          <div className="mt-auto card-text">
                            <div
                              className="
                              card-meta
                              mb-3
                              d-flex
                              flex-row
                              align-items-center
                              text-white
                            "
                            >
                              {/*
                            <!-- Card Categories -->
                            */}
                              <div className="text-primary-hover">
                                <a href="#" className="text-white me-2">
                                  Story
                                </a>
                              </div>
                              {/*
                            <!-- Divider -->
                            */}
                              <i className="fas fa-circle smaller me-2 fw-bold"></i>
                              {/*
                            <!-- Min of read -->
                            */}
                              <span>6 min read</span>
                            </div>
                            <h4>
                              <a
                                href="#"
                                className="text-white text-primary-hover"
                              >
                                Skills that you can learn from business
                              </a>
                            </h4>
                            <p className="text-white text-truncate">
                              Rooms oh fully taken by worse do. Points afraid
                              but may end law lasted. Was out laughter raptures
                            </p>
                            <a
                              href="#"
                              className="btn btn-line text-white mb-0"
                            >
                              Read Article
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*
                  <!-- Card item END -->
                  */}{" "}
                    {/*
                  <!-- Card item START -->
                  */}
                    <div className="item">
                      <div className="card card-metro">
                        {/*
                      <!-- Card Image -->
                      */}
                        <div className="card-image">
                          <img src={blog04} alt="card image" />
                        </div>
                        {/*
                      <!-- Card Overlay -->
                      */}
                        <div className="card-img-overlay d-flex flex-column">
                          <div className="mt-auto card-text">
                            <div
                              className="
                              card-meta
                              mb-3
                              d-flex
                              flex-row
                              align-items-center
                              text-white
                            "
                            >
                              {/*
                            <!-- Card Categories -->
                            */}
                              <div className="text-primary-hover">
                                <a href="#" className="text-white me-2">
                                  Idea,
                                </a>
                                <a href="#" className="text-white me-2">
                                  Thought
                                </a>
                              </div>
                              {/*
                            <!-- Divider -->
                            */}
                              <i className="fas fa-circle smaller me-2 fw-bold"></i>
                              {/*
                            <!-- Min of read -->
                            */}
                              <span>8 min read</span>
                            </div>
                            <h4>
                              <a
                                href="#"
                                className="text-white text-primary-hover"
                              >
                                5 things you need to know about folio
                              </a>
                            </h4>
                            <p className="text-white text-truncate">
                              Returned outweigh. Luckily cheered colonel I do we
                              attack highest enabled. Tried law yet style child
                            </p>
                            <a
                              href="#"
                              className="btn btn-line text-white mb-0"
                            >
                              Read Article
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*
                  <!-- Card item END -->
                  */}{" "}
                    {/*
                  <!-- Card item START -->
                  */}
                    <div className="item">
                      <div className="card card-metro">
                        {/*
                      <!-- Card Image -->
                      */}
                        <div className="card-image">
                          <img src={blog05} alt="card image" />
                        </div>
                        {/*
                      <!-- Card Overlay -->
                      */}
                        <div className="card-img-overlay d-flex flex-column">
                          <div className="mt-auto card-text">
                            <div
                              className="
                              card-meta
                              mb-3
                              d-flex
                              flex-row
                              align-items-center
                              text-white
                            "
                            >
                              {/*
                            <!-- Card Categories -->
                            */}
                              <div className="text-primary-hover">
                                <a href="#" className="text-white me-2">
                                  Inside
                                </a>
                              </div>
                              {/*
                            <!-- Divider -->
                            */}
                              <i className="fas fa-circle smaller me-2 fw-bold"></i>
                              {/*
                            <!-- Min of read -->
                            */}
                              <span>2 min read</span>
                            </div>
                            <h4>
                              <a
                                href="#"
                                className="text-white text-primary-hover"
                              >
                                Never underestimate the influence of folio
                              </a>
                            </h4>
                            <p className="text-white text-truncate">
                              The bore of true of no be deal. Frequently
                              sufficient to be unaffected. The furnished she
                              conclude
                            </p>
                            <a
                              href="#"
                              className="btn btn-line text-white mb-0"
                            >
                              Read Article
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*
                  <!-- Card item END -->
                  */}
                  </div>
                </div>
              </div>
            </div>
            {/*
          <!-- Row End -->
          */}
          </div>
        </section>
        {/*
      <!-- =======================
Blog END -->
      */}{" "}
        {/*
      <!-- =======================
About Fun fact START -->
      */}
        <section className="pt-0">
          <div className="container">
            <div className="row g-0">
              {/*
            <!-- Fact Item -->
            */}
              <div className="col-lg-4">
                <div className="bg-light p-4 p-md-5 h-100">
                  <h2 className="display-6 text-primary-stroke text-dark-shadow">
                    26k
                  </h2>
                  <h4 className="mb-4">Organic Traffic</h4>
                  <p>
                    Demesne far hearted suppose venture excited see had has.
                    Dependent on so extremely delivered by the jokes worse her
                    why bed
                  </p>
                </div>
              </div>
              {/*
            <!-- Fact Item -->
            */}
              <div className="col-lg-4">
                <div
                  className="bg-dark p-4 p-md-5 h-100 bg-dark-overlay-4"
                  style={{
                    background:
                      "url(assets/images/bg/06.jpg) no-repeat center center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="display-6 text-primary-stroke text-light-shadow">
                    64M+
                  </h2>
                  <h4 className="text-white mb-4">YouTube Views</h4>
                  <p className="text-white">
                    Satisfied conveying a dependent contented he gentleman
                    agreeable do be <u>1M subscribers</u> arrant private blushes
                    removed an in equally totally if.
                  </p>
                </div>
              </div>
              {/*
            <!-- Fact Item -->
            */}
              <div className="col-lg-4">
                <div className="bg-dark p-4 p-md-5 h-100">
                  <h2 className="display-6 text-light-stroke text-primary-shadow">
                    300+
                  </h2>
                  <h4 className="text-white mb-4">Branding Strategy</h4>
                  <p className="text-white">
                    Whatever boy her exertion his extended. Ecstatic followed
                    handsome drawings entirely Mrs one yet outweigh. Of
                    acceptance insipidity remarkably
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
      <!-- =======================
About Fun fact END -->
      */}
      </main>
      {/*
    <!-- **************** MAIN CONTENT END **************** -->
    */}
    </>
  );
}

export default Main;
