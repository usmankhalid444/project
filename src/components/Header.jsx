/** @format */

import React from "react";
import logo from "./assets/images/logo.png";
import bg03 from "./assets/images/bg/03.jpg";
function Header() {
  return (
    <>
      {/*
    <!-- =======================
Header START -->
    */}
      <header className="navbar-light navbar-sticky">
        {/*
      <!-- Logo Nav START -->
      */}
        <nav className="navbar navbar-expand-lg">
          <div className="container align-items-stretch">
            {/*
          <!-- Logo START -->
          */}
            <a className="navbar-brand" href="index.html">
              <img className="navbar-brand-item" src={logo} alt="Logo" />
            </a>
            {/*
          <!-- Logo END -->
          */}{" "}
            {/*
          <!-- Responsive navbar toggler -->
          */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            {/*
          <!-- Main Menu START -->
          */}
            <div
              className="collapse navbar-collapse w-auto me-auto"
              id="navbarCollapse"
            >
              <ul className="navbar-nav navbar-nav-scroll me-auto ms-0 ms-xl-4">
                {/*
              <!-- Menu item 1 Demos -->
              */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="demosMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Demos
                  </a>
                  <div
                    className="dropdown-menu pb-3 pb-lg-0"
                    aria-labelledby="demosMenu"
                  >
                    <div className="d-block d-sm-flex">
                      <ul className="list-unstyled w-100 pe-0 pe-lg-5">
                        <li className="dropdown-header">Agency Demos</li>
                        <li>
                          <a className="dropdown-item" href="index.html">
                            classNameic Default
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-2.html">
                            Agency classNameic
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-3.html">
                            Agency Trendy
                            <span className="badge bg-danger ms-2">Hot</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-4.html">
                            Agency Modern
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-5.html">
                            Studio showcase
                          </a>
                        </li>
                      </ul>
                      <ul className="list-unstyled w-100 pe-0 pe-lg-5">
                        <li className="dropdown-header mt-3 mt-sm-0">
                          Portfolio Demos
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-6.html">
                            Creative agency
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-7.html">
                            Digital studio
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-8.html">
                            Portfolio showcase
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-9.html">
                            Corporate
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-10.html">
                            Personal Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*
                  <!-- Nav action box -->
                  */}
                    <div className="w-100 mt-4 d-none d-lg-flex">
                      <div
                        className="
                        text-center
                        bg-primary-multiply
                        position-relative
                        overflow-hidden
                        px-3
                        py-5
                        w-100
                      "
                      >
                        <h4 className="mb-0 text-white">
                          Get free quote today!
                        </h4>
                        <p className="text-white">
                          For quick response and more details, Feel free to
                          contact us
                        </p>
                        <a
                          className="btn btn-white btn-sm"
                          target="_blank"
                          href="https://folio.webestica.com/landing"
                        >
                          Contact Us
                        </a>
                        <img
                          className="
                          bg-primary-multiply
                          position-absolute
                          top-50
                          start-50
                          translate-middle
                          z-index-n9
                          w-100
                        "
                          src={bg03}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>

                {/*
              <!-- Menu item 2 Pages -->
              */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pagesMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    {/*
                  <!-- About menu -->
                  */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        About
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          <a className="dropdown-item" href="about.html">
                            About classNameic
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="about-advance.html"
                          >
                            About advance
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="about-agency.html">
                            About agency
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="approach.html">
                            Approach
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="mission-and-vision.html"
                          >
                            Mission and vision
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="history.html">
                            history
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="testimonials.html">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="why-choose-us.html"
                          >
                            Why choose us
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="team.html">
                            team
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="careers.html">
                            careers
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="careers-single.html"
                          >
                            careers single
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*
                  <!-- Hero sections menu -->
                  */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Hero sections
                        <span className="badge bg-danger ms-2">New</span>
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          <a className="dropdown-item" href="hero-01.html">
                            Hero form
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-02.html">
                            Big title & video
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-03.html">
                            Split banner
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-04.html">
                            Video & company info
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-05.html">
                            Vector graphics
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-06.html">
                            Typography intro
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-07.html">
                            Overlap text
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-08.html">
                            Device mockup
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-09.html">
                            Split overlay
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="hero-10.html">
                            Showcase typography
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="service.html">
                        service
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="service-detail.html">
                        Service detail
                      </a>
                    </li>
                    {/*
                  <!-- Blog menu -->
                  */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Blog
                        <span className="badge bg-success ms-2">
                          2 new post
                        </span>
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-classNameic-3-col.html"
                          >
                            Blog classNameic 3 col
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-metro-3-col.html"
                          >
                            Blog metro 3 col
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-minimal.html">
                            Blog minimal
                            <span className="badge bg-success ms-2">
                              2 new post
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-text-reveal.html"
                          >
                            Blog text reveal
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a className="dropdown-item" href="blog-detail.html">
                            Blog detail
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-detail-minimal.html"
                          >
                            Blog detail minimal
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*
                  <!-- About menu -->
                  */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Contact
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          <a className="dropdown-item" href="contact.html">
                            contact
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="contact-2.html">
                            contact 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="contact-3.html">
                            Contact 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Authentication
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          <a className="dropdown-item" href="sign-in.html">
                            Sign in
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="sign-up.html">
                            Sign up
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="password-recovery.html"
                          >
                            Password recovery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pricing.html">
                        pricing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="faq.html">
                        faq
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="404.html">
                        Error 404
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="maintenance-mode.html">
                        maintenance mode
                      </a>
                    </li>
                    {/*
                  <!-- Dropdown menu levels -->
                  */}
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Dropdown levels
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-start"
                        data-bs-popper="none"
                      >
                        <li className="dropdown-submenu dropend">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Dropdown (end)
                          </a>
                          <ul className="dropdown-menu" data-bs-popper="none">
                            <li>
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>
                        </li>
                        <li className="dropdown-submenu dropstart">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Dropdown (start)
                          </a>
                          {/*
                        <!-- dropdown menu open left -->
                        */}
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            data-bs-popper="none"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Dropdown item
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Dropdown item
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/*
              <!-- Menu item 3 Portfolio -->
              */}
                <li className="nav-item dropdown dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="portfolioMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Portfolio
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="portfolioMenu"
                  >
                    <div className="container">
                      <div className="row g-0 flex-fill">
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled mb-4 mb-lg-0">
                            <li className="dropdown-header">
                              Portfolio classNameics
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-classNameic-grid-3-col.html"
                              >
                                Portfolio classNameic grid 3 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-classNameic-grid-4-col.html"
                              >
                                Portfolio classNameic grid 4 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-classNameic-grid-6-col-fullwidth.html"
                              >
                                Portfolio classNameic grid 6 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-classNameic-masonry-3-col.html"
                              >
                                Portfolio classNameic Masonry 3 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-classNameic-masonry-4-col.html"
                              >
                                Portfolio classNameic Masonry 4 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-classNameic-masonry-6-col-fullwidth.html"
                              >
                                Portfolio classNameic Masonry 6 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-metro-grid-3-col.html"
                              >
                                Portfolio Metro grid 3 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-metro-grid-4-col.html"
                              >
                                Portfolio Metro grid 4 col
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-metro-grid-filter.html"
                              >
                                Portfolio Metro grid filter
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled mb-4 mb-lg-0">
                            <li className="dropdown-header">
                              Portfolio Advance
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-overlap.html"
                              >
                                Portfolio Overlap
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-overlap-reveal.html"
                              >
                                Portfolio Overlap reveal
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-overlap-tilt.html"
                              >
                                Portfolio Overlap Tilt
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-broken-grid.html"
                              >
                                Portfolio broken grid
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-text-reveal.html"
                              >
                                Portfolio text reveal
                                <span className="badge bg-danger ms-2">
                                  Trendy
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-full-width-dark.html"
                              >
                                Portfolio full dark
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-grid-uneven.html"
                              >
                                Portfolio Uneven
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-slider.html"
                              >
                                Portfolio Slider
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled mb-4 mb-lg-0">
                            <li className="dropdown-header">
                              Portfolio Detail pages
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-detail-1.html"
                              >
                                Portfolio detail 01
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-detail-2.html"
                              >
                                Portfolio detail 02
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-case-study-1.html"
                              >
                                Portfolio case study 01
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-case-study-2.html"
                              >
                                Portfolio case study 02
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-case-study-3.html"
                              >
                                Portfolio case study 03
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-case-study-4.html"
                              >
                                Portfolio case study 04
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">
                              Portfolio hover & Element
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-classNameic-grid-3-col.html"
                              >
                                Hover: classNameic
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-overlap-tilt.html"
                              >
                                Hover: Tilt Animation
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-grayscale.html"
                              >
                                Hover: Grayscale
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-color-overlay.html"
                              >
                                Hover: Color Overlay
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-text-reveal.html"
                              >
                                Hover: Text reveal
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-hover-inside.html"
                              >
                                Hover: Card inside
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-appear.html"
                              >
                                Scroll: Appear Animation
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="portfolio-overlap-reveal.html"
                              >
                                Scroll: Reveal Animation
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-pagination.html"
                              >
                                Pagination Styles
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/*
              <!-- Menu item 4 Elements -->
              */}
                <li className="nav-item dropdown dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="elementsMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Elements
                  </a>
                  <div className="dropdown-menu" aria-labelledby="elementsMenu">
                    <div className="container">
                      <div className="row g-0 flex-fill">
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-accordion.html"
                              >
                                <i className="far fa-plus-square fa-fw me-2"></i>
                                Accordion
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-action-box.html"
                              >
                                <i className="fas fa-paperclip fa-fw me-2"></i>
                                Action box
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-alerts.html"
                              >
                                <i className="fas fa-exclamation-triangle fa-fw me-2"></i>
                                Alerts
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-animation.html"
                              >
                                <i className="fas fa-radiation-alt fa-fw me-2"></i>
                                Animation
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-avatar.html"
                              >
                                <i className="far fa-user fa-fw me-2"></i>Avatar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-blockquote.html"
                              >
                                <i className="fas fa-quote-right fa-fw me-2"></i>
                                Blockquote
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-breadcrumbs.html"
                              >
                                <i className="fas fa-angle-right fa-fw me-2"></i>
                                breadcrumbs
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-buttons.html"
                              >
                                <i className="fas fa-link fa-fw me-2"></i>
                                Buttons
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-cards.html"
                              >
                                <i className="far fa-window-restore fa-fw me-2"></i>
                                Cards
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-clients.html"
                              >
                                <i className="fas fa-user-tie fa-fw me-2"></i>
                                Clients
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-counter.html"
                              >
                                <i className="fas fa-sort-numeric-up-alt fa-fw me-2"></i>
                                Counter
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-decorations.html"
                              >
                                <i className="fas fa-spray-can fa-fw me-2"></i>
                                decorations
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-divider.html"
                              >
                                <i className="fas fa-cut fa-fw me-2"></i>Divider
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-feature-box.html"
                              >
                                <i className="fas fa-newspaper fa-fw me-2"></i>
                                Feature box
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-forms.html"
                              >
                                <i className="far fa-clipboard fa-fw me-2"></i>
                                Forms
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-forms-layout.html"
                              >
                                <i className="fab fa-wpforms fa-fw me-2"></i>
                                Forms layout
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-google-map.html"
                              >
                                <i className="fas fa-map fa-fw me-2"></i>Google
                                Map
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-list-group.html"
                              >
                                <i className="fas fa-list fa-fw me-2"></i>list
                                group
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-modals.html"
                              >
                                <i className="fas fa-search-plus fa-fw me-2"></i>
                                Modals popup
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-offcanvas.html"
                              >
                                <i className="fas fa-bars fa-fw me-2"></i>
                                Offcanvas menus
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-pagination.html"
                              >
                                <i className="fas fa-ellipsis-h fa-fw me-2"></i>
                                Pagination
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-preloader.html"
                              >
                                <i className="fas fa-spinner fa-spin fa-fw me-2"></i>
                                Pre loaders
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-process.html"
                              >
                                <i className="fas fa-tasks fa-fw me-2"></i>
                                Process (Work Step)
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-progress.html"
                              >
                                <i className="fas fa-grip-lines fa-fw me-2"></i>
                                progress bar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-social-icons.html"
                              >
                                <i className="fas fa-share-alt fa-fw me-2"></i>
                                social icons
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-tables.html"
                              >
                                <i className="fas fa-table fa-fw me-2"></i>
                                Tables
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-tabs.html"
                              >
                                <i className="fas fa-toggle-on fa-fw me-2"></i>
                                Tabs and Navs
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-typing-headlines.html"
                              >
                                <i
                                  className="
                                  fas
                                  fa-i-cursor
                                  blink-animation
                                  fa-fw
                                  me-2
                                "
                                ></i>
                                Typing headlines
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-typography.html"
                              >
                                <i className="fas fa-font fa-fw me-2"></i>
                                Typography
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-video.html"
                              >
                                <i className="fas fa-file-video fa-fw me-2"></i>
                                Video
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-video-background.html"
                              >
                                <i className="fas fa-photo-video fa-fw me-2"></i>
                                Video background
                              </a>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li className="dropdown-header mb-0">Plugins</li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-glightbox.html"
                              >
                                <i className="fas fa-expand fa-fw me-2"></i>
                                GLightbox popup
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-isotope.html"
                              >
                                <i className="fas fa-sliders-h fa-fw me-2"></i>
                                Isotope (Filters & Masonry)
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="elements-tiny-slider.html"
                              >
                                <i className="far fa-arrow-alt-circle-right fa-fw me-2"></i>
                                Tiny slider
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 mt-3">
                          <div className="bg-dark p-5 pb-4 w-100 pattern-overlay-1">
                            <div className="row d-md-flex justify-content-center">
                              <h5 className="col-md-4 text-white mb-4">
                                Discover Folio - It's easier than you might
                                think.
                              </h5>
                              <p className="col-md-3 text-white">
                                Start right away to create your dream website
                                hassle free. Grab yours now.
                              </p>
                              <div className="col-md-3 text-md-end">
                                <a
                                  className="btn btn-line btn-primary"
                                  href="#"
                                >
                                  Purchase Folio!
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/*
              <!-- Menu item 5 Docs-->
              */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="docMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Help
                  </a>
                  <ul
                    className="dropdown-menu pb-0 dropdown-menu-sm-end"
                    data-bs-popper="none"
                    aria-labelledby="docMenu"
                  >
                    <li>
                      <a
                        className="dropdown-item ps-4"
                        href="https://support.webestica.com/"
                        target="_blank"
                      >
                        <div className="d-flex">
                          <i
                            className="
                            display-8
                            mt-n1
                            me-3
                            text-primary
                            fa-fw
                            bi bi-chat-right-text
                          "
                          ></i>
                          <div>
                            <h6 className="my-0">
                              Support
                              <i
                                className="
                                fas
                                fa-external-link-square-alt
                                text-body
                                ms-2
                              "
                              ></i>
                            </h6>
                            <p className="small text-body d-none d-md-block mb-0">
                              Contact us through our Support portal
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <div className="dropdown-item ps-4">
                        <div className="d-flex mb-2">
                          <i
                            className="
                            display-8
                            mt-n1
                            me-3
                            text-primary
                            fa-fw
                            bi bi-book-half
                          "
                          ></i>
                          <div>
                            <h6 className="my-0">Folio Doc</h6>
                            <p className="small text-body d-none d-md-block">
                              General instruction about theme and support
                            </p>
                            <a
                              className="dropdown-item px-0"
                              href="https://folio.webestica.com/docs/index.html"
                            >
                              Introduction
                            </a>
                            <a
                              className="dropdown-item px-0"
                              href="https://folio.webestica.com/docs/index.html"
                            >
                              Directory structure
                            </a>
                            <a
                              className="dropdown-item px-0"
                              href="https://folio.webestica.com/docs/gulp.html"
                            >
                              Gulp
                            </a>
                            <a
                              className="dropdown-item px-0"
                              href="https://folio.webestica.com/docs/customization.html"
                            >
                              Customization
                            </a>
                            <a
                              className="dropdown-item px-0"
                              href="https://folio.webestica.com/docs/color-scheme.html"
                            >
                              Color Scheme
                            </a>
                            <a
                              className="dropdown-item px-0"
                              href="https://folio.webestica.com/docs/changelog.html"
                            >
                              changelog
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-light pt-3">
                      <a
                        className="dropdown-item ps-4"
                        href="https://getbootstrap.com/docs"
                        target="_blank"
                      >
                        <div className="d-flex">
                          <i
                            className="
                            display-8
                            mt-n2
                            me-3
                            text-primary
                            fa-fw
                            bi bi-bootstrap
                          "
                          ></i>
                          <div>
                            <h6 className="my-0">
                              Bootstrap Doc
                              <i
                                className="
                                fas
                                fa-external-link-square-alt
                                text-body
                                ms-2
                              "
                              ></i>
                            </h6>
                            <p className="small text-body d-none d-md-block">
                              Checkout Bootstrap official Doc
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                {/*
              <!-- Menu item 6 link-->
              */}
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/*
          <!-- Main Menu END -->
          */}{" "}
            {/*
          <!-- Nav right START -->
          */}
            <div
              className="
              nav
              flex-nowrap
              align-items-center
              bg-primary-end
              position-relative
              ps-4
              ms-4
            "
            >
              {/*
            <!-- Call -->
            */}
              <div className="nav-item d-none d-lg-flex">
                <div className="flex-row mb-n1">
                  <span className="me-2 text-white">Call us:</span>
                  <a href="#" className="text-white mb-0 h6">
                    +(251) 854-6308
                  </a>
                </div>
              </div>
              {/*
            <!-- Nav Search Opener-->
            */}
              <div className="nav-item">
                <a
                  className="nav-link text-white ms-2"
                  data-bs-toggle="collapse"
                  href="javascript:void(0)"
                  data-bs-target="#search-open"
                >
                  <i className="bi bi-search display-9"> </i>
                </a>
              </div>
              {/*
            <!-- Nav Button -->
            */}
              <div className="nav-item d-none d-xl-block">
                <a href="#" className="btn btn-sm btn-dark mb-0 mx-2">
                  Buy Now!
                </a>
              </div>
              {/*
            <!-- Nav side Opener -->
            */}
              <div className="nav-item">
                <a
                  className="nav-link text-white pe-0"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasEnd"
                  role="button"
                  aria-controls="offcanvasEnd"
                >
                  <i
                    className="bi bi-text-right rtl-flip display-8"
                    data-bs-target="#offcanvasEnd"
                  ></i>
                </a>
              </div>
            </div>
            {/*
          <!-- Nav right END -->
          */}
          </div>
        </nav>
        {/*
      <!-- Logo Nav END -->
      */}
      </header>
      {/*
    <!-- =======================
Header END -->
    */}
    </>
  );
}

export default Header;
