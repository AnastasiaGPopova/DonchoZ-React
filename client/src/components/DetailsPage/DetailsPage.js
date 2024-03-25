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
      }, [paintingsId,setcurrentArray, setHistoryPath, paintingsAbstract, paintingsHorizonts,paintingsOthers, isChanged, setLoading, navigate]);


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
          setIsChanged(prevIndex)
          navigate(`/paintings/${currentArray[prevIndex]._id}/${prevIndex}`);
        } else if (xRelativeToImage  > (3 * width) / 4) {
          // Clicked on the right side
          const nextIndex = currentIndex < currentArray.length - 1 ? currentIndex + 1 : 0;
          setIsChanged(nextIndex)
          navigate(`/paintings/${currentArray[nextIndex]._id}/${nextIndex}`);
        } else if (yRelativeToImage  < height  / 4 || yRelativeToImage  > (3 * height) / 4) {
          // Clicked on the top or bottom side
          navigate(`/${historyPath}`);
        }
      };

      //---------- Mouse Move------------
      const handleMouseMove = (event) => {
        const imageContainer = document.querySelector(`.${styles.imageContainer}`);
        const rect = imageContainer.getBoundingClientRect();
        const xRelativeToContainer = event.clientX - rect.left;
        const yRelativeToContainer = event.clientY - rect.top;
    
        if (xRelativeToContainer <= rect.width / 4 || xRelativeToContainer >= (3 * rect.width) / 4) {
            imageContainer.style.cursor = "ew-resize"; // Horizontal resize cursor
        } else if (yRelativeToContainer <= rect.height / 4 || yRelativeToContainer >= (3 * rect.height) / 4) {
            imageContainer.style.cursor = "ns-resize"; // Vertical resize cursor
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


  return (
    <main>
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
              <img className={styles.image} src={currentPainting.imageUrl} alt=""/>
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
