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
    const { setIsChanged, loading, setLoading, paintingsAbstract,
            paintingsHorizonts,
            paintingsOthers, isLogged, isChanged, setAllPaintings} = useContext(PaintingsContext)
    const [zoomLevel, setZoomLevel] = useState(1); // Zoom level: 1 is default (no zoom)
    const [isZoomedIn, setIsZoomedIn] = useState(false); 

    console.log(zoomLevel)

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
      }, [paintingsId,setcurrentArray, setHistoryPath, paintingsAbstract, isLogged, paintingsHorizonts,paintingsOthers, isChanged, setLoading, navigate]);


      //------ Set up the navigation
      const handlePictureClick = (event) => {
        const imageContainer = document.querySelector(`.${styles.imageContainer}`);
        const rect = imageContainer.getBoundingClientRect();
        const xRelativeToContainer = event.clientX - rect.left;
        const yRelativeToContainer = event.clientY - rect.top;

                    // Calculate the center of the image
    const centerXzoom = rect.width / 2;
    const centerYzoom = rect.height / 2;

        // Define a range around the center for zoom cursor change
        const rangeX = 0.1 * rect.width; // 10% of the width
        const rangeY = 0.1 * rect.height; // 10% of the height
        
    
        if (
          xRelativeToContainer >= centerXzoom - rangeX &&
          xRelativeToContainer <= centerXzoom + rangeX &&
          yRelativeToContainer >= centerYzoom - rangeY &&
          yRelativeToContainer <= centerYzoom + rangeY
        ) {
            // Toggle zoom level between 1 and 2
            setZoomLevel(zoomLevel === 1 ? 2 : 1);
            // Toggle zoom state
            setIsZoomedIn(!isZoomedIn);
        } else {
            // Your existing navigation logic here
            if (xRelativeToContainer < 0.25 * rect.width) {
                // Clicked on the left side
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentArray.length - 1;
                setIsChanged(prevIndex);
                navigate(`/paintings/${currentArray[prevIndex]._id}/${prevIndex}`);
            } else if (xRelativeToContainer > 0.75 * rect.width) {
                // Clicked on the right side
                const nextIndex = currentIndex < currentArray.length - 1 ? currentIndex + 1 : 0;
                setIsChanged(nextIndex);
                navigate(`/paintings/${currentArray[nextIndex]._id}/${nextIndex}`);
            } else if (yRelativeToContainer < 0.25 * rect.height || yRelativeToContainer > 0.75 * rect.height) {
                // Clicked on the top or bottom side
                navigate(`/${historyPath}`);
            }
        }
    };
    

      //---------- Mouse Move------------
      const handleMouseMove = (event) => {
        const imageContainer = document.querySelector(`.${styles.imageContainer}`);
        const rect = imageContainer.getBoundingClientRect();
        const xRelativeToContainer = event.clientX - rect.left;
        const yRelativeToContainer = event.clientY - rect.top;
            // Calculate the center of the image
    const centerXzoom = rect.width / 2;
    const centerYzoom = rect.height / 2;

    // Define a range around the center for zoom cursor change
    const rangeX = 0.1 * rect.width; // 10% of the width
    const rangeY = 0.1 * rect.height; // 10% of the height
    
        if (xRelativeToContainer <= rect.width / 4 || xRelativeToContainer >= (3 * rect.width) / 4) {
            imageContainer.style.cursor = "ew-resize"; // Horizontal resize cursor
        } else if (yRelativeToContainer <= rect.height / 4 || yRelativeToContainer >= (3 * rect.height) / 4) {
            imageContainer.style.cursor = "ns-resize"; // Vertical resize cursor
        } else if (
      xRelativeToContainer >= centerXzoom - rangeX &&
      xRelativeToContainer <= centerXzoom + rangeX &&
      yRelativeToContainer >= centerYzoom - rangeY &&
      yRelativeToContainer <= centerYzoom + rangeY
  ) {
      // Change cursor to zoom-in or zoom-out depending on zoom level
      if (zoomLevel === 1) {
          imageContainer.style.cursor = "zoom-in";
      } else {
          imageContainer.style.cursor = "zoom-out";
      }
  } else {
      imageContainer.style.cursor = "auto"; // Default cursor
  }    
    };

    // ------- On Delete Click -----------
    async function onDeleteClick(id){
      const choice = window.confirm("Are you sure you want to delete this item?");
      if(choice === true){
          const res = await data.deletePainting(id);
          setAllPaintings(state => (state.filter(x => x._id !== id)));
          setIsChanged(res)
          navigate('/');
      }
  }


  const getImageStyle = () => {
    if (isZoomedIn) {
        return { transform: `scale(${zoomLevel})`, transition: "transform 0.25s ease-in-out" };
    } else {
        return {};
    }
};


  return (
    <main className={styles.detailsMain}>
        <div className={styles.headerNEW}>
            <nav className={styles.navbar}>
                <h2><Link to="/">Doncho Zahariev</Link></h2>

               <div className={styles.detailsInfo}>
                  <p>{currentPainting.paintingName}</p>
                  <p>{currentPainting.year}</p>
                  <p>{currentPainting.description}</p>
                </div>
            </nav>
        </div>

        <article className={styles.detailsContainer}>
          <div className={styles.imageContainer} onClick={handlePictureClick} onMouseMove={handleMouseMove}>
              <img className={styles.image} style={getImageStyle()} src={currentPainting.imageUrl} alt=""/>
          </div>
          <br></br>

          {isLogged=== true && 
            <div className={styles.buttonsDiv}>
                <button className={styles.btnedit}>
                    <Link to={`/paintings/${currentPainting._id}/edit/${index}`}
                    >
                      Edit
                    </Link>
                </button>
                <button className={styles.btndelete}
                      onClick={() => onDeleteClick(paintingsId)}>
                      Delete
                </button>
            </div>
          }  
          <br></br>  
        </article>    
    </main>

  )

}

export default DetailsPage;
