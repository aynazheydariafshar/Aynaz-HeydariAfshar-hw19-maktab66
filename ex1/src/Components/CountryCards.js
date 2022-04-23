import React, { useContext , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const CountryCards = () => {

    const dataContex = useContext(ThemeContext)
    const dataParams = useParams()

    const findCountry = () => {
       return dataContex.dataCountry.filter(item =>{
           return item.alpha3Code === dataParams.alphaCode
        })
    }
    useEffect(() => {
        findCountry()
    }, [])
    return (
    <div>
       <h1>
           hello
       </h1>
       
    </div>
    );
}

export default CountryCards;