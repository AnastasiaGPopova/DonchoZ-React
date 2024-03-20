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
      <div className={styles.catalogContainer}>
      {paintingsAbstract.map((x, index) =>{
        const paintingWithIndex = { ...x, index }
        return  <SinglePainting key={x._id} {...paintingWithIndex} />
      })}
      </div>
    </main>

  )

}

export default CatalogAbstract;
