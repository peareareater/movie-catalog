type SearchResultProps = {
    searchValue: string;
    totalResults: number;
    isHidden: boolean;
};

export const SearchResultPreview = (props: SearchResultProps) => {
    if (props.isHidden) {
        return null;
    }
    return (
        <div className="search-result-preview">
            <p className="text text_theme_black text_size_xl">
                You searched for:&nbsp;<span className="search-result-preview__query">{props.searchValue}</span>
            </p>
            <div className="text text_size_md text_theme_white search-result-preview__results">{props.totalResults} results</div>
        </div>
    );
};
