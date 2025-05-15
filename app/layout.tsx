import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Evan Bijoy',
	description:
		'Welcome to my portfolio! I\'m a Developer & Cybersecurity Researcher with a passion for building secure and visually pleasing systems. Currently serving as Web Administrator at IIIT Hyderabad, I have worked on various college websits.',
	keywords: [
		'Backend Developer',
		'Cybersecurity Researcher',
		'Web Administrator',
		'CTF Player',
		'AI/ML Engineer',
		'Node.js',
		'Python',
		'Java',
		'Distributed Systems',
		'Cloud Computing',
		'System Architecture',
		'API Development',
		'Database Design',
		'Microservices',
		'DevOps',
		'Reinforcement Learning',
		'Diffusion Models',
		'Penetration Testing',
		'CocoNutFishers',
		'IIIT Hyderabad',
		'CSTAR Lab'
	],
	authors: [{ name: 'Evan Bijoy' }],
	creator: 'Evan Bijoy',
	openGraph: {
		title: 'Evan Bijoy - Backend Developer Portfolio',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		url: 'https://your-domain.com',
		siteName: 'Evan Bijoy - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Evan Bijoy - Backend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Evan Bijoy - Backend Developer',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
