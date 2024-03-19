import styles from "./SinglePainting.module.css";
import { useNavigate, Link } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { useContext } from "react";



function SinglePainting({
    _id, paintingName, description, year, imageUrl,genre, index
})  {

    const {paintingsAbstract, loading , setLoading} = useContext(PaintingsContext)
    const navigate = useNavigate();

    console.log(paintingsAbstract)

  return (
    <div className={styles.picture}>
        <Link to={`/paintings/${_id}/${index}`}><img src={imageUrl} alt=""/></Link>
    </div>
  )

}

export default SinglePainting;
