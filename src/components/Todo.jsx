
const Todo = (props) => {
    const {title, desc} = props.todo;

    const handleClick = (id) => {
        props.onDeleteTodo(id);
    }

    return (
    <article className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-md">
        <div>
            <h2 className="text-[22px] font-medium pr-1"> {title} </h2>
            <p className="text-justify text-sm pr-2"> {desc} </p>
        </div>
        <div>
            <button onClick={() => {handleClick(props.id)}} className="bg-red-600 px-3 py-1 rounded-full"> Delete </button>
        </div>
    </article>
    )
}

export default Todo
