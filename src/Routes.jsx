import { Routes, Route, Link } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CompleteOrderPage } from './pages/CompleteOrder';
import { HomePage } from './pages/Home/index';

export const RouterPages = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  );
};
