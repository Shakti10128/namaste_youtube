import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name:"search",
    initialState:{
    },
    reducers:{
        cacheSlice: (state,action)=>{
            return{...state,...action.payload};
        }
    }
})

export const {cacheSlice} = SearchSlice.actions;
export default SearchSlice.reducer;