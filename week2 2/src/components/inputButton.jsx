import React from 'react';

const InputButton = ({ type, defaultValue, value, onChange }) => {
    return (
        <input
            type={type}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
        />
    );
};

export default InputButton;
