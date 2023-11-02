export type TNavigation = {
	icon?: string;
	text: string;
	textColor?: string;
	link?: string;
	fontWeight?: string;
	children?: ListItem[];
	gap?: string;
	className?: string;
};

export type TNavigations = TNavigation[];

export type ListItem = {
	text: string;
	link?: string;
	fontWeight?: string;
	gap?: string;
	children?: ListItem[];
};

export const navigations: TNavigations = [
	{
		icon: '/assets/icons/home.svg',
		text: 'Home',
		link: '/',
		textColor: 'text-gray',
	},
	{
		icon: '/assets/icons/question.png',
		text: 'How it works',
		link: '/how-it-works',
		textColor: 'text-gray',
	},
	{
		icon: '/assets/icons/hire-me.png',
		text: 'Marketplace',
		link: '/marketplace',
		textColor: 'text-gray',
	},
	{
		icon: '/assets/icons/applicant.png',
		text: 'For Talents',
		link: '/talents',
		textColor: 'text-gray',
	},
	{
		icon: '/assets/icons/category.svg',
		text: 'Categories',
		textColor: 'text-blue',
		children: [
			{
				text: 'Lorem ipsum',
				link: '/lorem',
				fontWeight: 'font-[400]',
			},
			{
				text: 'Lorem ipsum',
				link: '/lorem',
				fontWeight: 'font-[400]',
			},
			{
				text: 'Lorem ipsum',
				link: '/lorem',
				fontWeight: 'font-[400]',
				children: [
					{
						text: 'Lorem ipsum',
						link: '/lorem',
						fontWeight: 'font-[400]',
					},
				],
			},
			{
				text: 'Lorem ipsum',
				link: '/lorem',
				fontWeight: 'font-[400]',
			},
			{
				text: 'Lorem ipsum',
				link: '/lorem',
				fontWeight: 'font-[400]',
				children: [
					{
						text: 'Lorem ipsum',
						link: '/lorem',
						fontWeight: 'font-[400]',
					},
					{
						text: 'Lorem ipsum',
						link: '/lorem',
						fontWeight: 'font-[400]',
					},
				],
			},
		],
	},
];
