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
            src="goal.png"
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
              { name: 'Aayush', role: '', img: 'pfp.jpg' },
              { name: 'Abhinav', role: '', img: 'pfp.jpg' },
              { name: 'Anish', role: '', img: 'pfp.jpg' },
              { name: 'Khusi', role: '', img: 'pfp.jpg' },
              { name: 'Babita', role: '', img: 'pfp.jpg' }
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
      {
        src: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fresh Vegetables"
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?q=80&w=420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fruits"
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Grains & Rice"
      },
      {
        src: "https://media.istockphoto.com/id/1226425133/photo/various-kinds-of-dairy-products-on-a-dark-bluish-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=t7YOjQuYOhMzibtbHxtbpLxuYq4DkZgENelUv7HAIsc=",
        name: "Dairy Products"
      },
      {
        src: "https://images.unsplash.com/photo-1701190884222-a2139c70ab84?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Spices & Herbs"
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1687014520257-3b09f6668092?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Snacks"
      }
    ].map((product, idx) => (
      <div key={idx} className="text-center">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl shadow-md"
        />
        <p className="mt-2 text-gray-700 font-medium">{product.name}</p>
      </div>
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
