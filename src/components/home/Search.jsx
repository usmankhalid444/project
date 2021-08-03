/** @format */

import React from "react";

function Search() {
  return (
    <>
      {/*
    <!-- Search START -->
    */}
      <div
        className="search-full collapse bg-dark p-3 pb-lg-0"
        id="search-open"
      >
        <div className="container position-relative">
          <h2
            className="
            position-absolute
            start-0
            bottom-0
            mb-n5
            display-1
            text-white-stroke
            opacity-1
          "
          >
            <span className="d-block">Search</span>
          </h2>
          <div className="row vh-100">
            <div className="d-flex flex-column my-auto py-5 w-100">
              {/*
            <!-- Search form START -->
            */}
              <form className="form-dark form-line position-relative w-100">
                <div className="mb-3 input-group-lg input-text-white-stroke mb-0">
                  {/*
                <!-- Search input -->
                */}
                  <input
                    className="form-control font-heading caret-primary mb-0 pe-6"
                    type="text"
                    name="search"
                    placeholder="What are you looking for?"
                  />
                  <span className="focus-border"></span>
                </div>
                {/*
              <!-- Search button -->
              */}
                <button
                  type="button"
                  className="
                  position-absolute
                  end-0
                  top-0
                  btn
                  pb-3
                  text-primary-hover
                  h-100
                "
                >
                  <i className="bi bi-search display-8"></i>
                </button>
              </form>
              {/*
            <!-- Search form END -->
            */}
              <p className="small mt-2 mb-0">
                e.g. Template, Bootstrap, WordPress theme
              </p>
            </div>

            {/*
          <!-- Search button close START -->
          */}
            <a
              className="
              position-fixed
              top-0
              end-0
              m-3 m-md-5
              btn btn-white btn-round
              zoom-hover
            "
              data-bs-toggle="collapse"
              href="javascript:void(0)"
              data-bs-target="#search-open"
              aria-expanded="true"
            >
              <i className="fas fa-times p-0"></i>
            </a>
            {/*
          <!-- Search button close END -->
          */}
          </div>
        </div>
      </div>
      {/*
    <!-- Search END -->
    */}
    </>
  );
}

export default Search;
