import React, { useState } from 'react';
import { BuildingIcon, UploadIcon, SaveIcon } from 'lucide-react';
import Button from '../components/shared/Button';
interface CompanySettings {
  name: string;
  address: string;
  phone: string;
  email: string;
  taxId: string;
  currency: string;
  logo: string;
}
const Settings: React.FC = () => {
  const [settings, setSettings] = useState<CompanySettings>({
    name: 'Your Company Name',
    address: '123 Business Street',
    phone: '(123) 456-7890',
    email: 'contact@company.com',
    taxId: '12-3456789',
    currency: 'USD',
    logo: 'https://via.placeholder.com/150'
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setSettings({
      ...settings,
      [name]: value
    });
  };
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload this to a server
      const reader = new FileReader();
      reader.onloadend = () => {
        setSettings({
          ...settings,
          logo: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save this to a server
    alert('Settings saved successfully!');
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img src={settings.logo} alt="Company logo" className="h-32 w-32 rounded-lg object-cover" />
                  <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer">
                    <UploadIcon size={16} className="text-gray-600" />
                    <input type="file" className="hidden" accept="image/*" onChange={handleLogoChange} />
                  </label>
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input type="text" name="name" value={settings.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <textarea name="address" value={settings.address} onChange={handleInputChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input type="tel" name="phone" value={settings.phone} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input type="email" name="email" value={settings.email} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tax ID
                </label>
                <input type="text" name="taxId" value={settings.taxId} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Currency
                </label>
                <select name="currency" value={settings.currency} onChange={e => handleInputChange(e)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                </select>
              </div>
            </div>
            <div className="pt-4">
              <Button type="submit" icon={<SaveIcon size={16} />}>
                Save Settings
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-medium mb-4">Admin Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700">
                  Enable two-factor authentication
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700">
                  Require password reset every 90 days
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="text-gray-700">
                  Send email notifications for low stock
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Settings;