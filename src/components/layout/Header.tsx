import React from 'react';
import { MenuIcon, BellIcon, UserIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
interface HeaderProps {
  onMenuToggle: () => void;
  collapsed: boolean;
}
const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  collapsed
}) => {
  const {
    user
  } = useAuth();
  return <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={onMenuToggle} className="mr-4 focus:outline-none">
          <MenuIcon size={24} />
        </button>
        <h2 className="text-xl font-semibold hidden md:block">
          Admin Dashboard
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative focus:outline-none">
          <BellIcon size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
            <UserIcon size={16} />
          </div>
          <span className="hidden md:block">{user?.name || 'User'}</span>
        </div>
      </div>
    </header>;
};
export default Header;