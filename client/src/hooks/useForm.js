import { useState } from "react";
import { useContext } from "react";
import {PaintingsContext } from "../contexts/PaintingsContext";
import { useNavigate } from "react-router-dom";
import * as data from "../api/data";



////Original

export const useForm = (initialGenrs, initialpaintingValue, command, paintingID, index) =>{
  const navigate = useNavigate()
  const {setErrorMessages, setAllPaintings, setIsChanged, errorMessages} = useContext(PaintingsContext)
  const [paintingValue, setpaintingValue] = useState(initialpaintingValue);
  const [genres, setGenres] = useState(initialGenrs);



  const onChangeHandler = (e) => {
      setpaintingValue((state) => ({ ...state, [e.target.name]: e.target.value }));
      console.log(e.target.id)
      console.log(e.target.checked)
      setGenres((state) => ({ ...state, [e.target.id]: e.target.checked }));
    };
  

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      let realGenre = [];
  
      for (const key of Object.keys(genres)) {
        console.log(genres.key);
        if (genres[key] === true) {
          realGenre.push(key);
        }
      }
      realGenre = realGenre.join(", ");
  
      const body = {
        paintingName: paintingValue.paintingName,
        year: paintingValue.year,
        imageUrl: paintingValue.imageUrl,
        description: paintingValue.description,
        genre: realGenre,
      };
  
      console.log(body)
  
      let response
      if(command === "create"){
          response = await data.createPainting(body);

      } else if (command === "edit")  {
          response = await data.editRecord(paintingID, body)

      }      
  
      if (response.hasOwnProperty("errors")) {
        setErrorMessages(response.message.join(", "));
        setTimeout(()=> {
          setErrorMessages(null)
        },3000)
      } else {
        setAllPaintings(state => [...state, response]);
        setErrorMessages(null)
        setIsChanged(response)
        if(command === "create"){
          navigate("/");
      } else if (command === "edit")  {
          //navigate(`/paintings/${paintingID}/${index}`)
      }    
      }
    };

    return {
      paintingValue,
      genres,
      onChangeHandler,
      setpaintingValue,
      setGenres,
      errorMessages,
      onSubmitHandler
    }


}