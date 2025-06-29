import React from 'react';
import { DollarSignIcon, ShoppingCartIcon, WalletIcon, UsersIcon, PackageIcon, TruckIcon } from 'lucide-react';
import SummaryCard from '../components/dashboard/SummaryCard';
import StatisticsChart from '../components/dashboard/StatisticsChart';
import { useDashboard } from '../context/DashboardContext';
const Dashboard: React.FC = () => {
  const {
    dashboardData
  } = useDashboard();
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value);
  };
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="Monthly Sales" value={formatCurrency(dashboardData.monthlySales)} icon={<DollarSignIcon size={24} className="text-white" />} color="bg-blue-500" change="12%" isPositive={true} />
        <SummaryCard title="Total Purchases" value={formatCurrency(dashboardData.totalPurchases)} icon={<ShoppingCartIcon size={24} className="text-white" />} color="bg-purple-500" change="5%" isPositive={true} />
        <SummaryCard title="Balance" value={formatCurrency(dashboardData.balance)} icon={<WalletIcon size={24} className="text-white" />} color="bg-green-500" change="8%" isPositive={true} />
        <SummaryCard title="Employees" value={dashboardData.employeeCount} icon={<UsersIcon size={24} className="text-white" />} color="bg-yellow-500" />
      </div>
      {/* Statistics Chart */}
      <StatisticsChart data={dashboardData.salesPerformance} title="Sales Performance" />
      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 mr-4">
              <PackageIcon size={24} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">
                Products in Stock
              </h3>
              <p className="text-2xl font-bold">
                {dashboardData.productsInStock}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 mr-4">
              <TruckIcon size={24} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">
                Pending Deliveries
              </h3>
              <p className="text-2xl font-bold">
                {dashboardData.pendingDeliveries}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Quick Actions</h3>
          </div>
          <div className="mt-4 space-y-2">
            <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
              Create New Sale
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
              Add New Employee
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;