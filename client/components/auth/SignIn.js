import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="container">   
      <section className="section">
        <div className="box">
          <h1 className='title has-text-centered'>Sign In</h1>
          <form onSubmit={null}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input is-success" type="email" placeholder="Email" name='email'  onChange={null} value={'email'} />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input is-success" type="password" placeholder="Password" name='password'  onChange={null} value={'password'}/>
              </div>
            </div>
            
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Send</button>
                <div>
                  <br/>
                  <Link to='/register'>
                    <h2 className='has-text-centered'><u>Register here</u></h2>
                  </Link>
                  <br/>
                  {/* {error && error.response && <div> {error.response.data}</div>} */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div> 
  );
}

export default SignIn;