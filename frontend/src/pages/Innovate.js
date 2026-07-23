import React, { useState } from "react";
import park from "./edu.PNG";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./innovate.css";

const initialState = {
  fullname: "",
  age: "",
  school: "",
  grade: "",
  parentName: "",
  parentPhone: "",
  parentWhatsapp: "",
  parentEmail: "",
  mode: "",
  courseInterest: [],
  experience: "",
  medical: "",
  hear: "",
  comments: "",
};

const COURSE_OPTIONS = [
  "Web & App Coding",
  "Robotics & Electronics",
  "Python Programming",
  "Graphic Design Basics",
];

const Innovate = () => {
  const [formData, setFormData] = useState(initialState);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCourseToggle = (course) => {
    setFormData((prev) => {
      const currentList = prev.courseInterest || [];
      const already = currentList.includes(course);
      return {
        ...prev,
        courseInterest: already
          ? currentList.filter((c) => c !== course)
          : [...currentList, course],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((formData.courseInterest || []).length === 0) {
      toast.error("Please select at least one course");
      return;
    }

    try {
      await axios.post(`https://eduproapi.vercel.app/api/bootcamp`, formData);
      setShowSuccessModal(true);
      setFormData(initialState);
    } catch (err) {
      console.error("Error registering:", err);
      toast.error("Unable to submit");
    }
  };

  return (
    <>
      <main>
        <div className="contact-area">
          <div className="container">
            <div className="row pb-140 justify-content-between">
              <div
                className="col-xxl-6 col-xl-6 col-lg-6"
                style={{ margin: "auto" }}
              >
                <div
                  className="contact-form wow fadeInUp mb-50 mb-xl-0"
                  data-wow-delay=".2s"
                >
                  <form onSubmit={handleSubmit} id="contact-form">
                    <h4
                      style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        marginTop: "40px",
                        color: "#042954",
                      }}
                    >
                      Coding &amp; Robotics Bootcamp Registration
                    </h4>

                    <div className="row">
                      {/* Child's Full Name */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="fullname"
                            className="post-input-label-defualt"
                          >
                            Child's Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Age */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="age"
                            className="post-input-label-defualt"
                          >
                            Age *
                          </label>
                          <input
                            type="number"
                            name="age"
                            id="age"
                            min="1"
                            max="25"
                            value={formData.age}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Current School */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="school"
                            className="post-input-label-defualt"
                          >
                            Current School
                          </label>
                          <input
                            type="text"
                            name="school"
                            id="school"
                            value={formData.school}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Class/Grade Level */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="grade"
                            className="post-input-label-defualt"
                          >
                            Class/Grade Level *
                          </label>
                          <input
                            type="text"
                            name="grade"
                            id="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Parent/Guardian Name */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="parentName"
                            className="post-input-label-defualt"
                          >
                            Parent/Guardian Full Name *
                          </label>
                          <input
                            type="text"
                            name="parentName"
                            id="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Parent Phone */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="parentPhone"
                            className="post-input-label-defualt"
                          >
                            Parent/Guardian Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="parentPhone"
                            id="parentPhone"
                            value={formData.parentPhone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Parent WhatsApp */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="parentWhatsapp"
                            className="post-input-label-defualt"
                          >
                            Parent/Guardian WhatsApp Number (if different)
                          </label>
                          <input
                            type="tel"
                            name="parentWhatsapp"
                            id="parentWhatsapp"
                            value={formData.parentWhatsapp}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Parent Email */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="parentEmail"
                            className="post-input-label-defualt"
                          >
                            Parent/Guardian Email Address *
                          </label>
                          <input
                            type="email"
                            name="parentEmail"
                            id="parentEmail"
                            value={formData.parentEmail}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Preferred Mode */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="mode"
                            className="post-input-label-defualt"
                          >
                            Preferred Mode *
                          </label>
                          <select
                            name="mode"
                            id="mode"
                            value={formData.mode}
                            onChange={handleChange}
                            required
                            className="post-input-field"
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            <option value="Onsite">Onsite</option>
                            <option value="Online">Online</option>
                          </select>
                        </div>
                      </div>

                      {/* Prior Experience */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="experience"
                            className="post-input-label-defualt"
                          >
                            Prior Coding/Robotics Experience
                          </label>
                          <select
                            name="experience"
                            id="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="post-input-field"
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            <option value="None">None</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                          </select>
                        </div>
                      </div>

                      {/* Course Interest (checkboxes) */}
                      <div className="col-xl-12">
                        <div className="post-input post-input-2">
                          <label className="post-input-label-defualt">
                            Course Interest * (select all that apply)
                          </label>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "16px",
                              marginTop: "8px",
                            }}
                          >
                            {COURSE_OPTIONS.map((course) => (
                              <label
                                key={course}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                  color: "#042954",
                                  fontWeight: "normal",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={(formData.courseInterest || []).includes(
                                    course
                                  )}
                                  onChange={() => handleCourseToggle(course)}
                                />
                                {course}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Allergies / Medical */}
                      <div className="col-xl-12">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="medical"
                            className="post-input-label-defualt"
                          >
                            Any Allergies or Medical Conditions We Should Know
                            About?
                          </label>
                          <textarea
                            id="medical"
                            name="medical"
                            value={formData.medical}
                            onChange={handleChange}
                            placeholder="Type here, or write 'None'"
                          ></textarea>
                        </div>
                      </div>

                      {/* How did you hear about us */}
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="hear"
                            className="post-input-label-defualt"
                          >
                            How did you hear about this bootcamp? *
                          </label>
                          <select
                            name="hear"
                            id="hear"
                            value={formData.hear}
                            onChange={handleChange}
                            required
                            className="post-input-field"
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            <option value="Flyer">Flyer</option>
                            <option value="From a friend">
                              From a friend
                            </option>
                            <option value="From Instagram">
                              From Instagram
                            </option>
                            <option value="From WhatsApp">
                              From WhatsApp
                            </option>
                            <option value="From Facebook">
                              From Facebook
                            </option>
                            <option value="From the website">
                              From the website
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Additional Comments */}
                      <div className="col-xl-12">
                        <div className="post-input post-input-2">
                          <label
                            htmlFor="comments"
                            className="post-input-label-defualt"
                          >
                            Additional Comments or Questions
                          </label>
                          <textarea
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            placeholder="Type here..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        background: "#f0f6ff",
                        border: "1px solid #042954",
                        borderRadius: "10px",
                        padding: "20px 24px",
                        marginBottom: "24px",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 700,
                          color: "#042954",
                          marginBottom: "10px",
                          fontSize: "15px",
                        }}
                      >
                        Payment Details — ₦25,000 Registration Fee
                      </p>
                      <p style={{ color: "#042954", margin: "4px 0" }}>
                        Bank: <strong>Access Bank</strong>
                      </p>
                      <p style={{ color: "#042954", margin: "4px 0" }}>
                        Account Name: <strong>Olaniyi Hope Oluwaseun</strong>
                      </p>
                      <p style={{ color: "#042954", margin: "4px 0" }}>
                        Account Number: <strong>1486693016</strong>
                      </p>
                      <p
                        style={{
                          color: "#042954",
                          margin: "10px 0 0",
                          fontSize: "13px",
                        }}
                      >
                        Please make payment and keep your receipt/proof of
                        payment. You may be asked to share it after
                        registering.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="sasup-theme-btn sasup-theme-btn-2 transition-5"
                    >
                      Submit Registration
                    </button>
                  </form>
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-area pt-90">
        <div className="container pb-80 has-border-bottom">
          <div className="footer-1">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 order-last col-sm-12 order-lg-first">
                <div
                  className="footer-widget wow fadeInUp mb-30 mb-md-0"
                  data-wow-delay=".2s"
                >
                  <div className="logo mb-20">
                    <a href="/">
                      <img
                        src={park}
                        alt="Edu Pro Solution logo"
                        style={{ width: "100px", height: "30px" }}
                      />
                    </a>
                  </div>
                  <p className="mb-25" style={{ color: "#042954" }}>
                    Your solution to school management hurdles. It has
                    encompassing features that makes school administration
                    stress-free.
                  </p>
                  <div className="sasup-footer-widget-contact-4 mb-25">
                    <a style={{ color: "#042954" }}>
                      +(234) 703 841 2640, +(234) 816 505 1826
                    </a>
                    <a style={{ color: "#042954" }} href="mailto:info@edupro.com.ng">
                      info@edupro.com.ng
                    </a>
                  </div>
                  <div className="sasup-footer-widget-social-link-4">
                    <h5 className="title">Follow Us</h5>
                    <a href="https://facebook.com/edu_school_solution">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/eduprosolution">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="row mb-30 mb-lg-0">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div
                      className="footer-widget wow fadeInUp mb-30 mb-md-0"
                      data-wow-delay=".4s"
                    >
                      <h5 style={{ color: "#042954" }}>Overview</h5>
                      <ul>
                        <li>
                          <a href="/" style={{ color: "#042954" }}>
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="/about" style={{ color: "#042954" }}>
                            About
                          </a>
                        </li>
                        <li>
                          <a href="/pricing" style={{ color: "#042954" }}>
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a href="/services" style={{ color: "#042954" }}>
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="/" style={{ color: "#042954" }}>
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="/contact" style={{ color: "#042954" }}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="footer-widget">
                      <h5 style={{ color: "#042954" }}>Quick Links</h5>
                      <ul>
                        <li>
                          <a href="/" style={{ color: "#042954" }}>
                            Privacy policy
                          </a>
                        </li>
                        <li>
                          <a href="/" style={{ color: "#042954" }}>
                            Terms
                          </a>
                        </li>
                        <li>
                          <a href="/" style={{ color: "#042954" }}>
                            Help
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                    <div className="sasup-footer-widget-4 sasup-footer-widget-4-2 mb-40">
                      <h5
                        className="sasup-footer-widget-title-4"
                        style={{ color: "#042954" }}
                      >
                        Newsletter
                      </h5>
                      <div className="sasup-newspaper-form-4 mt-35">
                        <form action="#" className="mb-15">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="newsletter-email"
                          />
                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showSuccessModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(4, 41, 84, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "16px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "36px 32px",
              maxWidth: "420px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#e6f7ec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 18px",
                fontSize: "30px",
                color: "#1a9c4f",
              }}
            >
              ✓
            </div>
            <h4 style={{ color: "#042954", marginBottom: "10px" }}>
              Registration Successful!
            </h4>
            <p style={{ color: "#042954", marginBottom: "20px" }}>
              Thank you for registering for the Coding &amp; Robotics
              Bootcamp. Please complete payment of{" "}
              <strong>₦25,000</strong> to the account below to secure your
              spot.
            </p>
            <div
              style={{
                background: "#f0f6ff",
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "22px",
                textAlign: "left",
              }}
            >
              <p style={{ color: "#042954", margin: "4px 0" }}>
                Bank: <strong>Access Bank</strong>
              </p>
              <p style={{ color: "#042954", margin: "4px 0" }}>
                Account Name: <strong>Olaniyi Hope Oluwaseun</strong>
              </p>
              <p style={{ color: "#042954", margin: "4px 0" }}>
                Account Number: <strong>1486693016</strong>
              </p>
            </div>
            <button
              type="button"
              className="sasup-theme-btn sasup-theme-btn-2 transition-5"
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/");
              }}
              style={{ width: "100%" }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Innovate;
