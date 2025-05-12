import React, { useState } from 'react';
import { PlusIcon, UserIcon } from 'lucide-react';
import Table from '../shared/Table';
import Modal from '../shared/Modal';
import Button from '../shared/Button';
import { useDashboard } from '../../context/DashboardContext';
const EmployeesSection: React.FC = () => {
  const {
    employees,
    addEmployee
  } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    hireDate: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    addEmployee(formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      position: '',
      email: '',
      phone: '',
      hireDate: ''
    });
  };
  const columns = [{
    header: 'Name',
    accessor: 'name'
  }, {
    header: 'Position',
    accessor: 'position'
  }, {
    header: 'Email',
    accessor: 'email'
  }, {
    header: 'Phone',
    accessor: 'phone'
  }, {
    header: 'Hire Date',
    accessor: 'hireDate'
  }];
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Employees</h2>
        <Button onClick={() => setIsModalOpen(true)} icon={<PlusIcon size={16} />}>
          Add Employee
        </Button>
      </div>
      <Table columns={columns} data={employees} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Employee">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <input type="text" id="position" name="position" value={formData.position} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
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
              <label htmlFor="hireDate" className="block text-sm font-medium text-gray-700">
                Hire Date
              </label>
              <input type="date" id="hireDate" name="hireDate" value={formData.hireDate} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="pt-4 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Employee</Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>;
};
export default EmployeesSection;