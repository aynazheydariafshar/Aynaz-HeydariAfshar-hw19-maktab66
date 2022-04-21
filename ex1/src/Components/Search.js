import React , {useContext} from 'react';
import {FaSearch} from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';


const Search = () => {

    const {dark} = useContext(ThemeContext)

    return <div className={dark ? 'search s-dark' : 'search s-light'}>
        <FaSearch className='icon-search'/>
        <input type='text' name='search' placeholder='Search for a Country'/>
    </div>;
}

export default Search;