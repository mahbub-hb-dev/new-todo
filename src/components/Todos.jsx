import Todo from "./Todo"

const Todos = (props) => {
    // console.log(props)
  return (
    <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.todos.map((todo) => (
            <Todo key={todo.id} 
            todo={todo.data} 
            id={todo.id} 
            onDeleteTodo={props.onDeleteTodo} />
        ))}
    </section>
  )
}

export default Todos
