import styles from "./GalleriesPage.module.css";
import { useNavigate, Link } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';


function GalleriesPage() {


  return (
    <main className={styles.galleriesMainPage}>
      <div>
      <h3>Online galleries:</h3>
      <Link to={`https://www.saatchiart.com/donchozahariev`}>Saatchi Art</Link>
      <Link to={`https://www.singulart.com/en/artist/doncho-zahariev-30735`}>Singulart</Link>
      </div>
    </main>


  )

}

export default GalleriesPage;