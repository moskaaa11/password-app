import {useState} from 'react'
import { Link } from 'react-router-dom';
import './registration.scss'

const Registration = () => {

  const [end, setEnd] = useState(false);
  
  const registrationSucces = async (e) => {
    e.preventDefault();
      setEnd(true);
  }

  const [newUser, setNewUser] = useState('');
  const [newMail, setNewMail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newAddr, setNewAddr] = useState('');
  const [newContr, setNewContr] = useState('');
  const [newPwd, setNewPwd] = useState('');

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
              <input 
              className='registration__input' 
              type="text"  
              placeholder="moskaaa11"
              onChange={(e) => setNewUser(e.target.value)} 
              value={newUser} 
              required/>
              <label className='registration__label' >Email</label>
              <input 
              className='registration__input'  
              type="email" 
              placeholder="john@gmail.com" 
              onChange={(e) => setNewMail(e.target.value)} 
              value={newMail} 
              required/>
              <label className='registration__label' >Phone</label>
              <input 
              className='registration__input' 
              type="text"  
              placeholder="+38(091)123-12-12" 
              onChange={(e) => setNewPhone(e.target.value)} 
              value={newPhone} 
              required/>
            </div>
            <div className='registration__box'>
              <label className='registration__label' >Password</label>
              <input 
              className='registration__input' 
              type="password" 
              placeholder='password'
              onChange={(e) => setNewPwd(e.target.value)} 
              value={newPwd}  
              required/>
              <label className='registration__label' >Adress</label>
              <input 
              className='registration__input' 
              type="text"  
              placeholder="Brooklyn str, 234 Goopy Yd, NY" 
              onChange={(e) => setNewAddr(e.target.value)} 
              value={newAddr} 
              required/>
              <label className='registration__label' >Country</label>
              <input 
              className='registration__input' 
              type="text"  
              placeholder="USA" 
              onChange={(e) => setNewContr(e.target.value)} 
              value={newContr} 
              required/>
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