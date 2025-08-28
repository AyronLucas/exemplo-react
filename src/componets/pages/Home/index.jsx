import './style.css'

import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
    
            <Link to='/about'>
            <button type="button">Navegar</button>
            </Link>

        </>

    )
}

export default Home