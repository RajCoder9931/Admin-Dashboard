import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import Table from '../shared/Table';
import Modal from '../shared/Modal';
import Button from '../shared/Button';
import { useDashboard } from '../../context/DashboardContext';
const BanksSection: React.FC = () => {
  const {
    banks,
    addBank
  } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    accountNumber: '',
    branch: '',
    balance: 0
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'balance' ? parseFloat(value) || 0 : value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBank(formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      accountNumber: '',
      branch: '',
      balance: 0
    });
  };
  const columns = [{
    header: 'Bank Name',
    accessor: 'name'
  }, {
    header: 'Account Number',
    accessor: 'accountNumber'
  }, {
    header: 'Branch',
    accessor: 'branch'
  }, {
    header: 'Balance',
    accessor: 'balance',
    cell: (value: number) => <span>
          {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)}
        </span>
  }];
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Banks</h2>
        <Button onClick={() => setIsModalOpen(true)} icon={<PlusIcon size={16} />}>
          Add Bank
        </Button>
      </div>
      <Table columns={columns} data={banks} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Bank">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input type="text" id="accountNumber" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                Branch
              </label>
              <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="balance" className="block text-sm font-medium text-gray-700">
                Initial Balance
              </label>
              <input type="number" id="balance" name="balance" value={formData.balance} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="pt-4 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Bank</Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>;
};
export default BanksSection;