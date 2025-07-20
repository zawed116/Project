import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/archive", name: "Archive" },
    { path: "/category", name: "Category" },
    { path: "/pages", name: "Pages" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              TravelBlog
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-1 py-2 text-sm font-medium ${
                  location.pathname === item.path
                    ? 'border-b-2 border-indigo-500 text-gray-900'
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                } transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}