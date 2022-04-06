import { createSlice, isFulfilled } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        lists: []
    },
    reducers: {
        addList: (state, action) => {
            state.lists.push({
                name: action.payload.name,
                items: []
            })
        },
        addItem: (state, action) => {
            const list = state.lists.find(item => item.name == action.payload.listName);
            if(list){
                list.items.push({
                    title: action.payload.title,
                    isCompleted: false,
                    isImportant: false
                })
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addList, addItem } = todoSlice.actions

export default todoSlice.reducer