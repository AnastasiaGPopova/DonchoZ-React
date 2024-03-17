import logo from './logo.svg';
import './App.css';
import {useAuthUser, RequireAuth} from 'react-auth-kit'
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { PaintingsContext } from './contexts/PaintingsContext';


import Navigation from './components/Navigation/Navigation';
import Homepage from './components/Homepage/Homepage'

function App() {
  const auth = useAuthUser()
  const [isLogged, setIsLogged] = useState(false);
  const [paintingsAbstract, setPaintingsAbstract] = useState([]);
  const [paintingsHorizonts, setPaintingsHorizonts] = useState([]);
  const [paintingsOthers, setPaintingsOthers] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);
  const [isChanged, setIsChanged] = useState(null);
  const [loading, setLoading]= useState(false)

  useEffect(() => {
    if (auth()?.email !== undefined) {
      setIsLogged(true);

    } else {
      setIsLogged(false)
    }
  }, [auth]);


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
    paintingsOthers, setPaintingsOthers
    }

  return (
    <>
    <PaintingsContext.Provider value={contextValue}>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />

      </Routes>
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
