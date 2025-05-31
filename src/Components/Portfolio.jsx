import React from 'react'


const Portfolio = () => {
    return (
        <section className="portfolio  bg-[#FAF3E0] text-white pb-5 pt-14 flex flex-col gap-10 flex-">
            <div className="text flex flex-col gap-10 text-center xl:px-60 md:px-20 sm:px-10 px-5 ">
                <h2 className='text-3xl font-semibold text-[#FF6F00]'>Upcoming Events</h2>
            </div>
            <div className="cards flex gap-20 px-20 justify-center flex-wrap py-5">
                <div className="card bg-[#B22222] py-5 flex gap-6 items-center rounded-2xl px-3 text-center">
                       <h1>Navratri Mahotsav 2025 - Oct 1 to Oct 9</h1> 
                </div>
                <div className="card bg-[#B22222] py-5 flex gap-6 items-center rounded-2xl px-3 text-center">
                        <h1>Ganesh Visarjan Yatra - Sept 8</h1>
                </div>
                <div className="card bg-[#B22222] py-5 flex gap-6 items-center rounded-2xl px-3 text-center">
                        <h1>Morning & Evaning aarti - Every day</h1>
                </div>
                
            </div>

            <button className='border-2 mb-3 sm:mb-0 border-transparent hover:border-[#FF6F00] hover:bg-[#FFD700] bg-[#388E3C] text-black flex py-2 px-6 rounded-3xl items-center gap-3 w-fit mx-auto'>👉 Visit the *Events* page for full details!</button>

        </section>
    )
}

export default Portfolio