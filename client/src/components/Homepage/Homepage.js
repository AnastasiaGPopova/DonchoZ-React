import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';


function Homepage() {


  return (
    <main className={styles.homePageMain}>
      <div>
          <img src="https://drive.google.com/thumbnail?id=1uShljueie9gG8qZsyBjpptpg0R_vuTRN&sz=w1000" alt="test"/>
      </div>
    </main>

  )

}

export default Homepage;

