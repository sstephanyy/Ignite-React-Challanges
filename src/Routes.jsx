import { Routes, Route, Link } from 'react-router-dom';
import { CompleteOrderPage } from './pages/CompleteOrder';
import { HomePage } from './pages/Home/index';
 
export const RouterPages = () => {
  return (
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Routes>
  );
};
