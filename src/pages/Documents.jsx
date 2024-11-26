import  { useState } from 'react';
import PDFList from '../components/PDFList';
import PDFViewer from '../components/PDFViewer';

const Documents = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const pdfs = [
    { name: 'Document 1', url: '/manuals/example1.pdf' },
    // { name: 'Document 2', url: '/pdfs/document2.pdf' },
    // { name: 'Document 3', url: '/pdfs/document3.pdf' },
  ];

  return (
    <div className="documents-page">
      <PDFList pdfs={pdfs} onSelect={setSelectedPDF} />
      <PDFViewer selectedPDF={selectedPDF} />
    </div>
  );
};

export default Documents;
 