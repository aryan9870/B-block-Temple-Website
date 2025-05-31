import React from 'react'
import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import { useForm } from 'react-hook-form';


const ContactMe = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)
    
    return (
        <section className="contact  bg-[#FAF3E0] text-white pt-14 flex flex-col gap-10 pb-10">
            <div className="text flex flex-col gap-10 text-center xl:px-60 md:px-20 sm:px-10 px-5 ">
                <h2 className='text-3xl font-semibold text-[#FF6F00]'>Contact Us</h2>
                <p className='text-[#2C2C2C]'>Want to be part of the devotion and service?</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="form w-full">
                <div className="inputs flex flex-col w-2/5 m-auto gap-5">
                    <input {...register("name")} className='bg-slate-800 py-2 px-4' type="text" placeholder='Your Name'/>
                    <input {...register("email")} className='bg-slate-800 py-2 px-4' type="email" placeholder='Your Email' />
                    <textarea {...register("Message")} className='bg-slate-800 py-2 px-4' type="text" placeholder='Your Message' rows={5}></textarea>
                </div>
                <input className='border-2 mb-3 sm:mb-0 border-transparent hover:bg-[#FFD700] bg-[#388E3C] text-black flex py-2 px-6 rounded-3xl items-center gap-3 w-fit mx-auto mt-10 hover:border-[#FF6F00]' type="submit" value="submit" />
            </form>

            

        </section>
    )
}

export default ContactMe