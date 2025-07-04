import React from 'react'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants/index.js'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(() => {
        const navTween=gsap.timeline({
            scrollTrigger:{
                trigger:'.nav',
                start:'bottom top',
            },
        })

        navTween.fromTo('nav',{backgroundColor:'transparent'},{backgroundColor:'#00000050',
            backgroundFilter:'blur(10px)',
            duration:1,
            ease:'power1.inOut',
        });
    })
    return (
        <nav>
         <div className="px-4 md:px-8 lg:px-12 xl:px-12 2xl:px-32">
            <a href="#hero" className="flex items-center gap-2">
             <img src="/images/logo.png" alt="logo" />
             <p>Your Bar Name</p>
            </a>
            
            <ul>
             {navLinks.map((link) => (
                <li key={link.id}>
                 <a href={`#${link.id}`}>{link.title}</a>
                </li>
             ))}
            </ul>
         </div>
        </nav>
     )
    }
    export default Navbar