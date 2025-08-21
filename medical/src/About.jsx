import React from 'react';
import Header from './Header';

function About() {
  return (
    <>
      
      <div className="min-h-screen bg-gray-50 p-8 space-y-12">
        {/* Banner Image */}
        
        {/* About Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-700">
            Welcome to <strong>TarkriBazer</strong>, your go-to online marketplace for a seamless shopping experience. 
            Our platform allows users to browse, select, and purchase products from a variety of categories, all from the comfort of their own homes.
          </p>
          <p className="text-gray-700">
            We strive to make online shopping fast, secure, and enjoyable for everyone, with excellent customer support and easy navigation.
          </p>
        </div>

        {/* Mission Section with Image */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-xl p-8">
          <img
            src="https://images.unsplash.com/photo-1581090700227-6d9e80546b6a?auto=format&fit=crop&w=800&q=80"
            alt="Mission"
            className="rounded-xl shadow-md"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to create a user-friendly e-commerce platform that connects buyers and sellers efficiently. 
              We aim to provide excellent customer service, secure payment options, and a wide range of products to cater to every need.
            </p>
          </div>
        </div>

        {/* Team Section with Images */}
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-gray-700 mb-6">
            This project was developed by a dedicated team of 5 developers, each contributing their expertise in front-end, back-end, and database management.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Aayush', role: 'Front-end Developer', img: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' },
              { name: 'Abhinav', role: 'Back-end Developer', img: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' },
              { name: 'Anish', role: 'UI/UX Designer', img: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' },
              { name: 'Khusi', role: 'Database Admin', img: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' },
              { name: 'Babita', role: 'Project Manager', img: 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-2 shadow-md" />
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Showcase Section */}
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
          <p className="text-gray-700 mb-4">
            Our platform hosts a wide range of products from various categories. Here are some examples:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1606813903749-0f8d7a9d93c6?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1567016432779-c07baf7222b4?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1598032890620-9b4d2a8e6e5e?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1616628186881-9d6ec96d00d6?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1584270354949-d7d0f4b2ffb2?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1556912167-f556f1f39b2f?auto=format&fit=crop&w=400&q=80'
            ].map((src, idx) => (
              <img key={idx} src={src} alt={`Product ${idx + 1}`} className="w-full h-48 object-cover rounded-xl shadow-md" />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-700">
            We value feedback and suggestions from our users. Feel free to reach out to our team via email or our support page. 
            Your insights help us improve and deliver the best e-commerce experience possible.
          </p>
          <p className="text-gray-700">Email: support@tarkribazer.com</p>
          <p className="text-gray-700">Phone: +977 987654321</p>
        </div>
      </div>
    </>
  );
}

export default About;
