import styles from "./Navigation.module.css";
import { useNavigate, NavLink } from "react-router-dom"; // Import NavLink for active class
import { useEffect, useState } from "react";
import * as data from '../../api/data';
import { useContext } from "react";
import { PaintingsContext } from "../../contexts/PaintingsContext";
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation(){
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const { isLogged, setIsLogged } = useContext(PaintingsContext)

    const navigate = useNavigate()

    async function onLogOutClick() {
        data.logout()
        navigate("/")
        setIsLogged(false)
    }

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <div className={styles.headerNEW}>
            <nav className={styles.navbar}>
                <h2><NavLink to="/" activeclassname={styles.active}>Doncho Zahariev</NavLink></h2>
                <img src="/images/Logo.png" alt="" className={styles.logo}/>
                <ul>
                <li onClick={() => handleMenuItemClick('abstract')}> <NavLink to="/abstract" activeclassname={styles.active} className={activeMenuItem === 'abstract' ? styles.bold : ''}>abstract series</NavLink></li>
                    <li onClick={() => handleMenuItemClick('horizons')}> <NavLink to="/horizons" activeclassname={styles.active} className={activeMenuItem === 'horizons' ? styles.bold : ''}>horizons series</NavLink></li>
                    <li onClick={() => handleMenuItemClick('other')}> <NavLink to="/other" activeclassname={styles.active} className={activeMenuItem === 'other' ? styles.bold : ''}>other works</NavLink></li>
                    <li onClick={() => handleMenuItemClick('press')}> <NavLink to="/press" activeclassname={styles.active} className={activeMenuItem === 'press' ? styles.bold : ''}>press</NavLink></li>
                    <li onClick={() => handleMenuItemClick('online-galleries')}> <NavLink to="/online-galleries" activeclassname={styles.active} className={activeMenuItem === 'online-galleries' ? styles.bold : ''}>online galleries</NavLink></li>
                    <li onClick={() => handleMenuItemClick('about')}> <NavLink to="/about" activeclassname={styles.active} className={activeMenuItem === 'about' ? styles.bold : ''}>about</NavLink></li>
                    <li onClick={() => handleMenuItemClick('contacts')}> <NavLink to="/contacts" activeclassname={styles.active} className={activeMenuItem === 'contacts' ? styles.bold : ''}>contacts</NavLink></li>
                    <br></br>
                    <br></br>

                    { isLogged ?
                        (<>
                            <li> <NavLink to="/create" activeclassname={styles.active}>Add painting</NavLink></li>
                            <li> <NavLink to="" onClick={onLogOutClick}>LOGOUT</NavLink></li>
                        </>) : ''
                    } 


                    <NavDropdown title="Menu" id="basic-nav-dropdown" className={styles.navDropdown}>
                    <NavLink to="/abstract" activeClassName={styles.active} className={activeMenuItem === 'abstract' ? styles.bold : ''}>Abstract Series</NavLink>
                    <NavLink to="/horizons" activeClassName={styles.active} className={activeMenuItem === 'horizons' ? styles.bold : ''}>Horizons Series</NavLink>
                    <NavLink to="/other" activeClassName={styles.active} className={activeMenuItem === 'other' ? styles.bold : ''}>Other Works</NavLink>
                    <NavLink to="/press" activeClassName={styles.active} className={activeMenuItem === 'press' ? styles.bold : ''}>Press</NavLink>
                    <NavLink to="/online-galleries" activeClassName={styles.active} className={activeMenuItem === 'online-galleries' ? styles.bold : ''}>Online Galleries</NavLink>
                    <NavLink to="/about" activeClassName={styles.active} className={activeMenuItem === 'about' ? styles.bold : ''}>About</NavLink>
                    <NavLink to="/contacts" activeClassName={styles.active} className={activeMenuItem === 'contacts' ? styles.bold : ''}>Contacts</NavLink>
                    </NavDropdown>

                </ul>


            </nav>
        </div>
    )
}

export default Navigation
