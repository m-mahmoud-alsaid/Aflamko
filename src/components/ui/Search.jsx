import { Search } from 'lucide-react';

function SearchBar({ handleSearch }) {

    return (
        <label className='text-secondary-text bg-[#0f1113] rounded-4xl relative pt-2 pb-2 pl-4 border-3 border-border'>
            <Search className='absolute right-4' />
            <input
                className='w-full h-5 outline-none'
                placeholder='Search movies...'
                onChange={handleSearch} />
        </label>
    )
}

export default SearchBar