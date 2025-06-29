import React, { useState } from 'react';
import { PencilIcon, TrashIcon, ShieldIcon } from 'lucide-react';
import Table from '../components/shared/Table';
import Modal from '../components/shared/Modal';
import Button from '../components/shared/Button';
import { useDashboard } from '../context/DashboardContext';
const Users: React.FC = () => {
  const {
    users,
    deleteUser,
    updateUser
  } = useDashboard();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    status: ''
  });
  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
    setIsEditModalOpen(true);
  };
  const handleDeleteClick = (user: any) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (selectedUser) {
      updateUser(selectedUser.id, formData);
      setIsEditModalOpen(false);
    }
  };
  const handleDelete = () => {
    if (selectedUser) {
      deleteUser(selectedUser.id);
      setIsDeleteModalOpen(false);
    }
  };
  const columns = [{
    header: 'Name',
    accessor: 'name'
  }, {
    header: 'Email',
    accessor: 'email'
  }, {
    header: 'Role',
    accessor: 'role',
    cell: (value: string) => <span className={`px-2 py-1 rounded-full text-xs ${value === 'admin' ? 'bg-purple-100 text-purple-800' : value === 'manager' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
          {value}
        </span>
  }, {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => <span className={`px-2 py-1 rounded-full text-xs ${value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {value}
        </span>
  }, {
    header: 'Last Login',
    accessor: 'lastLogin'
  }, {
    header: 'Actions',
    accessor: '',
    cell: (_: any, row: any) => <div className="flex space-x-2">
          <button onClick={() => handleEditClick(row)} className="text-blue-600 hover:text-blue-800">
            <PencilIcon size={16} />
          </button>
          <button onClick={() => handleDeleteClick(row)} className="text-red-600 hover:text-red-800">
            <TrashIcon size={16} />
          </button>
        </div>
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
          <ShieldIcon size={20} className="text-indigo-600 mr-2" />
          <span className="font-medium">Total Users: </span>
          <span className="ml-2 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
            {users.length}
          </span>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <Table columns={columns} data={users} />
        </div>
      </div>
      {/* Edit User Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit User">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select id="role" name="role" value={formData.role} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="user">User</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select id="status" name="status" value={formData.status} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="pt-4 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </div>
        </form>
      </Modal>
      {/* Delete User Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Delete User" size="sm">
        <div className="space-y-4">
          <p className="text-gray-700">
            Are you sure you want to delete {selectedUser?.name}? This action
            cannot be undone.
          </p>
          <div className="pt-4 flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>;
};
export default Users;