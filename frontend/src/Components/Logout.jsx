import React from 'react'
import { useDispatch, useSelector } from "react-redux";


import Swal from 'sweetalert2';
import { logoutFunction } from '../Pages/Redux/Authentication/action';
export default function Logout() {
  const dispatch =useDispatch()

  const handleLogout = ()=>{
    dispatch(logoutFunction)
    Swal.fire({
      title: 'Logout Successfully',
      text: 'You are Logged out Successfully!',
      icon: 'success', // Set the icon to 'success'
      confirmButtonColor: 'rgb(62,101,83)'
    });
  }
  return (
    <button className='ms-4 text-white btn' style={{backgroundColor:"rgb(62,101,83)"}} onClick={handleLogout}>
        Logout
    </button>
  )
}
