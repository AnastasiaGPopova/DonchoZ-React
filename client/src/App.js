import logo from './logo.svg';
import './App.css';
import * as data from "./api/data";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { PaintingsContext } from './contexts/PaintingsContext';


import Navigation from './components/Navigation/Navigation';
import CatalogAbstract from './components/CatalogAbstract/CatalogAbstract';
import CatalogOthers from './components/CatalogOthers/CatalogOthers';
import DetailsPage from './components/DetailsPage/DetailsPage';
import CatalogHorizons from './components/CatalogHorizons/CatalogHorizons';
import LoginPage from './components/LoginPage/LoginPage';
import CreatePage from './components/CreatePage/CreatePage';
import EditPage from './components/EditPage/EditPage';
import AboutPage from './components/AboutPage/AboutPage';
import PressPage from './components/PressPage/PressPage';
import GalleriesPage from './components/GalleriesPage/GalleriesPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import Homepage from './components/homepage/Homepage';

function App() {
  
  const [isLogged, setIsLogged] = useState(false);
  const [paintingsAbstract, setPaintingsAbstract] = useState([]);
  const [allPaintings, setAllPaintings] = useState([]);
  const [paintingsHorizonts, setPaintingsHorizonts] = useState([]);
  const [paintingsOthers, setPaintingsOthers] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);
  const [isChanged, setIsChanged] = useState(null);
  const [loading, setLoading]= useState(false)

  useEffect(() => {
    if (localStorage.getItem('authToken') !== null) {
      setIsLogged(true);

    } else {
      setIsLogged(false)
    }
  }, []);

  useEffect(() => {
    async function getAllRecords() {
      console.log(`Is triggered`)
      try {
        setLoading(true)
        const allPaints = await data.getPaintings();
        setAllPaintings(allPaints);
        setLoading(false)
        const abstractPics = allPaints.filter(x => x.genre.includes("abstract"))
        setPaintingsAbstract(abstractPics)
        const otherPics = allPaints.filter(x => x.genre.includes("other"))
        setPaintingsOthers(otherPics)
        const horizonPics = allPaints.filter(x => x.genre.includes("horizon"))
        console.log(`horizonPics`)
        setPaintingsHorizonts(horizonPics)
        console.log(horizonPics)
      } catch (error) {
        console.log(error);
      }
    }
    getAllRecords();
  }, [isChanged]);



  const contextValue = {
    setIsChanged,
    isLogged,
    setIsLogged,
    setLoading,
    loading,
    errorMessages,
    setErrorMessages,
    paintingsAbstract, setPaintingsAbstract,
    paintingsHorizonts, setPaintingsHorizonts,
    paintingsOthers, setPaintingsOthers,
    allPaintings, setAllPaintings
    }

  return (
    <>
    <PaintingsContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/abstract" element={<CatalogAbstract></CatalogAbstract>} />
        <Route path="/other" element={<CatalogOthers/>} />
        <Route path="/horizons" element={<CatalogHorizons/>} />
        <Route path="/admin/login" element={<LoginPage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/paintings/:paintingsId/:index" element={<DetailsPage/>}/>
        <Route path="/paintings/:paintingsId/edit/:index" element={<EditPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/press" element={<PressPage/>}/>
        <Route path="/online-galleries" element={<GalleriesPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>

      </Routes>
      <Navigation/>
      </PaintingsContext.Provider>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
