import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Country = () => {

    const [dataCountry , setdataCountry] = useState([])

    useEffect(() => {
       axios.get('/json/Countries.json')
        .then(res => setdataCountry(res.data))
    }, [dataCountry])
    console.log(dataCountry)

    return <div>
        {dataCountry.map(item => <p>{item.name}</p>)}
    </div>;
}


export default Country;