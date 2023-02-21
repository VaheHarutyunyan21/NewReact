import './Main.css'
import {data} from './Data'
import { Link } from 'react-router-dom'

// const data = [
//     { id:1, img:'public.img/img1.png', name:'N023A', price:"35 000",},
//     { id:2, img:'public.img/img2.png', name:'N022A', price:"25 000",},
//     { id:3, img:'public.img/img3.png', name:'N025A', price:"75 000",},
//     { id:4, img:'public.img/img4.png', name:'N810-2', price:"55 000",},
//     { id:5, img:'public.img/img5.png', name:'N044', price:"50 000",},
//     { id:6, img:'public.img/img6.png', name:'N12801', price:"140 000",},
//     { id:7, img:'public.img/img7.png', name:'N12804', price:"22 000",},
//     { id:8, img:'public.img/img8.png', name:'N12802 ', price:"250 000",},
    
// ]
export default function Main(){

     const myList = data.map((dat)=>
    <div className="divData" key={dat.id}>
         <Link to={`/NewProducts/${dat.id}`} ><img className='classDtaAll' src={dat.img} /></Link> 
          <h4 className='classDtaAll' >{dat.name}</h4>
          <h2 className='classDtaAll'> Դ {dat.price}</h2> 
    <button className='classbutton' ><h4>Գնել</h4></button></div>)


     return(
        <div className='divData1'>  
               {myList}
        </div>
        
    ) 
    
} 