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
    <main>
      <div className={styles.catalogContainer}>
      {paintingsOthers.map((x) => (<SinglePainting key={x._id} {...x} />))}
      </div>
    </main>

  )

}

export default CatalogOthers;
