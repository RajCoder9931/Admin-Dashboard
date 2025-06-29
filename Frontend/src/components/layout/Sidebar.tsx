import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, DatabaseIcon, ShoppingCartIcon, UsersIcon, LogOutIcon, PackageIcon, TruckIcon, FileTextIcon, SettingsIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
interface SidebarProps {
  collapsed: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({
  collapsed
}) => {
  const location = useLocation();
  const {
    logout
  } = useAuth();
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  const navItems = [{
    path: '/dashboard',
    name: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    path: '/master',
    name: 'Master',
    icon: <DatabaseIcon size={20} />
  }, {
    path: '/transactions',
    name: 'Transactions',
    icon: <ShoppingCartIcon size={20} />
  }, {
    path: '/inventory',
    name: 'Inventory',
    icon: <PackageIcon size={20} />
  }, {
    path: '/deliveries',
    name: 'Deliveries',
    icon: <TruckIcon size={20} />
  }, {
    path: '/users',
    name: 'Users',
    icon: <UsersIcon size={20} />
  }, {
    path: '/reports',
    name: 'Reports',
    icon: <FileTextIcon size={20} />
  }, {
    path: '/settings',
    name: 'Settings',
    icon: <SettingsIcon size={20} />
  }];
  return <aside className={`bg-indigo-800 text-white transition-all duration-300 ease-in-out ${collapsed ? 'w-16' : 'w-64'} h-screen flex flex-col`}>
      <div className={`p-4 ${collapsed ? 'justify-center' : ''} flex items-center`}>
        {!collapsed && <h1 className="text-xl font-bold">Admin Dashboard</h1>}
        {collapsed && <span className="font-bold text-xl">AD</span>}
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          {navItems.map(item => <li key={item.path}>
              <Link to={item.path} className={`flex items-center px-4 py-3 hover:bg-indigo-700 transition-colors ${isActive(item.path) ? 'bg-indigo-700' : ''}`}>
                <span className="mr-3">{item.icon}</span>
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 mt-auto">
        <button onClick={logout} className={`flex items-center text-white hover:text-gray-300 ${collapsed ? 'justify-center w-full' : ''}`}>
          <LogOutIcon size={20} className="mr-2" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>;
};
export default Sidebar;