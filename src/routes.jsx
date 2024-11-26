import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import Documents from './pages/Documents';
import Schedule from './pages/Schedule';
import Header from './components/Header'; // Optional

const AppRoutes = () => {
  return (
    <Router>
      <Header /> {/* Optional */}
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

