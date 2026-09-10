import { useState } from "react";
import "./Analysis.css";

function Analysis() {
  const [sourceImage, setSourceImage] = useState(null);
  const [referenceImage, setReferenceImage] = useState(null);
  const [sourcePreview, setSourcePreview] = useState(null);
  const [referencePreview, setReferencePreview] = useState(null);
  const [sensor, setSensor] = useState("OHRC");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleSourceUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSourceImage(file);
    setSourcePreview(URL.createObjectURL(file));
  };

  const handleReferenceUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setReferenceImage(file);
    setReferencePreview(URL.createObjectURL(file));
  };

  const handleAnalysis = async () => {
    if (!sourceImage || !referenceImage) {
      alert("Please upload both source and reference images.");
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    /*
      Later connect this section to your ML backend.

      Example:

      const formData = new FormData();

      formData.append("source", sourceImage);
      formData.append("reference", referenceImage);
      formData.append("sensor", sensor);

      const response = await fetch(
        "http://localhost:8000/api/register",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();
    */

    setTimeout(() => {
      setResult({
        inliers: "--",
        ratio: "--",
        rmse: "--",
        status: "Analysis complete"
      });

      setIsAnalyzing(false);
    }, 1500);
  };

  const resetAnalysis = () => {
    setSourceImage(null);
    setReferenceImage(null);
    setSourcePreview(null);
    setReferencePreview(null);
    setResult(null);
  };

  return (
    <section className="analysis-section">

      <div className="analysis-container">

        <div className="analysis-header">

          <div className="section-tag">
            LUNARVISION ANALYSIS ENGINE
          </div>

          <h1>
            Multi-Modal Image
            <span>Correspondence</span>
          </h1>

          <p>
            Upload a source image and a reference image to perform
            lunar image correspondence and registration.
          </p>

        </div>

        <div className="analysis-controls">

          

        </div>

        <div className="image-upload-grid">

          <div className="upload-card">

            <div className="upload-card-header">
              <span>01</span>
              <h2>Source Image</h2>
            </div>

            <p className="upload-description">
              Moving image to be geometrically transformed.
            </p>

            <label className="upload-area">

              {sourcePreview ? (
                <img
                  src={sourcePreview}
                  alt="Source lunar image preview"
                />
              ) : (
                <>
                  <div className="upload-icon">
                    ↑
                  </div>

                  <strong>
                    Upload Source Image
                  </strong>

                  <span>
                    PNG, JPG, TIFF
                  </span>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleSourceUpload}
                hidden
              />

            </label>

            {sourceImage && (
              <div className="file-name">
                {sourceImage.name}
              </div>
            )}

          </div>

          <div className="correspondence-symbol">
            ↔
          </div>

          <div className="upload-card">

            <div className="upload-card-header">
              <span>02</span>
              <h2>Reference Image</h2>
            </div>

            <p className="upload-description">
              Fixed image used as the registration reference.
            </p>

            <label className="upload-area">

              {referencePreview ? (
                <img
                  src={referencePreview}
                  alt="Reference lunar image preview"
                />
              ) : (
                <>
                  <div className="upload-icon">
                    ↑
                  </div>

                  <strong>
                    Upload Reference Image
                  </strong>

                  <span>
                    PNG, JPG, TIFF
                  </span>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleReferenceUpload}
                hidden
              />

            </label>

            {referenceImage && (
              <div className="file-name">
                {referenceImage.name}
              </div>
            )}

          </div>

        </div>

        <div className="analysis-actions">

          <button
            className="primary-btn analysis-btn"
            onClick={handleAnalysis}
            disabled={isAnalyzing}
          >
            {isAnalyzing
              ? "Running Analysis..."
              : "Find Correspondences →"}
          </button>

          <button
            className="reset-btn"
            onClick={resetAnalysis}
          >
            Reset
          </button>

        </div>

        {result && (
          <div className="analysis-results">

            <div className="results-header">

              <div>
                <span className="section-tag">
                  ANALYSIS RESULT
                </span>

                <h2>
                  Correspondence Summary
                </h2>
              </div>

              <span className="result-status">
                ● {result.status}
              </span>

            </div>

            <div className="result-image-area">

              <div className="result-placeholder">

                <div className="crosshair">
                  +
                </div>

                <p>
                  Registered image and correspondence
                  visualization will appear here.
                </p>

              </div>

            </div>

            <div className="result-metrics">

              <div>
                <strong>{result.inliers}</strong>
                <span>Inlier Matches</span>
              </div>

              <div>
                <strong>{result.ratio}</strong>
                <span>Inlier Ratio</span>
              </div>

              <div>
                <strong>{result.rmse}</strong>
                <span>RMSE</span>
              </div>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default Analysis;
