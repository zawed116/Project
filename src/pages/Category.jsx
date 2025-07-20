import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Category() {
  const categories = [
    {
      name: 'Beaches',
      count: 24,
      image: 'bg-[url("https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6")]',
      description: 'Discover the world\'s most stunning coastlines and hidden beach gems'
    },
    {
      name: 'Mountains',
      count: 18,
      image: 'bg-[url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b")]',
      description: 'Explore majestic peaks and breathtaking mountain landscapes'
    },
    {
      name: 'Cities',
      count: 32,
      image: 'bg-[url("https://images.unsplash.com/photo-1492571350019-22de08371fd3")]',
      description: 'Experience vibrant urban life and iconic city landmarks'
    },
    {
      name: 'Adventure',
      count: 15,
      image: 'bg-[url("https://images.unsplash.com/photo-1506929562872-bb421503ef21")]',
      description: 'Thrilling activities and adrenaline-pumping experiences'
    },
    {
      name: 'Food',
      count: 12,
      image: 'bg-[url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd")]',
      description: 'Culinary journeys and delicious local cuisines'
    },
    {
      name: 'Culture',
      count: 21,
      image: 'bg-[url("https://images.unsplash.com/photo-1527631746610-bca00a040d60")]',
      description: 'Immerse yourself in rich traditions and local heritage'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Categories</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our collection of travel stories organized by category
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-80"
              >
                {/* Category Image */}
                <div className={`absolute inset-0 ${category.image} bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Category Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-1">{category.name}</h2>
                  <p className="text-gray-300 mb-3">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">
                      {category.count} articles
                    </span>
                    <Link 
                      to={`/category/${category.name.toLowerCase()}`}
                      className="text-white hover:text-amber-300 font-medium flex items-center"
                    >
                      View all
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}