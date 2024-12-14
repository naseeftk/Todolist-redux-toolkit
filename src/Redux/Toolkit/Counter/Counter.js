import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
    },
    reducers: {
        add: (state, action) => {
            state.todo.push({ id: Date.now(), text: action.payload });
        },
        deleet: (state, action) => {
            state.todo = state.todo.filter((item) => item.id !== action.payload);
        },
        edit: (state, action) => {
            const todo = state.todo.find((item) => item.id === action.payload.editid);
            if (todo) {
                todo.text = action.payload.editing;
            }
        },
    },
});

export const { add, deleet, edit } = todoslice.actions;
export default todoslice.reducer;
