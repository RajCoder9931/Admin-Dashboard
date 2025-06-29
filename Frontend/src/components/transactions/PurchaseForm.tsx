import React, { useState } from 'react';
import Button from '../shared/Button';
import { useDashboard } from '../../context/DashboardContext';
const PurchaseForm: React.FC = () => {
  const {
    addPurchase
  } = useDashboard();
  const [formData, setFormData] = useState({
    supplier: '',
    item: '',
    quantity: 1,
    price: 0
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'quantity' || name === 'price' ? parseFloat(value) || 0 : value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPurchase({
      ...formData,
      total: formData.price * formData.quantity
    });
    setFormData({
      supplier: '',
      item: '',
      quantity: 1,
      price: 0
    });
  };
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-6">New Purchase</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
              Supplier
            </label>
            <input type="text" id="supplier" name="supplier" value={formData.supplier} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
          <div>
            <label htmlFor="item" className="block text-sm font-medium text-gray-700">
              Item
            </label>
            <input type="text" id="item" name="item" value={formData.item} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input type="number" id="quantity" name="quantity" min="1" value={formData.quantity} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price per Unit
            </label>
            <input type="number" id="price" name="price" min="0" step="0.01" value={formData.price} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center pb-4 mb-4 border-b">
            <span className="text-gray-700">Total Amount:</span>
            <span className="text-lg font-medium">
              {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(formData.price * formData.quantity)}
            </span>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Create Purchase</Button>
          </div>
        </div>
      </form>
    </div>;
};
export default PurchaseForm;