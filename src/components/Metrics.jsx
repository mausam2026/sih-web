import "./Metrics.css";

function Metrics() {
  const metrics = [
    {
      value: "--",
      unit: "px",
      title: "RMSE",
      description:
        "Root Mean Square Error of geometrically corresponding points."
    },
    {
      value: "--",
      unit: "",
      title: "Inlier Matches",
      description:
        "Number of correspondence points that pass geometric verification."
    },
    {
      value: "--",
      unit: "%",
      title: "Inlier Ratio",
      description:
        "Percentage of candidate matches classified as geometrically consistent."
    },
    {
      value: "--",
      unit: "px",
      title: "Registration Error",
      description:
        "Target measurement for evaluating the quality of image alignment."
    }
  ];

  return (
    <section id="metrics" className="metrics-section">

      <div className="section-container">

        <div className="section-heading center">

          <div className="section-tag">
            MODEL EVALUATION
          </div>

          <h2>
            Measure the Quality of
            <span>Image Correspondence</span>
          </h2>

          <p>
            Quantitative metrics help evaluate the accuracy and
            reliability of the registration process.
          </p>

        </div>

        <div className="metrics-grid">

          {metrics.map((metric) => (
            <div className="metric-card" key={metric.title}>

              <div className="metric-value">
                {metric.value}
                <small>{metric.unit}</small>
              </div>

              <h3>{metric.title}</h3>

              <p>{metric.description}</p>

            </div>
          ))}

        </div>

        <div className="metrics-cta">

          <div>
            <span className="section-tag">
              READY FOR ANALYSIS?
            </span>

            <h3>
              Test your lunar images with LunarVision.
            </h3>
          </div>

          <a href="/analysis" className="primary-btn">
            Launch Analysis →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Metrics;
