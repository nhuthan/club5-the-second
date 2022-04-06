import { TodoContext } from './index';
import List from './list';

export default function(props) {
    return (
        <TodoContext.Consumer>
            {
                value =>value.lists.map(list => (
                    <List key={list.name} {...list} onSubmitCreate={value.onCreateItem} />
                ))
            }
        </TodoContext.Consumer>
    )
}