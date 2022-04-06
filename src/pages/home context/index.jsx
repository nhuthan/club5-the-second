import List from './list';
import CreateList from './create-list';
import { useState, createContext } from 'react';
import Lists from './lists'


export const TodoContext = createContext({
    lists: [],
    onCreateItem: () => null,
    onCreateList: () => null
});


const HomePage = props => {
    const [lists, setLists] = useState([]);

    const handleCreateItem = (listName, title) => {
        console.log(listName, title)
        const list = lists.find(item => item.name == listName);
        if (list) {
            const length = list.items.length;
            list.items.push({
                title: title,
                id: length + 1,
                isCompleted: false,
                isImportant: false
            })
            setLists([
                ...lists
            ]);
        }
    }

    const handleCreateList = (name) => {
        setLists([
            ...lists,
            {
                name,
                items: []
            }
        ]);
    }

    const contextValue = {
        lists,
        onCreateItem: handleCreateItem,
        onCreateList: handleCreateList
    }

    return (
        <div>
            <TodoContext.Provider value={contextValue}>
                <Lists />
                <CreateList />
            </TodoContext.Provider>
        </div >

    )
}

export default HomePage;