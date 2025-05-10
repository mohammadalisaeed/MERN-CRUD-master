import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';  // Import Sidebar

export default function Main() {
  return (
    <div className="main-wrapper">
      <Sidebar /> {/* Use Sidebar here */}

      <div className="main-content">
        <Header />
        <section className="hero-section">
          <div className="hs-slider owl-carousel">
            <div className="hs-item set-bg" data-setbg="img/hero/hero-1.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-6">
                    <div className="hi-text">
                      <span>Shape your body</span>
                      <h1>Be <strong>strong</strong> training hard</h1>
                      <a href="#" className="primary-btn">Get info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* More slider items */}
          </div>
        </section>

        {/* Rest of the sections like choseus-section, classes-section, etc. */}

        <Footer />
      </div>
    </div>
  );
}
