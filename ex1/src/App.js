import {useEffect , useState } from 'react';
import './Assests/css/App.css';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { ThemeContext } from './Components/ThemeContext';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';


function App() {

  //change Theme
  const [dark, setDark] = useState(false);

  //data from json file
  const [dataCountry , setdataCountry] = useState([])

  //toggle theme
  const toggleDark = (e, dark2) => {
    setDark(!dark2)
  }

  //get data from json file
  useEffect(() => {
    axios.get('/json/Countries.json')
     .then(res => setdataCountry(res.data))
  }, [dataCountry])

  return (
    <ThemeContext.Provider value={{dark , toggleDark , dataCountry}}>
      <div className={dark ?'light-app' : 'dark-app'}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/listcountry' element={<Country />}/>
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
