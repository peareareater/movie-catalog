import { ChangeEvent } from 'react';

type InputProps = {
    value: string;
    onChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };

    return <input className="input" value={props.value} onChange={handleChange} />;
};
