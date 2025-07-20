import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus 
              hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut 
              eleifend nibh porttitor.
            </p>
            <p className="text-gray-600">
              Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
              Suspendisse dictum feugiat nisl ut dapibus.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}