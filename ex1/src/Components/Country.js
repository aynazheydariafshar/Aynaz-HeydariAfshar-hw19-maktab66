import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Country = () => {

    const dataContext = useContext(ThemeContext)

    return <div className='card-style'>
        {dataContext.dataCountry.map(item => {
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