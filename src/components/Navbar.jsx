import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ranggaLogo from '../images/rangga-logo.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

export default function Navbar() {
	
	const [menuDisplay, setMenuDisplay] = useState('hidden');

	const showMenu = () => {
	   setMenuDisplay('flex');
	};

	const closeMenu = () => {
	   setMenuDisplay('hidden');
	};

	useEffect(() => {
	  const handleResize = () => {
	    if (window.innerWidth >= 768) {
	      setMenuDisplay('hidden');
	    }
	  };

	  window.addEventListener('resize', handleResize);

	  return () => {
	    window.removeEventListener('resize', handleResize);
	  };
	}, []);


	return(
		<div className="fixed w-full bg-[#212121] flex text-[#f5f5f5] py-2 px-2 md:py-6 items-center justify-between z-50">
			<div className="md:flex-1 flex justify-center items-center">
				<img src={ranggaLogo} className="w-10 sm:w-12 x-sm:w-14"/>
			</div>
			<ul id="pagination" className={`${menuDisplay} bg-[#212121] md:flex flex-col absolute right-0 top-0 p-4 md:p-0 text-lg sm:text-xl x-sm:text-2xl md:text-base md:flex-row md:static gap-6 md:flex-1 justify-center`}>
				<div className="w-full md:hidden flex justify-end items-center">
					<IoClose onClick={closeMenu} className="text-2xl sm:text-3xl sm:-translate-x-[1px] sm:translate-y-[1px] x-sm:text-4xl x-sm:translate-x-[2px] x-sm:translate-y-[2px] opacity-90 hover:opacity-100 cursor-pointer" />
				</div>
				<li className="hover:font-medium hover:text-white">
					<Link 
						to="home" 
						spy={true} 
						smooth={true} 
						duration={300}
						className="cursor-pointer"
						>
							Home
					</Link>
				</li>
				<li className="hover:font-medium hover:text-white">
					<Link 
						to="about" 
						spy={true} 
						smooth={true} 
						duration={300}
						className="cursor-pointer"
						>
							About
					</Link>
				</li>
				<li className="hover:font-medium hover:text-white">
					<Link 
						to="project" 
						spy={true} 
						smooth={true} 
						duration={300}
						className="cursor-pointer"
						>
							Project
					</Link>
				</li>
				<Link 
					to="contact" 
					spy={true} 
					smooth={true} 
					duration={300}
					className="md:hidden cursor-pointer hover:font-medium hover:text-white"
					>
						Contact
				</Link>
			</ul>
			<div id="social" className="-z-50 text-white fixed bottom-[5vh] right-[5vw] bg-[#212121] p-2 md:p-0 md:static md:flex flex-col md:flex-row gap-4 items-center md:flex-1 justify-center">
				<a href="" className="hover:opacity-100 opacity-100 md:opacity-90">
					<BsLinkedin className="text-[30px] sm:text-[32px] x-sm:text-[34px] md:text-[24px] mb-2 md:mb-0" />
				</a>
				<a href="" className="hover:opacity-100 opacity-100 md:opacity-90">
					<BsGithub className="text-[30px] sm:text-[32px] x-sm:text-[34px] md:text-[24px]" />
				</a>
				<Link 
					to="contact" 
					spy={true} 
					smooth={true} 
					duration={300}
					className="hidden md:block cursor-pointer bg-[#f5f5f5] text-[#212121] py-1 px-2 rounded-sm opacity-90 hover:opacity-100"
					>
						Contact Me
				</Link>
			</div>
			<div className="w-10 -z-20 sm:w-12 md:w-14 flex md:flex-1 md:hidden text-[#f5f5f5] items-center justify-center">
				<GiHamburgerMenu onClick={showMenu} className="text-lg sm:text-xl x-sm:text-2xl opacity-90 hover:opacity-100 cursor-pointer" />
			</div>
		</div>
	);
}