
const Todo = (props) => {
    const {title, desc} = props.todo;

    const handleClick = (id) => {
        props.onDeleteTodo(id);
    }

    return (
    <article className="flex justify-between items-center bg-blue-600 text-white mb-2 p-3 rounded-md">
        <div>
            <h2 className="text-xl font-medium"> {title} </h2>
            <p> {desc} </p>
        </div>
        <div>
            <button onClick={() => {handleClick(props.id)}} className="bg-red-600 px-3 py-1 rounded-full"> Delete </button>
        </div>
    </article>
    )
}

export default Todo
