import { navigations } from '@/navigation/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItem from './asideMenu/NavItem';
import AsideFooter from './asideMenu/AsideFooter';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const AsideMenu = () => {
	return (
		<aside className={`w-[281px] h-[844px] flex flex-col rounded-r-[20px] overflow-hidden relative border-[1px] border-[#CDCDCD]`}>
			<div className={`w-full h-[75px] bg-blue flex items-center px-[20px] absolute top-0`}>
				<Link href='/' className={`flex items-center gap-2 w-[100px] h-[30.933px] flex-shrink-0`}>
					<Image src='/assets/logo.png' alt="Hirefy's logo" width={30.933} height={30.933} />
					<h1 className={`text-white font-extrabold text-[18.56px] leading-[27.84px] ${inter.className}`}>Hirefy</h1>
				</Link>
				<button className={`absolute right-[23px] top-[27px]`}>
					<Image src='/assets/icons/close.svg' alt="Hirefy's close button" width={15} height={15} />
				</button>
			</div>
			<ul className={`pl-[27px] pr-[32px] pt-[105px] flex flex-col gap-[20px] border-[1px] border-light-gray`}>
				{navigations.map((navigation, index) => {
					return <NavItem {...navigation} key={index} />;
				})}
			</ul>
			<AsideFooter />
		</aside>
	);
};

export default AsideMenu;
