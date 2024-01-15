import { Outlet } from 'react-router-dom';
import Header from '@sections/Header';
import { ScrollToTop } from '@services/router/ScrollToTop';

function Main() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  )
}

export default Main