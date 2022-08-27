import React from 'react';
// import { FaSuitcase, FaPencilAlt, FaKey, FaAddressCard, FaWhatsappSquare, FaFacebook, FaTwitter } from 'react-icons/fa';

const Creator = () => {
  return (
    <div className='App'>
      <h1 className='head'>Build your personal WhatsApp contact list with WassapViews Creators</h1>
      <hr className='line' />
      <section className='about'>
        <p>
        The easiest way to build your WhatsApp contact list, get people to save yours and also get to save thousands of contacts anywhere in the world</p>
        <button>CREATE ACCOUNT</button>
        <button>LOGIN</button>
      </section>
      <section>
          <h3>Save and be Saved Easily</h3>
          <p>Building a brand is hard, growing your WhatsApp audience shouldn't be</p>
          <h3>Start growing your contact list in 5 minutes</h3>
          <div>
              <div className='mini-box'>
                  <div className='wrap'>
                      <span className='green'>1. Create an Account</span>
                      <p>Sign up or an account with your name, email address, Whatsapp number.</p>
                  </div>
              </div>
              <div className='mini-box'>
                  <div className='wrap'>
                      <span className='green'>2. Create your Business Card</span>
                      <p>Submit your brand contact information and create your customized link.</p>
                  </div>
              </div>
              <div className='mini-box'>
                  <div className='wrap'>
                      <span className='green'>3. Start growing</span>
                      <p>Start growing your contact list, our dashboard provides a rich interface to help you manage your contacts effeciently.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Creator;
