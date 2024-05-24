import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar= ()=>{
    return(
        <div className={styles.nav_container}>
            <Link to='/home'>Home</Link>
            <Link to='/peliculas'>peliculas</Link>
            <Link to='/capas'>capas</Link>
            <Link to='/acessorios'>Acessorios</Link>
        </div>
    )
}

export default Navbar