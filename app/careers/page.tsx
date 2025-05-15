import React from "react";
import BrandSlider from "../home-comp/brandSlider";
import Link from "next/link";

const Careers = () => {
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
                <li className="breadcrumb-item active">Careers</li>
              </ol>
            </nav>
          </div>
        </div>
        <section className="w-100 padding section-careers">
          <div className="container-lg">
            <div className="sec-title">
              <span className="h6 sec-title__tagline">careers</span>
              <h2 className="h1 mb-0">Join Our <span className="text-third">Team</span></h2>
            </div>
            <div className="row g-4 justify-content-between">
              <div className="col-md-8 careerContainer">
                <div className="inner">
                  <div className="card">
                    <div className="card-body">
                      <div className="sec-title mb-2">
                        <h4 className="fw-bold text-primary mb-0">Golf Cart Driver and Tour Guide</h4>
                      </div>
                      <p>If you're seeking a rewarding role with generous compensation and a dose of fun, Philly City Tours is the place for you. It's like embarking on a paid vacation, sharing memorable moments with families from around the world. As a Golf Cart Driver and Tour Guide, your responsibilities will include delivering engaging narrations and leading tourists on captivating journeys around the city, ensuring an enjoyable and meaningful experience for our guests.</p>
                      <div className="sec-title mb-2">
                        <h5 className="fw-bold text-third mb-0">Responsibilities:</h5>
                      </div>
                      <p>Lead golf cart tours, showcasing monuments and memorials of interest. Pick up and drive tour groups to various destinations. Provide valuable information, ensuring tourists have a fun, safe, and educational experience.</p>


                      <div className="sec-title mb-2">
                        <h5 className="fw-bold text-third mb-0">Qualifications:</h5>
                      </div>
                      <ul className="list ms-3">
                        <li>Strong leadership skills.</li>
                        <li>Highly organized.</li>
                        <li>Valid driver’s license with a good driving record.</li>
                      </ul>

                      <div className="sec-title mb-2">
                        <h5 className="fw-bold text-third mb-0">Benefits:</h5>
                      </div>
                      <ul className="list ms-3">
                        <li>$20/hour + 100% gratuities.</li>
                        <li>Part-time or full-time opportunities.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="sec-title mb-2">
                        <h4 className="fw-bold text-primary mb-0">Manager Assistant</h4>
                      </div>

                      <p>If you're passionate about generous compensation and having a great time, consider joining Philly City Tours as a Manager Assistant. This role involves assisting in operational duties such as fleet maintenance, shop management, marketing strategies, and more.</p>
                      <div className="sec-title mb-2">
                        <h5 className="fw-bold text-third mb-0">Responsibilities:</h5>
                      </div>
                      <ul className="list ms-3">
                        <li>Fleet maintenance.</li>
                        <li>Shop management.</li>
                        <li>Marketing.</li>
                      </ul>
                      <div className="sec-title mb-2">
                        <h5 className="fw-bold text-third mb-0">Qualifications:</h5>
                      </div>
                      <ul className="list ms-3">
                        <li>Strong leadership skills.</li>
                        <li>Highly organized.</li>
                      </ul>

                      <div className="sec-title mb-2">
                        <h5 className="fw-bold text-third mb-0">Benefits:</h5>
                      </div>
                      <ul className="list ms-3">
                        <li>$20/hour.</li>
                        <li>Part-time or full-time opportunities.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="sec-title mb-2 mt-4">
                    <h4 className="fw-bold text-primary mb-0">How to Apply:</h4>
                  </div>
                  <p>Send an email to <a href="mailto:info@phillycitytours.com">info@phillycitytours.com</a> with a photo of your driver’s license, and details of your availability, and mention the job title in the subject line. We'll get back to you promptly. Join us in creating meaningful, educational, and enjoyable experiences for DC tourists!</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-5 stickyBar formContainer">
                <div className="inner rounded bg-light">
                  <div className="sec-title mb-2"><h4 className="fw-bold text-primary mb-0">Apply Now</h4></div>
                  <form method="POST" encType="multipart/form-data">
                    <div className="form-floating form-group">
                      <input type="text" id="firstname" name="firstname" className="form-control" placeholder="" />
                      <label htmlFor="firstname">First Name<span className="text-danger">*</span></label>
                    </div>
                    <div className="form-floating form-group">
                      <input type="text" id="lastname" name="lastname" className="form-control" placeholder="" />
                      <label htmlFor="lastname">Last Name<span className="text-danger">*</span></label>
                    </div>
                    <div className="form-floating form-group">
                      <input type="email" id="caremail" name="caremail" className="form-control" placeholder="" />
                      <label htmlFor="email">Email<span className="text-danger">*</span></label>
                    </div>
                    <div className="form-floating form-group">
                      <input type="tel" id="carmobile" name="carmobile" className="form-control" placeholder="" />
                      <label htmlFor="mobile">Mobile<span className="text-danger">*</span></label>
                    </div>
                    <div className="form-floating form-group">
                      <select id="jobrole" name="jobrole" className="form-control form-select">
                        <option value="">Choose field</option>
                        <option value="Front Desk">Front Desk</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                      <label htmlFor="jobrole">Job Role<span className="text-danger">*</span></label>
                    </div>
                    <div className="form-floating form-group">
                      <input type="text" id="experience" name="experience" className="form-control" placeholder="" />
                      <label htmlFor="experience">Experience<span className="text-danger">*</span></label>
                    </div>
                    <div className="form-floating form-group">
                      <input type="file" id="resume" name="resume" className="form-control " placeholder="" />
                      <label htmlFor="resume">Upload Resume<span className="text-danger">*</span></label>
                    </div>
                    <div className="readmore mt-3">
                      <button className="button w-100">Submit <i className="fa fa-angles-right"></i></button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;
