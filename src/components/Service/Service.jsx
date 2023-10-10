import React from "react";
import { FaLaptopMedical, FaUsers, FaTruck } from "react-icons/fa";

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className=" text-2xl md:text-4xl font-bold text-gray-200 text-center mb-6">Our Services</h1>
      <p className="text-center text-gray-300">
        Toy Zone offers exceptional services before, during, and after a
        purchase or interaction. We strive to provide excellent <br /> customer
        assistance, address inquiries, resolve issues, and ensure customer
        satisfaction.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
        <div className=" border hover:translate-y-3 transition font-serif rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <FaLaptopMedical className="text-6xl text-red-600 mb-4" />
          <h3 className="text-xl text-gray-300 font-bold mb-2">Technical Support</h3>
          <p className="text-justify text-gray-200">
            Our dedicated technical support team is available to assist you
            with any inquiries or issues you may have. We are here to ensure
            your satisfaction with our products and services.
          </p>
         
        </div>

        <div className="border hover:translate-y-3 transition font-serif rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <FaUsers className="text-6xl text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-300 mb-2">Customer Service</h3>
          <p className="text-justify text-gray-200">
            Our customer service team is dedicated to providing you with a
            delightful experience. We are here to answer your queries and
            address any concerns you may have throughout with our products and services.
          </p>
          
        </div>

        <div className="border hover:translate-y-3 transition font-serif rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <FaTruck className="text-6xl text-green-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-300 mb-2">Home Delivery</h3>
          <p className="text-justify text-gray-200">
            Enjoy the convenience of our home delivery service. We ensure your
            purchases are delivered safely and promptly to your doorstep with our products and services.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Service;
