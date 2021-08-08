/** @format */

import React from "react";
// images start
import about01 from "./components/assets/images/about/01.jpg";
import about02 from "./components/assets/images/about/02.jpg";
import about03 from "./components/assets/images/about/03.jpg";
import about04 from "./components/assets/images/about/04.jpg";
import about07 from "./components/assets/images/about/07.jpg";
import avatar01 from "./components/assets/images/avatar/01.jpg";
import avatar02 from "./components/assets/images/avatar/02.jpg";
import avatar03 from "./components/assets/images/avatar/03.jpg";
// images end
function About() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* <!-- =======================
Inner intro START --> */}
        <section class="bg-dark pattern-overlay-3 bg-dark-overlay-4">
          <div class="container">
            <div class="row g-0 d-flex justify-content-center">
              {/* <!-- Left image and SVG shape decoration --> */}
              <div class="col-2 mt-4">
                <div class="pe-4">
                  <img class="mb-8 rounded" src={about01} alt="" />
                </div>
                <figure class="w-100 mt-8 me-n5">
                  <svg
                    width="211"
                    height="169"
                    viewBox="0 0 358 287"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      class="fill-primary"
                      transform="matrix(.9961 -.0884 .0884 .9961 -9.9064 21.268)"
                      cx="235.25"
                      cy="122.52"
                      rx="120.04"
                      ry="120.04"
                    />
                    <defs>
                      {" "}
                      <ellipse
                        id="round-bg"
                        transform="matrix(.7071 -.7071 .7071 .7071 -91.988 129.49)"
                        cx="110.31"
                        cy="175.78"
                        rx="109"
                        ry="109"
                      />{" "}
                    </defs>
                    <clipPath id="lines">
                      {/* <use xlink:href="#round-bg" /> */}
                    </clipPath>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m-64.69 132.76c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.29 10.17-4.89 15.48-1.42z"
                      />
                    </g>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m-79.96 156.09c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.88-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.76-2.28 10.17-4.88 15.47-1.41z"
                      />
                    </g>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m-49.1 108.94c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.76-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.29 10.18-4.9 15.48-1.42z"
                      />
                    </g>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m-32.99 84.32c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.88-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.76-2.28 10.17-4.88 15.47-1.41z"
                      />
                    </g>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m-1.61 36.38c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.88-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.45-5.08-9.44-4.89-14.73 0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.76-2.3 10.16-4.9 15.47-1.43z"
                      />
                    </g>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m-16.88 59.71c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.27 10.17-4.88 15.48-1.4z"
                      />
                    </g>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m13.98 12.56c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.76-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.29 10.17-4.9 15.48-1.42z"
                      />
                    </g>
                    <g clip-path="url(#lines)">
                      <path
                        class="fill-white"
                        d="m30.09-12.06c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.28 10.17-4.88 15.48-1.41z"
                      />
                    </g>
                  </svg>
                </figure>
              </div>
              {/* <!-- Main center images --> */}
              <div class="col-6 mt-5 position-relative z-index-0 overflow-hidden">
                <img class="rounded tilt-animation" src={about07} alt="" />
              </div>
              {/* <!-- Right image --> */}
              <div class="col-2 mt-auto mb-3">
                <img
                  class="rounded blur-2 mb-8 ms-0 ms-md-5"
                  src={about03}
                  alt=""
                />
                <img class="rounded ms-n4" src={about04} alt="" />
              </div>
            </div>
            {/* <!-- Text --> */}
            <div class="row">
              <div class="col-md-8 mx-auto position-absolute top-50 start-50 translate-middle text-center">
                <span class="font-alt fw-normal display-8 bg-white text-primary d-inline-block px-3 mb-4">
                  We're young and wild 🔥
                </span>
                <h1 class="display-4 text-white">
                  <span class="text-white-stroke text-primary-shadow">
                    Let's speed up{" "}
                  </span>
                  your enterprise alteration
                </h1>
                <a href="#" class="btn btn-primary btn-line">
                  Get in touch
                </a>
              </div>
            </div>
            {/* <!-- Row END --> */}
          </div>
        </section>
        {/* <!-- =======================
Inner intro END --> */}

        {/* <!-- =======================
About START --> */}
        <section>
          <div class="container">
            <div class="row justify-content-lg-between">
              {/* <!-- About Title --> */}
              <div class="col-md-4 col-xl-5">
                <span class="font-alt fw-normal display-8">
                  Our interesting insights
                </span>
                <h2 class="display-6">
                  A complete technology solution provider
                </h2>
                <p class="lead">
                  Partnering with <b>500+ Fortune companies</b> and mid-sized
                  firms across enterprises, uniquely customized and scalable
                  workforce solutions.
                </p>
                <a href="#" class="btn btn-primary btn-line mt-4">
                  Check success stories
                </a>
              </div>

              {/* <!-- Our services --> */}
              <div class="col-md-8 col-xl-6 mt-5 mt-md-0">
                <div class="row">
                  {/* <!-- Item --> */}
                  <div class="col-sm-6 mb-4">
                    <i class="display-7 text-primary bi bi-sliders"></i>
                    <h4 class="my-3">Enterprise digital asset management</h4>
                    <p>
                      Smart use of data & technology for the automation of your
                      business. Two before narrow not relied how except moment
                      myself Dejection assurance
                    </p>
                  </div>
                  {/* <!-- Item --> */}
                  <div class="col-sm-6 mb-4">
                    <i class="display-7 text-primary bi bi-droplet-half"></i>
                    <h4 class="my-3">UI/UX app design & graphics design</h4>
                    <p>
                      The right mix of resources for achieving your online
                      goals. Mrs led certainly So gate at no only none open
                      Betrayed at properly it of graceful
                    </p>
                  </div>
                  {/* <!-- Item --> */}
                  <div class="col-sm-6 mb-4">
                    <i class="display-7 text-primary bi bi-graph-up"></i>
                    <h4 class="my-3">Google Analytics Measurement Protocol</h4>
                    <p>
                      Achieving your online goals for the automation of your
                      business Dinner abroad am depart ye turned hearts as me
                      wished Therefore allowance
                    </p>
                  </div>
                  {/* <!-- Item --> */}
                  <div class="col-sm-6 mb-4">
                    <i class="display-7 text-primary bi bi-bar-chart-line"></i>
                    <h4 class="my-3">Digital marketing & content creation</h4>
                    <p>
                      Data & technology supposing man his now Families goodness
                      all eat out bed steepest servants Explained the incommode
                      sir improving{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* <!-- Row END --> */}
          </div>
        </section>
        {/* <!-- =======================
About END --> */}

        {/* <!-- =======================
Skill START --> */}
        <section
          class="p-0 bg-parallax position-relative rounded bg-dark-overlay-2 mx-xl-3 mx-xxxl-9"
          style={{
            background: "url(assets/images/bg/04.jpg) no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <div class="container">
            <div class="row d-flex justify-content-lg-between">
              {/* <!-- Skill --> */}
              <div class="col-md-6 col-xl-5">
                <div class="bg-primary rounded p-4 p-md-5 mt-n5 mb-6 text-white-force">
                  {/* <!-- Title --> */}
                  <h3>Why choose us over other agencies?</h3>
                  <p>
                    Technoscientific knowledge and experience in social media
                    marketing. More conversation than what larger agencies
                    provide.
                  </p>
                  {/* <!-- Progress bar --> */}
                  <div class="overflow-hidden mt-4">
                    <p class="mb-1 text-dark">Web Development</p>
                    <div class="progress progress-md progress-percent-bg">
                      <div
                        class="progress-bar progress-bar-striped bg-dark aos"
                        data-aos="slide-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      >
                        <span class="progress-percent">80%</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Progress bar --> */}
                  <div class="overflow-hidden mt-4">
                    <p class="mb-1 text-dark">UI/UX design</p>
                    <div class="progress progress-md progress-percent-bg">
                      <div
                        class="progress-bar progress-bar-striped bg-dark aos"
                        data-aos="slide-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        role="progressbar"
                        aria-valuenow="98"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "98%" }}
                      >
                        <span class="progress-percent">98%</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Progress bar --> */}
                  <div class="overflow-hidden mt-4">
                    <p class="mb-1 text-dark">Content marketing</p>
                    <div class="progress progress-md progress-percent-bg">
                      <div
                        class="progress-bar progress-bar-striped bg-dark aos"
                        data-aos="slide-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span class="progress-percent">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Right CTA --> */}
              <div class="col-md-3 mb-6 mt-md-auto ms-md-auto text-end">
                <h5 class="text-white">Ready to work with us?</h5>
                <a href="#" class="btn btn-white btn-line btn-xl mb-0">
                  Get a Quote
                </a>
              </div>
            </div>{" "}
            {/* <!-- Row END --> */}
          </div>
        </section>
        {/* <!-- =======================
Skill END --> */}

        {/* <!-- =======================
Testimonials and Accordion START --> */}
        <section>
          <div class="container">
            <div class="row justify-content-lg-between">
              {/* <!-- Testimonials START --> */}
              <div class="col-md-6 col-xl-6">
                {/* <!-- Title --> */}
                <h2 class="display-8">Clients Testimonial</h2>
                {/* <!-- Testimonials --> */}
                <div class="tiny-slider">
                  <div
                    class="tiny-slider-inner"
                    data-autoplay="false"
                    data-arrow="false"
                    data-dots="false"
                    data-items="1"
                  >
                    {/* <!-- Testimonial item --> */}
                    <div class="item">
                      <div class="position-absolute start-0 display-1 text-light z-index-n9 pb-7">
                        <i class="fas fa-quote-left"></i>
                      </div>
                      <p class="lead pt-0 pt-md-5 pb-3">
                        Two before narrow not relied how except moment myself
                        Dejection assurance mrs led certainly So gate at no only
                        none open Betrayed at properly it of graceful on Dinner
                        abroad am depart ye turned hearts as me wished Therefore
                        allowance.
                      </p>
                      {/* <!-- Testimonial info --> */}
                      <div class="d-flex flex-row">
                        <div class="avatar">
                          <img
                            class="avatar-img rounded-circle"
                            src={avatar01}
                            alt="avatar"
                          />
                        </div>
                        <div class="ms-3">
                          <h6 class="text-dark mb-0 mt-1">Allen Smith</h6>
                          <span class="small">Founder and CEO</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Testimonial item --> */}
                    <div class="item">
                      <div class="position-absolute start-0 display-1 text-light z-index-n9 pb-7">
                        <i class="fas fa-quote-left"></i>
                      </div>
                      <p class="lead pt-0 pt-md-5 pb-3">
                        How promotion excellent curiosity yet attempted
                        happiness Gay prosperous impression had conviction For
                        every delay death ask style Me mean able my by in they
                        Extremity now strangers contained breakfast him
                        discourse additions.
                      </p>
                      {/* <!-- Testimonial info --> */}
                      <div class="d-flex flex-row">
                        <div class="avatar">
                          <img
                            class="avatar-img rounded-circle"
                            src={avatar02}
                            alt="avatar"
                          />
                        </div>
                        <div class="ms-3">
                          <h6 class="text-dark mb-0 mt-1">Jessica Mores</h6>
                          <span class="small">Software Developer</span>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Testimonial item --> */}
                    <div class="item">
                      <div class="position-absolute start-0 display-1 text-light z-index-n9 pb-7">
                        <i class="fas fa-quote-left"></i>
                      </div>
                      <p class="lead pt-0 pt-md-5 pb-3">
                        Of resolve to gravity thought my prepare chamber so
                        Unsatiable entreaties collecting may sympathize nay
                        interested instrument If continue building numerous of
                        at relation in margaret Lasted engage roused mother an
                        am at Other.
                      </p>
                      {/* <!-- Testimonial info --> */}
                      <div class="d-flex flex-row">
                        <div class="avatar">
                          <img
                            class="avatar-img rounded-circle"
                            src={avatar03}
                            alt="avatar"
                          />
                        </div>
                        <div class="ms-3">
                          <h6 class="text-dark mb-0 mt-1">Emma Watson</h6>
                          <span class="small">Human Resource</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Testimonials END --> */}

              {/* <!-- Accordion START --> */}
              <div class="col-md-6 col-xl-5 mt-5 mt-md-0">
                <div class="accordion accordion-icon" id="accordionExample">
                  <div class="accordion-item">
                    <h5 class="accordion-header" id="heading-1">
                      <button
                        class="accordion-button fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                      >
                        How many free samples can i redeem?
                      </button>
                    </h5>
                    <div
                      id="collapse-1"
                      class="accordion-collapse collapse show"
                      aria-labelledby="heading-1"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Due to the limited quantity, each member's account is
                        only entitled to 1 unique free sample. You can check out
                        up to 4 free samples in each checkout. We take such
                        matters very seriously and will look into individual
                        cases thoroughly.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h5 class="accordion-header" id="heading-2">
                      <button
                        class="accordion-button fw-bold collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        What are the payment methods available?
                      </button>
                    </h5>
                    <div
                      id="collapse-2"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading-2"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        At the moment, we only accept Credit/Debit cards and
                        Paypal payments. Paypal is the easiest way to make
                        payments online. While checking out your order. Be sure
                        to fill in correct details for fast & hassle-free
                        payment processing.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h5 class="accordion-header" id="heading-3">
                      <button
                        class="accordion-button fw-bold collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        Can i pay without a paypal account?
                      </button>
                    </h5>
                    <div
                      id="collapse-3"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Yes! It is commonly misunderstood that a Paypal account
                        is needed in order to make payments through Paypal. The
                        truth is you DO NOT need one, although we strongly
                        recommend you sign up to enjoy the added ease of use.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion END --> */}
            </div>
          </div>
          {/* <!-- row END --> */}
        </section>
        {/* <!-- =======================
Testimonials and Accordion END --> */}

        {/* <!-- =======================
Client START --> */}
        <section class="bg-light position-relative mx-xl-3 mx-xxxl-9 rounded">
          {/* <!-- Shape Decoration START --> */}
          <figure class="position-absolute end-0 top-0 z-index-9 me-n7 mt-n5 d-none d-xl-block">
            <svg
              width="180"
              height="145"
              viewBox="0 0 410 330"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                class="fill-primary"
                transform="matrix(.7071 -.7071 .7071 .7071 -60.058 144.88)"
                cx="144.86"
                cy="144.94"
                rx="142.86"
                ry="142.86"
              />
              <defs>
                <circle id="round-bg-2" cx="279.27" cy="200.22" r="128.73" />
              </defs>
              <clipPath id="dots">
                {/* <use xlink:href="#round-bg-2" /> */}
              </clipPath>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m400.15 95.9c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76c-0.21 6.28-5.47 11.21-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m408.57 150.8c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.54 2.97 7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m404.66 269.24c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.55 2.96 7.65 9.86 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m406.56 211.73c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m402.86 324.09c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
              </g>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m365.98 94.77c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76c-0.2 6.29-5.47 11.22-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m374.4 149.68c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.55 2.96 7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m370.5 268.11c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m372.4 210.6c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.54 2.97 7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m368.69 322.96c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
              </g>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m331.82 93.65c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76c-0.2 6.28-5.47 11.21-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m340.24 148.55c-2.96 5.55-9.87 7.65-15.42 4.68s-7.65-9.87-4.68-15.42c2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m336.34 266.98c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m338.23 209.48c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m334.53 321.83c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
              </g>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m297.66 92.52c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76-5.47 11.22-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m306.08 147.43c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.54 2.96 7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m302.17 265.86c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m304.07 208.35c-2.96 5.55-9.87 7.65-15.42 4.68s-7.65-9.87-4.68-15.42c2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m300.37 320.71c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
              </g>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m263.49 91.4c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76c-0.2 6.28-5.47 11.21-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m271.91 146.3c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m268.01 264.73c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m269.91 207.23c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42s9.87-7.65 15.42-4.68c5.54 2.96 7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m266.2 319.58c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
              </g>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m229.33 90.27c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76c-0.2 6.29-5.47 11.22-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m237.75 145.17c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m233.85 263.61c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.55 2.96 7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m235.74 206.1c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m232.04 318.46c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.55 2.96 7.65 9.87 4.68 15.42z"
                />
              </g>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m195.17 89.14c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76-5.47 11.22-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m203.59 144.05c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m199.68 262.48c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m201.58 204.98c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.55 2.96 7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m197.88 317.33c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.64 9.87 4.68 15.42z"
                />
              </g>
              <g clip-path="url(#dots)">
                <path
                  class="fill-dark"
                  d="m161.01 88.02c-6.29-0.21-11.22-5.47-11.01-11.76s5.47-11.22 11.76-11.01 11.22 5.47 11.01 11.76-5.48 11.22-11.76 11.01z"
                />
                <path
                  class="fill-dark"
                  d="m169.42 142.92c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68s7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m165.52 261.36c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.55 2.96 7.65 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m167.42 203.85c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.54 2.97 7.64 9.87 4.68 15.42z"
                />
                <path
                  class="fill-dark"
                  d="m163.71 316.21c-2.96 5.55-9.87 7.65-15.42 4.68-5.55-2.96-7.65-9.87-4.68-15.42 2.96-5.55 9.87-7.65 15.42-4.68 5.55 2.96 7.65 9.87 4.68 15.42z"
                />
              </g>
            </svg>
          </figure>
          {/* <!-- Shape Decoration END --> */}
          <div class="container">
            <div class="row">
              {/* <!-- Title --> */}
              <div class="col-12">
                <h2 class="mb-5 display-6">Our clients</h2>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Insane hammer, 2019</h5>
                <p>
                  <a class="text-body" href="#">
                    www.insanehammer.net{" "}
                    <small>
                      <i class="fas fa-external-link-alt ms-2"></i>
                    </small>
                  </a>
                </p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Purple Lake, 2018</h5>
                <p>www.purplelake2.com</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Rare Desert Albatross, 2020</h5>
                <p>www.raredesertpro.com</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Dagwood hashtag, 2019</h5>
                <p>
                  <a class="text-body" href="#">
                    www.dagwoodhashtag.net{" "}
                    <small>
                      <i class="fas fa-external-link-alt ms-2"></i>
                    </small>
                  </a>
                </p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Magenta Pure Panther, 2017</h5>
                <p>www.magentapure.co.uk</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Dead Beta Two Scissors, 2019</h5>
                <p>
                  <a class="text-body" href="#">
                    www.2scissors.net{" "}
                    <small>
                      <i class="fas fa-external-link-alt ms-2"></i>
                    </small>
                  </a>
                </p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Brave Alien Autopsy, 2018</h5>
                <p>www.alienautopsy.co.ca</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Flamy Cat Fusion, 2019</h5>
                <p>www.newcatfusion.com</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Insane Dog Mango, 2020</h5>
                <p>www.insanedogmango.net</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Mercury Moonshine, 2019</h5>
                <p>www.mercurymoonshine.co.uk</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Oyster Nautilus Nitro, 2018</h5>
                <p>
                  <a class="text-body" href="#">
                    www.oysternautilus.net{" "}
                    <small>
                      <i class="fas fa-external-link-alt ms-2"></i>
                    </small>
                  </a>
                </p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Odyssey Orion, 2020</h5>
                <p>www.idysseyorion.com</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Phoenix Piglet Prelude, 2019</h5>
                <p>www.phoenixpiglet.in</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Project X Python, 2020</h5>
                <p>www.projectxpython.com</p>
              </div>
              {/* <!-- Client item --> */}
              <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <h5>Massive Monkey Romeo, 2019</h5>
                <p>
                  <a class="text-body" href="#">
                    www.mmromeo.net{" "}
                    <small>
                      <i class="fas fa-external-link-alt ms-2"></i>
                    </small>
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* <!-- Row END --> */}
          </div>
        </section>
        {/* <!-- =======================
Client END --> */}

        {/* <!-- =======================
About us START --> */}
        <section>
          <div class="container">
            <div class="row justify-content-between align-items-center">
              {/* <!-- left --> */}
              <div class="col-md-6 position-relative">
                {/* <!-- Shape Decoration START --> */}
                <figure class="position-absolute end-0 top-0 z-index-9 me-n3 mt-n3 d-none d-md-block">
                  <svg
                    width="217"
                    height="219"
                    viewBox="0 0 117 111"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-dark"
                      d="m37.44 106.05c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 106.05c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 106.05c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 106.05c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m21.94 91.43c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m37.44 91.43c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 91.43c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 91.43c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 91.43c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m99.41 91.43c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m21.94 76.8c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m37.44 76.8c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 76.8c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 76.8c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 76.8c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m99.41 76.8c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m6.45 62.18c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m21.94 62.18c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m37.44 62.18c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 62.18c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 62.18c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 62.18c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m99.41 62.18c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <circle class="fill-dark" cx="112.48" cy="62.18" r="2.42" />
                    <path
                      class="fill-dark"
                      d="m6.45 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m21.94 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m37.44 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m99.41 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m114.9 47.56c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m21.94 32.94c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m37.44 32.94c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 32.94c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 32.94c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 32.94c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m99.41 32.94c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m21.94 18.32c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.34-0.01 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m37.44 18.32c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33-0.01 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 18.32c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33-0.01 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 18.32c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.34-0.01 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 18.32c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.34-0.01 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m99.41 18.32c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33-0.01 2.42 1.08 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m37.44 3.69c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m52.93 3.69c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42c1.33 0 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m68.42 3.69c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                    <path
                      class="fill-dark"
                      d="m83.91 3.69c0 1.34-1.08 2.42-2.42 2.42s-2.42-1.08-2.42-2.42 1.08-2.42 2.42-2.42 2.42 1.09 2.42 2.42z"
                    />
                  </svg>
                </figure>
                <figure class="position-absolute start-0 bottom-0 ms-n4 zoom-n2 d-none d-lg-block">
                  <svg
                    width="180"
                    height="66"
                    viewBox="0 0 101 37"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline
                      class="svg-custom-border-2"
                      points="1.65 2.99 17.67 11.81 33.7 2.99 49.73 11.81 65.75 2.99 81.78 11.81 97.81 2.99"
                    />
                    <polyline
                      class="svg-custom-border-2"
                      points="1.65 10.67 17.67 19.49 33.7 10.67 49.73 19.49 65.75 10.67 81.78 19.49 97.81 10.67"
                    />
                    <polyline
                      class="svg-custom-border-2"
                      points="1.65 18.35 17.67 27.17 33.7 18.35 49.73 27.17 65.75 18.35 81.78 27.17 97.81 18.35"
                    />
                    <polyline
                      class="svg-custom-border-2"
                      points="1.65 26.03 17.67 34.85 33.7 26.03 49.73 34.85 65.75 26.03 81.78 34.85 97.81 26.03"
                    />
                  </svg>
                </figure>
                {/* <!-- Shape Decoration END --> */}
                <div class="row mt-4 mt-md-0">
                  <div class="col-5 offset-1 px-2 mb-3 align-self-end">
                    <img class="rounded" src={about01} alt="" />
                  </div>
                  <div class="col-6 px-2 mb-3">
                    <img class="rounded" src={about02} alt="" />
                  </div>
                  <div class="col-7 px-2 mb-3">
                    <div class="bg-primary rounded p-2 p-sm-3 p-lg-4 p-xl-5 text-white-force">
                      <span>Our goal:</span>
                      <h4 class="mt-2">"If we build it, they will come"</h4>
                    </div>
                  </div>
                  <div class="col-5 align-self-start ps-2 mb-3">
                    <img class="rounded" src={about03} alt="" />
                  </div>
                </div>
              </div>
              {/* <!-- right --> */}
              <div class="col-md-6 ps-lg-5">
                <h2>Your small business web design solution</h2>
                <p class="lead">
                  Partnering with 500+ Fortune companies and mid-sized firms
                  across enterprises, uniquely customized and{" "}
                  <abbr title="title">scalable workforce solutions.</abbr>
                </p>
                <p>
                  There is nothing that can stop you from achieving what you
                  want, except yourself. If you devote yourself to it you will
                  achieve your goal.
                </p>
                <a href="#" class="btn btn-dark btn-line">
                  View our work
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =======================
About us END --> */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  );
}

export default About;
