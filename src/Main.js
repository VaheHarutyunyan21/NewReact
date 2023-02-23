import './Main.css'
import {data} from './Data'
import { Link } from 'react-router-dom'
import Slideshow from './Slide';


export default function Main(props){
    

     const myList = data.map((dat)=>
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