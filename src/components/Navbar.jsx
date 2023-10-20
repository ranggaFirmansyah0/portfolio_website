import ranggaLogo from '../images/rangga-logo.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Navbar() {
	return(
		<div className="fixed w-full bg-[#212121] flex text-[#f5f5f5] py-6 items-center justify-around z-50">
			<div className="flex-1">
				<img src={ranggaLogo} className="w-14 mx-auto"/>
			</div>
			<ul className="flex gap-6 flex-1 justify-center">
				<li className="hover:font-medium hover:text-white"><a href="#home">Home</a></li>
				<li className="hover:font-medium hover:text-white"><a href="#about">About</a></li>
				<li className="hover:font-medium hover:text-white"><a href="#project">Project</a></li>
			</ul>
			<div className="flex gap-4 items-center flex-1 justify-center">
				<a href="" className="hover:opacity-100 opacity-90">
					<BsLinkedin size="24"/>
				</a>
				<a href="" className="hover:opacity-100 opacity-90">
					<BsGithub size="24" />
				</a>
				<a href="#contact" className="bg-[#f5f5f5] text-[#212121] py-1 px-2 rounded-sm opacity-90 hover:opacity-100">Contact Me</a>
			</div>
		</div>
	);
}