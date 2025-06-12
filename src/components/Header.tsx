'use client'
import Logo from '@/assets/Logo.png'
import menuIcon from '@/assets/menu.svg'
import arrow from '@/assets/arrow.png'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <header
      className={`sticky top-0 z-20 backdrop-blur-sm ${isScrolled ? 'border-b border-gray-200' : ''}`}>
        <div className="py-4 items-center">
            <div className='container'>
                <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4" >
                    <Image src={Logo} alt="Codence Logo"  width={145} className="px-2"/>
                    <nav className="hidden lg:flex gap-5 text-black items-center">
                        <div className="button-hover-effect flex gap-1 items-center group">
                            <a href="/products">Products </a>
                            <Image src={arrow} alt="arrow" className="w-2.5 h-2.5 mt-1 rotate-90 transition-transform duration-200 group-hover:rotate-[270deg]" />
                        </div>
                        <div className="button-hover-effect"><a href="/solutions">Solutions</a></div>
                        <div className="button-hover-effect flex gap-1 items-center group">
                            <a href="/resources">Resources</a>
                            <Image src={arrow} alt="arrow" className="w-2.5 h-2.5 mt-1 rotate-90 transition-transform duration-200 group-hover:rotate-[270deg]" />
                        </div>
                        <div className="button-hover-effect"><a href="/company">Company</a></div>
                        <div className="button-hover-effect"><a href="/careers">Careers</a></div>
                        <div className="button-hover-effect"><a href="/helpcenter">Help Center</a></div>
                    </nav>
                    <div className="flex items-center  gap-2 px-2">
                        <button className="hidden lg:block bg-transparent text-black border border-[#222222]/10 px-4 py-2 rounded-lg font-medium items-center justify-center tracking-tighter">Request a Demo</button>
                        <button className="hidden lg:block bg-black text-white px-4 py-2 rounded-lg font-medium justify-center tracking-tight">Get Started</button>
                        <Image src={menuIcon} alt="Menu Icon" className="h-7 w-7 lg:hidden" />
                    </div>    
                </div>
            </div>
        </div> 

    </header>
  )
}

export default Header