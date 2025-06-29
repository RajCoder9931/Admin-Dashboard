import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import SalesForm from '../components/transactions/SalesForm';
import PurchaseForm from '../components/transactions/PurchaseForm';
import SalesTransactions from '../components/transactions/SalesTransactions';
import PurchaseTransactions from '../components/transactions/PurchaseTransactions';
const Transactions: React.FC = () => {
  const location = useLocation();
  const tabs = [{
    path: '/transactions/sales',
    name: 'Sales'
  }, {
    path: '/transactions/purchases',
    name: 'Purchases'
  }];
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === '/transactions' && path === '/transactions/sales';
  };
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            {tabs.map(tab => <Link key={tab.path} to={tab.path} className={`px-6 py-4 text-sm font-medium ${isActive(tab.path) ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                {tab.name}
              </Link>)}
          </nav>
        </div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<SalesTransactions />} />
            <Route path="/sales" element={<SalesTransactions />} />
            <Route path="/purchases" element={<PurchaseTransactions />} />
          </Routes>
        </div>
      </div>
    </div>;
};
export default Transactions;