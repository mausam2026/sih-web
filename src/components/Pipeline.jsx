import "./Pipeline.css";

function Pipeline() {
  const pipelineSteps = [
    {
      number: "01",
      title: "Input Images",
      description:
        "Load source Chandrayaan-2 imagery and a fixed lunar reference image."
    },
    {
      number: "02",
      title: "Preprocessing",
      description:
        "Normalize and prepare images to reduce differences caused by acquisition conditions."
    },
    {
      number: "03",
      title: "Feature Extraction",
      description:
        "Extract distinctive visual representations from the lunar surface."
    },
    {
      number: "04",
      title: "Multi-Modal Matching",
      description:
        "Find candidate correspondence points between different image modalities."
    },
    {
      number: "05",
      title: "Geometric Verification",
      description:
        "Remove incorrect matches and retain geometrically consistent correspondences."
    },
    {
      number: "06",
      title: "Registration",
      description:
        "Transform the source image into the reference coordinate system."
    }
  ];

  return (
    <section id="pipeline" className="pipeline-section">

      <div className="section-container">

        <div className="section-heading center">

          <div className="section-tag">
            INTELLIGENT WORKFLOW
          </div>

          <h2>
            From Raw Images to
            <span>Reliable Correspondence</span>
          </h2>

          <p>
            A machine-learning assisted pipeline for robust lunar
            image matching and registration.
          </p>

        </div>

        <div className="pipeline">

          {pipelineSteps.map((step, index) => (
            <div className="pipeline-step" key={step.number}>

              <div className="pipeline-number">
                {step.number}
              </div>

              <div className="pipeline-content">

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

              {index !== pipelineSteps.length - 1 && (
                <div className="pipeline-arrow">
                  →
                </div>
              )}

            </div>
          ))}

        </div>

        <div className="pipeline-result">

          <div className="result-icon">
            ✓
          </div>

          <div>
            <span>FINAL OUTPUT</span>
            <h3>
              Registered Image + Correspondence Points
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Pipeline;
