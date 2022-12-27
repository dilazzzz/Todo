import './App.css';
import React, {useEffect, useMemo, useState} from "react";
import ToDoList from "./ToDolist/ToDoList";

function App() {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [title, setTitle] = useState('')
    const [searchTodo, setSearchTodo] = useState('')

 const addTodo = (e) => {
     e.preventDefault()
     const newPost = {
         id:Date.now(),
         title,
         isActive: false
     }
     setTodos([newPost,...todos])
     setTitle('')
 }

     useEffect(() => {
         localStorage.setItem('todos', JSON.stringify(todos))
     }, [todos])

    const searchTodos = useMemo(() => {
       return  todos.filter( todo => {
            return todo.title.toLowerCase().includes(searchTodo.toLowerCase())
        })
    },[todos, searchTodo])

    return (
        <div className="App">
            <h2>Список дел:</h2>
            <form action="" className='d-flex mt-4'>
                <input
                    className="form-control"
                    type="text"
                    placeholder={'Введите дело'}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button className='btn btn-success' onClick={addTodo}>Создать</button>
            </form>
            <input
                className="form-control mt-4"
                type={"text"}
                placeholder={'Поиск дела...'}
                onChange={e => setSearchTodo(e.target.value)}
            />
            ? <ToDoList searchTodos={searchTodos} todos={todos} setTodos={setTodos} />
            : <h2>Дела не найдены :(</h2>
            }
        </div>
    )
}

export default App;
