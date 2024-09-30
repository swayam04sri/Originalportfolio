import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

export default function Contact() {
  <hr/>
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    };
    try{
      await axios.post("https://getform.io/f/aolgewjb",userInfo);
      toast.success("Your message has been sent")   }
    catch(error){
      toast.error("Something went wrong");
    }
    
  };
  return (
    <>
    <div  name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Fill out the form to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
        <form 
        //action='https://getform.io/f/aolgewjb'
         onSubmit={handleSubmit(onSubmit)} 
         //method="POST"
          className=' bg-slate-200 w-96 px-8 py-6 rounded-xl'>
        <h1 className='text-sm font-semibold mb-4'>Send Your Message</h1>
        <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 font-bold'>FullName</label>
            <input className='shadow  rounded-lgappearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline'
            {...register("name", { required: true })}
            id='name'
            type='text'
            name='name'
            placeholder='Enter your name'/>
            {errors.name && <span>This field is required</span>}

            </div>
            <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 font-bold'>Email</label>
            <input className='shadow  rounded-lgappearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline'
            {...register("email", { required: true })}
            id='name'
            type='text'
             name='email'
            placeholder='Enter Email'/>
                        {errors.email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 font-bold'>Message</label>
            <textarea className='shadow  rounded-lgappearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline'
            {...register("message", { required: true })}
            id='name'
            type='text'
             name='message'
            placeholder='Enter Message'/>
                        {errors.message && <span>This field is required</span>}
            </div>
      <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-800 duration-150'> SEND </button>



  </form>

        </div>

    </div>
    </> 
  )
}
