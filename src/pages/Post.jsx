import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const posts = {
  1: {
    title: "Bali's Hidden Beaches",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.",
    date: "June 15, 2023",
    category: "BEACHES",
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6"
  },
  2: {
    title: "Himalayan Trekking Routes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.",
    date: "May 22, 2023",
    category: "MOUNTAINS",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  3: {
    title: "Tokyo Nightlife Guide",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.",
    date: "April 10, 2023",
    category: "CITIES",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3"
  }
};

export default function Post() {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Post Header */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <span className="uppercase tracking-wider text-sm font-medium text-amber-400 mb-2 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center justify-center text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {post.date}
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="prose max-w-none">
            <p>{post.content}</p>
            <p>{post.content}</p> {/* Duplicated for demo */}
          </article>
          
          <div className="mt-12">
            <Link 
              to="/archive" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Archive
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}