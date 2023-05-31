import React, { useState } from 'react';
import '../styles/contact.css';
import '../styles/tailwind.css';

function Contact() {
  const contactContent = {
    title: 'Contact Me',
    subtitle: 'Feel free to reach out to me!',
    items: [
      {
        title: 'Email: ',
        value: <a href="mailto:bryannguyen9@yahoo.com">bryannguyen9@yahoo.com</a>,
      },
      {
        title: 'Phone (Mobile): ',
        value: <a href="tel:+17146517880">(714) 651-7880</a>,
      },
      {
        title: 'LinkedIn: ',
        value: <a href="https://www.linkedin.com/in/bryannguyen9/">bryannguyen9</a>,
      },
    ],
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formTouched, setFormTouched] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!email || !validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (name && email && validateEmail(email)) {
      // Perform further actions with the form data
      console.log('Name: ', name);
      console.log('Email: ', email);
      console.log('Message: ', message);

      // Clear the input areas and set formSubmitted to true
      setName('');
      setEmail('');
      setMessage('');
      setFormSubmitted(true);
      setFormTouched(false);
    } else {
      setFormTouched(true);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <contact className=" py-10">
      <h2 className="font-bold text-3xl mt-10">{contactContent.title}</h2>
      <h3 className="font-semibold text-xl mt-2 mb-3">{contactContent.subtitle}</h3>
      <div className="flex justify-center">
        <div className="w-1/6"></div> {/* Empty div for left spacing */}
        <hr className="w-3/4 border-t-2 border-gray-300 opacity-50 mt-5 mb-10" />
        <div className="w-1/6"></div> {/* Empty div for right spacing */}
      </div>
      <div className="bg-gray-200 max-w-lg mx-auto bg-dark rounded-lg shadow-lg p-6">
        <form className="mt-4" onSubmit={handleFormSubmit}>
        <h3 className="font-semibold text-xl mb-4">Contact Form</h3>
          <div className="mb-4">
            <label className="block" htmlFor="name">Name:</label>
            <input
            className={`form-input border rounded-md shadow-md ${
              nameFocused && !name ? 'shadow-lg border-red-500' : ''
            }`}
            
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameFocused(true)}
            onFocus={() => setNameFocused(false)}
            required
            />
            {nameError && <p className="error-message">Name is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block" htmlFor="email">Email:</label>
            <input
              className={`form-input border rounded-md shadow-md ${
                emailFocused && (!email || !validateEmail(email)) ? 'shadow-lg border-red-500' : ''
              }`}
              
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailFocused(true)}
              onFocus={() => setEmailFocused(false)}
              required
            />
            {emailError && <p className="error-message">Invalid email address.</p>}
          </div>

          <div className="mb-4">
            <label className="block" htmlFor="message">Message:</label>
            <textarea
              className={`form-input border rounded-md shadow-md w-full ${
                messageFocused && !message ? 'shadow-lg border-red-500' : ''
              }`}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setMessageFocused(true)}
              onFocus={() => setMessageFocused(false)}
              required
            />
          </div>

          <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105" type="submit">Submit</button>
        </form>
      </div>
      
      {formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Form Successfully Submitted</h3>
            <p>Your form has been successfully submitted.</p>
            <button
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setFormSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {formTouched && !formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Validation Error</h3>
            <p>Please fill in all the required fields correctly.</p>
            <button
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setFormTouched(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <nav className="py-6 mt-10">
        <ul className="font-bold contact-list flex justify-center space-x-10">
          {contactContent.items.map((item, index) => (
            <li key={index}>
              {item.title}
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center">
        <div className="w-1/6"></div> {/* Empty div for left spacing */}
        <hr className="w-3/4 border-t-2 border-gray-300 opacity-50 mt-4 mb-14" />
        <div className="w-1/6"></div> {/* Empty div for right spacing */}
      </div>
    </contact>
  );
}

export default Contact;
