import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">TravelBlog</h3>
            <p className="text-gray-400">Exploring the world one destination at a time.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/archive" className="text-gray-400 hover:text-white">Destinations</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Recent Months */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Recent Months</h4>
            <ul className="space-y-2">
              <li><Link to="/archive/january-2023" className="text-gray-400 hover:text-white">January 2023</Link></li>
              <li><Link to="/archive/february-2023" className="text-gray-400 hover:text-white">February 2023</Link></li>
              <li><Link to="/archive/march-2023" className="text-gray-400 hover:text-white">March 2023</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TravelBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}