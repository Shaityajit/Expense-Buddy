import React from 'react';
import { Sidebar } from '../components/DashBoard-Components/Sidebar';
import { DashNav } from '../components/DashBoard-Components/DashNav';
import { DashBalance } from '../components/DashBoard-Components/DashBalance';
import { DashHistory } from '../components/DashBoard-Components/DashHistory';

export function DashBoard() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="main--content bg-gray-200 w-full p-4">
        <DashNav/>
        <div className="container">
          <DashBalance/>
          <DashHistory/>
        </div>
      </div>
    </div>
  );
}
