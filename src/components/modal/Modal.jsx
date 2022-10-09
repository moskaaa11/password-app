import React from 'react'
import './modal.scss'

const Modal = ({children, visible, setVisible}) => {

    const rootClasses =['modal']
    if(visible) {
        rootClasses.push('active');
    }

  return (
    <div className={rootClasses.join(' ')} >
        <div className='modal__content'>
            <button className='modal__button' onClick={() => setVisible(false)}>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modal