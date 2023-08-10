import { Outlet } from 'react-router';

import React from 'react';

export default function App() {
  return (
    <frameElement>
      <Outlet />
    </frameElement>
  );
}
