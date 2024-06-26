import styles from "./PressPage.module.css";
import { useNavigate, Link } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';


function PressPage() {


  return (
    <main className={styles.pressPageMain}>
      <div>
        <h3>Publications:</h3>
      <Link to={`https://www.contemporaryartcuratormagazine.com/home-2/doncho-zahariev`}>Contemporary Art Curator Magazine</Link>
      <Link to={`https://sbh.bg/bg/izlojben-kalendar-izlojbi-sbh/horizonti-izlojba-na-doncho-zahariev/8/1002`}>The Union of Bulgarian Artists (UBA)</Link>
      <Link to={`https://zapernik.com/za-pernik/37606/`}>Zapernik.com</Link>
      <Link to={`https://www.dnevnik.bg/sled5/izlojbi/2015/09/24/2616262_doncho_zahariev/`}>Dnevnik.bg</Link>
      <br></br>
      <h3>Video reports:</h3>
      <Link to={`https://www.youtube.com/watch?v=y6UERL01RRk`}>SOLO EXHIBITION in Pernik 2010 - Video</Link>
      <Link to={`https://www.youtube.com/watch?v=gkrABIIaXfo`}>SOLO EXHIBITION in Pernik 2013 - Video</Link>
      <br></br>
      {/* <h3>Online galleries:</h3>
      <Link to={`https://www.saatchiart.com/donchozahariev`}>Saatchi Art</Link>
      <Link to={`https://www.singulart.com/en/artist/doncho-zahariev-30735`}>Singulart</Link> */}

      </div>

    </main>


  )

}

export default PressPage;