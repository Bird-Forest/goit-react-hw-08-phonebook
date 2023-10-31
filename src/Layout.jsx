import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { WrapContainair } from 'Layout.styled';
import Loading from 'components/Loader/Loading';

export default function Layout() {
  return (
    <WrapContainair>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </WrapContainair>
  );
}
