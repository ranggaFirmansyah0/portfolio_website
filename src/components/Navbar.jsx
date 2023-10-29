import React, { useState } from 'react';
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

	return(
		<div className="fixed w-full bg-[#212121] flex text-[#f5f5f5] py-2 px-2 md:py-6 items-center justify-between z-50">
			<div className="md:flex-1 flex justify-center items-center">
				<img src={ranggaLogo} className="w-[13vw] sm:w-12 md:w-14"/>
			</div>
			<ul className={`${menuDisplay} bg-[#212121] md:flex flex-col absolute right-0 top-0 p-4 text-[5vw] sm:text-[3vw] md:text-[1rem] md:p-0 md:flex-row md:static gap-6 md:flex-1 justify-center`}>
				<IoClose onClick={closeMenu} className="w-full translate-x-[9px] text-[9vw] mb-4 md:hidden sm:text-[34px] md:text-[3px] opacity-90 hover:opacity-100 cursor-pointer" />
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
			</ul>
			<div className="hidden md:flex gap-4 items-center md:flex-1 justify-center">
				<a href="" className="hover:opacity-100 opacity-90">
					<BsLinkedin size="24"/>
				</a>
				<a href="" className="hover:opacity-100 opacity-90">
					<BsGithub size="24" />
				</a>
				<Link 
					to="contact" 
					spy={true} 
					smooth={true} 
					duration={300}
					className="cursor-pointer bg-[#f5f5f5] text-[#212121] py-1 px-2 rounded-sm opacity-90 hover:opacity-100"
					>
						Contact Me
				</Link>
			</div>
			<div className="w-[13vw] -z-20 sm:w-12 md:w-14 flex md:flex-1 md:hidden text-[#f5f5f5] items-center justify-center">
				<GiHamburgerMenu onClick={showMenu} className="text-[6.5vw] sm:text-[26px] md:text-[30px] opacity-90 hover:opacity-100 cursor-pointer" />
			</div>
		</div>
	);
}