import {useState} from 'react'
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import NewItem from '../../components/newItem/NewItem';
import Password from '../../components/password/Password'
import './home.scss'

const Home = () => {

    const [box, setBox] = useState([
      {id: 1, item: 'Gmail', password: 'qwerty123'},
      {id: 2, item: 'Facebook', password: 'qwerty123'},
      {id: 3, item: 'GitHub', password: 'qwerty123'},
    ])

    const createItem = (newBox) => {
      setBox([...box, newBox])
      setModal(false)
    }

    const removeBox = (boxes) => {
      setBox(box.filter(box => box.id !== boxes.id))
    }

    const [modal, setModal] = useState (false)


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
           <Password remove={removeBox} number={index + 1} box={box} key={box.id} /> 
        )}
      </div>
  </div>
  )
}

export default Home