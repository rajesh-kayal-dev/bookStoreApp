import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can handle form submission here (e.g., send data to backend)
      console.log('Form submitted:', formData);
      // Clear form fields
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white">
      <form className="max-w-md w-full mx-auto p-4 bg-slate-500 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
            } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm`}
            placeholder="Enter your Name"
          />
          {formErrors.name && <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
            } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm`}
            placeholder="Enter your email"
          />
          {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
            } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm`}
            rows={4}
            placeholder="Type your message"
          ></textarea>
          {formErrors.message && <p className="text-sm text-red-500 mt-1">{formErrors.message}</p>}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem!</p>
      </div>
    </div>
  );
};

export default ContactForm;
