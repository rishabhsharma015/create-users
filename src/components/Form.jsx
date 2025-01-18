import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [users, setUsers] = useState([])


    const submit = (data) => {
        setUsers((prev)=>{
            return [...prev, data]
        })
        // let users = JSON.parse(localStorage.getItem("users"));
        // users.push(data);
        // localStorage.setItem("users", JSON.stringify([...users]));   
    }
    
    const updateStatus = (e, userIdx) => {
        setUsers((prev)=>{
            return prev.map((user, idx)=>{
                if(idx === userIdx){
                    return {...user, status: e.target.value}
                }
                return user
            })
        })
    }


  return (
    <div className='w-full flex flex-col gap-4'>
        <form className='w-96 h-60 bg-zinc-300 rounded-md p-2 flex flex-col justify-between' onSubmit={handleSubmit(submit)} >
            <div className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col'>
                    <input {...register("username", { "required": "Username is required"})} type="text" className='p-1 px-2 outline-none border-md text-black bg-transparent border border-gray-500 rounded-md placeholder:text-zinc-500 placeholder:text-sm' placeholder='Username' />
                    { errors.username && <p className='text-xs text-red-700'>{errors.username.message}</p>}
                </div>
                <div className='w-full flex flex-col'>
                    <input {...register("designation", { "required": "Designation is required" })} type="text" className='p-1 px-2 outline-none border-md text-black bg-transparent border border-gray-500 rounded-md placeholder:text-zinc-500 placeholder:text-sm' placeholder='Designation'/>
                    { errors.designation && <p className='text-xs text-red-700'>{errors.designation.message}</p> }
                </div>
                <select {...register("status")} name="status" id="status" className='p-1 px-2 text-black outline-none text-sm rounded-md bg-transparent border border-gray-500'>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Away">Away</option>
                </select>
            </div>
            <button type='submit' className='w-full py-2 rounded-md bg-blue-500 font-semibold text-sm'>Login</button>
        </form>


        <div className="users w-full flex flex-wrap gap-3">
            {
                users.length>0 ? users.map((user, idx)=>(
                <div key={idx} className={`user w-60 h-44 ${user.status === "Online" ? 'bg-green-600': (user.status === 'Offline' ? 'bg-red-600' : 'bg-yellow-500 text-black')} rounded-md p-3 flex flex-col gap-1 items-center`}>
                                                <h1 className='font-semibold tracking-tighter text-lg w-full text-right'>{user.username}</h1>
                                                <p className='font-thin tracking-wide mb-4'>{user.designation}</p>
                                                <select onChange={(e)=>updateStatus(e,idx)} name="status" id="status" className='p-1 px-2 text-white outline-none text-sm rounded-md bg-transparent border border-white'>
                                                    <option className='text-black' value="Online">Online</option>
                                                    <option className='text-black' value="Offline">Offline</option>
                                                    <option className='text-black' value="Away">Away</option>
                                                </select>
                                            </div> )): <p className='text-white'>No users</p>
            }
        </div>
    </div>
  )
}

export default Form