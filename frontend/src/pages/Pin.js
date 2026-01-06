import React, { useState, useRef } from "react";
import backs from "./footimg.jpg";
import Header from "./Header";
import Footer from "./Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./about.css";

const Pin = () => {
  const [count, setCount] = useState(1);
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const backgroundStyle = {
    backgroundImage: `url('/static/media/breads.png')`,
  };
  const hiddenRef = useRef(); // Hidden container for PDF

  async function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://eduproapi.vercel.app/api/pins/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count }),
      });

      const data = await res.json();

      if (data.status !== false) {
        setPins(data.pins || []);
        setMessage("Pins generated successfully");
      } else {
        setMessage("Something went wrong");
      }
    } catch (err) {
      setMessage("Server error — check API URL");
    }

    setLoading(false);
  }

   

const handleDownloadPDF = async () => {
    if (!hiddenRef.current) return;

    const pdf = new jsPDF("p", "pt", "a4");
    const pageHeight = pdf.internal.pageSize.getHeight();
    const pageWidth = pdf.internal.pageSize.getWidth();

    const container = hiddenRef.current;

    // Capture container using html2canvas
    const canvas = await html2canvas(container, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Calculate width/height for PDF
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth - 40;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 20, 20, pdfWidth, pdfHeight);

    // Open PDF in new tab
    pdf.output("dataurlnewwindow");
  };
  return (
    <>
  
      {/* Breadcrumb (like Contact page) */}
      <div
        className="breadcrumb-area pt-215 pb-140 mb-110 pb-130"
        style={backgroundStyle}
      >
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h3 className="breadcrumb-title">Generate Pins</h3>
            <div className="breadcrumb-trail">
              <nav>
                <ul className="trail-items">
                  <li className="trail-item">
                    <a href="/"><span>Home</span></a>
                  </li>
                  <li className="trail-item">
                    <span>Generate Pins</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="pin-area" style={{marginBottom: "150px"}}>
        <div className="container">
          <div className="row justify-content-center pb-120">
            <div className="col-xxl-6 col-xl-7 col-lg-7">
              <div className="pin-card wow fadeInUp" data-wow-delay=".2s">

                <h4 className="pin-title">Activation PIN Generator</h4>
                <p className="pin-subtitle">
                  Create secure activation pins for your users.
                </p>
  <label>How many pins do you want?</label>
                <form onSubmit={handleGenerate} className="pin-form">
                

                  
                    <div class="row">
                      <div class="col-xl-6 col-md-6">
                        <div class="post-input post-input-2">
                          
                            <input
                    type="number"
                    min="1"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    className="pin-input"
                  />
                  </div>
                        </div>
                      </div>


                  <button className="primary-btn" disabled={loading}       class="sasup-theme-btn sasup-theme-btn-2 transition-5">
                    {loading ? "Generating..." : "Generate Pins"}
                  </button>
                </form>

                {message && <p className="pin-message">{message}</p>}


                {pins.length > 0 && (
                  <>
                    <button
                      className="primary-btn"
                      onClick={handleDownloadPDF}
                      style={{ marginTop: "20px" }}
                    >
                      Download PDF
                    </button>

                    <div className="pin-list" style={{ marginTop: "20px" }}>
                      {pins.map((p, idx) => (
                        <div
                          key={idx}
                          style={{
                            border: "2px solid #333",
                            padding: "15px",
                            borderRadius: "10px",
                            marginBottom: "10px",
                            backgroundColor: "#f9f9f9",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          <pre>{p.display}</pre>
                        </div>
                      ))}
                    </div>
                  </>
                )}
             


              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pin;
