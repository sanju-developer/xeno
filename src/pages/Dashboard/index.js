import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import Layout from '../../components/Layout';
import Searchbar from '../../components/Searchbar';
import TodoCard from '../../components/Card/TodoCard';
import CompletedCard from '../../components/Card/CompletedCard';
import AddTodo from '../../components/Modals/AddTodo';
import { todoFormConstant } from '../../Constants';
import './index.scss'

function Dashboard() {
    const [showAddTodoModal, setShowAddTodoModal] = useState(false)
    const [todoForm, setTodoForm] = useState(todoFormConstant)
    const [todos, setTodos] = useState([])
    const [filteredTodos, setFilteredTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    const [search, setSearch] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)

    const onChange = (e) => {
        const { id, value } = e.target
        setTodoForm(prevState => ({ ...prevState, [id]: value }))
    }

    const addTodoHandler = () => {
        let copyofTodos = [...todos]
        const todoObj = {
            name: todoForm.name,
            description: todoForm.description,
            date: todoForm.date,
            // id: `${todos.length}`,
            status: 'in process'
        }
        copyofTodos.push(todoObj)
        setTodoForm(todoFormConstant)
        setShowAddTodoModal(false)
        setTodos(copyofTodos)
    }

    const markCompleteHandler = (e, index) => {
        setSelectedItem(index)
        const copyofCompletedTodos = [...completedTodos]
        let compTodo = todos[index]
        compTodo.date = new Date().toISOString().split(".")[0]
        compTodo.status = 'completed'
        copyofCompletedTodos.unshift(compTodo)
        setCompletedTodos(copyofCompletedTodos)
        setTodos([...todos.filter((td, i) => i !== index)])
        setSelectedItem(null)
    }

    const dropdownHandler = (e, i) => {
        if (e.target.id === 'Delete') {
            setTodos([...todos.filter((td, ind) => ind !== i)])
        } else if (e.target.id === 'Duplicate') {
            const copyofTodos = [...todos]
            let dupTodo = todos.find((td, ind) => ind === i)
            copyofTodos.unshift({ ...dupTodo, date: new Date().toISOString().split("T")[0] + 'T' + new Date().toLocaleTimeString() })
            setTodos(copyofTodos)
        }
    }
    const onSearchHandler = e => {
        setSearch(e.target.value.trim())
        const copyofTodos = [...todos]
        setFilteredTodos([...copyofTodos.filter(td => td.name.toLowerCase().includes(e.target.value.trim()))])
    }

    return (
        <>
            <div className="todo-dashboard">
                <div className="d-flex justify-content-between">
                    <h2>To Do List</h2>
                    <Button type="button" className="my-primary" onClick={() => setShowAddTodoModal(true)}>Add To Do</Button>
                </div>
                <div className="bottom-container">
                    <div className="d-flex pt-5 pb-4">
                        <Searchbar isRounded={true} onSearchHandler={onSearchHandler} />
                    </div>
                    <div className="card-section">
                        {todos.length !== 0 ? <TodoCard selectedItem={selectedItem} todos={search.length !== 0 ? filteredTodos : todos} markCompleteHandler={markCompleteHandler} dropdownHandler={dropdownHandler} /> : <p className="mt-5">No To Do Found.</p>}
                        {completedTodos.length !== 0 && <div className="divider dark-grey w-100 mt-5 mb-5" />}
                        {completedTodos.length !== 0 && <CompletedCard todos={completedTodos} />}
                    </div>
                </div>
            </div>
            {showAddTodoModal && <AddTodo addTodoHandler={addTodoHandler} todoForm={todoForm} onChangeHandler={onChange} show={showAddTodoModal} onHide={() => setShowAddTodoModal(false)} />}
        </>
    );
}

export default Layout(Dashboard);