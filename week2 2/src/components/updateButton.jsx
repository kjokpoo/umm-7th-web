import React from 'react';

const UpdateButton = ({ editingId, todo, editText, updateTodo, setEditingId }) => {
    return (
        editingId === todo.id ? (
            <button onClick={() => updateTodo(editingId, editText)}>
                수정 완료
            </button>
        ) : (
            <button onClick={() => setEditingId(todo.id)}>
                수정 진행
            </button>
        )
    );
};

export default UpdateButton;
