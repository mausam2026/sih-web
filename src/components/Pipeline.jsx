import "./Pipeline.css";

function Pipeline() {
  const pipelineSteps = [
    {
      number: "01",
      title: "Raw Optical Datasets",
      description:
        "ISRO TMC, OHRC, and NASA LRO optical datasets provide the source lunar imagery for cross-modal matching.",
    },
    {
      number: "02",
      title: "Metadata Parser",
      description:
        "Extract XML/PDS3 metadata, image corners, and physical resolution in meters per pixel for every input image.",
    },
    {
      number: "03",
      title: "Intersection Calculator",
      description:
        "Reproject image corners into South Polar Stereographic meters and compute the true geometric overlap polygon and pixel coordinates.",
    },
    {
      number: "04",
      title: "Geo-Sampler",
      description:
        "Use Rasterio windowed reads to extract only the overlapping region from each raw image without loading unnecessary data.",
    },
    {
      number: "05",
      title: "Optical Preprocessor",
      description:
        "Apply Log Transform, intensity normalization, and masked CLAHE to improve the consistency and visibility of lunar surface features.",
    },
    {
      number: "06",
      title: "Patch Extractor",
      description:
        "Slice the processed arrays into 512×512 tiles and filter patches using information-density quality control.",
    },
    {
      number: "07",
      title: "Feature Extraction",
      description:
        "Process co-registered 512×512 patch pairs through parallel feature-matching architectures.",
      branches: [
        {
          title: "LoFTR",
          description:
            "Local Feature Matching with Transformers for dense correspondence estimation.",
        },
        {
          title: "RIFT-2",
          description:
            "Radiation-invariant feature matching using phase-congruency based representations.",
        },
      ],
    },
    {
      number: "08",
      title: "Match Fusion",
      description:
        "Merge LoFTR and RIFT-2 candidate correspondences into a unified coordinate-consistent match list.",
    },
    {
      number: "09",
      title: "RANSAC Filter",
      description:
        "Perform geometric verification, estimate the homography, and reject spatially inconsistent outlier matches.",
    },
    {
      number: "10",
      title: "Sub-Pixel Alignment",
      description:
        "Refine verified keypoint coordinates using local intensity gradients for higher registration precision.",
    },
    {
      number: "11",
      title: "Match Visualization",
      description:
        "Display the registered image pair with valid inlier correspondence points and tie-lines.",
    },
  ];

  return (
    <section id="pipeline" className="pipeline-section">
      <div className="section-container">

        <div className="section-heading center">
          <div className="section-tag">
            INTELLIGENT WORKFLOW
          </div>

          <h2>
            From Raw Lunar Data to
            <span> Verified Correspondence</span>
          </h2>

          <p>
            A geometry-aware, machine-learning assisted pipeline for
            robust cross-modal lunar image matching and registration.
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

                {step.branches && (
                  <div className="pipeline-branches">

                    {step.branches.map((branch) => (
                      <div
                        className="pipeline-branch"
                        key={branch.title}
                      >
                        <div className="branch-marker">
                          →
                        </div>

                        <div>
                          <h4>{branch.title}</h4>
                          <p>{branch.description}</p>
                        </div>
                      </div>
                    ))}

                  </div>
                )}
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
              Registered Image + Verified Sub-Pixel Correspondence Points
            </h3>

            <p>
              Side-by-side visualization of the matched lunar images with
              geometrically verified inlier tie-lines.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pipeline;
