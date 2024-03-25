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
          <p>Born on 18.07.1944 in the village of Gabrov Dol, near Pernik, Bulgaria.</p>
      </div>

      <article className="articleAbout">
        <p>Member of the Union of Bulgarian Artists. He has been participating in group exhibition since 1967. He realized over 20 single exhibitions in the period 1971 until today.</p>

        <p>I am an artist based in Bulgaria and over the years of my creative experience I have followed a long path – a winding exploration of abstract art and its borders. Sometimes I imagine that all my artworks are landscapes, though emotional landscapes, which I visualize as a long, almost geological evolution of emotional processes. Sometimes the picture would present a peaceful sea embracing the endless depth of the clear sky of a calm mind, sometimes it would present an eruption of the forces born deep into the depths of the human soul. But more often than not, these worlds unveil slowly, as the contact with them becomes more and more intimate. While painting these emotional landscapes, I neither try to expose „the true nature“ of emotions, nor to present them beautifully - my struggle is to present them just as they happened to be in a particular moment.</p>

        <h3>SOLO EXHIBITIONS</h3>

        <ul>
            <li>2020 – The Union of Bulgarian Artists (UBA) – Raiko Alexiev Gallery</li>
            <li>2016 – The Union of Bulgarian Artists (UBA) - Shipka 6 Gallery, Sofia, Bulgaria</li>
            <li>2011 – Ikar Gallery, Sofia, Bulgaria</li>
        </ul>
      </article>
    </main>

  )

}

export default AboutPage;
