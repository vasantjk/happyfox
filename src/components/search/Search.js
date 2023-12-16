import { IoSearchSharp } from 'react-icons/io5';
import './search.css';

export const Search = ({ search, setSearch, placeholder }) => {
  return (
    <div className='search-style'>
      <div>
        <IoSearchSharp />
      </div>
      <input
        type='search'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder={placeholder}
      />
    </div>
  );
};
