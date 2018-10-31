import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
        <input 
            name='search'
            aria-label='search robots'
            className='pa3 ba b--green bg-lightest-blue'
            type='text' 
            placeholder='search robots'
            onChange={ searchChange }
            />
        </div>
    );
};

export default SearchBox;