import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Archive() {
  const months = [
    { month: 'January 2023', articles: 12, image: 'bg-[url("https://images.unsplash.com/photo-1518633945839-7a1d3c4b199e")]' },
    { month: 'February 2023', articles: 14, image: 'bg-[url("https://images.unsplash.com/photo-1483729558449-99ef09a8c325")]' },
    { month: 'March 2023', articles: 8, image: 'bg-[url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d")]' },
    { month: 'April 2023', articles: 14, image: 'bg-[url("https://images.unsplash.com/photo-1493246507139-91e8fad9978e")]' },
    { month: 'May 2023', articles: 9, image: 'bg-[url("https://images.unsplash.com/photo-1469474968028-56623f02e42e")]' },
    { month: 'June 2023', articles: 6, image: 'bg-[url("https://images.unsplash.com/photo-1505142468610-359e7d316be0")]' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-indigo-700 text-white">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Archive</h1>
            <p className="text-xl max-w-2xl mx-auto">Browse through our collection of travel stories and adventures</p>
          </div>
        </section>

        {/* Archive Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {months.map((item, index) => (
              <Link 
                to={`/archive/${item.month.toLowerCase().replace(' ', '-')}`} 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg h-64 hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 ${item.image} bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h2 className="text-xl font-bold text-white mb-1">{item.month}</h2>
                  <p className="text-gray-300">{item.articles} articles</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}