import React, { useState } from 'react';
import { PlusIcon, AlertCircleIcon } from 'lucide-react';
import Table from '../components/shared/Table';
import Modal from '../components/shared/Modal';
import Button from '../components/shared/Button';
interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  minStock: number;
  price: number;
  lastUpdated: string;
}
const Inventory: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([{
    id: '1',
    name: 'Laptop',
    category: 'Electronics',
    quantity: 15,
    minStock: 10,
    price: 999.99,
    lastUpdated: '2023-11-15'
  }
  // Add more sample products
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: 0,
    minStock: 0,
    price: 0
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'quantity' || name === 'minStock' || name === 'price' ? parseFloat(value) : value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct) {
      // Update existing product
      setProducts(products.map(p => p.id === selectedProduct.id ? {
        ...p,
        ...formData,
        lastUpdated: new Date().toISOString().split('T')[0]
      } : p));
    } else {
      // Add new product
      const newProduct = {
        id: Date.now().toString(),
        ...formData,
        lastUpdated: new Date().toISOString().split('T')[0]
      };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
    setSelectedProduct(null);
    setFormData({
      name: '',
      category: '',
      quantity: 0,
      minStock: 0,
      price: 0
    });
  };
  const columns = [{
    header: 'Name',
    accessor: 'name'
  }, {
    header: 'Category',
    accessor: 'category'
  }, {
    header: 'Quantity',
    accessor: 'quantity',
    cell: (value: number, row: Product) => <div className="flex items-center">
          <span className={value <= row.minStock ? 'text-red-600 font-medium' : ''}>
            {value}
          </span>
          {value <= row.minStock && <AlertCircleIcon size={16} className="ml-2 text-red-600" />}
        </div>
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
    header: 'Last Updated',
    accessor: 'lastUpdated'
  }, {
    header: 'Actions',
    accessor: 'id',
    cell: (_: string, row: Product) => <div className="flex space-x-2">
          <button onClick={() => {
        setSelectedProduct(row);
        setFormData({
          name: row.name,
          category: row.category,
          quantity: row.quantity,
          minStock: row.minStock,
          price: row.price
        });
        setIsModalOpen(true);
      }} className="text-blue-600 hover:text-blue-800">
            Update Stock
          </button>
        </div>
  }];
  const lowStockProducts = products.filter(p => p.quantity <= p.minStock);
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Button onClick={() => setIsModalOpen(true)} icon={<PlusIcon size={16} />}>
          Add Product
        </Button>
      </div>
      {lowStockProducts.length > 0 && <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex items-center">
            <AlertCircleIcon size={20} className="text-red-400 mr-2" />
            <h3 className="text-red-800 font-medium">Low Stock Alert</h3>
          </div>
          <div className="mt-2 text-sm text-red-700">
            {lowStockProducts.map(product => <div key={product.id}>
                {product.name} - Only {product.quantity} units remaining
              </div>)}
          </div>
        </div>}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Table columns={columns} data={products} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => {
      setIsModalOpen(false);
      setSelectedProduct(null);
      setFormData({
        name: '',
        category: '',
        quantity: 0,
        minStock: 0,
        price: 0
      });
    }} title={selectedProduct ? 'Update Product' : 'Add New Product'}>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input type="text" name="category" value={formData.category} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required min="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Minimum Stock Level
              </label>
              <input type="number" name="minStock" value={formData.minStock} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required min="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input type="number" name="price" value={formData.price} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required min="0" step="0.01" />
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="outline" onClick={() => {
              setIsModalOpen(false);
              setSelectedProduct(null);
              setFormData({
                name: '',
                category: '',
                quantity: 0,
                minStock: 0,
                price: 0
              });
            }}>
                Cancel
              </Button>
              <Button type="submit">
                {selectedProduct ? 'Update' : 'Add'} Product
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>;
};
export default Inventory;