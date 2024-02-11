import { useState } from 'react';
import PlaceholderImage from '../../images/image-placeholder.png';

type ImageProps = {
    src: string;
    alt?: string;
};

export const Image = (props: ImageProps) => {
    const [isError, setError] = useState(false);

    const src = isError ? PlaceholderImage : props.src;

    return <img {...props} src={src} onError={() => setError(true)} />;
};
