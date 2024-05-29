import {Link} from 'react-router-dom'
import {FaCartPlus} from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar= ()=>{
    return(
        <div className={styles.nav_container}>
            <Link to='/'>Home</Link>
            <Link to='/peliculas'>peliculas</Link>
            <Link to='/capas'>capas</Link>
            <Link to='/acessorios'>Acessorios</Link>
            <a href="#"><FaCartPlus/></a>
        </div>
    )
}

export default Navbar