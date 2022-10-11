import { useState} from 'react'
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import NewItem from '../../components/newItem/NewItem';
import Password from '../../components/password/Password'
import './home.scss'

const Home = () => {


    const [box, setBox] = useState(JSON.parse(localStorage.getItem('passwordArr')))

    const createItem = (newBox) => {
      localStorage.clear()
      setBox([...box, newBox])
      setModal(false)      
    }

    const removeBox = (boxes) => {
      setBox(box.filter(box => box.id !== boxes.id))
    }

    const [modal, setModal] = useState (false)

    
    localStorage.setItem('passwordArr', JSON.stringify(box))
  return (
    <div className='home__container'>
      <Modal 
        visible={modal}
        setVisible={setModal}
      >
        <NewItem create={createItem}/>
      </Modal>
      <div className='home__header'>
        <button 
        className='home__button'
        onClick={()=>setModal(true)}
        >
          Add
        </button>
        <Link to='/'>
          <button className='home__button'>Log Out</button>
        </Link>
      </div>
      <h1 className='home__title'>List of passwords</h1>
      <div className='home__box'>
        {box.map((box, index)=>
           <Password 
           remove={removeBox} 
           number={index + 1} 
           box={box} 
           key={box.id} 
           /> 
        )}
      </div>
  </div>
  )
}

export default Home