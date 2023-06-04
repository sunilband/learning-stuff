"use client"
import {Navbar} from "../../components/Navbar"
import Userdetails from "../../components/Userdetails"
import {Provider} from "react-redux"
import store from "../../redux/store"
export default function Home() {
  return (
    <Provider store={store}>
    <main className='flex flex-col justify-center items-center h-screen w-screen'>
      <Navbar/>
      <Userdetails/>
    </main>
    </Provider>
  )
}
