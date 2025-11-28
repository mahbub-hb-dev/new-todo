import { useState } from "react";

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title:'', desc:''});

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((prevTodo) => {
            return {...prevTodo, [name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo)
        setTodo({title:'', desc:''})
    }

  return (
    <form onSubmit={handleSubmit} className="bg-[pink] border px-3 py-4 my-3 rounded-md">
        <div>
            <label className="w-[110px] font-medium inline-block" htmlFor="title"> Title : </label>
            <input onChange={handleChange} value={todo.title} type="text" name="title" id="title" className="border rounded px-1 py-0.5 focus:bg-white" />
        </div>
        <div className="py-3">
            <label className="w-[110px] font-medium inline-block" htmlFor="desc"> Description : </label>
            <input onChange={handleChange} value={todo.desc} type="text" name="desc" id="desc" className="border rounded px-1 py-0.5 focus:bg-white" />
        </div>
        <button className="border rounded-md ml-[110px] w-48 px-2 py-1 bg-green-600 text-sm font-medium text-white"> Add Todo </button>
    </form>
  )
}

export default NewTodo
