import React from 'react'
import './login.css'
import { useRef } from 'react'
import logo from '../../../assets/Netflix_Logo.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConf'

function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = e => {
    e.preventDefault()
    window.location = '/signup'
  }

  const signin = e => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userDetails => {
        console.log(userDetails)
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <div className="login__gradient"></div>
      <div className="login__logo">
        <img src={logo} alt="netflix logo" />
      </div>
      <div className="login__body">
        <div className="login__content">
          <div className="login__main">
            <h1>Sign In</h1>

            <form onSubmit={signin}>
              <input
                className="login__input"
                type="text"
                placeholder="Email or phone number"
                ref={emailRef}
                required
              />

              <br />
              <input
                className="login__input"
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
              <br />
              <button type="submit">Sign In</button>
              <br />
            </form>
            <div className="login__other">
              <span>New to netflix?</span>{' '}
              <a href="/signup" onClick={register}>
                Sign up now
              </a>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
