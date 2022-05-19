const List = (props) => {
    return (
      <ul>
        {props.todos.map(todo => 
          <li key={todo.id}>
            {todo.id}번 할 일 : {todo.title} ({todo.completed ? '완료' : '미완료'})
          </li>
        )}
      </ul>
    );
}

export default List;