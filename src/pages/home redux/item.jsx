import { removeItem } from '../../reducer/todo';
import { connect } from 'react-redux'

const TodoItem = ({ title, listName, id, removeItem, isCompleted, isImportant }) => {
    //const dispatch = useDispatch()

    const remove = e => {
        e.preventDefault();
        //dispatch(removeItem({ listName, itemId: id }))
        removeItem({ listName, itemId: id })
    }
    return (
        <div className="todo-item">
            <h4>{title} <a onClick={remove}>Remove List</a></h4>
        </div>
    )
}

const mapDispatchToProps = {
    removeItem
}

export default connect(null, mapDispatchToProps)(TodoItem);