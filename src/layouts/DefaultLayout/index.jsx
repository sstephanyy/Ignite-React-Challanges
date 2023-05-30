import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { LayoutContainer } from '../DefaultLayout/styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header/>
      <Outlet /> {/* Renders the component for the current URL path */}
    </LayoutContainer>
  );
}
