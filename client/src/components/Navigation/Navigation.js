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
            <img src="/images/Logo.png" alt="" className={styles.logo}/>
            <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/catalog">Catalog</Link></li>

                { isLogged ?
                 (<>
                 <li> <Link to="/create">CREATE</Link></li>
                 <li> <Link to="/myProfile">MY PROFILE</Link></li>
                 <li> <Link to="" onClick={onLogOutClick}>LOGOUT</Link></li>
                 </>)
                 :
                 (<><li> <Link to="/login">Login</Link></li>
                    <li> <Link to="/register">Register</Link></li></>)
                } 

            </ul>
        </nav>
    </div>
    )
}

export default Navigation