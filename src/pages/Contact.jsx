import { BsWhatsapp } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';

const EmailIcon = () => <CgMail size={40} />;
const PhoneIcon = () => <BsWhatsapp size={32} />;

const Input = ({tag:Tag, name, type}) => {
	return(
		<div className="flex flex-col mb-6">
			<label htmlFor={name} className="mb-1">{name}</label>
			<Tag id={name} type={type} className={inputStyle} />
		</div>
	)
}

const iconStyle = "w-10 h-10 flex items-center justify-center";
const contactListStyle = "flex items-center gap-4 mb-2";
const inputStyle = "bg-transparent p-2 text-[18px] outline-0 border-2 border-black";

export default function Contact(){
	return(
		<div id="contact" className="pt-[110px] h-screen text-[#f5f5f5] flex">
			<div className="flex flex-1 flex-col h-full items-center justify-center">
				<div>
					<div className="text-6xl font-light mb-6">My Contact</div>
					<ul className="text-[20px]">
						<li className={contactListStyle} >
							<span className={iconStyle} ><PhoneIcon /></span>
							+62 856 9757 5217
						</li>
						<li className={contactListStyle} >
							<span className={iconStyle} ><EmailIcon /></span> 
							ranggafirmansyah.pfs@gmail.com
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-1 h-full items-center text-black">
				<div className="w-[420px] ml-14">
					<div className="text-[#f5f5f5] w-full text-[20px] text-center mb-2">Quick Message</div>
					<div id="message_form" className="bg-[#f5f5f5] p-8 rounded-md">
						<Input tag="input" name="Name" type="text" />
						<Input tag="input" name="Email" type="email" />
						<Input tag="textarea" name="Message" />
						<button className="bg-[#14ffec] border-2 border-black w-full text-[18px] p-1 active:bg-[#00e0ce]">Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}