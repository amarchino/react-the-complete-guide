import type { FC } from 'react';
import MainHeader from '../components/MainHeader';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};
export default RootLayout;
