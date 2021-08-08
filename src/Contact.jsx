/** @format */

import React from "react";

function Contact() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* <!-- =======================
Inner intro START --> */}
        <section class="pb-0">
          <div class="container">
            <div class="row d-flex justify-content-lg-between">
              <div class="col-12">
                {/* <!-- Typing text --> */}
                <h1 class="display-3 caret-primary">
                  <span
                    class="typed"
                    data-type-text="Hello&&Bonjour&&Asalaam alaikum&&Guten Tag&&Hola&&Zdravstvuyte"
                  ></span>
                </h1>
                <a href="#" class="display-8 text-dark">
                  <u>general@folio.com</u>
                </a>
                <br />
                <a href="#" class="display-8 text-dark">
                  +(251) 854-6308
                </a>
                {/* <!-- Social links --> */}
                <ul class="list-unstyled list-group-inline lead">
                  <li>
                    {" "}
                    <a class="text-facebook me-4" href="#">
                      Facebook
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a class="text-instagram-gradient me-4" href="#">
                      Instagram{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a class="text-twitter me-4" href="#">
                      Twitter{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a class="text-linkedin me-4" href="#">
                      LinkedIn{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =======================
Inner intro END --> */}

        {/* <!-- =======================
Office address START --> */}
        <section>
          <div class="container">
            <div class="row">
              {/* <!--Address --> */}
              <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <h5 class="mb-4">New York, USA (HQ)</h5>
                <address>750 Sing Sing Rd, Horseheads, NY, 14845</address>
                <p>Call: 469-537-2410 (Toll-free)</p>
                <p>
                  Support time: Monday to Saturday
                  <br />
                  9:00 am to 5:30 pm
                </p>
                <a href="#" class="btn btn-sm btn-light">
                  View location <i class="far fa-map ms-3"></i>
                </a>
              </div>
              {/* <!--Address --> */}
              <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <h5 class="mb-4">Tokyo, Japan</h5>
                <address>2002 Horton Ford Rd, Eidson, TN, 37731</address>
                <p>Call: (423) 733-8222 (Toll-free)</p>
                <p>
                  Support time: Monday to Saturday
                  <br />
                  9:30 am to 6:00 pm
                </p>
                <a href="#" class="btn btn-sm btn-light">
                  View location <i class="far fa-map ms-3"></i>
                </a>
              </div>
              {/* <!--Address --> */}
              <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <h5 class="mb-4">Mumbai, India</h5>
                <address>2492 Centennial NW, Acworth, GA, 30102</address>
                <p>Call: (678) 324-1251 (Toll-free)</p>
                <p>
                  Support time: Monday to Friday
                  <br />
                  9:00 am to 5:30 pm
                  <br />
                  Saturday:
                  <br />
                  9:00 am to 1:00 pm
                </p>
                <a href="#" class="btn btn-sm btn-light">
                  View location <i class="far fa-map ms-3"></i>
                </a>
              </div>
            </div>{" "}
            {/* <!-- Row END --> */}
          </div>
        </section>
        {/* <!-- =======================
Office address END --> */}

        {/* <!-- =======================
Contact form START --> */}
        <section class="pt-0">
          <div class="container">
            <div class="row justify-content-lg-between">
              <div class="col-md-5">
                <iframe
                  class="w-100 h-400 grayscale"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                  height="500"
                  style={{ border: "0" }}
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              {/* <!-- Title --> */}
              <div class="col-md-6 mt-5 mt-md-0">
                <h3>Contact us</h3>
                <p>
                  Get in touch with us to see how we can help you with your
                  project
                </p>
                {/* <!-- Form START --> */}
                <form
                  class="contact-form form-line mt-5"
                  id="contact-form"
                  name="contactform"
                  method="POST"
                  action="assets/include/contact-action.php"
                >
                  <div>
                    {/* <!-- name --> */}
                    Hey, my name is
                    <span class="mb-3 d-inline-block">
                      <input
                        required
                        id="con-name"
                        name="name"
                        type="text"
                        class="form-control mb-0 pb-0"
                        placeholder=""
                      />
                    </span>
                    {/* <!-- email --> */}, my email address is
                    <span class="mb-3 d-inline-block">
                      <input
                        required
                        id="con-email"
                        name="email"
                        type="email"
                        class="form-control mb-0 pb-0"
                        placeholder=""
                      />
                    </span>
                    {/* <!-- Subject --> */}, I am contacting you regarding
                    <span class="mb-3 d-inline-block">
                      <input
                        required
                        size="40"
                        id="con-subject"
                        name="subject"
                        type="text"
                        class="form-control mb-0 pb-0"
                        placeholder=""
                      />
                    </span>
                    .
                    <br />
                    {/* <!-- Message --> */}I am looking for:
                    <span class="mb-3 d-block">
                      <textarea
                        required
                        id="con-message"
                        name="message"
                        cols="40"
                        rows="3"
                        class="form-control"
                        placeholder=""
                      ></textarea>
                    </span>
                    {/* <!-- submit button --> */}
                    <div class="text-start">
                      <button class="btn btn-primary btn-line" type="submit">
                        Knock up the Inbox
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Row END --> */}
          </div>
        </section>
        {/* <!-- =======================
Contact form END --> */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  );
}

export default Contact;
