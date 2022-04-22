import {useEffect , useState } from 'react';
import './Assests/css/App.css';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import { ThemeContext, ThemeProvider } from './Components/ThemeContext';
import axios from 'axios';


function App() {

  //change Theme
  const [dark, setDark] = useState(false);

  //data from json file
  const [dataCountry , setdataCountry] = useState([])

  //toggle theme
  const toggleDark = (e, dark2) => {
    let dark = !dark2
    setDark(dark)
  }

  //get data from json file
  useEffect(() => {
    axios.get('/json/Countries.json')
     .then(res => setdataCountry(res.data))
  }, [dataCountry])

  return (
    <ThemeContext.Provider value={{dark , toggleDark , dataCountry}}>
      <div className={dark ?'light-app' : 'dark-app'}>
        <Navbar />
        <Search />
        <Country />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
