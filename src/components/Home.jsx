import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import NewTodo from "./NewTodo"
import Todos from "./Todos"

const Home = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (data) => {
        const newTodo = { id: uuidv4(), data };
        setTodos((prev) => {
            return [...prev, newTodo]
        })
    }

    const handleDeleteTodo = (id) => {
        setTodos((prev) => {
            const filteredTodo = prev.filter((todo) => todo.id !== id)
            return filteredTodo;
        })
    }

  return (
    <div className="p-3">
        <h1 className="text-3xl font-bold text-center"> Todo App </h1>
        <NewTodo onAddTodo={handleAddTodo} />
        <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default Home
