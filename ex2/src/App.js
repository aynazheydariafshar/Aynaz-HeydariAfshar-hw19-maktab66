import { CssBaseline, Grid } from '@mui/material';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import {useState} from 'react';
import Edit from './Components/Edit';
import Footer from './Components/Footer';


function App() {

  const [webDesign, setWebDesign] = useState([])
  const [fronEnd, setFronEnd] = useState([])
  const [backEnd, setBackEnd] = useState([])
  const [edit, setEdit] = useState(false)

  const handleClick = () => setEdit(true)

  return (
    <div>
     <CssBaseline />
     <Navbar />
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 1}}>
          <Grid item xs={6} sx={{border :'1px solid rgba(0,0,0,0.1)'}}>
              <Section title="Web Design" handleClick={handleClick}/>
              <Section title="Front-End" handleClick={handleClick}/>
              <Section title="Back-End" handleClick={handleClick}/>
          </Grid>
          <Grid item xs={6} sx={{textAlign : 'center' , border :'1px solid rgba(0,0,0,0.1)'}}>
              <Edit edit={edit}/>
          </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
