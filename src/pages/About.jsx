import SkillSet from '../components/SkillSet.jsx';

export default function About(){
	const iconSize = 10;

	return(
		<div id="about" className="h-screen flex flex-col items-center text-[#f5f5f5] pt-[10vh] sm:pt-[14vh] x-sm:pt-[16vh] md:pt-[18vh]">
			<div className="text-[6.4vw] sm:text-[5.5vw] x-sm:text-[4.2vw] md:text-2xl font-bold mb-8 md:mb-10 border-[#14ffec] border-b-2">About Me</div>
			<div style={{overflowWrap: 'break-word', wordWrap: 'break-word',hyphens: 'auto'}} className="w-[80vw] md:w-[60vw] flex flex-col gap-4 text-[6vw] md:text-[20px] md:text-left">
				<p>
					My name is <strong>Rangga Firmansyah</strong>.
					I am a graduate of a Vocational High School <strong>majoring in Software Engineering</strong>.
					I am a <strong>Frontend Web Developer</strong>.
					I have <strong>internship experience as a Frontend Web Developer for 4 months at Muslim Go Online</strong> (a digital marketing consulting company).
				</p>
				<p>
					Currently, I am <strong>working on</strong> several <strong>personal projects</strong> to enhance my skills and knowledge in <strong>Web Development</strong>.
				</p>
			
				<SkillSet />
			</div>

		</div>
		)
}