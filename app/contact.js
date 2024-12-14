'use client';

import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Name",
      value: "Kaliakair Municipality",
      description: "Local Government Institution"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@kaliakair.gov.bd",
      description: "Send us your query anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+880 1234-567890",
      description: "Mon to Fri 9am to 5pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "Kaliakair Municipality Office",
      description: "Kaliakair, Gazipur, Bangladesh"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Information</h1>
          <p className="mt-4 text-lg text-gray-600">Get in touch with us for any inquiries or assistance</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-700 mb-1">{info.value}</p>
              <p className="text-sm text-gray-500">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map will be embedded here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;