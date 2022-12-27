import React from 'react';

const ToDoList = ({todos, setTodos, searchTodos}) => {

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const completeTodos = (id) => {
        setTodos(todos.map(todo => {
           return todo.id === id ? {...todo, isActive: !todo.isActive } : todo
        }))
    }

    return (
        <div>
            {searchTodos.map(todo => {
                return (
                    <div key={todo.id} style={{background: todo.isActive ? 'lightgreen' : ''}} className='d-flex mt-4 justify-content-between align-content-lg-center p-3 border rounded-3 border-dark'>
                        <h3>{todo.title}</h3>
                        <div>
                            <button className={'btn btn-success'} type={'button'} onClick={()=> completeTodos(todo.id)}>Завершить</button>
                            <button className={'btn btn-danger'} type={"button"} onClick={() => deleteTodo(todo.id)}>Удалить</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ToDoList;