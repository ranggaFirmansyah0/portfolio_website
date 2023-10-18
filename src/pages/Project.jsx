import project1 from "../images/project1.png";

import ProjectCard from '../components/ProjectCard.jsx';

export default function Project() {
	return (
		<div id="project" className="min-h-screen flex flex-col items-center text-[#f5f5f5] py-[110px]">

			<div className="text-2xl font-bold mb-16 border-[#14ffec] border-b-2">Projects</div>
			<div className="w-full max-w-[80%] flex flex-col gap-4">
				<ProjectCard 
					name="Portfolio Website" 
					type="Personal Project" 
					desc="This is my first portfolio website. I build this from scratch." 
					stack="ReactJS, Tailwind" 
					thumbnail={project1}
					githubLink="https://github.com/ranggaFirmansyah0/portfolio_website"
					demoLink="#"
				/>
			</div>

		</div>
	)
}