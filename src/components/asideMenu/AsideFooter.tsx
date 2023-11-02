import React from 'react';

import Link from 'next/link';

const AsideFooter = () => {
	return (
		<div className={`absolute bottom-[39px] left-[20px] flex flex-col gap-[29px]`}>
			<ul className={`flex gap-[10px] text-blue font-[400] text-[12px] leading-[18px]`}>
				<li>
					<Link href='/terms'>Terms</Link>
				</li>
				<li>
					<Link href='/privacy'>Privacy</Link>
				</li>
				<li>
					<Link href='/security'>Security</Link>
				</li>
				<li>
					<Link href='/version'>Version</Link>
				</li>
			</ul>
			<p className={`text-light-gray-2 font-[600] text-[14px]`}>&copy; 2023 Hirefy, LLC.</p>
		</div>
	);
};

export default AsideFooter;
