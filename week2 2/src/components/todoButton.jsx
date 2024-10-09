import React from 'react';

const TodoButton = ({ onClick }) => {
    return (
        <button onClick={onClick} type="submit">
            할 일 등록
        </button>
    );
};

export default TodoButton;
