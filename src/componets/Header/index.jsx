import { Link } from 'react-router-dom'
import './style.css'

function Header(){
    return (
        <header>
        <h1>Minha primeira página React</h1>
        <nav>
          <ul>
            <Link to='/'>
              <li>Inicio</li>
            </Link>
            <Link to='About'>
              <li>Sobre</li>
            </Link>
          </ul>
        </nav>
      </header>
    )
}

export default Header