import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client
  //     .create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = () => {
    if (!username || !email.includes('@') || !message) return;

    setLoading(true);

    const contact = {
      _type: 'contact',
      name: username,
      email,
      message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);

        // ✅ CLEAR the form inputs here
        setFormData({
          username: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isFormSubmitted) {
      const timer = setTimeout(() => setIsFormSubmitted(false), 3000);
      return () => clearTimeout(timer); // cleanup in case component unmounts early
    }
  }, [isFormSubmitted]);

  return (
    <>
      <h2 className="head-text">chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            taskinmubassir@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +880 1737-778252
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex onno-color">
            <input
              className="p-text ok"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
            disabled={!username || !email.includes('@') || !message}
            style={{
              backgroundColor:
                username && email.includes('@') && message
                  ? '#2430af'
                  : 'var(--primary-color)',
              cursor:
                username && email.includes('@') && message
                  ? 'pointer'
                  : 'not-allowed',
            }}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
