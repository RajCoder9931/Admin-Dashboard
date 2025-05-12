import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useDashboard } from '../context/DashboardContext';
import EmployeesSection from '../components/master/EmployeesSection';
import CustomersSection from '../components/master/CustomersSection';
import BanksSection from '../components/master/BanksSection';
const Master: React.FC = () => {
  const location = useLocation();
  const {
    employees,
    customers,
    banks
  } = useDashboard();
  const tabs = [{
    path: '/master/employees',
    name: 'Employees',
    count: employees.length
  }, {
    path: '/master/customers',
    name: 'Customers',
    count: customers.length
  }, {
    path: '/master/banks',
    name: 'Banks',
    count: banks.length
  }];
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === '/master' && path === '/master/employees';
  };
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold">Master Section</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            {tabs.map(tab => <Link key={tab.path} to={tab.path} className={`px-6 py-4 text-sm font-medium ${isActive(tab.path) ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                {tab.name}{' '}
                <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </Link>)}
          </nav>
        </div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<EmployeesSection />} />
            <Route path="/employees" element={<EmployeesSection />} />
            <Route path="/customers" element={<CustomersSection />} />
            <Route path="/banks" element={<BanksSection />} />
          </Routes>
        </div>
      </div>
    </div>;
};
export default Master;