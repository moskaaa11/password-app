import {useState} from 'react'
import { Link } from 'react-router-dom';
import Password from '../../components/password/Password'
import './home.scss'

const Home = () => {

    const [box, setBox] = useState([
      {id: 1, item: 'Gmail', password: 'qwerty123'},
      {id: 2, item: 'Facebook', password: 'qwerty123'},
      {id: 3, item: 'GitHub', password: 'qwerty123'},
    ])

  return (
    <div className='home__container'>
      <div className='home__header'>
        <Link to='/'>
          <button className='home__button'>Log Out</button>
        </Link>
      </div>
      <h1 className='home__title'>List of passwords</h1>
      <div className='home__box'>
        {box.map(box=>
           <Password box={box} /> 
        )}
      </div>
  </div>
  )
}

export default Home