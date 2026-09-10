import "./RotatingMoon.css";

function RotatingMoon() {
  return (
    <section className="rotating-moon-section">
      <div className="section-header">
        <h2>Lunar Exploration Sites</h2>
        <p>Target coordinates mapped across the lunar surface</p>
      </div>

      <div className="moon-container">
        <div className="moon-sphere">
          <div className="moon-texture"></div>
        </div>

        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>

        <div className="lunar-label label-1">
          <span className="dot"></span>
          <div className="label-content">
            <strong>South Pole-Aitken</strong>
            <span>Landing & Imaging Target</span>
          </div>
        </div>

        <div className="lunar-label label-2">
          <span className="dot"></span>
          <div className="label-content">
            <strong>Crater Boguslawsky</strong>
            <span>High-Relief Terrain</span>
          </div>
        </div>

        <div className="lunar-label label-3">
          <span className="dot"></span>
          <div className="label-content">
            <strong>Mare Tranquillitatis</strong>
            <span>Reference Flat Basin</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RotatingMoon;