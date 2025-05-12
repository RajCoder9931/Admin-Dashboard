import React, { useState, createContext, useContext } from 'react';
import { mockDashboardData, mockEmployees, mockCustomers, mockBanks, mockSales, mockPurchases, mockUsers } from '../data/mockData';
type DashboardContextType = {
  dashboardData: typeof mockDashboardData;
  employees: typeof mockEmployees;
  customers: typeof mockCustomers;
  banks: typeof mockBanks;
  sales: typeof mockSales;
  purchases: typeof mockPurchases;
  users: typeof mockUsers;
  addEmployee: (employee: any) => void;
  addCustomer: (customer: any) => void;
  addBank: (bank: any) => void;
  addSale: (sale: any) => void;
  addPurchase: (purchase: any) => void;
  deleteUser: (id: string) => void;
  updateUser: (id: string, data: any) => void;
};
const DashboardContext = createContext<DashboardContextType | undefined>(undefined);
export const DashboardProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [dashboardData, setDashboardData] = useState(mockDashboardData);
  const [employees, setEmployees] = useState(mockEmployees);
  const [customers, setCustomers] = useState(mockCustomers);
  const [banks, setBanks] = useState(mockBanks);
  const [sales, setSales] = useState(mockSales);
  const [purchases, setPurchases] = useState(mockPurchases);
  const [users, setUsers] = useState(mockUsers);
  const addEmployee = (employee: any) => {
    setEmployees([...employees, {
      id: Date.now().toString(),
      ...employee
    }]);
  };
  const addCustomer = (customer: any) => {
    setCustomers([...customers, {
      id: Date.now().toString(),
      ...customer
    }]);
  };
  const addBank = (bank: any) => {
    setBanks([...banks, {
      id: Date.now().toString(),
      ...bank
    }]);
  };
  const addSale = (sale: any) => {
    const newSale = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...sale
    };
    setSales([...sales, newSale]);
    // Update dashboard data
    setDashboardData({
      ...dashboardData,
      monthlySales: dashboardData.monthlySales + sale.price * sale.quantity
    });
  };
  const addPurchase = (purchase: any) => {
    const newPurchase = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...purchase
    };
    setPurchases([...purchases, newPurchase]);
    // Update dashboard data
    setDashboardData({
      ...dashboardData,
      totalPurchases: dashboardData.totalPurchases + purchase.price * purchase.quantity
    });
  };
  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };
  const updateUser = (id: string, data: any) => {
    setUsers(users.map(user => user.id === id ? {
      ...user,
      ...data
    } : user));
  };
  return <DashboardContext.Provider value={{
    dashboardData,
    employees,
    customers,
    banks,
    sales,
    purchases,
    users,
    addEmployee,
    addCustomer,
    addBank,
    addSale,
    addPurchase,
    deleteUser,
    updateUser
  }}>
      {children}
    </DashboardContext.Provider>;
};
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};