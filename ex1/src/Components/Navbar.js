import React, { useContext , useState} from 'react';
import {FaMoon , FaSun , FaSearch} from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {

    //change Theme
    const {dark , toggleDark} = useContext(ThemeContext)
    const [query, setQuery] = useState("")
    const dataContext = useContext(ThemeContext)

    //filter serach box
   


    return <>
        <div className={ dark ? 'navbar dark-nav' : 'navbar light-nav'}>
            <h3>Where is the World ?</h3>
            <div>
                {dark ? <FaMoon /> : <FaSun />}
                <button onClick={e => toggleDark(e,dark)}>{dark ? 'Dark Mode' : 'Light Mode'}</button>
            </div>
        </div>
        <div>
            <div className={dark ? 'search s-dark' : 'search s-light'}>
                <FaSearch className='icon-search'/>
                <input 
                    type='text' 
                    name='search' 
                    placeholder='Search for a Country'
                    onChange={e => setQuery(e.target.value)}
                />
                <div className={dark ? 'search-data search-dark' : 'search-data search-light'}>
                    {dataContext.dataCountry?.map((item,index) => {
                        return <Link className='link-search' to={`/${item.alpha3Code}`}>{item.name}<br/></Link>
                    })}
                </div>
            </div>
        </div>
        <Outlet />
    </>
}


export default Navbar;