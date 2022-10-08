import {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './login.scss'


const Login = () => {

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  const userRef = useRef();
  const errRef= useRef ();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  useEffect(() => {
    userRef.current.focus()
  }, 
  []);

  useEffect(() => {
    setErrMsg('');
  }, 
  [user,pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
      setUser('');
      setPwd('');
      setSuccess(true);
  }

  return (
    <div className='login'>
      {success ? (
        <div className='login__container'>
          <h2 className='login__title'>Log In Complete</h2>
          <Link to='/Home' className='login__link'>
            Go to Home page!
          </Link>
        </div>
      ) : (
      <div className='login__container'>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1 className='login__title'>Sign In</h1>
        <form 
          onSubmit={handleSubmit}
          className='login__form'>
            <label className='form__label' htmlFor="userName">Username:</label>
            <input 
              className='form__input' 
              type="text"  
              id="userName"
              placeholder='moskaaa11'
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label className='form__label' htmlFor="password">Password:</label>
            <input   
              className='form__input'
              type="password"  
              id="password"
              placeholder='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className='login__button'>Sign In</button>
            </form>
        <p className='login__footer'>
          Need an Account?
          <Link to='/Registration' className='login__link'>
            <a href="">Sign Up</a>
          </Link>
        </p>
      </div>
      )}
    </div>
  )
}

export default Login