import React from 'react'
import web from '../assets/website-design.png';
import ui from '../assets/ui-design.png';
import app from '../assets/app-design.png';


const About = () => {
    return (
        <section className="about xl:px-60 md:px-20 sm:px-10 pb-5 pt-14 bg-[#FAF3E0] text-white flex flex-col gap-10 px-5">
            <div className="text flex flex-col gap-10 text-center ">
                <h2 className='text-3xl font-semibold text-[#FF6F00]'>About Us</h2>
                <p className='text-[#2C2C2C] text-lg font-semibold'>Shri Ganesh Nav Durga Seva Samiti is a devoted, community-based spiritual organization committed to preserving and promoting the rich cultural and religious heritage of Sanatan Dharma. Founded with the blessings of the Divine, our Samiti organizes grand religious events, vibrant festivals, and socially uplifting activities that unite people through faith, devotion, and service.</p>
                <p className='text-[#2C2C2C] text-lg font-semibold'>Our mission is to ignite the spirit of bhakti (devotion) and seva (selfless service) among all age groups, especially the youth. We celebrate Navratri, Ganesh Chaturthi, Ram Navami, Hanuman Jayanti, and many other sacred occasions with deep reverence, grandeur, and community participation. Each event is an opportunity to foster harmony, cultural pride, and a deeper connection to our dharmic roots.</p>
                <p className='text-[#2C2C2C] text-lg font-semibold'>Through our efforts, we aim to build a spiritually aware society where tradition, values, and seva form the foundation of progress.</p>

            </div>
            <div className="cards border rounded-3xl">
                <div className="card px-3 py-3 flex gap-6 items-center bg-[#B22222] rounded-t-3xl">
                    <div className="contant">
                        <h3 className='text-2xl font-semibold text-[#FF6F00]'>🪔 Who We Are</h3>
                        <p className='text-white'>A spiritual collective of individuals bound by devotion and guided by dharmic values.</p>
                    </div>
                </div>
                <div className="card px-3 py-3 flex gap-6 items-center bg-[#B22222]">
                    <div className="contant">
                        <h3 className='text-2xl font-semibold text-[#FF6F00]'>🪔 What We Do</h3>
                        <p className='text-white'>Organize religious events, bhajan sandhyas, yatras, and community welfare programs.</p>
                    </div>
                </div>
                <div className="card px-3 py-3 flex gap-6 items-center bg-[#B22222] rounded-b-3xl">
                    <div className="contant">
                        <h3 className='text-2xl font-semibold text-[#FF6F00]'>🪔 Why We Serve</h3>
                        <p className='text-white'>To keep alive the essence of Sanatan Dharma and inspire selfless service in society.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About