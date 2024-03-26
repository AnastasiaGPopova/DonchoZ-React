import styles from "./CatalogAbstract.module.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { useContext } from "react";
import SinglePainting from "../SinglePainting/SinglePainting";



function CatalogAbstract() {

    const {paintingsAbstract, loading , setLoading} = useContext(PaintingsContext)


    console.log(paintingsAbstract)

  return (
    <main className={styles.CatalogMain} >
      <div className={styles.catalogContainer1}>
        <h2>Abstract series</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        qqrqerqerq</p>

         <div className={styles.galery}>
            {paintingsAbstract.map((x, index) => {
              const paintingWithIndex = { ...x, index };
              return (
                <div key={x._id} className={styles.singlePainting}>
                  <SinglePainting {...paintingWithIndex} />
                </div>
              );
            })}
          </div>

      </div>
    </main>

  )

}

export default CatalogAbstract;
