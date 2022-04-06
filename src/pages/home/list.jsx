import Item from './item';
import CreateItem from './create-item';
import '../../asset/css/todolist.scss';

const TodoList = ({ name, items }) => {

    return (
        <div className="todo-list">
            <h3 className="list-name">{name}</h3>
            {
                items.map(item => (
                    <Item key={item.id} {...item}/>
                ))
            }
            <CreateItem listName={name}/>
        </div>
    )
}

export default TodoList;