import styles from "./DetailsPage.module.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';
import { PaintingsContext } from "../../contexts/PaintingsContext";
import { useContext } from "react";




function DetailsPage() {
    const { paintingsId, index } = useParams();
    const navigate = useNavigate();


    const currentIndex = parseInt(index, 10);

    const [currentPainting, setCurrentPainting] = useState({});
    const [currentArray, setcurrentArray] = useState({});
    const [historyPath, setHistoryPath] = useState({});
    const { setIsChanged, loading, setLoading, paintingsAbstract, setPaintingsAbstract,
            paintingsHorizonts, setPaintingsHorizonts,
            paintingsOthers, setPaintingsOthers} = useContext(PaintingsContext)

    useEffect(() => {
        async function getCurrent() {
          setLoading(true)
          const response = await data.getItemById(paintingsId);
    
          if(response.hasOwnProperty('errors')){
            navigate('/404')
            return
          }
          console.log(response)
          setCurrentPainting(response);

                ///--------Set array-------------
                if (response.genre === "abstract"){
                    setcurrentArray(paintingsAbstract)
                    setHistoryPath('abstract')
                } else if (response.genre === "other"){
                    setcurrentArray(paintingsOthers)
                    setHistoryPath('other')
                } else if (response.genre === "horizons"){
                    setcurrentArray(paintingsHorizonts)
                    setHistoryPath('horizons')
                }

          setLoading(false)
        }
    
        getCurrent();
      }, [paintingsId,setcurrentArray, setHistoryPath, setLoading, navigate]);

      console.log(`current array`)
      console.log(currentArray)


      //------ Set up the navigation
      const handlePictureClick = (event) => {
        const { clientX, clientY } = event;
        const imageContainer = document.querySelector(`.${styles.imageContainer}`);
        const rect = imageContainer.getBoundingClientRect();
        const { width, height } = rect;
        const xRelativeToImage = clientX - rect.left;
        const yRelativeToImage = clientY - rect.top;
    
        if (xRelativeToImage  < width  / 4) {
          // Clicked on the left side
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentArray.length - 1;
          console.log(prevIndex)
          navigate(`/paintings/${currentArray[prevIndex]._id}/${prevIndex}`);
        } else if (xRelativeToImage  > (3 * width) / 4) {
          // Clicked on the right side
          const nextIndex = currentIndex < currentArray.length - 1 ? currentIndex + 1 : 0;
          navigate(`/paintings/${currentArray[nextIndex]._id}/${nextIndex}`);
        } else if (yRelativeToImage  < height  / 4 || yRelativeToImage  > (3 * height) / 4) {
          // Clicked on the top or bottom side
          navigate(`/${historyPath}`);
        }
      };

      const handleMouseMove = (event) => {
        const imageContainer = document.querySelector(`.${styles.imageContainer}`);
        const rect = imageContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;

        if (x <= rect.width / 4) {
            imageContainer.style.cursor = "w-resize";
        } else if (x >= (3 * rect.width) / 4) {
            imageContainer.style.cursor = "e-resize";
        } else {
            imageContainer.style.cursor = "auto";
        }
     };


  return (
    <main>
        <div className={styles.headerNEW}>
            <nav className={styles.navbar}>
                <h2><Link to="/">Doncho Zahariev</Link></h2>

                <p>TEST TESTTEST TESTTEST TESTTEST TESTTEST TESTTEST TEST</p>
            </nav>
        </div>
        {/* onMouseMove={handleMouseMove} */}
        <div className={styles.imageContainer} onClick={handlePictureClick} onMouseMove={handleMouseMove}>
            <img className={styles.image} src={currentPainting.imageUrl} alt=""/>
        </div>

    </main>

  )

}

export default DetailsPage;
