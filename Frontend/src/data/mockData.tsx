import React from 'react';
// Mock data for the dashboard
export const mockDashboardData = {
  monthlySales: 45780,
  totalPurchases: 32450,
  balance: 13330,
  employeeCount: 24,
  productsInStock: 145,
  pendingDeliveries: 8,
  salesPerformance: [{
    month: 'Jan',
    sales: 4000
  }, {
    month: 'Feb',
    sales: 3000
  }, {
    month: 'Mar',
    sales: 5000
  }, {
    month: 'Apr',
    sales: 4500
  }, {
    month: 'May',
    sales: 6000
  }, {
    month: 'Jun',
    sales: 5500
  }, {
    month: 'Jul',
    sales: 7000
  }, {
    month: 'Aug',
    sales: 8000
  }, {
    month: 'Sep',
    sales: 7500
  }, {
    month: 'Oct',
    sales: 9000
  }, {
    month: 'Nov',
    sales: 8500
  }, {
    month: 'Dec',
    sales: 9500
  }]
};
// Mock employees data
export const mockEmployees = [{
  id: '1',
  name: 'John Doe',
  position: 'Sales Manager',
  email: 'john@example.com',
  phone: '(123) 456-7890',
  hireDate: '2022-01-15'
}, {
  id: '2',
  name: 'Jane Smith',
  position: 'Marketing Specialist',
  email: 'jane@example.com',
  phone: '(234) 567-8901',
  hireDate: '2022-03-10'
}, {
  id: '3',
  name: 'Robert Johnson',
  position: 'Software Developer',
  email: 'robert@example.com',
  phone: '(345) 678-9012',
  hireDate: '2022-02-20'
}, {
  id: '4',
  name: 'Emily Davis',
  position: 'HR Manager',
  email: 'emily@example.com',
  phone: '(456) 789-0123',
  hireDate: '2022-04-05'
}];
// Mock customers data
export const mockCustomers = [{
  id: '1',
  name: 'Acme Corporation',
  contact: 'Tom Wilson',
  email: 'tom@acme.com',
  phone: '(123) 456-7890',
  address: '123 Business St, City'
}, {
  id: '2',
  name: 'Global Enterprises',
  contact: 'Sarah Brown',
  email: 'sarah@global.com',
  phone: '(234) 567-8901',
  address: '456 Commerce Ave, Town'
}, {
  id: '3',
  name: 'Tech Solutions Inc',
  contact: 'Mike Johnson',
  email: 'mike@techsolutions.com',
  phone: '(345) 678-9012',
  address: '789 Innovation Dr, Metro'
}, {
  id: '4',
  name: 'Retail Partners',
  contact: 'Lisa Chen',
  email: 'lisa@retail.com',
  phone: '(456) 789-0123',
  address: '101 Market Blvd, County'
}];
// Mock banks data
export const mockBanks = [{
  id: '1',
  name: 'First National Bank',
  accountNumber: '1234567890',
  branch: 'Downtown',
  balance: 25000
}, {
  id: '2',
  name: 'Commerce Trust',
  accountNumber: '2345678901',
  branch: 'Westside',
  balance: 18000
}, {
  id: '3',
  name: 'Metro Credit Union',
  accountNumber: '3456789012',
  branch: 'North Plaza',
  balance: 32000
}];
// Mock sales data
export const mockSales = [{
  id: '1',
  date: '2023-11-01',
  customer: 'Acme Corporation',
  item: 'Product A',
  quantity: 5,
  price: 200,
  total: 1000
}, {
  id: '2',
  date: '2023-11-03',
  customer: 'Global Enterprises',
  item: 'Product B',
  quantity: 3,
  price: 350,
  total: 1050
}, {
  id: '3',
  date: '2023-11-07',
  customer: 'Tech Solutions Inc',
  item: 'Product C',
  quantity: 2,
  price: 500,
  total: 1000
}, {
  id: '4',
  date: '2023-11-10',
  customer: 'Retail Partners',
  item: 'Product A',
  quantity: 8,
  price: 200,
  total: 1600
}];
// Mock purchases data
export const mockPurchases = [{
  id: '1',
  date: '2023-10-25',
  supplier: 'Supplier X',
  item: 'Raw Material A',
  quantity: 20,
  price: 50,
  total: 1000
}, {
  id: '2',
  date: '2023-10-28',
  supplier: 'Supplier Y',
  item: 'Raw Material B',
  quantity: 15,
  price: 80,
  total: 1200
}, {
  id: '3',
  date: '2023-11-02',
  supplier: 'Supplier Z',
  item: 'Raw Material C',
  quantity: 10,
  price: 120,
  total: 1200
}, {
  id: '4',
  date: '2023-11-05',
  supplier: 'Supplier X',
  item: 'Raw Material D',
  quantity: 25,
  price: 40,
  total: 1000
}];
// Mock users data
export const mockUsers = [{
  id: '1',
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'admin',
  status: 'active',
  lastLogin: '2023-11-10 09:23'
}, {
  id: '2',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'manager',
  status: 'active',
  lastLogin: '2023-11-09 14:45'
}, {
  id: '3',
  name: 'Jane Smith',
  email: 'jane@example.com',
  role: 'user',
  status: 'active',
  lastLogin: '2023-11-10 11:30'
}, {
  id: '4',
  name: 'Robert Johnson',
  email: 'robert@example.com',
  role: 'user',
  status: 'inactive',
  lastLogin: '2023-11-05 16:20'
}, {
  id: '5',
  name: 'Emily Davis',
  email: 'emily@example.com',
  role: 'user',
  status: 'active',
  lastLogin: '2023-11-10 08:15'
}];