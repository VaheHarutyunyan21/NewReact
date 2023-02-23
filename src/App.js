import './App.css';
import Header from './Header';
import { Routes,Route } from 'react-router-dom';
import Mens from './Mens';
import Main from './Main';
import {NewProducts} from './NewProducts'
import { data } from './Data';
import Footer from './Footer';
import { useState } from 'react';








function App() {

  const[count,setCount]=useState(0);

  function addBasket() {
    setCount(count + 1) ;
    
  }


  return (
    <div className="">
      
      {<Header x={count} />}
      <Routes >
        <Route path='/' element= {<Main y={addBasket} />}/>
        <Route path='/mens' element={<Mens />}  />
        <Route path='/NewProducts/:productid' element= {<NewProducts y={addBasket}/>}/>
      </Routes>
      {<Footer/>}

      

    </div>
  );
}

export default App;
