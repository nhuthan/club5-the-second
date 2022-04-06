import { useState } from 'react';
import { TodoContext } from './index';

const CreateList = props => {
    const [name, setName] = useState('');

    return (
        <TodoContext.Consumer>
            {
                value => (
                    <input type="text"
                        value={name}
                        onKeyDown={e => {
                            if (e.key == 'Enter') {
                                value.onCreateList(e.target.value)
                                setName('');
                            }
                        }}
                        onChange={e => setName(e.target.value)}
                    />
                )
            }
        </TodoContext.Consumer>
    )
}

export default CreateList;