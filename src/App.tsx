import { Header } from './components/Header';
import { SearchResultPreview } from './components/SearchResultPreview';
import { MovieApiContext } from './context/MovieApiContext';
import { useMovieApi } from './hooks/useMovieApi';
import './App.scss';
import './styles/index.scss';
import { SearchResult } from './components/SearchResult';
import { Pagination } from './components/Pagination';

function App() {
    const { filters, setQuery, totalResults, movies, resultQuery, isLoading, setPage } = useMovieApi();
    const { query } = filters;

    return (
        <main className="main">
            <MovieApiContext.Provider
                value={{
                    setQuery,
                    query,
                }}
            >
                <Header />
                <SearchResultPreview
                    isHidden={!movies?.length}
                    totalResults={totalResults}
                    searchValue={resultQuery}
                />
                <SearchResult movies={movies} isLoading={isLoading} />
                <Pagination
                    isLoading={isLoading}
                    page={filters.page}
                    setPage={setPage}
                    totalResults={totalResults}
                />
            </MovieApiContext.Provider>
        </main>
    );
}

export default App;
