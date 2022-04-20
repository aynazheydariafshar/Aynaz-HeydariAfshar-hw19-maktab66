import React, { useContext } from 'react';
import {FaMoon} from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
    const {dark , toggleDark} = useContext(ThemeContext)
    return <div className={ dark ? 'navbar dark' : 'navbar light'}>
        <h3>Where is the World ?</h3>
        <div>
            <FaMoon />
            <button onClick={e => toggleDark(e,dark)}>Dark Mode</button>
        </div>
    </div>;
}


export default Navbar;