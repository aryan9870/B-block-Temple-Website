import React from 'react'
import woomens from '../assets/mandirWoomen.jpg';
import males from '../assets/Mandirmales.jpg';
import jagran from '../assets/jagranimage.jpg';
import rally from '../assets/reallyimage.jpg';


const Clint = () => {
  return (
    <section className="clint  bg-[#FAF3E0] text-white pb-5 pt-14 flex flex-col gap-10">
            <div className="text flex flex-col text-center xl:px-60 md:px-20 sm:px-10 px-5 ">
                <h2 className='text-3xl font-semibold mb-10 text-[#FF6F00]'>Gallery Grid</h2>
                <p className='text-[#2C2C2C]'>Our Samiti is powered by dedicated individuals from all walks of life.</p>
                <p className='text-[#2C2C2C]'>🙏 Together, we serve with devotion and commitment.</p>
            </div>
            <div className="cards flex m-10 gap-10 justify-center flex-wrap py-5">
                <div className="card w-4/5 md:w-2/5 flex items-center rounded-md">
                    <img src={woomens} />
                </div>
                <div className="card w-4/5 md:w-2/5 flex items-center rounded-md">
                    <img src={males} />
                </div>
                <div className="card w-4/5 md:w-2/5 flex items-center rounded-md">
                    <img src={rally} />
                </div>
                <div className="card w-4/5 md:w-2/5 flex items-center rounded-md">
                    <img src={jagran} />
                </div>
            </div>
        </section>
  )
}

export default Clint