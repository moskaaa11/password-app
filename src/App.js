import './App.scss';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration'; 
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>} />
            <Route path="registration">
              <Route index element={<Registration/>}/>
            </Route>
            <Route path="home">
              <Route index element={<Home/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
