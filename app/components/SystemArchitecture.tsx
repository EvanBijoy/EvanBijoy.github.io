'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Projects & Research Work
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Multi-Agent RL Research at CSTAR Lab',
							description:
								"Contributing to MARL-JAX, an in-house multi-agent RL framework developed at IIIT-H's CSTAR lab.",
							details: [
								"Developed RL environments and training pipelines in JAX",
								"Benchmarked various MARL algorithms for scalability",
								"Integrated logging and visualization tools for experiments",
								"Explored applications of MARL in robotics and networking",
							],
							tech: ['JAX', 'NumPy', 'Python', 'WandB', 'RLlib'],
						},
						{
							title: 'CQST Lab Website Development',
							description:
								"Developing a dynamic and responsive WordPress website for IIIT-H's Center for Quantum Science & Technology (CQST).",
							details: [
								"Customized themes and templates using PHP & CSS",
								"Optimized SEO and performance for lab visibility",
								"Integrated blog and team member sections",
								"Ensured cross-browser and mobile compatibility",
							],
							tech: ['WordPress', 'PHP', 'CSS', 'Elementor', 'MySQL'],
						},
						{
							title: 'Courier Portals Website for Campus',
							description:
								"Building a courier tracking portal for campus using modern full-stack tools.",
							details: [
								"Developed full-stack app with Next.js and MongoDB",
								"Designed intuitive UI for students and admins",
								"Implemented JWT-based authentication system",
								"Planned for real-time notifications via sockets",
							],
							tech: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Node.js'],
						},
						{
							title: 'Capture The Flag (CTF) Participation',
							description:
								"Regular participant in CTF competitions, focusing on web exploitation and reverse engineering.",
							details: [
								"Solved web, pwn, and crypto challenges",
								"Active on platforms like HackTheBox and CTFtime",
								"Learned binary exploitation, SSRF, XSS, and more",
								"Collaborated with peers on live CTFs",
							],
							tech: ['Burp Suite', 'Ghidra', 'Python', 'pwntools', 'Linux'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Highlights:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
