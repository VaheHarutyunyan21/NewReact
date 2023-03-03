import './Main.css'
import {data} from './Data'
import { Link } from 'react-router-dom'
import Slideshow from './Slide';
import { useEffect,useState } from 'react';



export default function Main(props){
    const[watch,setWatch]=useState([]);
    useEffect(()=>{
         fetch("http://localhost:5000")
        .then(res =>res.json())
        .then(res=>setWatch(res))

    },[])
     

     const myList = watch.map((dat)=>
    <div className="divData" key={dat.id}>
         <Link to={`/NewProducts/${dat.id}`} ><img className='classDtaAll' src={dat.img} /></Link> 
          <h4 className='classDtaAll' >{dat.name}</h4>
          <h2 className='classDtaAll'> Դ {dat.price}</h2> 
    <button className='classbutton' onClick={props.y}><h4>Գնել</h4></button></div>)
 

     return(
        <div className='divData1'>  
               <Slideshow />
               {myList}
               
        </div>
        
    ) 
    
} 