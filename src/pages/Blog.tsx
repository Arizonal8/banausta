import React from 'react';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Blog = () => {
  const categories = ['Sustainable Farming', 'Pest Control', 'Agribusiness', 'Water Conservation', 'Soil Health', 'AgTech', 'Organic Farming', 'Climate Smart Agriculture'];
  const blogPosts = [{
    id: 1,
    title: 'Sustainable Farming Practices for the Modern Farmer',
    excerpt: 'Discover how sustainable farming practices can improve yield while protecting the environment for future generations.',
    image: '/Adobe Express - file (1).jpg',
    date: 'June 15, 2023',
    author: 'Dr Augusta',
    readTime: '8 min read',
    category: 'Sustainable Farming',
    link: '/blog/sustainable-farming-practices'
  }, {
    id: 2,
    title: 'Effective Pest Control Methods for Organic Farms',
    excerpt: 'Learn about natural and organic pest control methods that work effectively without harmful chemicals.',
    image: '/woman-hat-holding-funnel-works-garden.jpg',
    date: 'May 28, 2023',
    author: 'Mrs Judith',
    readTime: '6 min read',
    category: 'Pest Control',
    link: '/blog/organic-pest-control'
  }, {
    id: 3,
    title: 'Maximizing Profits in Small-Scale Agribusiness',
    excerpt: 'Tips and strategies for small farm owners to increase profitability and business sustainability.',
    image: '/front-view-smiley-woman-with-harvest.jpg',
    date: 'April 10, 2023',
    author: 'Mr Victor',
    readTime: '10 min read',
    category: 'Agribusiness',
    link: '/blog/maximizing-profits'
  }, {
    id: 4,
    title: 'Water Conservation Techniques in Agriculture',
    excerpt: 'Explore innovative methods to reduce water usage while maintaining crop health and productivity.',
    image: '/markus-spiske-sFydXGrt5OA-unsplash.jpg',
    date: 'March 22, 2023',
    author: 'Dr Augusta',
    readTime: '7 min read',
    category: 'Water Conservation',
    link: '/blog/water-conservation'
  }, {
    id: 5,
    title: 'The Benefits of Crop Rotation for Soil Health',
    excerpt: 'Learn how proper crop rotation can improve soil fertility and reduce pest problems naturally.',
    image: '/megan-thomas-xMh_ww8HN_Q-unsplash.jpg',
    date: 'February 15, 2023',
    author: 'Dr Augusta',
    readTime: '5 min read',
    category: 'Soil Health',
    link: '#'
  }, {
    id: 6,
    title: 'Modern Technologies Transforming Agriculture',
    excerpt: 'Discover how drones, IoT, and AI are revolutionizing farming practices and increasing efficiency.',
    image: '/markus-spiske-9cHVqn9bBpQ-unsplash.jpg',
    date: 'January 8, 2023',
    author: 'Arinze',
    readTime: '9 min read',
    category: 'AgTech',
    link: '#'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative bg-cover bg-center h-[300px] flex items-center" style={{
        backgroundImage: `url('/danshen-somintac-OfEf_mSKq2w-unsplash.jpg')`
      }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
              <p className="text-xl">
                Latest insights, tips, and news from the world of agriculture
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map(post => <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link to={post.link} className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>)}
              </div>
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center">
                  <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 border border-gray-300 rounded-md hover:bg-green-600 hover:text-white">
                    Previous
                  </a>
                  <a href="#" className="px-4 py-2 mx-1 text-white transition-colors duration-300 bg-green-600 border border-green-600 rounded-md">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 border border-gray-300 rounded-md hover:bg-green-600 hover:text-white">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 border border-gray-300 rounded-md hover:bg-green-600 hover:text-white">
                    Next
                  </a>
                </nav>
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              {/* Search */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="flex">
                  <input type="text" placeholder="Search articles..." className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>
              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => <li key={index}>
                      <a href="#" className={`block px-4 py-2 rounded-md transition-colors ${index === 0 ? 'bg-green-600 text-white' : 'hover:bg-green-100'}`}>
                        {category}
                      </a>
                    </li>)}
                </ul>
              </div>
              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => <div key={post.id} className="flex gap-4">
                      <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-md" />
                      <div>
                        <h4 className="font-medium line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {post.date}
                        </p>
                      </div>
                    </div>)}
                </div>
              </div>
              {/* Subscribe */}
              <div className="bg-green-600 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="mb-4">
                  Get the latest agricultural tips and insights directly to your
                  inbox.
                </p>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded-md mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <button className="w-full bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Blog;