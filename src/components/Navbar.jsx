import { Link } from 'react-scroll';
import ranggaLogo from '../images/rangga-logo.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Navbar() {
	return(
		<div className="fixed w-full bg-[#212121] flex text-[#f5f5f5] py-6 items-center justify-around z-50">
			<div className="flex-1">
				<img src={ranggaLogo} className="w-14 mx-auto"/>
			</div>
			<ul className="flex gap-6 flex-1 justify-center">
				<li className="hover:font-medium hover:text-white">
					<Link 
						to="home" 
						spy={true} 
						smooth={true} 
						duration={100}
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
						duration={100}
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
						duration={100}
						className="cursor-pointer"
						>
							Project
					</Link>
				</li>
			</ul>
			<div className="flex gap-4 items-center flex-1 justify-center">
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
					duration={100}
					className="cursor-pointer bg-[#f5f5f5] text-[#212121] py-1 px-2 rounded-sm opacity-90 hover:opacity-100"
					>
						Contact Me
				</Link>
			</div>
		</div>
	);
}