import {useState} from 'react'
import './newItem.scss'

const NewItem = ({create}) => {

    const [boxes, setBoxes] = useState({item:"", password: ""})

    const addNewPassword = (e) => {
        e.preventDefault()
        const newBox ={
            ...boxes, id: Date.now()
        }
        create(newBox)
        setBoxes({item:"", password: ""})
      }

  return (
    <form className='new__form'>
        <input className='new__input'
        type="text" 
        onChange={e => setBoxes({...boxes,item:e.target.value})}
        placeholder='Name of platform'
        value={boxes.item}
        />
        <input className='new__input'
        type="text" 
        onChange={e => setBoxes({...boxes,password:e.target.value})}
        placeholder='password'
        value={boxes.password}
        />
        <button className='new__button' onClick={addNewPassword}>Create</button>
      </form>
  )
}

export default NewItem