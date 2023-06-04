import React from 'react'
import { Button } from "./ui/button"
import {useSelector} from "react-redux"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
  
type Props = {}
const Usertable = (props: Props) => {
  
  const users:any=useSelector((state:any)=>state.userReducer)
 
console.log(users)
  return (
    <Table className='w-96 max-w-7xl border-2 rounded-lg'>
  <TableHeader>
    <TableRow>
      <TableHead className='w-1/3'>Name</TableHead>
      <TableHead className='w-1/3'>Address</TableHead>
      <TableHead className='w-1/3'>Delete User</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((x:any,key:any)=>{
      return<TableRow key={key}>
      <TableCell className="font-medium">{x.name}</TableCell>
      <TableCell>{x.address}</TableCell>
      <TableCell><Button variant="link">Delete</Button></TableCell>
    </TableRow>
    })}
  </TableBody>
</Table>

  )
}

export default Usertable