import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "Bali's Hidden Beaches",
      excerpt: "Discover the untouched beaches of Bali's eastern coast",
      date: "June 15, 2023",
      category: "BEACHES",
      image: "bg-[url('https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6')]"
    },
    {
      id: 2,
      title: "Himalayan Trekking Routes",
      excerpt: "Top 5 beginner-friendly treks in the Himalayas",
      date: "May 22, 2023",
      category: "MOUNTAINS",
      image: "bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b')]"
    },
    {
      id: 3,
      title: "Tokyo Nightlife Guide",
      excerpt: "Where to experience authentic Tokyo after dark",
      date: "April 10, 2023",
      category: "CITIES",
      image: "bg-[url('https://images.unsplash.com/photo-1492571350019-22de08371fd3')]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21')" }}
        ></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center text-white z-10">
          <span className="uppercase tracking-[0.3em] text-sm font-medium text-amber-400 mb-4 inline-block">
            TOURS & TRAVELS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Amazing Places on Earth
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover breathtaking destinations and unforgettable experiences
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/archive" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Explore More
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-12 text-gray-300">
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              December 12, 2018
            </span>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-amber-500 font-medium">Recent Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Discover Our Latest Adventures</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 h-[400px]">
              <div className={`absolute inset-0 ${post.image} bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-medium mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{post.date}</span>
                  <Link 
                    to={`/post/${post.id}`} 
                    className="text-amber-400 hover:text-amber-300 flex items-center"
                  >
                    Read More
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

      <Footer />
    </div>
  );
}