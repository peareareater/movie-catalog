import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

type PaginationProps = {
    page: number;
    setPage: (page: number) => void;
    totalResults: number;
    isLoading: boolean;
};

export const Pagination = ({ page, setPage, totalResults, isLoading }: PaginationProps) => {
    if (!totalResults || isLoading) {
        return null;
    }

    const lastPage = Math.ceil(totalResults / 10);

    const pageBack = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    };

    const pageForward = () => {
        if (page === lastPage) {
            return;
        }
        setPage(page + 1);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement> | undefined) => {
        e?.preventDefault();
        e?.stopPropagation();
        window.scrollTo(0, 0);
    };

    return (
        <div className="pagination" onClick={handleClick}>
            <a onClick={pageBack} href={`/?page=${page - 1}`}>
                <ArrowIcon />
            </a>
            {page === lastPage && (
                <a href={`/?page=${page - 2}`} onClick={() => setPage(page - 2)}>
                    {page - 2}
                </a>
            )}
            {page > 1 && (
                <a href={`/?page=${page - 1}`} onClick={pageBack}>
                    {page - 1}
                </a>
            )}
            {page !== lastPage && (
                <a href={`/?page=${page}`} className="active">
                    {page}
                </a>
            )}
            {lastPage > page + 1 && (
                <a href={`/?page=${page + 1}`} onClick={pageForward}>
                    {page + 1}
                </a>
            )}
            {page === 1 && (
                <a href={`/?page=${page + 2}`} onClick={() => setPage(page + 2)}>
                    {page + 2}
                </a>
            )}
            {lastPage >= page + 3 && <a href='#'>...</a>}
            {(lastPage >= page + 3 || page >= lastPage - 2) && (
                <a
                    href={`/?page=${lastPage}`}
                    onClick={() => setPage(lastPage)}
                    className={page === lastPage ? 'active' : ''}
                >
                    {lastPage}
                </a>
            )}
            <a onClick={pageForward} href={`/?page=${page + 1}`}>
                <ArrowIcon className="pagination__arrow-right" />
            </a>
        </div>
    );
};
