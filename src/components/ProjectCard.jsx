import { BsCodeSlash, BsPlay } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';

const iconSize = 30;

const ReactJs = () => <GrReactjs size={iconSize} color={"#61DAFB"} title="ReactJS" />;
const Tailwind = () => <SiTailwindcss size={iconSize} color={"#06B6D4"} title="Tailwind CSS" />;

export default function ProjectCard() {
	return (
			<div className="flex gap-6 p-4 bg-slate-500/25">
				<div className="w-[340px] h-[190px] bg-[#f5f5f5] rounded-sm"></div>
				<div className="p-1 flex flex-col justify-between">
					<div>
						<div className="font-bold text-[18px] text-[#ffffff]">
							Personal Portfolio Website
							<span className="ml-2 font-light">/</span> 
							<span className="font-light italic text-[14px]">Personal Project</span>
						</div>
						<div className="mt-1">This is my first personal portfolio website. I build this from scratch.</div>
					</div>
					<div className="flex items-center gap-2">
						Stack : 
						<ReactJs />
						<Tailwind />
					</div>
					<div className="flex gap-4 text-[14px]">
						<a href="" className="flex gap-1 items-center p-2 rounded-sm border-[#f5f5f5] border-2 hover:text-black/80 hover:bg-[#14ffec] hover:border-[#14ffec]"><BsCodeSlash size={20} /> Source Code</a>
						<a href="" className="flex items-center p-2 rounded-sm border-[#f5f5f5] border-2 hover:text-black/80 hover:bg-[#14ffec] hover:border-[#14ffec]"><BsPlay size={25} /> Live Demo</a>
					</div>
				</div>
			</div>
		)
}