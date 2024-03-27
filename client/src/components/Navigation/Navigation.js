import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as data from '../../api/data';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PaintingsContext } from "../../contexts/PaintingsContext";


function Navigation(){
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const {isLogged, setIsLogged} = useContext(PaintingsContext)

    const navigate = useNavigate()

    async function onLogOutClick() {
        data.logout()
        navigate("/")
        setIsLogged(false)
    }

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
      };

      console.log(activeMenuItem)
    return(
    <div className={styles.headerNEW}>
        <nav className={styles.navbar}>
        <h2><Link to="/">Doncho Zahariev</Link></h2>
            <img src="/images/Logo.png" alt="" className={styles.logo}/>
            <ul>
            <li> <Link to="/abstract" className={activeMenuItem === 'abstract' ? 'bold-a' : ''} onClick={() => handleMenuItemClick('abstract')}>abstract series</Link></li>
            <li> <Link to="/horizons">horizons series</Link></li>
            <li> <Link to="/other">other works</Link></li>
            <li> <Link to="/press">press</Link></li>
            <li> <Link to="/links">online galleries</Link></li>
            <li> <Link to="/about">about</Link></li>
            <li> <Link to="/contacts">contatcs</Link></li>
            <br></br>
            <br></br>

                { isLogged ?
                 (<>
                 <li> <Link to="/create">Add painting</Link></li>
                 <li> <Link to="" onClick={onLogOutClick}>LOGOUT</Link></li>
                 </>) : ''
                } 

            </ul>
        </nav>
    </div>
    )
}

export default Navigation