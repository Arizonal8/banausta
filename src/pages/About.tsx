import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
const About = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative bg-cover bg-center h-[300px] flex items-center" style={{
        backgroundImage: `url('/Adobe Express - file.jpg')`
      }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-xl">
                Learn more about BANA-USTA AGRO INPUT ENTERPRISE and our mission
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-green-600">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, BANA-USTA AGRO INPUT ENTERPRISE began with a
                simple mission: to support farmers with quality agricultural
                inputs and expert knowledge. What started as a small family
                business has grown into a trusted name in the agricultural
                industry.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have expanded our services to cover all
                aspects of agricultural production, from crop cultivation and
                management to landscaping and farm consultation. Our growth is
                built on the foundation of trust and excellence that we have
                established with our clients.
              </p>
              <p className="text-gray-600">
                Today, we are proud to serve a diverse clientele ranging from
                small-scale farmers to large agricultural enterprises, helping
                them achieve sustainable growth and profitability.
              </p>
            </div>
            <div>
              <img src="/danshen-somintac-OfEf_mSKq2w-unsplash" alt="Farmers in a field" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-4">
                At BANA-USTA AGRO INPUT ENTERPRISE, our mission is to empower
                farmers and agricultural businesses through innovative
                solutions, quality inputs, and expert knowledge that promote
                sustainable farming practices.
              </p>
              <p className="text-gray-600">
                We are committed to enhancing agricultural productivity while
                preserving natural resources and ensuring food security for
                future generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="h-10 w-10 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 mb-4">
                We envision a future where agriculture is both productive and
                sustainable, where farmers have access to the best resources and
                knowledge to thrive in a changing world.
              </p>
              <p className="text-gray-600">
                BANA-USTA AGRO INPUT ENTERPRISE aims to be the leading
                agricultural service provider, recognized for excellence,
                innovation, and commitment to the success of our clients and the
                health of our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Our <span className="text-green-600">Core Values</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These principles guide everything we do at BANA-USTA AGRO INPUT
              ENTERPRISE.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: <Award className="h-10 w-10 text-green-600" />,
            title: 'Excellence',
            description: 'We strive for excellence in all our products, services, and interactions.'
          }, {
            icon: <Heart className="h-10 w-10 text-green-600" />,
            title: 'Sustainability',
            description: 'We are committed to environmentally responsible practices that protect our planet.'
          }, {
            icon: <Users className="h-10 w-10 text-green-600" />,
            title: 'Integrity',
            description: 'We conduct our business with honesty, transparency, and ethical standards.'
          }, {
            icon: <Target className="h-10 w-10 text-green-600" />,
            title: 'Innovation',
            description: 'We continuously seek new and better ways to serve our clients and improve agriculture.'
          }].map((value, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Our <span className="text-green-600">Founders</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Meet the dedicated professionals behind BANA-USTA AGRO INPUT
              ENTERPRISE.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            image: '/Augusta.jpg',
            name: 'Dr Mrs Augusta',
            position: 'Founder & CEO',
            bio: 'With over 29 years of experience in agriculture, and also Snr lecturer in Michael Okpara University of agricuture Umudike our company with vision and expertise.'
         }, {
            image: '/coconut.jpg',
            name: 'Mr Banabas',
            position: 'Farm Consultant',
            bio: 'Banabas specializes in farm management and helps clients optimize their agricultural operations.'
          }].map((member, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default About;