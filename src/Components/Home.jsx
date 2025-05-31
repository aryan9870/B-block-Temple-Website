import React, { useState } from 'react'
import hireme from '../assets/hireme.png';
import { useForm } from 'react-hook-form';


const Home = () => {

    const [showhireme, setshowhireme] = useState(false)

    function handleshowhireme() {
        setshowhireme(!showhireme)
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='bg-black'>
                <section className="home bg-[url('https://thumbs.dreamstime.com/b/lord-ganesha-statue-candles-dark-background-light-rays-behind-ai-generated-lord-ganesha-statue-candles-328668281.jpg?w=768')]  md:bg-[url('https://thumbs.dreamstime.com/b/lord-ganesha-ganesh-chaturthi-photorealistic-shiny-statue-orange-blue-highly-detailed-illustration-hindu-deity-against-360815893.jpg?w=992')] h-screen bg-cover bg-center rounded-b-3xl">
                    <div className="content text-white h-full w-4/5 flex justify-center xl:justify-end items-center">
                        <div className=' w-5/6 flex flex-col gap-6 md:gap-8 pt-10'>
                            <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FF6F00]'>Hello,</p>
                            <div className="heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#FFD700]">
                                <h1>Welcome to Shri Ganesh Nav Durga Seva Samiti</h1>
                            </div>
                            <p className='text-lg lg:text-xl xl:text-2xl text-[#FF6F00]'>✨ A Spiritual Journey of Faith, Devotion & Service ✨</p>
                            <div className="hhh sm:flex gap-3">
                                <button onClick={handleshowhireme} className='border-2 mb-3 sm:mb-0 border-transparent hover:border-[#FF6F00] hover:bg-[#FFD700] bg-[#388E3C] text-black flex py-2 px-6 rounded-3xl items-center gap-3 w-fit'><img className='h-5' src={hireme} alt="" />Join us</button>
                                <form onSubmit= {handleSubmit(onSubmit)} action="">
                                    <div className={showhireme ? "" : "hidden"}>
                                        <div className="hireMe rounded-xl absolute bg-slate-200 bg-opacity-20 py-6 px-3 flex flex-col gap-5">

                                            <div className="inputs flex flex-col gap-3">
                                                <input {...register("Name")} className='bg-transparent outline-none border-b-2 mx-2 placeholder:text-yellow-300 placeholder:opacity-80 px-2 py-1 text-yellow-300' placeholder='Your Name' type="text" />
                                                <input {...register("Number")} className='bg-transparent outline-none border-b-2 mx-2 placeholder:text-yellow-300 placeholder:opacity-80 px-2 py-1 text-yellow-300' placeholder='Your Number' type="text" />
                                            </div>
                                            <input className="sendhire bg-slate-200 text-black mx-1 rounded-3xl py-1 px-6 border-2 mb-3 sm:mb-0 hover:invert border-transparent hover:border-gray-900 hover:bg-transparent" type="submit" value="Send" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home