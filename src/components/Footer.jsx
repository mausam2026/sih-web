import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer-section">

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            LUNAR<span>VISION</span>
          </a>

          <p>
            Multi-Modal Lunar Image Correspondence System for
            intelligent lunar image registration and feature
            matching.
          </p>

          <div className="footer-status">
            <span className="status-dot"></span>
            ML ANALYSIS SYSTEM
          </div>

        </div>


        {/* Navigation */}
        <div className="footer-column">

          <h3>Navigation</h3>

          <a href="#home">Home</a>
          <a href="#problem">Problem</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#sensors">Sensors</a>
          <a href="#metrics">Results</a>
          <a href="#contact">Contact</a>

        </div>


        {/* Project */}
        <div className="footer-column">

          <h3>Project</h3>

          <span>ISRO • Chandrayaan-2</span>
          <span>Problem Statement: 26166</span>
          <span>Image Correspondence</span>
          <span>Image Registration</span>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <a href="mailto:contact@lunarvision.com">
            contact@lunarvision.com
          </a>

          <span>India</span>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <span>
          © 2026 LunarVision. All rights reserved.
        </span>

        <span>
          Built for Lunar Image Analysis
        </span>

      </div>

    </footer>
  );
}

export default Footer;
