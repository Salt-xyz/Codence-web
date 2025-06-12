import heroImage from '@/assets/Hero.png'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="pt-20 pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row md:flex items-center justify-between gap-12">

                <div className="max-w-xl">
                    <div className="text-sm inline-flex border border-[#222]/10 px-4 py-1 rounded-lg bg-white/70 backdrop-blur-md shadow-sm mb-2 lg:mb-20 tracking-tight">Launching soon</div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">Where AI Meets <br /> Human Potential</h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-tight tracking-tight mt-6">
                            <span className="lg:hidden">Personalized learning for every student with an AI tutor, coach, and planner built into your school system.</span>
                            <span className="hidden lg:block">Codence turns every classroom into a learning adaptive center where students receive personal attention according to their needs and development. Each educational institution system comes with an automated tutor, coach, and planner.</span>
                        </p>
                    </div>

                    <div className="flex gap-4 mt-8 justify-center lg:justify-start">

                        <button className="border border-black/40 bg-[#76a5ed] text-white px-4 py-1 rounded-xl font-medium inline-flex items-center justify-center tracking-tight transition hover:opacity-80">Get Early access</button> 
                         <button className="border border-black/40 text-black bg-[#D0E3FF] px-4 py-2 rounded-xl font-medium inline-flex items-center justify-center tracking-tight transition hover:bg-[#c5d6ef]">Learn More</button>
                    </div>
                </div>
                <div>
                    <Image src={heroImage} alt="Hero Image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
