import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBarTop } from './AppBarTop/AppBarTop';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarTop />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
