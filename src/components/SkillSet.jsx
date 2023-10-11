import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import jsLogo from '../images/js.png';
import reactLogo from '../images/react.png';
import tailwindLogo from '../images/tailwind.jpg';
import bootstrapLogo from '../images/bootstrap.png';
import nodeJsLogo from '../images/nodejs.png';
import viteLogo from '../images/vite.png';
import gitLogo from '../images/git.png';
import githubLogo from '../images/github.png';

const imageMap = {
  "HTML": htmlLogo,
  "CSS": cssLogo,
  "Javascript": jsLogo,
  "React": reactLogo,
  "Tailwind": tailwindLogo,
  "Bootstrap": bootstrapLogo,
  "Node.js": nodeJsLogo,
  "Vite": viteLogo,
  "Git": gitLogo,
  "GitHub": githubLogo
};


const SkillIcon = ({name}) => <img src={imageMap[name]} title={name} className="w-12 aspect-square object-contain" />;


export default function SkillSet() {

	return (
		<div className="max-w-[800px] w-full flex flex-col items-center mt-8 border-2 border-white p-4">
			<p className="w-full">I have worked with : </p>
			<div className="flex gap-2 mt-4">
				<SkillIcon name="HTML" />
		        <SkillIcon name="CSS" />
		        <SkillIcon name="Javascript" />
		        <SkillIcon name="React" />
		        <SkillIcon name="Tailwind" />
		        <SkillIcon name="Bootstrap" />
		        <SkillIcon name="Node.js" />
		        <SkillIcon name="Vite" />
		        <SkillIcon name="Git" />
		        <SkillIcon name="GitHub" />
			</div>
		</div>
	)
}