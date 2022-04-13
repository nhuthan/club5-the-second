import List from './list';
//import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { removeItem } from '../../reducer/todo';

const Lists = ({ lists }) => {
    // const lists = useSelector((state) => state.todo.lists)
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

// function mapStateToProps(state) {
//     return { lists: state.todo.lists }
// }

// const mapDispatchToProps = {
//     removeItem
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Lists);

const myConnect = (component, mapStateToProps, mapDispatchToProps) => {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}



export default myConnect(Lists,
    state => ({
        lists: state.todo.lists
    }),
    {
        removeItem
    }
);