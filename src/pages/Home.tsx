import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, Leaf, Sprout, Users, BookOpen, Microscope } from 'lucide-react';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative bg-cover bg-center h-[500px] flex items-center" style={{
        backgroundImage: `url('/Landing.jpg')`
      }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                BANA-USTA AGRO INPUT ENTERPRISE
              </h1>
              <p className="text-xl mb-8">
                Growing a sustainable future through innovative agricultural
                solutions
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                  Our Services
                </Link>
                <Link to="/contact" className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/zoe-richardson-tbiV-yc903g-unsplash.jpg" alt="Farmer spraying crops" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-green-600">BANA-USTA</span>
              </h2>
              <p className="text-gray-600 mb-6">
                BANA-USTA AGRO INPUT ENTERPRISE is a leading agricultural
                company dedicated to providing high-quality products and
                services to farmers and agricultural businesses. With years of
                experience in the industry, we have established ourselves as a
                trusted partner for all agricultural needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of agricultural experts is committed to promoting
                sustainable farming practices while maximizing productivity and
                profitability for our clients.
              </p>
              <Link to="/about" className="inline-flex items-center text-green-600 font-medium">
                Learn more about us
                <ArrowRightIcon size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide a comprehensive range of agricultural services designed
              to support farmers at every stage of cultivation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <div className="h-10 w-10 text-green-600" />,
            title: 'Crop Cultivation & Management',
            description: 'Expert guidance on crop selection, planting, maintenance, and harvesting for optimal yields.'
          }, {
            icon: <Sprout className="h-10 w-10 text-green-600" />,
            title: 'Horticulture',
            description: 'Specialized services for fruit, vegetable, and ornamental plant cultivation and care.'
          }, {
            icon: <Leaf className="h-10 w-10 text-green-600" />,
            title: 'Landscaping & Environmental Design',
            description: 'Professional design and implementation of sustainable and beautiful landscapes.'
          }, {
            icon: <Users className="h-10 w-10 text-green-600" />,
            title: 'Farm Consultation',
            description: 'Personalized advisory services to improve farm productivity and sustainability.'
          }, {
            icon: <Microscope className="h-10 w-10 text-green-600" />,
            title: 'Agrochemical Handling',
            description: 'Safe and effective application of fertilizers and pest control products.'
          }, {
            icon: <BookOpen className="h-10 w-10 text-green-600" />,
            title: 'Entrepreneurial Skills',
            description: 'Training and support for developing successful agribusiness ventures.'
          }].map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Agricultural Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with BANA-USTA AGRO INPUT ENTERPRISE for expert guidance and
            quality products.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Latest from Our <span className="text-green-600">Blog</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Stay updated with the latest agricultural tips, trends, and
              insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            image: '/Adobe Express - file.jpg',
            title: 'Sustainable Farming Practices for the Modern Farmer',
            excerpt: 'Discover how sustainable farming practices can improve yield while protecting the environment.',
            date: 'June 15, 2023'
          }, {
            image: '/woman-hat-holding-funnel-works-garden.jpg',
            title: 'Effective Pest Control Methods for Organic Farms',
            excerpt: 'Learn about natural and organic pest control methods that work effectively without chemicals.',
            date: 'May 28, 2023'
          }, {
            image: '/megan-thomas-xMh_ww8HN_Q-unsplash.jpg',
            title: 'Maximizing Profits in Small-Scale Agribusiness',
            excerpt: 'Tips and strategies for small farm owners to increase profitability and business sustainability.',
            date: 'April 10, 2023'
          }].map((post, index) => <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-green-600 text-sm font-medium mb-1">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-green-600 font-medium hover:text-green-700">
                    Read more →
                  </Link>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;