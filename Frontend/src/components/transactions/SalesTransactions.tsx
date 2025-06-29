import React, { useState } from 'react';
import Table from '../shared/Table';
import SalesForm from './SalesForm';
import { useDashboard } from '../../context/DashboardContext';
const SalesTransactions: React.FC = () => {
  const {
    sales
  } = useDashboard();
  const [showForm, setShowForm] = useState(false);
  const columns = [{
    header: 'Date',
    accessor: 'date',
    cell: (value: string) => {
      const date = new Date(value);
      return date.toLocaleDateString();
    }
  }, {
    header: 'Customer',
    accessor: 'customer'
  }, {
    header: 'Item',
    accessor: 'item'
  }, {
    header: 'Quantity',
    accessor: 'quantity'
  }, {
    header: 'Price',
    accessor: 'price',
    cell: (value: number) => <span>
          {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)}
        </span>
  }, {
    header: 'Total',
    accessor: 'total',
    cell: (value: number) => <span className="font-medium">
          {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)}
        </span>
  }];
  return <div>
      <div className="mb-6">
        <button onClick={() => setShowForm(!showForm)} className="text-indigo-600 hover:text-indigo-800 font-medium focus:outline-none">
          {showForm ? '← Back to Sales List' : '+ New Sale'}
        </button>
      </div>
      {showForm ? <SalesForm /> : <>
          <h2 className="text-lg font-medium mb-4">Sales Transactions</h2>
          <Table columns={columns} data={sales} />
        </>}
    </div>;
};
export default SalesTransactions;