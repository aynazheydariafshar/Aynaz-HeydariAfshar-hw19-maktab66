import React, { useState , useEffect} from 'react';
import axios from 'axios';

const Country = () => {

    const [dataCountry , setdataCountry] = useState([])

    //get data from json file
    useEffect(() => {
       axios.get('/json/Countries.json')
        .then(res => setdataCountry(res.data))
    }, [dataCountry])

    return <div className='card-style'>
        {dataCountry.map(item => {
            return (<div className='card'>
                <div className='img-div'>
                    <img src={item.flags.svg} alt='country' className='country-img'/>
                </div>    
                <div className='container'>
                    <h3>{item.name}</h3>
                    <p>{`Population : ${item.population}`}</p>
                    <p>{`Region : ${item.region}`}</p>
                    <p>{`Capital : ${item.capital}`}</p>
                </div>
            </div>
            )
            
        })}
    </div>;
}


export default Country;