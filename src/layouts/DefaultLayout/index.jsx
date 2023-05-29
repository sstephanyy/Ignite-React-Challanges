import { Outlet } from 'react-router-dom';
import { LayoutContainer } from '../DefaultLayout/styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <h2>Header</h2>
      <Outlet /> {/* Renders the component for the current URL path */}
    </LayoutContainer>
  );
}
