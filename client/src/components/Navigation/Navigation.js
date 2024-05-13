import styles from "./Navigation.module.css";
import { useNavigate, NavLink } from "react-router-dom"; // Import NavLink for active class
import { useEffect, useState } from "react";
import * as data from "../../api/data";
import { useContext } from "react";
import { PaintingsContext } from "../../contexts/PaintingsContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Navigation() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { isLogged, setIsLogged } = useContext(PaintingsContext);

  console.log(isDropdownOpen)

  const navigate = useNavigate();

  async function onLogOutClick() {
    data.logout();
    navigate("/");
    setIsLogged(false);
  }

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsDropdownOpen(false); // Close the dropdown when a menu item is clicked
    setIsOverlayVisible(false); // Hide overlay when dropdown is closed

  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
    setIsOverlayVisible(prevState => !prevState); // Toggle overlay visibility
  };

  return (
    <div className={styles.headerNEW}>
      <nav className={styles.navbar}>
        <h2>
          <NavLink to="/" activeclassname={styles.active}>
            Doncho Zahariev
          </NavLink>
        </h2>
        <img src="/images/Logo.png" alt="" className={styles.logo} />
        <ul className={styles.largeScreen}>
          <li onClick={() => handleMenuItemClick("abstract")}>
            {" "}
            <NavLink
              to="/abstract"
              activeclassname={styles.active}
              className={activeMenuItem === "abstract" ? styles.bold : ""}
            >
              abstract series
            </NavLink>
          </li>
          <li onClick={() => handleMenuItemClick("horizons")}>
            {" "}
            <NavLink
              to="/horizons"
              activeclassname={styles.active}
              className={activeMenuItem === "horizons" ? styles.bold : ""}
            >
              horizons series
            </NavLink>
          </li>
          <li onClick={() => handleMenuItemClick("other")}>
            {" "}
            <NavLink
              to="/other"
              activeclassname={styles.active}
              className={activeMenuItem === "other" ? styles.bold : ""}
            >
              other works
            </NavLink>
          </li>
          <li onClick={() => handleMenuItemClick("press")}>
            {" "}
            <NavLink
              to="/press"
              activeclassname={styles.active}
              className={activeMenuItem === "press" ? styles.bold : ""}
            >
              press
            </NavLink>
          </li>
          <li onClick={() => handleMenuItemClick("online-galleries")}>
            {" "}
            <NavLink
              to="/online-galleries"
              activeclassname={styles.active}
              className={
                activeMenuItem === "online-galleries" ? styles.bold : ""
              }
            >
              online galleries
            </NavLink>
          </li>
          <li onClick={() => handleMenuItemClick("about")}>
            {" "}
            <NavLink
              to="/about"
              activeclassname={styles.active}
              className={activeMenuItem === "about" ? styles.bold : ""}
            >
              about
            </NavLink>
          </li>
          <li onClick={() => handleMenuItemClick("contacts")}>
            {" "}
            <NavLink
              to="/contacts"
              activeclassname={styles.active}
              className={activeMenuItem === "contacts" ? styles.bold : ""}
            >
              contacts
            </NavLink>
          </li>
          <br></br>
          <br></br>

          {isLogged ? (
            <>
              <li>
                {" "}
                <NavLink to="/create" activeclassname={styles.active}>
                  Add painting
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="" onClick={onLogOutClick}>
                  LOGOUT
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>

        <div className={styles.smallercreens}>
            <button className={styles.buttonMenu} onClick={toggleDropdown}>MENU</button>
            {isDropdownOpen ? (
                            <ul className={styles.smallercreensUL}>
                            <li onClick={() => handleMenuItemClick("abstract")}>
                                {" "}
                                <NavLink
                                to="/abstract"
                                activeclassname={styles.active}
                                className={activeMenuItem === "abstract" ? styles.bold : ""}
                                >
                                abstract series
                                </NavLink>
                            </li>
                            <li onClick={() => handleMenuItemClick("horizons")}>
                                {" "}
                                <NavLink
                                to="/horizons"
                                activeclassname={styles.active}
                                className={activeMenuItem === "horizons" ? styles.bold : ""}
                                >
                                horizons series
                                </NavLink>
                            </li>
                            <li onClick={() => handleMenuItemClick("other")}>
                                {" "}
                                <NavLink
                                to="/other"
                                activeclassname={styles.active}
                                className={activeMenuItem === "other" ? styles.bold : ""}
                                >
                                other works
                                </NavLink>
                            </li>
                            <li onClick={() => handleMenuItemClick("press")}>
                                {" "}
                                <NavLink
                                to="/press"
                                activeclassname={styles.active}
                                className={activeMenuItem === "press" ? styles.bold : ""}
                                >
                                press
                                </NavLink>
                            </li>
                            <li onClick={() => handleMenuItemClick("online-galleries")}>
                                {" "}
                                <NavLink
                                to="/online-galleries"
                                activeclassname={styles.active}
                                className={
                                    activeMenuItem === "online-galleries" ? styles.bold : ""
                                }
                                >
                                online galleries
                                </NavLink>
                            </li>
                            <li onClick={() => handleMenuItemClick("about")}>
                                {" "}
                                <NavLink
                                to="/about"
                                activeclassname={styles.active}
                                className={activeMenuItem === "about" ? styles.bold : ""}
                                >
                                about
                                </NavLink>
                            </li>
                            <li onClick={() => handleMenuItemClick("contacts")}>
                                {" "}
                                <NavLink
                                to="/contacts"
                                activeclassname={styles.active}
                                className={activeMenuItem === "contacts" ? styles.bold : ""}
                                >
                                contacts
                                </NavLink>
                            </li>
                            <br></br>
                            <br></br>
            
                            {isLogged ? (
                                <>
                                <li>
                                    {" "}
                                    <NavLink to="/create" activeclassname={styles.active}>
                                    Add painting
                                    </NavLink>
                                </li>
                                <li>
                                    {" "}
                                    <NavLink to="" onClick={onLogOutClick}>
                                    LOGOUT
                                    </NavLink>
                                </li>
                                </>
                            ) : (
                                ""
                            )}
                    </ul>
            ) : ("")}
        </div>

      </nav>

    </div>
  );
}

export default Navigation;
