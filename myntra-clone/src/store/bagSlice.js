import {createSlice} from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'bag',
    initialState:[],
    reducers:{
        addToBag :(state, action) => {
            state.push(action.payload);
        },
        removeFromBag :(state, action) =>{
            return state.filter(itemId => itemId !== action.payload);
        }
    }
});

console.log("Hello------1");


export const bagActions = bagSlice.actions;

export default bagSlice;
