import styles from "./CatalogAbstract.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as data from "../../api/data";
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { useContext } from "react";
import SinglePainting from "../SinglePainting/SinglePainting";
import Spinner from "../../utils/Spinner";

function CatalogAbstract() {
  const { paintingsAbstract, loading, setLoading } = useContext(
    PaintingsContext
  );

  console.log(paintingsAbstract);

  return (
    <main className={styles.CatalogMain}>
      <div className={styles.catalogContainer1}>
        <h2>Abstract series</h2>
        <p>
          Vivid colors, bold contrasts, and emotive compositions define this
          collection. Guided by intuition, each piece explores psychological
          dynamics through stark contrasts, but also subtle harmonies. Engage
          with raw authenticity and embark on a journey of self-discovery
          through the vivid energy of abstract expressionism.
        </p>

        {/* Conditionally render the spinner only if loading is true */}
        {loading ? (
          <Spinner loading={loading}/>
        ) : (
          <div className={styles.gallery}>
            {paintingsAbstract.map((x, index) => {
              const paintingWithIndex = { ...x, index };
              return (
                <div key={x._id} className={styles.singlePainting}>
                  <SinglePainting {...paintingWithIndex} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default CatalogAbstract;
