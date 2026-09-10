import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-background">
        <div className="stars"></div>
        <div className="moon-glow"></div>
      </div>

      <div className="hero-content">

        <div className="hero-tag">
          ISRO • CHANDRAYAAN-2 • PS 26166
        </div>

        <h1>
          Multi-Modal Lunar
          <span>Image Correspondence</span>
        </h1>

        <p className="hero-description">
          An intelligent image registration system designed to
          establish accurate correspondence between Chandrayaan-2
          optical imagery and lunar reference datasets.
        </p>

        <p className="hero-subtext">
          Designed to handle illumination, viewpoint and scale
          variations using machine learning and computer vision.
        </p>

        <div className="hero-buttons">

          <a href="/analysis" className="primary-btn">
            Launch Analysis
            <span>→</span>
          </a>

          <a href="#problem" className="secondary-btn">
            Explore Project
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <strong>26166</strong>
            <span>Problem Statement</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Imaging Modalities</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>Powered Analysis</span>
          </div>

        </div>

      </div>

      

    </section>
  );
}

export default Hero;