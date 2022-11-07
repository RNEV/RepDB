import React from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className='search'>
        <input
          placeholder='Search your collection'
          value={searchTerm}
          type='text'
          name=''
          id=''
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={() => fetchAnimals(searchTerm)}
        />
        <Autocomplete value={searchTerm} onChange={() => fetchAnimals(searchTerm)} data={[]} />
      </div>
    </div>
  );
};

export default SearchBar;
