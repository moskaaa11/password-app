import {useState} from 'react'
import './password.scss'

const Password = (props,remove) => {

    const [show,setShow] = useState('password')

    const Hide = () => {
        setShow('text')
    }

    const Edit = () => {
        setShow('text')
    }
    
  return (
    <div className='password__container'>
        <div className='password__box'>
            <h3 className='password__text'>{props.box.id}</h3>
            <p className='password__text'>{props.box.item}</p>
            <div className='password__square'>
                <input className='password__input' type={show} value={props.box.password} />
            </div>
        </div>
        <div className='password__box'>
            <button className='password__button' onClick={Hide}>View</button>
            <button className='password__button'>Delete</button>
            <button className='password__button' onClick={Edit}>Edit</button>
        </div>
    </div>
  )
}

export default Password