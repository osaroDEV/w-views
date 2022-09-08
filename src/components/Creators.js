import React from 'react';
import {Link} from 'react-router-dom'
// import { FaSuitcase, FaPencilAlt, FaKey, FaAddressCard, FaWhatsappSquare, FaFacebook, FaTwitter } from 'react-icons/fa';

const Creators = () => {
  return (
    <div className='App'>
      <p className='fs30 b600'>Build your personal WhatsApp contact list with WassapViews Creators</p>
      <section className='about'>
        <p className='fs20 mt100'>The easiest way to build your WhatsApp contact list, get people to save yours and also get to save thousands of contacts anywhere in the world</p>
        <Link to='/register'><button>CREATE ACCOUNT</button></Link>
        <Link to='/login'><button>LOGIN</button></Link>
      </section>
      <section>
          <p className='fs30 b600'>Save and be Saved Easily</p>
          <p className='fs20 b600 mt100'>Building a brand is hard, growing your WhatsApp audience shouldn't be</p>
          <hr className='mt100' />
          <p className='fs30 b600 mt200 lh10'>Start growing your contact list in 5 minutes</p>
          <div>
              <div className='mini-box b600 mt200'>
                  <div className='wrap left-align'>
                      <span className='green'>1. Create an Account</span>
                      <p className='mt50'>Sign up or an account with your name, email address, Whatsapp number.</p>
                  </div>
              </div>
              <div className='mini-box b600'>
                  <div className='wrap left-align'>
                      <span className='green'>2. Create your Business Card</span>
                      <p className='mt50'>Submit your brand contact information and create your customized link.</p>
                  </div>
              </div>
              <div className='mini-box b600'>
                  <div className='wrap left-align'>
                      <span className='green'>3. Start Growing</span>
                      <p className='mt50'>Start growing your contact list, our dashboard provides a rich interface to help you manage your contacts effeciently.</p>
                  </div>
              </div>
              <Link to='/register'><button>CREATE ACCOUNT</button></Link>
              <Link to='/login'><button>LOGIN</button></Link>
          </div>
      </section>
    </div>
  );
};

export default Creators;
