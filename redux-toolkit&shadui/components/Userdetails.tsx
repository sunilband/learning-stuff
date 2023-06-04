"use client"
import React from 'react'
import { Button } from "./ui/button"
import Usertable from './Usertable'
import Chance from "chance"
import {useDispatch} from "react-redux"
import {addUser} from "../redux/slices/userSlice"



type Props = {}
const chance=Chance()
// console.log(chance.name())

const Userdetails = (props: Props) => {

  const dispatch=useDispatch()
  const addNewUser=(payload:any):any=>{
    dispatch(addUser(payload))
  }
  return (
    <div className='h-screen w-screen  flex flex-col items-center content-center justify-center '>
    
        <Usertable />
        <Button variant="outline" className="mb-2" onClick={()=>addNewUser({name:chance.name(),address:chance.address()})}>Add new user</Button>
        <Button variant="destructive">Clear users</Button>

    </div>
  )
}

export default Userdetails