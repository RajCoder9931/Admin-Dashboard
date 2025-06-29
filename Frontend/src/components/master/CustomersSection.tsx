import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import Table from '../shared/Table';
import Modal from '../shared/Modal';
import Button from '../shared/Button';
import { useDashboard } from '../../context/DashboardContext';
const CustomersSection: React.FC = () => {
  const {
    customers,
    addCustomer
  } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    phone: '',
    address: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCustomer(formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      contact: '',
      email: '',
      phone: '',
      address: ''
    });
  };
  const columns = [{
    header: 'Company Name',
    accessor: 'name'
  }, {
    header: 'Contact Person',
    accessor: 'contact'
  }, {
    header: 'Email',
    accessor: 'email'
  }, {
    header: 'Phone',
    accessor: 'phone'
  }, {
    header: 'Address',
    accessor: 'address'
  }];
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Customers</h2>
        <Button onClick={() => setIsModalOpen(true)} icon={<PlusIcon size={16} />}>
          Add Customer
        </Button>
      </div>
      <Table columns={columns} data={customers} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Customer">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact Person
              </label>
              <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="pt-4 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Customer</Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>;
};
export default CustomersSection;