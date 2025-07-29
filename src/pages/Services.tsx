import React from 'react';
import { Sprout, Leaf, Users, Microscope, BookOpen, ShieldCheck, CheckCircleIcon, MapPinIcon, CalendarIcon } from 'lucide-react';
const Services = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative bg-cover bg-center h-[300px] flex items-center" style={{
        backgroundImage: `url('/markus-winkler-HeqXGxnsnX4-unsplash.jpg')`
      }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-xl">
                Comprehensive agricultural solutions for every farming need
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Comprehensive{' '}
              <span className="text-green-600">Agricultural Services</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              At BANA-USTA AGRO INPUT ENTERPRISE, we provide a wide range of
              services designed to support farmers and agricultural businesses
              at every stage of cultivation. Our team of experts is dedicated to
              helping you achieve optimal results through sustainable practices.
            </p>
          </div>
        </div>
      </section>
      {/* Detailed Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Crop Cultivation */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold">
                  Crop Cultivation & Management
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our crop cultivation and management services are designed to
                help farmers maximize yields while maintaining soil health and
                sustainability. We provide expert guidance throughout the entire
                growing cycle.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Soil preparation and analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Crop selection and rotation planning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Irrigation system design and management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Pest and disease management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Harvesting and post-harvest handling
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img src="/marisol-benitez-QvkAQTNj4zk-unsplash.jpg" alt="Crop cultivation" className="rounded-lg shadow-lg" />
            </div>
          </div>
          {/* Horticulture */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <img src="/natalia-gasiorowska-mj2WrUiK9tY-unsplash.jpg" alt="Horticulture" className="rounded-lg shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Sprout className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold">Horticulture</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our horticulture services focus on the cultivation of fruits,
                vegetables, and ornamental plants. We provide specialized
                knowledge and techniques to ensure healthy growth and abundant
                harvests.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Greenhouse design and management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Fruit tree cultivation and pruning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Vegetable garden planning and maintenance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Ornamental plant care and propagation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Hydroponic and aquaponic system setup
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Landscaping */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold">
                  Landscaping & Environmental Design
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our landscaping and environmental design services combine
                aesthetics with functionality to create beautiful and
                sustainable outdoor spaces. We work with both residential and
                commercial clients.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Landscape design and planning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Installation of gardens and green spaces
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Erosion control and soil conservation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Water-efficient irrigation systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Sustainable landscape maintenance
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img src="/roberto-nickson-b9dmHiTXkLk-unsplash.jpg" alt="Landscaping" className="rounded-lg shadow-lg" />
            </div>
          </div>
          {/* Farm Consultation */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <img src="/markus-spiske-nJtmd4ANdR4-unsplash.jpg" alt="Farm consultation" className="rounded-lg shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Users className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold">
                  Farm Consultation & Extension Services
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our consultation services provide expert advice tailored to your
                specific agricultural needs. We help farmers make informed
                decisions to improve productivity and profitability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Farm assessment and planning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Technical training and knowledge transfer
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Problem diagnosis and solution development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Market analysis and crop selection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">
                    Sustainable farming transition support
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Additional Services */}
          <div className="pt-12">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Additional{' '}
              <span className="text-green-600">Specialized Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Agrochemical Handling */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Microscope className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Agrochemical Handling & Application
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Safe and effective application of fertilizers, pesticides, and
                  other agricultural chemicals, with a focus on minimizing
                  environmental impact.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Soil testing and nutrient analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Precision application services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Integrated pest management
                    </span>
                  </li>
                </ul>
              </div>
              {/* Seedling Care */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Seedling Care & Germination
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Specialized techniques for nurturing seedlings and ensuring
                  successful germination for a strong start to the growing
                  cycle.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Nursery setup and management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Seedling hardening techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Transplanting guidance
                    </span>
                  </li>
                </ul>
              </div>
              {/* Disease-Resistant Propagation */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Disease-Resistant Propagation
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Methods for developing and cultivating disease-resistant plant
                  varieties to reduce crop loss and chemical dependency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Resistant variety selection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Grafting and budding techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Plant health monitoring
                    </span>
                  </li>
                </ul>
              </div>
              {/* Entrepreneurial Skills */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Entrepreneurial Skills in Agribusiness
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Training and support for developing successful agricultural
                  businesses, from planning to marketing and financial
                  management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Business plan development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Market access strategies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">
                      Financial management training
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Previous Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Our <span className="text-green-600">Previous Projects</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Explore some of our successful agricultural projects across
              Southern Nigeria. Our expertise has helped farms and communities
              achieve sustainable growth and improved productivity.
            </p>
          </div>
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Sustainable Cassava Farming Project
                  </h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>Owerri, Imo State</span>
                  </div>
                  <div className="flex items-center mb-6 text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>January 2022 - December 2022</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    We partnered with a cooperative of 50 cassava farmers to
                    implement sustainable farming practices, modern processing
                    techniques, and improved market access. The project covered
                    200 hectares of farmland.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Increased yield by 40% through improved cultivation
                        practices
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Established a modern processing facility for value-added
                        products
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Created direct market linkages with industrial buyers
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Trained 120 farmers in sustainable agricultural
                        practices
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <img src="/Adobe Express - file.jpg" alt="Cassava farming project" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2">
                <div className="h-full md:order-2">
                  <img src="/markus-spiske-9cHVqn9bBpQ-unsplash.jpg" alt="Vegetable farm project" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">
                    Urban Vegetable Farming Initiative
                  </h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>Port Harcourt, Rivers State</span>
                  </div>
                  <div className="flex items-center mb-6 text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>March 2021 - Concluded</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This project focuses on establishing sustainable urban
                    vegetable farms using space-efficient techniques. We've
                    helped create 15 urban farms serving local communities and
                    restaurants with fresh, pesticide-free produce.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Implemented vertical farming systems in limited urban
                        spaces
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Established rainwater harvesting systems reducing water
                        costs by 60%
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Created direct-to-consumer sales channels through weekly
                        markets
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Trained 75 urban residents in vegetable production
                        techniques
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Cocoa Rehabilitation and Improvement Program
                  </h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>Akure, Ondo State</span>
                  </div>
                  <div className="flex items-center mb-6 text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>August 2020 - July 2022</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    We worked with cocoa farmers to rehabilitate aging
                    plantations and implement sustainable farming practices. The
                    project covered 350 hectares of cocoa farms and involved 120
                    farming families.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Rehabilitated 350 hectares of aging cocoa plantations
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Introduced disease-resistant cocoa varieties increasing
                        yields by 35%
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Implemented integrated pest management reducing chemical
                        use by 50%
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Secured premium market access through sustainability
                        certification
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <img src="/ly-le-minh-jF3zJ1EFuNM-unsplash.jpg" alt="Cocoa farming project" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2">
                <div className="h-full md:order-2">
                  <img src="/martin-bendico-GVIuCOCjItU-unsplash.jpg" alt="Rice farming project" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">
                    Integrated Rice Farming System
                  </h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>Calabar, Cross River State</span>
                  </div>
                  <div className="flex items-center mb-6 text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>February 2021 - January 2023</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This project implemented integrated rice farming systems
                    combining rice cultivation with fish farming and vegetable
                    production. The approach maximized resource use efficiency
                    and created multiple income streams.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Developed 80 hectares of integrated rice-fish farming
                        systems
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Increased farm income by 65% through diversified
                        production
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Reduced water use by 30% through improved irrigation
                        systems
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Trained 90 farmers in integrated farming techniques
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Community Agroforestry Development
                  </h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>Uyo, Akwa Ibom State</span>
                  </div>
                  <div className="flex items-center mb-6 text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-2 text-green-600" />
                    <span>September 2019 - August 2022</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This project established sustainable agroforestry systems
                    combining timber trees, fruit trees, and annual crops. The
                    approach restored degraded land while providing short,
                    medium, and long-term income for communities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Established 120 hectares of diverse agroforestry systems
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Planted over 25,000 native and economically valuable
                        trees
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Developed value chains for agroforestry products
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        Created sustainable livelihoods for 200 community
                        members
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <img src="/funnybee-bop-GVX9NYkgmnM-unsplash.jpg" alt="Agroforestry project" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Agricultural Practices?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help you achieve
            better results and sustainable growth.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>
    </div>;
};
export default Services;