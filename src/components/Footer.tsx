import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BANA-USTA AGRO</h3>
            <p className="text-gray-300 mb-4">
              Providing quality agricultural inputs and services to enhance farm
              productivity and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-400">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Crop Cultivation & Management</li>
              <li className="text-gray-300">Horticulture</li>
              <li className="text-gray-300">
                Landscaping & Environmental Design
              </li>
              <li className="text-gray-300">Farm Consultation</li>
              <li className="text-gray-300">Agrochemical Handling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <MapPinIcon size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  16 Ochendu plaza, Ehimiri housing estate, Ikot ekpene road, Umuahia, Abia, Nigeria.
                </span>
              </p>
              <p className="flex items-center">
                <PhoneIcon size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">08167013441</span>
              </p>
              <p className="flex items-center">
                <MailIcon size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">banaustaagro.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-green-800 mt-12 pt-8 text-center text-gray-300">
          <p>
            © {new Date().getFullYear()} BANA-USTA AGRO INPUT ENTERPRISE. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;