import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Master from './pages/Master';
import Transactions from './pages/Transactions';
import Inventory from './pages/Inventory';
import Deliveries from './pages/Deliveries';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Login from './pages/Login';
import Settings from './pages/Settings';
import { AuthProvider } from './context/AuthContext';
import { DashboardProvider } from './context/DashboardContext';
export function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo purposes, set to true
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }
  return <Router>
      <AuthProvider>
        <DashboardProvider>
          <div className="flex h-screen bg-gray-100">
            <Sidebar collapsed={collapsed} />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header onMenuToggle={() => setCollapsed(!collapsed)} collapsed={collapsed} />
              <main className="flex-1 overflow-y-auto p-4 md:p-6">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/master/*" element={<Master />} />
                  <Route path="/transactions/*" element={<Transactions />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/deliveries" element={<Deliveries />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </main>
            </div>
          </div>
        </DashboardProvider>
      </AuthProvider>
    </Router>;
}