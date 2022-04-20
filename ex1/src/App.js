import './Assests/css/App.css';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <div className='app'>
      <ThemeProvider>
        <Navbar />
        <Country />
      </ThemeProvider>
    </div>
  );
}

export default App;
