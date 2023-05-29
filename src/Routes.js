import { Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/Home';

export const Router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
