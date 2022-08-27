import React from 'react';
import {FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
const Cont = () => {
  return (
    <div className='App'>
      <h1>Contact Us</h1>
      <p>For help or inquiries please email us or reach us via our social media handles</p>
      <h3>Email: contact@wassapviews.com</h3>
      <section className='social-icons'>
        <button 
        className='icon-btn ins'
        ><FaInstagram className='contact-icon' /></button>
        <button 
        className='icon-btn twi'
        ><FaTwitter className='contact-icon' /></button>
        <button 
        className='icon-btn fac'
        ><FaFacebook className='contact-icon' /></button>
        <button 
        className='icon-btn mai'
        ><HiOutlineMail className='contact-icon' /></button>
      </section>
    </div>
  );
}

export default Cont;