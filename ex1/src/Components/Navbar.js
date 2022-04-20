import React, { useContext } from 'react';
import {FaMoon , FaSun} from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {

    //change Theme
    const {dark , toggleDark} = useContext(ThemeContext)

    return <div className={ dark ? 'navbar dark-nav' : 'navbar light-nav'}>
        <h3>Where is the World ?</h3>
        <div>
            {dark ? <FaSun className='icon-theme'/> : <FaMoon />}
            <button onClick={e => toggleDark(e,dark)}>Dark Mode</button>
        </div>
    </div>;
}


export default Navbar;