import SkillSet from '../components/SkillSet.jsx';

export default function About(){
	const iconSize = 10;

	return(
		<div id="about" className="h-screen flex flex-col items-center text-[#f5f5f5] pt-[130px]">
			<div className="text-2xl font-bold mb-10 border-[#14ffec] border-b-2">About Me</div>
			<p className="max-w-[800px] text-[20px] opacity-90 leading-7">
				My name is <strong>Rangga Firmansyah</strong>.
				I am a graduate of a Vocational High School <strong>majoring in Software Engineering</strong>.
				I am a <strong>Frontend Web Developer</strong>.
				I have <strong>internship experience as a Frontend Web Developer for 4 months at Muslim Go Online</strong> (a digital marketing consulting company).
			</p>
			<p className="max-w-[800px] w-full text-[20px] opacity-90 leading-7 mt-5">
				Currently, I am <strong>working on</strong> several <strong>personal projects</strong> to enhance my skills and knowledge in <strong>Web Development</strong>.
			</p>
			
			<SkillSet />

		</div>
		)
}