
const TodoItem = ({title, isCompleted, isImportant}) => {
    return (
        <div className="todo-item">
            <h4>{title}</h4>
        </div>
    )
}

export default TodoItem;