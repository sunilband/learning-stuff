"use client"
import {createSlice} from "@reduxjs/toolkit"


const userSlice =createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser:(state:any,action:any):any=>{
            state.push(action.payload)
            console.log(state)
        },

        removeUser:(state,action)=>{

        },

        deleteAllUsers:(state,action)=>{

        }
    }
})
console.log(userSlice.actions);
export const {addUser} = userSlice.actions
export default userSlice.reducer