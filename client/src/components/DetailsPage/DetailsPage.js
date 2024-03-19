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
        const { innerWidth, innerHeight } = window;
    
        if (clientX < innerWidth / 4) {
          // Clicked on the left side
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentArray.length - 1;
          console.log(prevIndex)
          navigate(`/paintings/${currentArray[prevIndex]._id}/${prevIndex}`);
        } else if (clientX > (3 * innerWidth) / 4) {
          // Clicked on the right side
          const nextIndex = currentIndex < currentArray.length - 1 ? currentIndex + 1 : 0;
          navigate(`/paintings/${currentArray[nextIndex]._id}/${nextIndex}`);
        } else if (clientY < innerHeight / 4 || clientY > (3 * innerHeight) / 4) {
          // Clicked on the top or bottom side
          navigate(`/${historyPath}`);
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

        <div onClick={handlePictureClick}>
            <img src={currentPainting.imageUrl} alt=""/>
        </div>

    </main>

  )

}

export default DetailsPage;
