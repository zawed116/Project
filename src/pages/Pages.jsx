import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Pages() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Contact', path: '/contact' }
  ];

  const recentMonths = [
    'January 2023',
    'February 2023',
    'March 2023'
  ];

  const featuredPages = [
    {
      title: 'Travel Guides',
      description: 'Comprehensive guides for your next adventure',
      icon: '✈️',
      path: '/guides'
    },
    {
      title: 'Travel Tips',
      description: 'Expert advice for smooth journeys',
      icon: '💡',
      path: '/tips'
    },
    {
      title: 'Photo Gallery',
      description: 'Stunning visuals from around the world',
      icon: '📷',
      path: '/gallery'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Pages</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover all the resources available on TravelBlog
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <span className="text-2xl">🌎</span>
                </div>
                <h2 className="text-xl font-bold">TravelBlog</h2>
              </div>
              <p className="text-gray-600">
                Exploring the world one destination at a time. Our mission is to inspire and guide travelers through authentic experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">🔗</span>
                Quick Links
              </h2>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      <span className="mr-2">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Months */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">📅</span>
                Recent Months
              </h2>
              <ul className="space-y-3">
                {recentMonths.map((month, index) => (
                  <li key={index}>
                    <Link 
                      to={`/archive/${month.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center text-gray-700 hover:text-indigo-600"
                    >
                      <span className="mr-2">•</span>
                      {month}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Featured Pages */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">Featured Pages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPages.map((page, index) => (
                <Link 
                  to={page.path}
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{page.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{page.title}</h3>
                  <p className="text-gray-600">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}   