import { TNavigation } from '@/navigation/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NavItem = ({ icon, text, textColor, children, link, fontWeight = 'font-[600]', className, gap = 'gap-[14px]' }: TNavigation) => {
	const [isOpen, setIsOpen] = useState(false);

	const caret = isOpen ? (
		<Image src={'/assets/icons/caret-up.svg'} alt="Hirefy's element icon" className='transition-all' fill style={{ objectFit: 'contain' }} />
	) : (
		<Image src={'/assets/icons/caret-up.svg'} alt="Hirefy's element icon" className='rotate-90 transition-all' fill style={{ objectFit: 'contain' }} />
	);

	const colors = 'text-blue text-gray';

	return (
		<li className={`${className} transition-all`}>
			{!children ? (
				<Link href={link!} className={`flex items-center text-[14px] ${textColor} ${fontWeight} gap-[15px] h-[34px] hover:brightness-150`}>
					{icon ? <Image src={icon} alt="Hirefy's element icon" width={15} height={13.577} /> : null}
					{text}
				</Link>
			) : (
				<div className={`flex flex-col ${isOpen ? 'text-blue' : textColor}`}>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`flex items-center text-[14px] w-full ${fontWeight} gap-[9px] h-[34px] rounded-[5px] bg-light-gray relative`}
					>
						{icon ? <Image src={icon} alt="Hirefy's element icon" width={15} height={13.577} /> : null}
						{text}
						<div className={`absolute right-[0px] flex-shrink-0 w-[10px] h-[6px]`}>{caret}</div>
					</button>
					<ul className={`flex flex-col ${gap} pl-[28px] ${isOpen ? 'h-fit pt-[20px]' : 'h-0 overflow-hidden'}`}>
						{children.map((item, index) => {
							return <NavItem {...item} key={index} className='leading-[24.5px] text-gray' gap='gap-[18px]' />;
						})}
					</ul>
				</div>
			)}
		</li>
	);
};

export default NavItem;
