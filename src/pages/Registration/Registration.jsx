import {useState} from 'react'
import { Link } from 'react-router-dom';
import './registration.scss'

const Registration = () => {

  const [end, setEnd] = useState(false);
  
  const registrationSucces = async (e) => {
    e.preventDefault();
      setEnd(true);
  }

  return (
    <div className='registration'>
      {end ? ( 
        <div className='registration__container'>
          <h2 className='registration__title'>Log In Complete</h2>
          <Link to='/' className='registration__link'>
            <p>Go to Log In page!</p>
          </Link>
        </div>
      ) : (
      <div className='registration__container'>
        <h1 className='registration__title'>Registration form</h1>
        <form 
        onSubmit={registrationSucces}
        className="registration__form">
          <div className='registration__form__container'>
            <div className='registration__box'>
              <label className='registration__label' >Username</label>
              <input className='registration__input' type="text"  placeholder="moskaaa11" required/>
              <label className='registration__label' >Email</label>
              <input className='registration__input'  type="email"  placeholder="john@gmail.com" required/>
              <label className='registration__label' >Phone</label>
              <input className='registration__input' type="text"  placeholder="+38(091)123-12-12" required/>
            </div>
            <div className='registration__box'>
              <label className='registration__label' >Password</label>
              <input className='registration__input' type="password" placeholder='password' required/>
              <label className='registration__label' >Adress</label>
              <input className='registration__input' type="text"  placeholder="Brooklyn str, 234 Goopy Yd, NY" required/>
              <label className='registration__label' >Country</label>
              <input className='registration__input' type="text"  placeholder="USA" required/>
            </div>
          </div>
          <button className='registration__button'>Send</button>
        </form>
      </div>
      )}
    </div>    
  )
}

export default Registration