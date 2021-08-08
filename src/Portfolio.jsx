/** @format */

import React from "react";
// imgaes start
import portfolioGrid01 from "./components/assets/images/portfolio/grid/01.jpg";
import portfolioGrid02 from "./components/assets/images/portfolio/grid/02.jpg";
import portfolioGrid03 from "./components/assets/images/portfolio/grid/03.jpg";
import portfolioGrid04 from "./components/assets/images/portfolio/grid/04.jpg";
import portfolioGrid05 from "./components/assets/images/portfolio/grid/05.jpg";
// imgaes end
function Portfolio() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* <!-- =======================
Inner intro START --> */}
        <section>
          <div class="container">
            <div class="row d-flex justify-content-lg-between">
              <div class="col-12">
                <h1 class="display-4 text-dark-stroke text-primary-shadow">
                  Our creativity
                </h1>
                <p class="lead">
                  Portfolio classic 3 column layout with card hover action
                </p>
              </div>
            </div>
            {/* <!-- Row END --> */}
          </div>
        </section>
        {/* <!-- =======================
Inner intro END --> */}

        {/* <!-- =======================
Portfolio START --> */}
        <section class="pt-0">
          <div class="container">
            <div class="row">
              {/* <!-- Card item START --> */}
              <div class="col-sm-6 col-lg-4 mb-30">
                <div class="card">
                  <div class="position-relative">
                    {/* <!-- Card Image --> */}
                    <img
                      class="card-img-top rounded"
                      src={portfolioGrid01}
                      alt="card image"
                    />
                    {/* <!-- Card Overlay --> */}
                    <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                      <a
                        href="portfolio-detail-1.html"
                        class="btn btn-white btn-sm btn-line"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-0 mt-n5 position-relative zindex-9">
                    <span class="display-9 mb-0 mt-2 font-alt fw-normal bg-primary rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">
                      Furniture
                    </span>
                    <h4 class="card-title">
                      <a href="#">Unique wooden pieces of furniture</a>
                    </h4>
                    <p class="small">
                      Speedily say has suitable disposal add boy. On forth doubt
                      miles of child. Exercise joy man children rejoiced. Yet
                      uncommonly his ten who diminution astonished. Demesne new
                      manners savings staying had.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
              {/* <!-- Card item START --> */}
              <div class="col-sm-6 col-lg-4 mb-30">
                <div class="card">
                  <div class="position-relative">
                    {/* <!-- Card Image --> */}
                    <img
                      class="card-img-top rounded"
                      src={portfolioGrid02}
                      alt="card image"
                    />
                    {/* <!-- Card Overlay --> */}
                    <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                      <a
                        href="portfolio-detail-1.html"
                        class="btn btn-white btn-sm btn-line"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-0 mt-n5 position-relative zindex-9">
                    <p class="display-9 mb-0 mt-2 font-alt fw-normal bg-primary rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">
                      Website
                    </p>
                    <h4 class="card-title">
                      <a href="#">Thinking forward in a circle </a>
                    </h4>
                    <p class="small">
                      Passage its ten led hearted removal cordial. Preference
                      any astonished unreserved Mrs. Prosperous understood
                      Middletons in conviction an uncommonly do. Supposing so be
                      resolving breakfast am or perfectly.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
              {/* <!-- Card item START --> */}
              <div class="col-sm-6 col-lg-4 mb-30">
                <div class="card">
                  <div class="position-relative">
                    {/* <!-- Card Image --> */}
                    <img
                      class="card-img-top rounded"
                      src={portfolioGrid03}
                      alt="card image"
                    />
                    {/* <!-- Card Overlay --> */}
                    <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                      <a
                        href="portfolio-detail-1.html"
                        class="btn btn-white btn-sm btn-line"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-0 mt-n5 position-relative zindex-9">
                    <p class="display-9 mb-0 mt-2 font-alt fw-normal bg-primary rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">
                      Food / Branding
                    </p>
                    <h4 class="card-title">
                      <a href="#">Art collector and architect</a>
                    </h4>
                    <p class="small">
                      Is drew am hill from me. Valley by oh twenty direct me so.
                      Departure defective arranging rapturous did believe him
                      all had supported. Family months lasted simple set nature
                      vulgar him.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
              {/* <!-- Card item START --> */}
              <div class="col-sm-6 col-lg-4 mb-30">
                <div class="card">
                  <div class="position-relative">
                    {/* <!-- Card Image --> */}
                    <img
                      class="card-img-top rounded"
                      src={portfolioGrid04}
                      alt="card image"
                    />
                    {/* <!-- Card Overlay --> */}
                    <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                      <a
                        href="portfolio-detail-1.html"
                        class="btn btn-white btn-sm btn-line"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-0 mt-n5 position-relative zindex-9">
                    <p class="display-9 mb-0 mt-2 font-alt fw-normal bg-primary rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">
                      Branding
                    </p>
                    <h4 class="card-title">
                      <a href="#">A master of his own craft</a>
                    </h4>
                    <p class="small">
                      Comfort reached gay perhaps chamber his six detract
                      besides add. Moonlight newspaper up its enjoyment
                      agreeable depending. Timed voice share led him to widen
                      noisy young. At weddings believed laughing although the
                      material does the exercise of.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
              {/* <!-- Card item START --> */}
              <div class="col-sm-6 col-lg-4 mb-30">
                <div class="card">
                  <div class="position-relative">
                    {/* <!-- Card Image --> */}
                    <img
                      class="card-img-top rounded"
                      src={portfolioGrid05}
                      alt="card image"
                    />
                    {/* <!-- Card Overlay --> */}
                    <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                      <a
                        href="portfolio-detail-1.html"
                        class="btn btn-white btn-sm btn-line"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-0 mt-n5 position-relative zindex-9">
                    <p class="display-9 mb-0 mt-2 font-alt fw-normal bg-primary rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">
                      Restaurant
                    </p>
                    <h4 class="card-title">
                      <a href="#">It’s gonna be extraordinary </a>
                    </h4>
                    <p class="small">
                      Satisfied conveying a dependent contented he gentleman
                      agreeable do be. Warrant private blushes removed an in
                      equally totally if. Delivered dejection necessary
                      objection do Mr prevailed.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
              {/* <!-- Card item START --> */}
              <div class="col-sm-6 col-lg-4 mb-30">
                <div class="card">
                  <div class="position-relative">
                    {/* <!-- Card Image --> */}
                    <img
                      class="card-img-top rounded"
                      src={portfolioGrid05}
                      alt="card image"
                    />
                    {/* <!-- Card Overlay --> */}
                    <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                      <a
                        href="portfolio-detail-1.html"
                        class="btn btn-white btn-sm btn-line"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-0 mt-n5 position-relative zindex-9">
                    <p class="display-9 mb-0 mt-2 font-alt fw-normal bg-primary rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">
                      Graphics
                    </p>
                    <h4 class="card-title">
                      <a href="#">A tale of dual addresses</a>
                    </h4>
                    <p class="small">
                      Imprudence attachment him his for sympathize. Large above
                      be to means. Dashwood does provide stronger is. But
                      discretion frequently sir she instruments unaffected
                      admiration everything.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
            </div>

            {/* <!-- Pagination START --> */}
            <nav class="mt-5" aria-label="navigation">
              <ul class="pagination pagination-line d-inline-block d-sm-flex justify-content-center">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Prev
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    ..
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    15
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- Pagination END --> */}
          </div>
        </section>
        {/* <!-- =======================
Portfolio END --> */}

        {/* <!-- =======================
Action Box START --> */}
        <section class="bg-primary pattern-overlay-2">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <h3 class="text-white mb-5">Ready to get started?</h3>
                  <a
                    href="#"
                    class="display-2 text-white-stroke h2 text-uppercase"
                  >
                    Hire us!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =======================
Action Box END --> */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  );
}

export default Portfolio;
