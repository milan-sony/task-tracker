import React, { useState } from 'react';
import './ToDoApp.css';

function ToDoApp() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    // Function to add todo to the todo list
    const addTodo = () => {
        if (!todo) return; // Prevent adding empty todos

        const newTodo = {
            id: Date.now(), // Used to uniquely identify each todo item
            todoItem: todo,
            status: false
        };

        setTodos([...todos, newTodo]);
        setTodo('');
    };

    // Function to toggle the status of a todo
    const toggleTodoStatus = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
        ));
    };

    // Function to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className='container-fluid outer-div'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-6 mt-5'>
                        <h1 className='text-center mb-5 head-text'>
                            <i className="bi bi-check2-circle"></i>&nbsp;Todo List
                        </h1>
                        <h6 className='mb-3 day'>Wednesday</h6>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control todo-input"
                                placeholder="📝 Add your task"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                                onFocus={(e) => e.target.placeholder = ""}
                                onBlur={(e) => e.target.placeholder = "📝 Add your task"}
                                onKeyDown={(e) => {
                                    if(e.key === "Enter"){
                                        addTodo()
                                    }
                                }}
                            />
                            <button className="btn add-btn" type="button" onClick={addTodo}>
                                <i className="bi bi-plus-circle-fill"></i>&nbsp;ADD
                            </button>
                        </div>

                        {
                            todos.map((obj) => (
                                <div className='todos' key={obj.id}>
                                    <span
                                        onClick={() => toggleTodoStatus(obj.id)}
                                        className={obj.status ? 'todo-check-icon-change' : 'todo-check-icon'}
                                    >
                                        <i className="bi bi-check-circle-fill"></i>
                                    </span>
                                    <span className={obj.status ? 'todo-strike' : 'todo'}>
                                        {obj.todoItem}
                                    </span>
                                    <span className='todo-trash-icon' onClick={() => deleteTodo(obj.id)}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoApp;
