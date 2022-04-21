import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Country = () => {

    const [dataCountry , setdataCountry] = useState([])

    //get data from json file
    useEffect(() => {
       axios.get('/json/Countries.json')
        .then(res => setdataCountry(res.data))
    }, [dataCountry])

    return <div>
        
    </div>;
}


export default Country;