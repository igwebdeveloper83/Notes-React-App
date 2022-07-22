import React from 'react';
import { MdSearch } from 'react-icons/md';
const SearchArea = ({ handleSearchNote }) => {
    return (
          <div className='search'>
            <MdSearch className="search-icons" size='1.5em' />
            <input 
              onChange={(event) => handleSearchNote(event.target.value)}
              type='text'
              placeholder='Type to search note!'/>
          </div>
    )
}

export default SearchArea;