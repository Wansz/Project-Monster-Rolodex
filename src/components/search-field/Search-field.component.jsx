import React from 'react';
import './search-field.css';


const SearchField = ({ className, placeholder, onChangeHandler }) => (
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    
)


export default SearchField;