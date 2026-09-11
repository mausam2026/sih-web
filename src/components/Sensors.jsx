import "./Sensor.css";

function Sensors() {
  const sensors = [
    {
      code: "OHRC",
      name: "Orbiter High Resolution Camera",
      description:
        "High-resolution optical imagery suitable for detailed lunar surface analysis.",
      type: "OPTICAL"
    },
    {
      code: "TMC",
      name: "Terrain Mapping Camera",
      description:
        "Stereo imaging data supporting terrain mapping and surface characterization.",
      type: "OPTICAL / STEREO"
    },
    
  ];

  return (
    <section id="sensors" className="sensors-section">

      <div className="section-container">

        <div className="section-heading">

          <div className="section-tag">
            CHANDRAYAAN-2 DATA
          </div>

          <h2>
            Multi-Modal
            <span>Lunar Observations</span>
          </h2>

          <p>
            LunarVision is designed around the challenge of finding
            correspondence across imagery acquired from different
            Chandrayaan-2 instruments.
          </p>

        </div>

        <div className="sensor-grid">

          {sensors.map((sensor) => (
            <div className="sensor-card" key={sensor.code}>

              <div className="sensor-header">

                <div className="sensor-code">
                  {sensor.code}
                </div>

                <div className="sensor-type">
                  {sensor.type}
                </div>

              </div>

              <div className="sensor-visual">
                <div className="sensor-grid-lines"></div>

                <div className="sensor-crosshair">
                  +
                </div>

                <div className="sensor-scan-line"></div>
              </div>

              <h3>{sensor.name}</h3>

              <p>{sensor.description}</p>

              <div className="sensor-footer">
                <span>CHANDRAYAAN-2</span>
                <span>→</span>
              </div>

            </div>
          ))}

        </div>

        <div className="modal-note">

          <span className="modal-note-icon">
            ◉
          </span>

          <p>
            <strong>Multi-modal correspondence</strong> aims to
            identify meaningful surface relationships despite
            differences in sensor characteristics and image
            appearance.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Sensors;
