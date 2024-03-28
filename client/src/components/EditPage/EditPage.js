
import styles from "./EditPage.module.css";
import { useForm } from "../../hooks/useForm";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as data from "../../api/data";


function EditPage() {
    const {paintingsId, index } = useParams()
    const navigate = useNavigate()


    const {paintingValue, onChangeHandler, 
           onSubmitHandler, errorMessages,genres,
           setpaintingValue, setGenres} = useForm(index ,{}, {
    paintingName: "",
    year: "",
    imageUrl: "",
    description: "",
    genre: ""
  }, 'edit', paintingsId)



  useEffect(() => {
    async function getCurrent(){
        const response = await data.getItemById(paintingsId)
        setpaintingValue(response)
        console.log(response)
        for(const key of response.genre.split(", ")){
            setGenres(state=> ({...state, [key]: true}))
          }
    }
    getCurrent()
}, [paintingsId, setGenres, setpaintingValue])

console.log(paintingValue)

  return (
    <div className={styles.hero}>
      {errorMessages && (
      <div className={styles.errorMsg}>
          <h1> Error Message:</h1>
          <p>{errorMessages}</p>
        </div>)}

      <form>
        <div className={styles.registerbox}>
          <label className={styles.registerboxLabels} htmlFor="text"> Painting Name:
          </label>
          <input
            className={styles.registerboxInput}
            type="text"
            id="paintingName"
            name="paintingName"
            placeholder="Write you record name..."
            value={paintingValue.paintingName || ""}
            onChange={onChangeHandler}
          />
        </div>

        <div className={styles.registerbox}>
          <label className={styles.registerboxLabels} htmlFor="text"> Year:
          </label>
          <input
            className={styles.registerboxInput}
            type="text"
            id="year"
            name="year"
            placeholder="Write the year..."
            value={paintingValue.year || ""}
            onChange={onChangeHandler}
          />
        </div>

        <div className={styles.registerbox}>
          <label className={styles.registerboxLabels} htmlFor="text">Image Url:
          </label>
          <input
            className={styles.registerboxInput}
            type="text"
            id="imageurl"
            name="imageUrl"
            placeholder="Write the image url..."
            value={paintingValue.imageUrl || ""}
            onChange={onChangeHandler}
          />
        </div>

        <div className={styles.registerbox}>
          <label className={styles.registerboxLabels} htmlFor="text"> Description:
          </label>
          <textarea
            className={styles.registerboxInputDescription}
            type="text"
            id="description"
            name="description"
            placeholder="Write description..."
            value={paintingValue.description || ""}
            onChange={onChangeHandler}
          />
        </div>


        <div className={styles.registerbox2}>
          <br></br>
          <div className={styles.radioButtons}>
            <label className={styles.radioLabels} htmlFor="genre">
              Abstract
            </label>
            <input
              className="radioInput"
              type="checkbox"
              id="abstract"
              name="genre"
              onChange={onChangeHandler}
              checked={genres["abstract"] || false }
            />
          </div>

          <div className={styles.radioButtons}>
            <label className={styles.radioLabels} htmlFor="genre">
              Horizon
            </label>
            <input
              className="radioInput"
              type="checkbox"
              id="horizon"
              name="genre"
              onChange={onChangeHandler}
              checked={genres["horizon"] || false}
            />
          </div>

          <div className={styles.radioButtons}>
            <label className={styles.radioLabels} htmlFor="genre">
              Other
            </label>
            <input
              className="radioInput"
              type="checkbox"
              id="other"
              name="genre"
              onChange={onChangeHandler}
              checked={genres["other"] || false}
            />
          </div>
        </div> 



        <br/>
        <br></br>
        <button
          className={styles.submitButton}
          type="button"
          onClick={onSubmitHandler}
        >
          <span></span>EDIT RECORD{" "}
        </button>
      </form>
    </div>
  );
}

export default EditPage;
