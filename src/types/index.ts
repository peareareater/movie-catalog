export type Filters = {
    query: string;
    page: number;
};

export type MovieApiContextType = {
    setQuery: (query: string) => void;
    query: string;
};

export type Movie = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
};
export type MoviesSearchResult = {
    Search: Movie[];
    Response: 'True' | 'False';
    totalResults: string;
};