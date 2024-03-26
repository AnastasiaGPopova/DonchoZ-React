import styles from "./PressPage.module.css";
import { useNavigate, Link } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';


function PressPage() {


  return (
    <main className={styles.pressPageMain}>
      <div>
      <Link to={`https://www.contemporaryartcuratormagazine.com/home-2/doncho-zahariev`}>Contemporary Art Curator Magazine</Link>
      </div>
    </main>

  )

}

export default PressPage;