import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    appearance: none;
    background-color: white;
    width: 100%;
    border: 1px solid #1c1c1c;
    height: 32px;
    border-radius: 4px;
    padding: 2px 6px;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    outline: none;
    color: #1c1c1c;
    transition: .3s;

    &::placeholder {
        color: #ccc;
    }

    &:hover {
        box-shadow: 0 0 0 2px rgba(0, 168, 107, 0.5);
        border-color: #00A86B;
    }

    &:focus {
        box-shadow: 0 0 0 3px #00A86B;
        border-color: #00A86B;
    }
`

interface Props {
    value?: number | string;
    placeholder?: string;
    onChange?: (value: string) => void;
};

const SearchInput: React.FC<Props> = ({placeholder, onChange}) => {
    return (
        <StyledInput type="text" placeholder={placeholder} onChange={(e) => onChange ? onChange(e.target.value) : undefined} />
    );
};

export default SearchInput