
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function Root() {

  return (
    <div className='2xl:container mx-auto'>
      <div><Toaster /></div>
      <NavBar />
      <Outlet />
      <Footer />
      

    </div>
  )
}


export default Root
