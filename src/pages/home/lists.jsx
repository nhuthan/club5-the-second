import List from './list';
import { useSelector } from 'react-redux'

export default function (props) {
    const lists = useSelector((state) => state.todo.lists)
    return (
        <>
            {
                lists.map(list => (
                    <List {...list} />
                ))
            }
        </>
    )
}