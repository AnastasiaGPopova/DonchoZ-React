import styles from "./AboutPage.module.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';


function AboutPage() {


  return (
    <main className={styles.aboutpageMain}>
      <div>
      {/* https://drive.google.com/file/d/1clJJEKfkuiNybSZkoOTWteoRf4Gjb8-w/view?usp=drive_link */}
          <img src="https://drive.google.com/thumbnail?id=1clJJEKfkuiNybSZkoOTWteoRf4Gjb8-w&sz=w1000" alt="test"/>
      </div>
      <p>Born on 18.07.1944 in the village of Gabrov Dol, near Pernik, Bulgaria.</p>

      <article className="articleAbout">
        <p></p>

        <p></p>

      </article>
    </main>

  )

}

export default AboutPage;
