import { Movie } from '../../../../types';
import { Image } from '../../../Image';

export const MovieCard = (props: Movie) => {
    const renderText = (label: string, propName: keyof Movie) => (
        <p className="text_theme_black text_size_lg">
            {label}: {props[propName]}
        </p>
    );

    return (
        <div className="movie-card">
            <div className="movie-card__image-container">
                <Image src={props.Poster} alt={props.Title} />
            </div>
            <div className='movie-card__description'>
            {renderText('Name', 'Title')}
            {renderText('Year', 'Year')}
            {renderText('imdbID', 'imdbID')}
            {renderText('Type', 'Type')}
            </div>
        </div>
    );
};
