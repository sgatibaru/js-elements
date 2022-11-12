import lockIcon from "../../assets/image/agencyFormal/lock.png";
import serviceIcon1 from "../../assets/image/agencyFormal/services/1.png";
import serviceIcon2 from "../../assets/image/agencyFormal/services/2.png";
import serviceIcon3 from "../../assets/image/agencyFormal/services/3.png";
import featureIcon1 from "../../assets/image/agencyFormal/features/1.png";
import featureIcon2 from "../../assets/image/agencyFormal/features/2.png";
import featureIcon3 from "../../assets/image/agencyFormal/features/3.png";
import featureIcon4 from "../../assets/image/agencyFormal/features/4.png";
import featureIcon5 from "../../assets/image/agencyFormal/features/5.png";
import featureIcon6 from "../../assets/image/agencyFormal/features/6.png";
import author1 from "../../assets/image/agencyFormal/testimonial/1.png";
import author2 from "../../assets/image/agencyFormal/testimonial/2.png";
import icecream from "../../assets/image/agencyFormal/pricing/1.png";
import donut from "../../assets/image/agencyFormal/pricing/2.png";
import pizza from "../../assets/image/agencyFormal/pricing/3.png";
import news1 from "../../assets/image/agencyFormal/news/1.png";
import news2 from "../../assets/image/agencyFormal/news/2.png";
import news3 from "../../assets/image/agencyFormal/news/3.png";

const data = {
	navItems: [
		{
			label: "Home",
			path: "#home",
			offset: "70",
		},
		{
			label: "Advertise",
			path: "#service",
			offset: "70",
		},
		{
			label: "Supports",
			path: "#supports",
			offset: "70",
		},
		{
			label: "About",
			path: "#about",
			offset: "70",
		},
		{
			icon: lockIcon,
			label: "Login",
			path: "#home",
			staticLink: true,
		},
		{
			label: "Join Community",
			path: "#home",
			staticLink: true,
		},
	],
	mobileMenuItems: [
		{
			label: "Home",
			path: "#home",
			offset: "70",
		},
		{
			label: "Advertise",
			path: "#advertise",
			offset: "70",
		},
		{
			label: "Supports",
			path: "#supports",
			offset: "70",
		},
		{
			label: "About",
			path: "#about",
			offset: "70",
		},
		{
			label: "Login",
			path: "#home",
			staticLink: true,
			offset: "70",
		},
		{
			label: "Join Community",
			path: "#home",
			staticLink: true,
			offset: "70",
		},
	],
	services: [
		{
			id: 1,
			icon: serviceIcon1,
			title: "Engage your customers dramatically anytime.",
			description: `Insights inform brand positioning, creative and media plans.`,
			features: ["Boost Processes", "Advanced Custom Fields"],
		},
		{
			id: 2,
			icon: serviceIcon2,
			title: "Store and transfer your affiliate data content.",
			description: `Insights inform brand positioning, creative and media plans.`,
			features: ["Boost Processes", "Smart Automations"],
		},
		{
			id: 3,
			icon: serviceIcon3,
			title: "Estimate costs and easily increase productivity.",
			description: `Insights inform brand positioning, creative and media plans.`,
			features: ["Profitability Boost", "Advanced Custom Fields"],
		},
	],
	premiumFeature: [
		{ id: 1, title: "Most Secure Payment service" },
		{ id: 2, title: "Low rate & transparent fees" },
		{ id: 3, title: "European based transaction" },
		{ id: 4, title: "24/7 Support & Instant trade" },
	],
	features: [
		{
			id: 1,
			icon: featureIcon1,
			title: "Email Hosting",
			desc: "Get your info tests delivered at home collect a sample from your pogress actual tests.",
			tag: "Most Popular",
		},
		{
			id: 2,
			icon: featureIcon2,
			title: "Dedicated Hosting",
			desc: "Get your info tests delivered at home collect a sample from your pogress actual tests.",
		},
		{
			id: 3,
			icon: featureIcon3,
			title: "VPS Services",
			desc: "Get your info tests delivered at home collect a sample from your pogress actual tests.",
		},
		{
			id: 4,
			icon: featureIcon4,
			title: "WP Website Builder",
			desc: "Get your info tests delivered at home collect a sample from your pogress actual tests.",
		},
		{
			id: 5,
			icon: featureIcon5,
			title: "CMS Hosting",
			desc: "Get your info tests delivered at home collect a sample from your pogress actual tests.",
			tag: "Latest",
		},
		{
			id: 6,
			icon: featureIcon6,
			title: "Cloud Hosting",
			desc: "Get your info tests delivered at home collect a sample from your pogress actual tests.",
		},
	],
	testimonials: [
		{
			id: 1,
			photo: author1,
			rating: 5,
			name: "Minnie Horn",
			twitter: "@hello.mimmie",
			title: "Memories Matter: How Ai will helps this Consultant",
			text: `I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously to changed my plans is to be commended & her service re-affirms.`,
		},
		{
			id: 2,
			photo: author2,
			rating: 5,
			name: "Andree Jaction",
			twitter: "@iamandrie",
			title: "Excellent for one person; fantastic for our exicitng team",
			text: `I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result and I have seldom experienced such an efficient help.`,
		},
	],
	pricing: [
		{
			id: 1,
			price: {
				monthly: 16,
				annual: 16 * 12 - 5,
			},
			currencySymbol: "$",
			isActive: false,
			title: "Starter Pack",
			desc: "Complete time tracking & proper reporting",
			icon: icecream,
			button: {
				label: "Start 6 month trial",
				link: "#",
			},
			details: {
				label: "What’s include",
				link: "#",
			},
		},
		{
			id: 2,
			price: {
				monthly: 29,
				annual: 29 * 12 - 10,
			},
			currencySymbol: "$",
			isActive: true,
			title: "Premium Pack",
			desc: "Effortless team with time management.",
			icon: donut,
			button: {
				label: "Start 6 month trial",
				link: "#",
			},
			details: {
				label: "What’s include",
				link: "#",
			},
		},
		{
			id: 3,
			price: {
				monthly: 35,
				annual: 35 * 12 - 15,
			},
			currencySymbol: "$",
			isActive: false,
			title: "Ultimate Pack",
			desc: "A custom plan for complex or large organization.",
			icon: pizza,
			button: {
				label: "Start 6 month trial",
				link: "#",
			},
			details: {
				label: "What’s include",
				link: "#",
			},
		},
	],
	news: [
		{
			id: 1,
			image: news1,
			title: "Learn from how to host your site",
			excerpt:
				"Brian Halligan knows that you need more than a great product to have a great brand with new features.",
			link: "#",
		},
		{
			id: 2,
			image: news2,
			title: "Customize your domain hosting",
			excerpt:
				"Brian Halligan knows that you need more than a great product to have a great brand with new features.",
			link: "#",
		},
		{
			id: 3,
			image: news3,
			title: "Learn how to upload on cloud host",
			excerpt:
				"Brian Halligan knows that you need more than a great product to have a great brand with new features.",
			link: "#",
		},
	],
	footer: [
		{
			id: 1,
			title: "Company",
			list: [
				{
					id: 1,
					title: "About",
					link: "#",
				},
				{
					id: 2,
					title: "Affiliate",
					link: "#",
				},
				{
					id: 3,
					title: "Careers & Culture",
					link: "#",
				},
				{
					id: 4,
					title: "Blog",
					link: "#",
				},
				{
					id: 5,
					title: "Press",
					link: "#",
				},
			],
		},
		{
			id: 2,
			title: "About Us",
			list: [
				{
					id: 1,
					title: "Support Center",
					link: "#",
				},
				{
					id: 2,
					title: "Customer Support",
					link: "#",
				},
				{
					id: 3,
					title: "About Us",
					link: "#",
				},
				{
					id: 4,
					title: "Copyright",
					link: "#",
				},
				{
					id: 5,
					title: "Popular Campaign",
					link: "#",
				},
			],
		},
		{
			id: 3,
			title: "Our Information",
			list: [
				{
					id: 1,
					title: "Return Policy ",
					link: "#",
				},
				{
					id: 2,
					title: "Privacy Policy",
					link: "#",
				},
				{
					id: 3,
					title: "Terms & Conditions",
					link: "#",
				},
				{
					id: 4,
					title: "Site Map",
					link: "#",
				},
				{
					id: 5,
					title: "Store Hours",
					link: "#",
				},
			],
		},
		{
			id: 4,
			title: "My Account",
			list: [
				{
					id: 1,
					title: "Press inquiries",
					link: "#",
				},
				{
					id: 2,
					title: "Social media ",
					link: "#",
				},
				{
					id: 3,
					title: "directories",
					link: "#",
				},
				{
					id: 4,
					title: "Images & B-roll",
					link: "#",
				},
				{
					id: 5,
					title: "Permissions",
					link: "#",
				},
			],
		},
		{
			id: 5,
			title: "Policy",
			list: [
				{
					id: 1,
					title: "Application security",
					link: "#",
				},
				{
					id: 2,
					title: "Software principles",
					link: "#",
				},
				{
					id: 3,
					title: "Unwanted software policy",
					link: "#",
				},
				{
					id: 4,
					title: "Responsible supply chain",
					link: "#",
				},
			],
		},
	],
	footerNav: [
		{
			id: 1,
			title: "Home",
			link: "#",
		},
		{
			id: 2,
			title: "Advertise",
			link: "#",
		},
		{
			id: 3,
			title: "Supports",
			link: "#",
		},
		{
			id: 4,
			title: "Marketing",
			link: "#",
		},
		{
			id: 5,
			title: "FAQ",
			link: "#",
		},
	],
};

export default data;
