import React from "react";
import BrandSlider from "../home-comp/brandSlider";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <main>
        <div className="w-100 emptyBox"></div>
        <div className="w-100 breadcrumb-wrapper bg-primary">
          <div className="container-lg">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
        <section className="w-100 padding section-careers">
          <div className="container-lg">
            <div className="sec-title">
              <span className="h6 sec-title__tagline">how to connect?</span>
              <h2 className="h1 mb-0">Contact <span className="text-third">us</span></h2>
            </div>
            <div className="row g-4">
              <div className="col-sm-6 contactBox">
                <div className="inner">
                  <h4>Contact</h4>
                  <ul className="list-unstyled contactList">
                    <li><i className="fa fa-phone"></i> <a href="tel:+17038706390">+1 703 870 6390</a>, <a href="tel:+19292573451">+1 929 257 3451</a></li>
                    <li><i className="fa fa-envelope"></i> <a href="mailto:info@phillycitytours.com">info@phillycitytours.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 contactBox">
                <div className="inner">
                  <h4>Corporate Office</h4>
                  <ul className="list-unstyled contactList">
                    <li><i className="fa fa-map-marker-alt"></i>39 Everglades Ln, Stafford, VA 22554, USA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-100 padding bg-light">
          <div className="container-lg">
            <div className="row g-4">
              <div className="col-md-7 formContainer">
                <div className="sec-title">
                  <h2 className="h1 mb-0">Have any <span className="text-third">query?</span></h2>
                </div>
                <div className="inner">
                  <form method="POST" encType="multipart/form-data">
                    <div className="row g-3">
                      <div className="col-sm-6 form-group">
                        <div className="form-floating">
                          <input type="text" id="firstname" name="firstname" value="" className="form-control" placeholder="" />
                          <label htmlFor="firstname">First Name<span className="text-danger">*</span></label>
                        </div>
                      </div>
                      <div className="col-sm-6 form-group">
                        <div className="form-floating">
                          <input type="text" id="lastname" name="lastname" value="" className="form-control" placeholder="" />
                          <label htmlFor="lastname">Last Name<span className="text-danger">*</span></label>
                        </div>
                      </div>
                      <div className="col-sm-6 form-group">
                        <div className="form-floating">
                          <input type="email" id="con_email" name="con_email" defaultValue="" className="form-control" placeholder="" />
                          <label htmlFor="email">Email<span className="text-danger">*</span></label>
                        </div>
                      </div>
                      <div className="col-sm-6 form-group">
                        <div className="form-floating">
                          <input type="tel" id="con_mobile" name="con_mobile" defaultValue="" className="form-control" placeholder="" />
                          <label htmlFor="mobile">Mobile<span className="text-danger">*</span></label>
                        </div>
                      </div>
                      <div className="col-sm-12 form-group">
                        <div className="form-floating">
                          <textarea id="con_message" name="con_message" style={{'height': '220px'}} className="form-control" placeholder=""></textarea>
                          <label htmlFor="query">Query</label>
                        </div>
                      </div>
                    </div>
                    <div className="readmore mt-3">
                      <button type="submit" className="button">Submit <i className="fa fa-angles-right"></i></button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5">
                <img src="https://www.dcmonumentstour.com/assets/images/contact-img.webp" className="rounded h-100 object-cover" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
