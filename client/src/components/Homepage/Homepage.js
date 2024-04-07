import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';


function Homepage() {


  return (
    <main className={styles.homePageMain}>
      <div>
          <img src="https://drive.google.com/thumbnail?id=1xFCdzfUJ4ASxPLuka2_ardatW4JKfdmb&sz=w1000" alt="test"/>
      </div>
    </main>

  )

}

export default Homepage;

