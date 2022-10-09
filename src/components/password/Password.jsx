import {useState} from 'react'
import './password.scss'

const Password = (props,remove) => {

    const [show,setShow] = useState('password')

    const [value, setValue] = useState (`${props.box.password}`)

    const Hide = () => {
       if(show == 'password') {
        setShow('text')
       } else {
        setShow('password')
       }
    }

    const Edit = () => {
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
                value={value}
                />
            </div>
        </div>
        <div className='password__box'>
            <button className='password__button' onClick={Hide}>View</button>
            <button className='password__button'  onClick={() => props.remove(props.box)}>Delete</button>
            <button className='password__button' onClick={Edit}>Edit</button>
        </div>
    </div>
  )
}

export default Password