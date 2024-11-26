import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Optional: for styling

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Map">Map</Link></li>
        <li><Link to="/documents">Documents</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
