import './Header.css';
import nkar from './img/usersicon1.svg';
import logo from './img/logo.png';
import basket from './img/basket.svg';
import logo1 from './img/logoheart.svg'
import { Link } from 'react-router-dom';

export default function Header(props) {
    return <div>
        <nav >
            <div className='Header'>
                <div className='divHeader'>
                    <div className='divHeadr1'>
                        <Link to='/mens' className='link'>  Men's  </Link>
                        <a href="" className='link'>  Ladies  </a>
                        <a href="" className='link'>  National  </a>
                        <a href="" className='link'>  Mechanical  </a>
                        <a href="" className='link'>  Ceramic   </a>
                    </div>
                    <div>
                       <Link to='/' > <img className='logoimg' src={logo} /></Link>
                    </div>
                    <div className='divHeadr1'>
                        
                        <a href="" className='link'><img className='usericon' src={nkar} />  My Account  </a>
                        <a href="" className='link'>  <img className='logoheart' src={logo1} />  Wish List (0)  </a>
                        <a href="" className='link'>  <img className='basket' src={basket} /> ({props.x}) </a>
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
}