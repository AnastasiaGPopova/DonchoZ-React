import styles from "./LoginPage.module.css";
import * as data from '../../api/data';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {isLogged, setIsLogged} = useContext(PaintingsContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if(isLogged === true){
    navigate('/')
  }


  

 async function onLoginClick(e){
  e.preventDefault()
  
  let response = await data.login(email, password)
  console.log(response)
  setIsLogged(true)
  navigate('/')
}
  return (
    <>
      <div className={styles.hero}>

      {/* {errorMessages && (
              <div className={styles.errorMsg}>
              <h1> Error Message:</h1>
              <p>{errorMessages}</p>
            </div>
      )} */}

        <form action="" method="">
          <div className={styles.registerbox}>
            <label htmlFor="email">
              <i className="fa-solid fa-envelope" /> Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Write you email..."
              onChange={(e) => setEmail(e.target.value)}
              />
            <br />
          </div>
          <br />
          <div className={styles.registerbox}>
            <label htmlFor="password">
              <i className="fa-solid fa-lock" /> Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.submitButton} type="button" onClick={onLoginClick}>
            <span />
            LOGIN{" "}
          </button>
          <p className={styles.noaccount}>Don't have an account ? <Link to="/register">Create one</Link></p>
        </form>
      </div>
    </>
  );
}
export default LoginPage