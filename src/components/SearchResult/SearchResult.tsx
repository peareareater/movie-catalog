import { Movie } from '../../types';
import { Loader } from '../Loader';
import { MovieCard } from './components/MovieCard';

type SearchResultProps = {
    movies: Movie[];
    isLoading: boolean;
};

export const SearchResult = (props: SearchResultProps) => {
    const { movies } = props;


    if (props.isLoading) {
        return (
            <div className="main__no-result">
                <Loader />
            </div>
        );
    }

    if (!movies?.length) {
        return (
            <div className="main__no-result">
                <p className="text_theme_black text_size_xl text_align-center">
                    We couldn't find anything for your request...
                </p>
            </div>
        );
    }

    return (
        <div className="search-result">
            {movies.map((movie: Movie) => (
                <MovieCard key={movie.Poster} {...movie} />
            ))}
        </div>
    );
};
