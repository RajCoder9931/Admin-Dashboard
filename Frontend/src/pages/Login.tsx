import React, { useState } from 'react';
import { LockIcon, MailIcon } from 'lucide-react';
import Button from '../components/shared/Button';
interface LoginProps {
  onLogin: () => void;
}
const Login: React.FC<LoginProps> = ({
  onLogin
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };
  return <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-indigo-600 p-6">
          <h2 className="text-2xl font-bold text-white text-center">
            Admin Dashboard
          </h2>
        </div>
        <div className="p-8">
          <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
            Sign in to your account
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon size={18} className="text-gray-400" />
                </div>
                <input id="email" name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="name@company.com" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon size={18} className="text-gray-400" />
                </div>
                <input id="password" name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="••••••••" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <Button type="submit" fullWidth>
                Sign in
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Demo credentials:</p>
            <p>Email: admin@example.com</p>
            <p>Password: password</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Login;