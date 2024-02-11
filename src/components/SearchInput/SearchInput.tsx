import { ChangeEvent, useContext } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { MovieApiContext } from '../../context/MovieApiContext';
import { Input } from '../Input';

export const SearchInput = () => {
    const { setQuery, query } = useContext(MovieApiContext);

    return (
        <div className="header__input">
            <Input value={query} onChange={setQuery} />
            <SearchIcon className="input__icon" />
        </div>
    );
};
