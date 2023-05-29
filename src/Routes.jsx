import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/Home/index';

export const RouterPages = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
};
