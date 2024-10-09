import React from 'react';

const DeleteButton = ({ onClick }) => {
    return (
        <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
    );
};

export default DeleteButton;