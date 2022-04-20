import { useContext } from 'react';
import './Assests/css/App.css';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { ThemeContext, ThemeProvider } from './Components/ThemeContext';

function App() {

  //change Theme
  const {dark} = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <div className={dark ?'light-app' : 'dark-app'}>
        <Navbar />
        <Country />
      </div>
    </ThemeProvider>
  );
}

export default App;
