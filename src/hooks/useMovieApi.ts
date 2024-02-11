import { useEffect, useRef, useState } from 'react';
import { Filters, Movie, MoviesSearchResult } from '../types';
import axios from 'axios';

const initialFilters = { query: 'something about', page: 1 };

const apiUri = 'https://www.omdbapi.com/?apikey=8523cbb8';

export const useMovieApi = () => {
    const timer = useRef<number>();
    const controller = useRef<AbortController>();
    const [filters, setFilters] = useState<Filters>(initialFilters);
    const [isLoading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [resultQuery, setResultQuery] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);

    const { query, page } = filters;

    const updateAbortController = () => {
        controller.current?.abort();
        controller.current = new AbortController();
    };

    const setQuery = (query: string) => {
        setFilters((filters) => ({ ...filters, query }));
    };

    const setPage = (page: number) => {
        setFilters((filters) => ({ ...filters, page }));
    };

    const editUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('page', page.toString());
        window.history.replaceState({}, 'upper', window.location.origin + '?' + urlParams.toString());
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const page = Number(urlParams.get('page'));

        if (page) {
            setPage(page);
        }
    }, []);

    useEffect(() => {
        if (!query) {
            return;
        }

        updateAbortController();
        clearTimeout(timer.current);

        timer.current = window.setTimeout(() => {
            fetchMovies(controller.current?.signal);
        }, 500);
    }, [query]);

    useEffect(() => {
        fetchMovies();

        editUrl();
    }, [page]);

    const fetchMovies = async (signal?: AbortController['signal'] | undefined) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: filters.page.toString() });
            if (query) {
                params.append('s', query);
            }

            const response = await axios.get<MoviesSearchResult>(apiUri + '&' + params.toString(), {
                signal,
            });

            setMovies(response.data.Search);
            setTotalResults(Number(response.data.totalResults));
            setResultQuery(query);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        setPage,
        setQuery,
        filters,
        movies,
        totalResults,
        resultQuery,
        isLoading,
    };
};
