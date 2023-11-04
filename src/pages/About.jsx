import SkillSet from '../components/SkillSet.jsx';

export default function About(){
	const iconSize = 10;

	return(
		<div id="about" className="h-screen flex flex-col items-center text-[#f5f5f5] pt-14 sm:pt-16 x-sm:pt-20 md:pt-28">
			<div className="text-lg sm:text-xl x-sm:text-2xl font-bold mb-6 md:mb-10 border-[#14ffec] border-b-2">About Me</div>
			<div style={{textWrap: 'balance', wordSpacing: '2px'}} className="w-[80vw] md:w-[60vw] flex flex-col gap-4 text-sm sm:text-base x-sm:text-lg">
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