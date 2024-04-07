import styles from "./CatalogOthers.module.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { useContext } from "react";
import SinglePainting from "../SinglePainting/SinglePainting";



function CatalogOthers() {

    const {paintingsOthers, loading , setLoading} = useContext(PaintingsContext)


    console.log(paintingsOthers)

  return (
    <main className={styles.CatalogMain} >
      <div className={styles.catalogContainer1}>
        <h2>Other work</h2>
        <p></p>

         <div className={styles.gallery}>
            {paintingsOthers.map((x, index) => {
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

export default CatalogOthers;
