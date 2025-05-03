import React, { useEffect, useState } from 'react'
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify"
export default function ShowUser() {
    let [user, setUser] =useState([])

    useEffect(()=>{
        Dataaya()
    }, [])

    async function Dataaya(){
        try {
            await axios.get("http://localhost:3001/gym/getuser").then((a)=>{
                console.log(a.data)
                setUser(a.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function delete_record(id){
        try {
            if(window.confirm("Are You Sure You Want To Delete This Record?")){
                await axios.delete(`http://localhost:3001/gym/getuser/${id}`).then(()=>{
                    toast.dark("Record Deleted Successfully")
                    Dataaya()
                })
            }
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }
  return (
    <div className='container'>
        <ToastContainer/>
        <h1>User Records</h1>
        <div className='row'>
            {user.length === 0 ?
            (
                <p>No Records Found</p>
            ):
            (
                user.map((a)=>(
                    <div className='mt-3 col-md-4'>
                   <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{a.name}</h4>
                        <p class="card-text">{a.email}</p>
                        <button className='btn btn-danger' onClick={()=>delete_record(a._id)}><i class="bi bi-trash"></i></button>
                    </div>
                   </div>
                   </div>
                ))
            )}

        </div>
    </div>
  )
}
