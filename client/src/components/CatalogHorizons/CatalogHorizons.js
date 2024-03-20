import styles from "./CatalogHorizons.module.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { useContext } from "react";
import SinglePainting from "../SinglePainting/SinglePainting";



function CatalogHorizons() {

    const {paintingsHorizonts, loading , setLoading} = useContext(PaintingsContext)
    console.log(paintingsHorizonts)

  return (
    <main className={styles.catalogMain}>
      <div className={styles.catalogContainer}>
      {paintingsHorizonts.map((x, index) =>{
        const paintingWithIndex = { ...x, index }
        return  <SinglePainting key={x._id} {...paintingWithIndex} />
      })}
      </div>
    </main>

  )

}

export default CatalogHorizons;
