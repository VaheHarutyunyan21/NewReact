import './App.css';
import Header from './Header';
import { Routes,Route } from 'react-router-dom';
import Mens from './Mens';
import Main from './Main';
import {NewProducts} from './NewProducts'
import { data } from './Data';
import Footer from './Footer';


function App() {
  return (
    <div className="">
      
      {<Header />}
      <Routes >
        <Route path='/' element= {<Main />}/>
        <Route path='/mens' element={<Mens />}  />
        <Route path='/NewProducts/:productid' element= {<NewProducts/>}/>
      </Routes>
      {<Footer/>}

      

    </div>
  );
}

export default App;
