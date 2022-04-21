import React, { useContext } from 'react';
import {FaMoon , FaSun} from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {

    //change Theme
    const {dark , toggleDark} = useContext(ThemeContext)

    return <div className={ dark ? 'navbar dark-nav' : 'navbar light-nav'}>
        <h3>Where is the World ?</h3>
        <div>
            {dark ? <FaMoon /> : <FaSun />}
            <button onClick={e => toggleDark(e,dark)}>{dark ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    </div>;
}


export default Navbar;