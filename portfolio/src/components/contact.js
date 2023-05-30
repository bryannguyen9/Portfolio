import React from 'react';

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

  return (
    <contact>
      <h2>{contactContent.title}</h2>
      <h3>
        <nav>
          <ul>
            {contactContent.items.map((item, index) => (
              <li key={index}>
                {item.label}
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </nav>
      </h3>
    </contact>
  );
}

export default Contact;
