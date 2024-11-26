import PropTypes from 'prop-types';

const PDFList = ({ pdfs, onSelect }) => {
  return (
    <div className="pdf-list">
      <h3>Available Documents</h3>
      <ul>
        {pdfs.map((pdf, index) => (
          <li key={index} onClick={() => onSelect(pdf)}>
            {pdf.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

PDFList.propTypes = {
  pdfs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default PDFList;
