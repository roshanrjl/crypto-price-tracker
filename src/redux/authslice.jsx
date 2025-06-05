import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isloggedin:true,
    userdata:null
}
const AuthSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        login(state, action){
            state.isloggedin= true;
            state.userdata = action.payload;
        },
        logout(state,action){
            state.isloggedin=false;
            state.userdata= null;
        }
    }
})

export const {login, logout}= AuthSlice.actions;
export default AuthSlice.reducer;
