import Todo from "./Todo"

const Todos = (props) => {
    // console.log(props)
  return (
    <section>
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
