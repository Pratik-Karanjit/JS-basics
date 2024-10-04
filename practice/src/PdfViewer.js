// // PdfViewer.js
// import React, { useEffect, useRef, useState } from "react";
// import { pdfjs } from "pdfjs-dist";

// import pdfjsLib from "pdfjs-dist/build/pdf";
// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.js";

// const PdfViewer = ({ pdfUrl }) => {
//   const canvasRef = useRef(null);
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   useEffect(() => {
//     const loadingTask = pdfjs.getDocument(pdfUrl);
//     loadingTask.promise.then(
//       (pdf) => {
//         setNumPages(pdf.numPages);
//         renderPage(pageNumber, pdf);
//       },
//       (reason) => {
//         console.error(reason);
//       }
//     );
//   }, [pdfUrl, pageNumber]);

//   const renderPage = (num, pdf) => {
//     pdf.getPage(num).then((page) => {
//       const viewport = page.getViewport({ scale: 1.5 });
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       const renderContext = {
//         canvasContext: context,
//         viewport: viewport,
//       };
//       page.render(renderContext);
//     });
//   };

//   const goToNextPage = () => {
//     if (pageNumber < numPages) {
//       setPageNumber(pageNumber + 1);
//     }
//   };

//   const goToPrevPage = () => {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//     }
//   };

//   return (
//     <div>
//       <canvas ref={canvasRef} />
//       <div>
//         <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
//           Previous
//         </button>
//         <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
//           Next
//         </button>
//       </div>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };

// export default PdfViewer;
