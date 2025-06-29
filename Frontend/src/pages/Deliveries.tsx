import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, ClockIcon } from 'lucide-react';
import Table from '../components/shared/Table';
import Button from '../components/shared/Button';
interface Delivery {
  id: string;
  orderNumber: string;
  customer: string;
  items: string[];
  status: 'pending' | 'completed' | 'delayed';
  expectedDate: string;
  updatedAt: string;
}
const Deliveries: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([{
    id: '1',
    orderNumber: 'DEL-001',
    customer: 'Acme Corp',
    items: ['Laptop x2', 'Monitor x1'],
    status: 'pending',
    expectedDate: '2023-11-20',
    updatedAt: '2023-11-15'
  }
  // Add more sample deliveries
  ]);
  const handleStatusUpdate = (id: string, newStatus: 'completed' | 'delayed') => {
    setDeliveries(deliveries.map(delivery => delivery.id === id ? {
      ...delivery,
      status: newStatus,
      updatedAt: new Date().toISOString().split('T')[0]
    } : delivery));
  };
  const columns = [{
    header: 'Order #',
    accessor: 'orderNumber'
  }, {
    header: 'Customer',
    accessor: 'customer'
  }, {
    header: 'Items',
    accessor: 'items',
    cell: (items: string[]) => <ul className="list-disc list-inside">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
  }, {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => <span className={`px-2 py-1 rounded-full text-xs font-medium
          ${value === 'completed' ? 'bg-green-100 text-green-800' : value === 'delayed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
  }, {
    header: 'Expected Date',
    accessor: 'expectedDate'
  }, {
    header: 'Last Updated',
    accessor: 'updatedAt'
  }, {
    header: 'Actions',
    accessor: 'id',
    cell: (id: string, row: Delivery) => <div className="flex space-x-2">
          {row.status === 'pending' && <>
              <Button size="sm" variant="success" onClick={() => handleStatusUpdate(id, 'completed')} icon={<CheckCircleIcon size={16} />}>
                Mark Complete
              </Button>
              <Button size="sm" variant="danger" onClick={() => handleStatusUpdate(id, 'delayed')} icon={<XCircleIcon size={16} />}>
                Mark Delayed
              </Button>
            </>}
        </div>
  }];
  const pendingDeliveries = deliveries.filter(d => d.status === 'pending');
  const delayedDeliveries = deliveries.filter(d => d.status === 'delayed');
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Delivery Status</h1>
        <div className="flex space-x-4">
          <div className="bg-yellow-50 px-4 py-2 rounded-lg flex items-center">
            <ClockIcon size={20} className="text-yellow-600 mr-2" />
            <span>
              Pending: <strong>{pendingDeliveries.length}</strong>
            </span>
          </div>
          <div className="bg-red-50 px-4 py-2 rounded-lg flex items-center">
            <XCircleIcon size={20} className="text-red-600 mr-2" />
            <span>
              Delayed: <strong>{delayedDeliveries.length}</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Table columns={columns} data={deliveries} />
      </div>
    </div>;
};
export default Deliveries;