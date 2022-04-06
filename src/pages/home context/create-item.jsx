import { useState } from 'react';
import { TodoContext } from './index';


const CreateItem = props => {
    const [title, setTitle] = useState('');

    return (
        <TodoContext.Consumer>
            {
                value => (
                    <div>
                        <input type="text"
                            value={title}
                            onKeyDown={e => {
                                if (e.key == 'Enter') {
                                    value.onCreateItem(props.listName, e.target.value)
                                    setTitle('');
                                }
                            }}
                            onChange={e => setTitle(e.target.value)} />
                    </div>
                )
            }
        </TodoContext.Consumer>

    )
}

export default CreateItem;