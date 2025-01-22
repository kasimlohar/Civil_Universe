import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';

const PDFGenerator = () => {
  const generatePDF = async (data) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    page.drawText('Civil Universe', {
      x: 50,
      y: height - 50,
      size: 20
    });

    // More PDF content generation
    // ...existing code...

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'document.pdf');
  };

  return (
    <button 
      onClick={() => generatePDF()}
      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
    >
      Generate PDF
    </button>
  );
};

export default PDFGenerator;
