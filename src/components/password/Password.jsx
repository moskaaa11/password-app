import {useState} from 'react'
import './password.scss'

const Password = (props) => {

    const [show,setShow] = useState('password')

    const [inValue, setInValue] = useState (`${props.box.password}`)

    const Hide = () => {
       if(show == 'password') {
        setShow('text')
       } else {
        setShow('password')
       }
    }
    
    
  return (
    <div className='password__container'>
        <div className='password__box'>
            <p className='password__text'>{props.number}</p>
            <p className='password__text'>{props.box.item}</p>
            <div className='password__square'>
                <input className='password__input' 
                type={show} 
                value={inValue}
                />
            </div>
        </div>
        <div className='password__box'>
            <button className='password__button' onClick={Hide}>View</button>
            <button className='password__button'  onClick={() => props.remove(props.box)}>Delete</button>
        </div>
    </div>
  )
}

export default Password