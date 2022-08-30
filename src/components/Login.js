import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <>
          <div className='App full-height'>
          <section className='mini-box mt400 user-box' >
        <div className='wrap'> 
        <form className='form'>
          <div>
            <label htmlFor='f' className='label b400' style={{fontWeight: 400}}>
              Email
            </label>
            <input className='sub-input' type='text' />
          </div>
          <div>
            <label htmlFor='f' className='label' style={{fontWeight: 400}}>
              Password
            </label>
            <input className='sub-input' type='text' />
          </div>
          <div className='user-rem-flex'>
            <input type='checkbox' className='mr50 mt100' />
            <p>Remember me</p>
          </div>
          <div className='user-bottom-flex mt100'>
            <p className='fs14 b600 green mr50'>Forgot your password?</p>
            <button style={{margin: 0, fontSize: '.75rem'}}>LOG IN</button>
          </div>
        </form>
        </div>
      </section>  
        </div> 
        <div>
          <p>Don't have an account?</p>
          <Link to='/register'>Register</Link>
        </div>
        </>
    )
}

export default Login;