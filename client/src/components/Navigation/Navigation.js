import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";
import * as data from '../../api/data';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PaintingsContext } from "../../contexts/PaintingsContext";


function Navigation(){
    const {isLogged} = useContext(PaintingsContext)

    const navigate = useNavigate()

    async function onLogOutClick() {
        data.logout()
        navigate("/")
    }

    return(
    <div className={styles.headerNEW}>
        <nav className={styles.navbar}>
        <h2>Doncho Zahariev</h2>
            <img src="/images/Logo.png" alt="" className={styles.logo}/>
            <ul>
            <li> <Link to="/">home</Link></li>
            <li> <Link to="/abstract">abstract series</Link></li>
            <li> <Link to="/horizons">horizons series</Link></li>
            <li> <Link to="/other">other works</Link></li>
            <li> <Link to="/press">press</Link></li>
            <li> <Link to="/links">links</Link></li>
            <li> <Link to="/about">about</Link></li>
            <li> <Link to="/contacts">contatcs</Link></li>

                { isLogged ?
                 (<>
                 <li> <Link to="/create">CREATE</Link></li>
                 <li> <Link to="/myProfile">MY PROFILE</Link></li>
                 <li> <Link to="" onClick={onLogOutClick}>LOGOUT</Link></li>
                 </>) : ''
                } 

            </ul>
        </nav>
    </div>
    )
}

export default Navigation