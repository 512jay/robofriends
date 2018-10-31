import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
        <input 
            name='search'
            className='pa3 ba b--green bg-lightest-blue'
            aria-label='search robots'
            type='text' 
            placeholder='search robots'
            onChange={ searchChange }
            />
        </div>
    );
};

export default SearchBox;