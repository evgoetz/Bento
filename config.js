// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Everett',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '44.977753',
	defaultLongitude: '-93.265015',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '00:00',
	hourDarkThemeInactive: '23:59',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Music Theory',
					link: 'https://www.musictheory.net/exercises',
				},
				{
					name: 'Drum Rudiments',
					link: 'https://www.40drumrudiments.com/',
				},
				{
					name: 'Rhythm Worksheets',
					link: 'https://shedthemusic.com/rhythm-worksheets',
				},
				{
					name: 'Jazz Tabs',
					link: 'https://www.guitarjazztabs.com/',
				},
			],
		},
		{
			icon: 'inbox',
			id: '2',
			links: [
				{
					name: 'Gmail',
					link: 'https://gmail.com',
				},
				{
					name: 'Protonmail',
					link: 'https://mail.proton.me',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com',
				},
				{
					name: 'School',
					link: 'https://inside.augsburg.edu',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'star',
			id: '1',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.spotify.com',
				},
				{
					name: 'RYM',
					link: 'https://rateyourmusic.com/',
				},
				{
					name: 'Lichess',
					link: 'https://lichess.org/',
				},
				{
					name: 'Kbin',
					link: 'https://kbin.social/',
				},
			],
		},
		{
			icon: 'terminal',
			id: '2',
			links: [
				{
					name: 'FreeCodeCamp',
					link: 'https://www.freecodecamp.org/learn/',
				},
				{
					name: 'Codewars',
					link: 'https://www.codewars.com/',
				},
				{
					name: 'Leetcode',
					link: 'https://leetcode.com/problemset/all/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/evgoetz',
				},
			],
		},
	],
};
