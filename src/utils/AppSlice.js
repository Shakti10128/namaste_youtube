import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:'app',
    initialState: {
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        showMenu:(state)=>{
            state.isMenuOpen = true;
        }
    }
})

export const {toggleMenu,closeMenu,showMenu} = AppSlice.actions;
export default AppSlice.reducer;