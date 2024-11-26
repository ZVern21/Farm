import PropTypes from 'prop-types';

const PDFViewer = ({ selectedPDF }) => {
  return (
    <div className="pdf-viewer">
      {selectedPDF ? (
        <iframe
          src={selectedPDF.url}
          title={selectedPDF.name}
          width="100%"
          height="600px"
        />
      ) : (
        <p>Select a document to view</p>
      )}
    </div>
  );
};

PDFViewer.propTypes = {
  selectedPDF: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default PDFViewer;


// If selectedPDF can be null or undefined, you might want to specify that selectedPDF is optional:

// selectedPDF: PropTypes.shape({
//   url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired
// })
