import React from 'react';
import { FaEdit, FaDownload, FaSuitcase, FaPencilAlt, FaKey, FaAddressCard, FaWhatsappSquare, FaFacebook, FaTwitter } from 'react-icons/fa';
import FlagApp from './FlagApp'

const Home = () => {
  return (
    <div className='App'>
      <h1 className='head left-align lh10'>Need More Viewers For Your WhatsApp Status?</h1>
      <hr className='line' />
      <section className='about'>
        <p className='fs20 left-align lh15'>
          You can now grow your WhatsApp Audience and Views as You and other
          participants get to save each others contact in just one click
        </p>
        <button><FaDownload className='btn-icon' />Download</button>
        <button><FaEdit className='btn-icon' />Submit entry</button>
      </section>
      {/* <section > */}
      <table
      // className='tab'
      >
        <tr className='table-head'>
          <th className='fs20'>Benefits</th>
        </tr>
        <tr>
          <ul className='fs16'>
            <li>More popularity = More money</li>
            <li>More interesting statuses to view</li>
            <li>More sales for business owners</li>
            <li>More people get to know about you and your business</li>
            <li>If you're self employed, you can have better opportunities</li>
            <li>Helps you discover new sources of income</li>
            <li>Helps you find more interesting people like you</li>
          </ul>
        </tr>
      </table>
      {/* </section> */}
      <section>
        <p className='left-align fs42 b600'>Go Premium</p>
        <table className='table fs16 left-align'>
          <tr className='bac-gr wh-txt'>
            <th>Free</th>
            <th>Premium</th>
          </tr>
          <tr>
            <td>Name: Maximum of 8 characters</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>For personal use</td>
            <td>
              For Businesses, WhatsApp Media or TVs, Brands, Personalities etc
            </td>
          </tr>
          <tr>
            <td classsName='fs16'>Totally free</td>
            <td>You have to pay a token of ₦200 only</td>
          </tr>
          <tr>
            <td>
              All Contacts are automatically saved with a "WV" suffix eg:
              <b>Clinton WV</b>
            </td>
            <td>
              Premium plan allows spaced names and the suffix eg: <b>Clinton Stores
              WV</b>
            </td>
          </tr>
        </table>
      </section>
      <section>
        <p className='left-align fs42 b600'>Procedures</p>
        <div className='mini-box'>
        <div className='wrap'>
          <FaSuitcase className='proc-icon' />
          <h3 className='proc-title'>Select Plan</h3>
          <p className='box-para'>
            Choose between the free plan and the premium plan according to what
            best suits your needs. Remember that the premium plan has more to
            offer
          </p>
        </div>
        </div>
        <div className='mini-box'>
        <div className='wrap'>
          <FaPencilAlt className='proc-icon' />
          <h3 className='proc-title'>Fill in correct information</h3>
          <p className='box-para'>
            Fill in your correct information when submitting your contact
            information to ensure that you get the best out of our services
          </p>
          </div>
        </div>
        <div className='mini-box'>
        <div className='wrap'>
          <FaKey className='proc-icon' />
          <h3 className='proc-title'>Secure Your Password</h3>
          <p className='box-para'>
            After your successful payment, you will be given a unique password
            which will be required to download the contact file
          </p>
          </div>
        </div>
        <div className='mini-box'>
        <div className='wrap'>
          <FaAddressCard className='proc-icon' />
          <h3 className='proc-title'>Download Compiled Contracts</h3>
          <p className='box-para'>
            Come back to Download and install the contact file which will be
            uploaded by 9:00pm in a .vcf format. This contact file will also be
            saved by others
          </p>
          </div>
        </div>
      </section>
      <section className='mini-box mt400'>
        <div className='wrap'> 
        <p className='left-align fs34 b600'>Submit your name and number</p>
        <p className='left-align mt100'>
          Submit your name and number to be compiled for download by yourself
          and others
        </p>
        <form className='form'>
          <div>
            <label htmlFor='f' className='label'>
              Package Type:
            </label>
            <select type='select' className='pac-type sub-input'>
              <option value='free' className='pac-input'>
                Free
              </option>
              <option value='premium' className='pac-input'>
                Premium
              </option>
            </select>
          </div>
          <div>
            <label htmlFor='f' className='label'>
              Name:
            </label>
            <input className='sub-input' type='text' placeholder='Name'/>
          </div>
          <div>
            <label htmlFor='f' className='label'>
              Phone Number:
            </label>
            <FlagApp />
          </div>
          <button className='form-btn'>Submit</button>
        </form>
        </div>
      </section>
      <section className='mini-box-share'>
        <div className='wrap'>
          <p className='left-align b600'>Would you like to share with your friends?</p>
          <textarea className='input-share' rows={5} cols={3} style={{padding: '1rem'}}>
          Are You Tired of Getting Embarrassing WhatsApp Status Views? 😳😳🤷🏻‍♂️🤷🏻‍♂️
👉https://johndoe .com
          </textarea>
        </div>
        <div>
          <p className='b600'>Or use the share buttons below</p>
          <div>
            <FaWhatsappSquare className='share-icon'/>
            <FaFacebook className='share-icon'/>
            <FaTwitter className='share-icon'/>
          </div>
        </div>
      </section>
      <section className='mini-box-share'>
        <div className='wrap mt300'>
          <h1 className='left-align'>Blocked Contacts</h1>
          <p className='left-align b600'>Here is a list of the last 5 blocked contacts who have been found violating our rules and will therefore not be included in future compilations</p>
      <table className='mt200'>
        <tr className='tr-blocked'>
          <td className='td-blocked b600'>Name & Phone number:</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked b600'>Name & Phone number:</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked b600'>Name & Phone number:</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked b600'>Name & Phone number:</td>
        </tr>
        <tr className='tr-blocked'>
          <td className='td-blocked b600'>Name & Phone number:</td>
        </tr>
      </table>
      <hr />
        </div>
      </section>
      <section className='mini-box-share'>
      <div className='wrap mt300'>
      <h1 className='left-align'>Report Contacts</h1> 
      <p className='left-align b600'>If you think any WV contact has acted badly and you want us to look into it, kindly submit their phone number here</p>
      <input className='sub-input mt100' type='number' placeholder="Enter contact's phone number" />
      <textarea className='sub-input mt150' rows={4} cols={5} placeholder='Tell us why you are reporting this contact'></textarea>
      <button className='form-btn mt300'>Report</button>
      </div>
      </section>
      <div>
        <p className='fs34 left-align b600 mt200 lh10'>Build Your Personalized Whatsapp Audience</p>
        <p className='left-align fs20 mt100'>Check out WassapViews Creators meant for businesses like yours</p>
        <button className='form-btn mt100 btn-sm' style={{width: '80%'}}>Become a WassapViews Creator</button>
      </div>
    </div>
  );
};

export default Home;
