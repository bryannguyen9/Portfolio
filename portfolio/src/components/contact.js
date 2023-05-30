import React, { useState } from 'react';

function Contact() {
  const contactContent = {
    title: 'Contact Me',
    subtitle: 'Feel free to reach out to me!',
    items: [
      {
        title: 'Email',
        value: <a href="mailto:bryannguyen9@yahoo.com">bryannguyen9@yahoo.com</a>
      },
      {
        title: 'Phone (Mobile)',
        value: <a href="tel:+17146517880">(714) 651-7880</a>
      },
      {
        title: 'LinkedIn',
        value: <a href="https://www.linkedin.com/in/bryannguyen9/">bryannguyen9</a>
      }
    ]
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <contact>
      <h2>{contactContent.title}</h2>
      <h3>{contactContent.subtitle}</h3>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && <p className="error-message">Name is required.</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error-message">Invalid email address.</p>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <nav>
        <ul>
          {contactContent.items.map((item, index) => (
            <li key={index}>
              {item.title}
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </nav>
    </contact>
  );
}

export default Contact;
