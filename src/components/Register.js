import React from 'react';

const Register = () => {
    return (
        <>
          <section className='mini-box mt400' >
        <div className='wrap'> 
        <form className='form'>
          <div>
            <label htmlFor='f' className='label'>
              Business Name
            </label>
            <input className='sub-input' type='text' />
          </div>
          
          <div>
            <label htmlFor='f' className='label'>
              Password
            </label>
            <input className='sub-input' type='text' />
          </div>
          <div>
            <label htmlFor='f' className='label'>
              Password
            </label>
            <input className='sub-input' type='text' />
          </div>
          <div>
            <label htmlFor='f' className='label'>
              Confirm Password
            </label>
            <input className='sub-input' type='text' />
          </div>
          
          <button className='form-btn'>Submit</button>
        </form>
        </div>
      </section>  
        </>
    )
}

export default Register;