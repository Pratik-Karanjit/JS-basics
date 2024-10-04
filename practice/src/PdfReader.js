// App.js
import React from "react";
import PdfViewer from "./PdfViewer.js";

const PdfReader = () => {
  const pdfUrl = "path/to/your/pdf/document.pdf"; // Replace with your PDF URL

  return (
    <div>
      <h1>PDF Viewer</h1>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default PdfReader;
