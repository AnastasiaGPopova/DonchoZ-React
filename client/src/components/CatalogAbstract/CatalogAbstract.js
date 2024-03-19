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
    <main>
      <div className={styles.catalogContainer}>
      {paintingsAbstract.map((x) => (<SinglePainting key={x._id} {...x} />))}
      </div>
    </main>

  )

}

export default CatalogAbstract;
