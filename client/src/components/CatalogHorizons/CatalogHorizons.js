import styles from "./CatalogHorizons.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as data from "../../api/data";
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { useContext } from "react";
import SinglePainting from "../SinglePainting/SinglePainting";
import Spinner from "../../utils/Spinner";

function CatalogHorizons() {
  const { paintingsHorizonts, setPaintingsHorizonts, loading, setLoading, isChanged } = useContext(
    PaintingsContext
  );

  useEffect(() => {
    async function getAllRecords() {
      console.log(`Is triggered`)
      try {
        setLoading(true)
        const allPaintsHorizonts = await data.getPaintingsByGanre({item:"horizon"});
        setPaintingsHorizonts(allPaintsHorizonts)
        console.log(`Paintings Horizons`)
        console.log(allPaintsHorizonts)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getAllRecords();
  }, [isChanged]);
  
  console.log(paintingsHorizonts);

  return (
    <main className={styles.CatalogMain}>
      <div className={styles.catalogContainer1}>
        <h2>Horizons series</h2>
        <p>
          Experience the tranquil allure of abstract horizons with a mesmerizing
          collection of paintings. Embracing bold minimalism and a deep color
          palette, each piece captivates with its peaceful landscapes or
          seascape vistas. Rejecting realism, the artist delves into the
          abstract nuances of light, invoking emotional depth and
          contemplation. Explore the profound impact of these artworks, where
          simplicity meets profundity in a symphony of color and form exploring
          the abstract features of the light as an emotional trigger.
        </p>

        {/* Conditionally render the spinner only if loading is true */}
        {loading ? (
          <Spinner loading={loading}/>
        ) : (
          <div className={styles.gallery}>
            {paintingsHorizonts.map((x, index) => {
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

export default CatalogHorizons;