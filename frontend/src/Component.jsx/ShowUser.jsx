import React, { useEffect, useState } from 'react'
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import {toast, ToastContainer} from "react-toastify"
export default function ShowUser() {
    let [user, setUser] =useState([])
    let [n,setN]=useState("");
    let [e,setE]=useState("");
    let [g,setG]=useState("");
    let [age,setAge]=useState(0);
    let [id,setID]=useState("");
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

    function setData(a,b,c,d,e){
        setN(a);
        setE(b);
        setAge(c);
        setG(d);
        setID(e);
    }

    async function update_Function(){
        try {
            await axios.put(`http://localhost:3001/gym/getuser/${id}`,{
                name : n,
                email : e,
                age : age,
                gender : g
            }).then((a)=>{
                Dataaya();
                toast.success(a.data.msg)
                document.querySelector(".kuchbhi").click();
            })
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
                        <button className='btn btn-danger' onClick={()=>delete_record(a._id)}><i class="bi bi-trash"></i></button>&nbsp;
                        <button className='btn btn-warning'
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={()=>setData(a.name,a.email,a.age,a.gender,a._id)}>
                            <i className='bi bi-pen'></i></button>
                    </div>
                   </div>
                   </div>
                ))
            )
            }
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Record</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" className="form-control mt-3" value={n} onChange={((e)=>{setN(e.target.value)})}/>
        <input type="text" className="form-control mt-3"  value={e} onChange={((e)=>{setE(e.target.value)})}/>
        <input type="text" className="form-control mt-3"   value={age} onChange={((e)=>{setAge(e.target.value)})}/>
       <input type="radio"  name='gender' value="male" onChange={((e)=>{setG(e.target.value)})} checked={g === "male"}/>&nbsp;Male&nbsp;
       <input type="radio"  name='gender' value="female" onChange={((e)=>{setG(e.target.value)})} checked={g === "female"}/>&nbsp;Female&nbsp;
       <input type="radio"  name='gender' value="other" onChange={((e)=>{setG(e.target.value)})} checked={g === "other"}/>&nbsp;Other&nbsp;

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary kuchbhi" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={update_Function}>Edit</button>
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}
