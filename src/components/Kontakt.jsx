import React from 'react'
import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

// Register the plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

const Kontakt = () => {

    useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})

  return (
    <footer id='contact'>
        <img src="/images/footer-left-leaf.png" alt="footer-left-leaf" id="f-left-leaf" />
        <img src="/images/footer-right-leaf.png" alt="footer-right-leaf" id="f-right-leaf" />
        
        <div className='content'>
            <h2>Where to find us</h2>

            <div>
            <h3>Come visit us!</h3>
            <p>Ulica Lorem ipsum,20 Dubrovnik</p>
            </div>

            <div className='mt-5'>
                <h3>Contact Us</h3>
                <p>+385 91 123 4567</p>
                <p>info@yourbarname.com</p>
            </div>

            <div>
		        <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                        {time.day} : {time.time}
                        </p>
                    ))}
		    </div>
            <div>
                <h3>Socials</h3>
                <div className="flex-center gap-5">
                    {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >
                        <img src={social.icon} alt={social.name} />
                    </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Kontakt
