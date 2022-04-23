import React, { useContext } from 'react';
import {FaMoon , FaSun , FaSearch} from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import { Outlet } from "react-router-dom";


const Navbar = () => {

    //change Theme
    const {dark , toggleDark} = useContext(ThemeContext)

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
                <input type='text' name='search' placeholder='Search for a Country'/>
            </div>
        </div>
        <Outlet />
    </>
}


export default Navbar;