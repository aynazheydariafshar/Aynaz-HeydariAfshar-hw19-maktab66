import { useContext , useEffect , useState } from 'react';
import './Assests/css/App.css';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import { ThemeContext, ThemeProvider } from './Components/ThemeContext';

function App() {

  //change Theme
  const [dark, setDark] = useState(false);

  //toggle theme
  const toggleDark = (e, dark2) => {
    let dark = !dark2
    setDark(dark)
  }

  return (
    <ThemeContext.Provider value={{dark , toggleDark}}>
      <div className={dark ?'light-app' : 'dark-app'}>
        <Navbar />
        <Search />
        <Country />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
