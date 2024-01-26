import {createSlice} from "@reduxjs/toolkit";
import DEFAULT_ITEMS from "../data/items";

const itemSlice = createSlice({
    name: 'items',
    initialState:[],
    reducers:{
        addInitialItems :(store, action) => {
            return action.payload;
        }
    }
});

console.log("-------")
console.log("-------1234585")
export const itemActions = itemSlice.actions;

export default itemSlice;
