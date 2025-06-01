interface ListItem {
	text: string;
	link?: string;
}

interface ListSection {
	title: string;
	items: ListItem[];
}

// TODO: ideas: fonts, hardware (film camera, macbook pro, airpods, wearbles like Oura Ring, etc.)

export const lists: ListSection[] = [
	{
		title: "films",
		items: [{ text: "Interstellar" }, { text: "Inception" }, { text: "The Imitation Game" }, { text: "Arrival" }, { text: "Iron Man" }],
	},
	{
		title: "books",
		items: [
			{ text: "Becoming  (Michelle Obana )" },
			{ text: "The Defining Decade (Ken Liu)" },
			{ text: "Invisible Women: Data Bias in a world desgined for men (Caroline Criado Perez)" },
			{ text: "The Vanishing Half  (Brit Brnnett )" },
			{ text: "Educated (Tara Westover )" },
			{ text: "Weapons of Math Destruction(Cathy O'Neil)" },
			{ text: "Einestein's Dreams  (Alan Lightman)" },
			{ text: "Tomorrow, and Tomorrow, and Tomorrow (Gabrielle Zevin)" },
		],
	},
	{
			title: "essays",
			items: [
				{ text: "The ESP Paradox (Wired)", link: "https://www.wired.com/2007/04/esp/" },
				{ text: "The Poet and the Computer", link: "http://ww3.haverford.edu/cmsc/slindell/The%20Poet%20and%20the%20Computer.htm" },
				{ text: "Bad Feminist (Roxane Gay)", link: "https://www.vqronline.org/essay/bad-feminist" },
				{ text: "Why Is Everything Ugly?", link: "https://www.nplusonemag.com/issue-44/the-intellectual-situation/why-is-everything-so-ugly/" },
				{ text: "Letter on Culture and Context", link: "https://sebastiangarren.com/2021/12/04/letter-on-culture-and-context/" },
				{ text: "A Mathematician’s Lament", link: "https://www.maa.org/external_archive/devlin/LockhartsLament.pdf" },
				{ text: "The Wisdom of Saint Marshall", link: "https://www.wired.com/1996/01/saint-marshal/" },
				{ text: "How to be a Precious Snowflake", link: "https://www.ribbonfarm.com/2015/09/17/how-to-be-a-precious-snowflake/" },
				{ text: "Cool Women (The New Inquiry)", link: "https://thenewinquiry.com/cool-women/" },
				{ text: "Quora: Why is it so hard to think for ourselves?", link: "https://www.quora.com/The-world-we-live-in-has-conditioned-us-to-not-think-for-ourselves-Why-is-it-so-hard-to-think-for-ourselves" },
				{ text: "Why I Write (Joan Didion)", link: "https://genius.com/7709673" }
			]
		
		
	},
	/*
	{
		title: "places at/around stanford",
		items: [
			{ text: "CoHo jazz nights" },
			{ text: "late night studying at On Call Café" },
			{ text: "dinner at MJ Sushi" },
			{ text: "climbing the roof of Mem Aud" },
			{ text: "strolling University Ave & getting Salt & Straw" },
			{ text: "ordering Zareen's" },
			{ text: "locking in at Gates" },
		],
	},
	{
		title: "places in nyc",
		items: [
			{ text: "McNally Jackson Books, SoHo" },
			{ text: "Charlie Bird, West Village" },
			{ text: "Mercer Labs, Fidi" },
			{ text: "Uluh, East Village" },
			{ text: "Antidote, Williamsburg" },
			{ text: "La Cabra, SoHo" },
		],
	},
	*/
	{
		title: "fav substack reads.",
		items: [
			{ text: "A Good Woman is a Woman Who Suffers", link: "https://maalvika.substack.com/p/a-good-woman-is-a-woman-who-suffers" },
			{ text: "All Boredom Is Not Created the Same", link: "https://maalvika.substack.com/p/all-boredom-is-not-created-the-same" },
			{ text: "Fascism Thrives on Women’s Self-Doubt", link: "https://substack.com/home/post/p-158423615" },
			{ text: "The Scalpel, The Apron, and The Appeal of Certainty", link: "https://maalvika.substack.com/p/the-scalpel-the-apron-and-the-appeal" },
			{ text: "You Are Not Thought Daughter: On Intellectualism, Consumerism, and the Flattening of Identity", link: "https://elisazouza.substack.com/p/you-are-not-a-thought-daughter-on" },
			{ text: "Thinking Is Becoming a Luxury", link: "https://elisazouza.substack.com/p/thinking-is-becoming-a-luxury" },
			{ text: "Who’s Afraid of Amber Heard?", link: "https://internetprincess.substack.com/p/whos-afraid-of-amber-heard/comments" },
			{ text: "The Ethics of AI Development: Where Do We Draw the Line?", link: "https://maalvika.substack.com/p/the-ethics-of-ai-development-where" },
			{ text: "Hemorrhage of Self", link: "https://naomimelaku25.substack.com/p/hemorrhage-of-self" },
			{ text: "The Myth of the Magical Twenties", link: "https://substack.com/@ayushithakkar/p-164890289" }
		]
	}
	
	/*
	{
		title: "personal software",
		items: [{ text: "Arc Browser" }, { text: "Cursor" }, { text: "Notion" }, { text: "Figma" }, { text: "Warp" }, { text: "Raycast" }, { text: "Retro" }, { text: "Linear" }],
	},
	// {
	// 	title: "hardware",
	// 	items: [{ text: 'Macbook Pro 14" M5' }, { text: "Olympus Mju Zoom 140 (film camera)" }, { text: "Oura Ring 4" }],
	// },
	{
		title: "favorite of all time :)",
		items: [{ text: "Mason Wang", link: "https://masonjwang.com" }],
	},
	*/
];
