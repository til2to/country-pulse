import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => (
  <>
    <Navbar />

    <main>
      <Suspense fallback={<div className="h-screen text-3xl flex justify-center items-center">Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </>
);
export default RootLayout;
