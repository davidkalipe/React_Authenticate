import React from "react";
import useLocalStorage from 'use-local-storage'

import './index.css'

function App() {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () =>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

  return (
    <div className="app" data-theme={theme}>
      <div className='login'>
          <h1>Login</h1>
          <div className='container'>
              <div className='top'>
                <i class='fab fa-google'></i>
                <i class='fab fa-facebook-square'></i>
                <i class='fab fa-linkedin'></i>
                <i class='fab fa-tweeter-square'></i>
                <i class='fab fa-github'></i>
              </div>
          <p className='divider'><span>Or</span></p>
          <form>
              <label>Email</label>
              <input type="email" placeholder='Enter your email'/>
              <label>Password</label>
              <input type="password" placeholder='Enter your password'/>
              <div className='remember'>
                  <input type='checkbox' checked='checked'/>
                  <p>Remember me</p>
              </div>
              <button>Log in</button>
          </form>
          <div className='bottom'>
              <p>Forget your password ?</p>
              <a href='/'>Reset your password</a>
          </div>
          <p className='create'>Create account</p>
          </div>
      </div>
        <div className='theme-toggle'>
            <h2>Light theme</h2>
            <i onClick={switchTheme} class='fas fa-toggle-on'></i>
        </div>
    </div>
  );
}

export default App;
