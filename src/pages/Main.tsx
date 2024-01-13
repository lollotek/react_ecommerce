import { Outlet } from 'react-router-dom';
import Header from '@sections/Header';

function Main() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Main