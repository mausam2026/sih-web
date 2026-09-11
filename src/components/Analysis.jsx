import { useEffect, useState } from "react";
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
    const file = event.target.files?.[0];

    if (!file) return;

    setSourceImage(file);
    setSourcePreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleReferenceUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setReferenceImage(file);
    setReferencePreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleAnalysis = async () => {
    if (!sourceImage || !referenceImage) {
      alert("Please upload both source and reference images.");
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      /*
      const formData = new FormData();

      formData.append("source", sourceImage);
      formData.append("reference", referenceImage);
      formData.append("sensor", sensor);

      const response = await fetch(
        "http://localhost:8000/api/register",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Analysis failed.");
      }

      const data = await response.json();

      setResult({
        inliers: data.inliers,
        ratio: data.inlier_ratio,
        rmse: data.rmse,
        status: "Analysis complete",
      });
      */

      // Temporary mock response
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setResult({
        outliers: "--",
        inliers: "--",
        ratio: "--",
        rmse: "--",
        status: "Analysis complete",
      });
    } catch (error) {
      console.error(error);

      setResult({
        status: "Analysis failed",
        error: error.message,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setSourceImage(null);
    setReferenceImage(null);
    setSourcePreview(null);
    setReferencePreview(null);
    setResult(null);
    setIsAnalyzing(false);
  };

  // Prevent object URL memory leaks.
  useEffect(() => {
    return () => {
      if (sourcePreview) {
        URL.revokeObjectURL(sourcePreview);
      }

      if (referencePreview) {
        URL.revokeObjectURL(referencePreview);
      }
    };
  }, [sourcePreview, referencePreview]);

  return (
    <section className="analysis-section">
      <div className="analysis-container">

        {/* Header */}
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

        {/* Analysis Controls */}
        <div className="analysis-controls">
          <label htmlFor="sensor">
            Sensor
          </label>

          <select
            id="sensor"
            value={sensor}
            onChange={(event) => setSensor(event.target.value)}
          >
            <option value="OHRC">OHRC</option>
            <option value="TMC">TMC</option>
            <option value="LROC">LROC</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Image Uploads */}
        <div className="image-upload-grid">

          {/* Source */}
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
                  <div className="upload-icon">↑</div>

                  <strong>
                    Upload Source Image
                  </strong>

                  <span>
                    JPG, PNG, TIFF
                  </span>
                </>
              )}

              <input
                type="file"
                accept="image/jpeg,image/png,image/tiff,image/*"
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

          {/* Correspondence */}
          <div className="correspondence-symbol">
            ↔
          </div>

          {/* Reference */}
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
                  <div className="upload-icon">↑</div>

                  <strong>
                    Upload Reference Image
                  </strong>

                  <span>
                    JPG, PNG, TIFF
                  </span>
                </>
              )}

              <input
                type="file"
                accept="image/jpeg,image/png,image/tiff,image/*"
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

        {/* Actions */}
        <div className="analysis-actions">
          <button
            className="primary-btn analysis-btn"
            onClick={handleAnalysis}
            disabled={
              isAnalyzing ||
              !sourceImage ||
              !referenceImage
            }
          >
            {isAnalyzing
              ? "Running Analysis..."
              : "Find Correspondences →"}
          </button>

          <button
            className="reset-btn"
            onClick={resetAnalysis}
            disabled={isAnalyzing}
          >
            Reset
          </button>
        </div>

        {/* Results */}
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

            {result.error ? (
              <div className="analysis-error">
                {result.error}
              </div>
            ) : (
              <>
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
                    <strong>{result.outliers}</strong>
                    <span>OUTLIERS</span>
                  </div>

                  <div>
                    <strong>{result.inliers}</strong>
                    <span>INLIERS</span>
                  </div>

                  <div>
                    <strong>{result.ratio}</strong>
                    <span>INLIER RATIO</span>
                  </div>

                  <div>
                    <strong>{result.rmse}</strong>
                    <span>RMSE</span>
                  </div>

                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Analysis;
