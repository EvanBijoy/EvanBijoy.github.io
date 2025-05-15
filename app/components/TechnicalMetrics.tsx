'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">

					{/* Research & Learning */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Research & Learning</h3>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
						>
							<ul className="space-y-2 text-gray-400">
								<li>• Learning Reinforcement Learning at CSTAR Lab</li>
								<li>• Exploring MARL-JAX library and algorithms</li>
								<li>• Delivered internal lecture on MDPs and RL basics</li>
								<li>• Familiar with policy gradient & value methods</li>
							</ul>
						</motion.div>
					</div>

					{/* Web Development */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Web Development</h3>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
						>
							<ul className="space-y-2 text-gray-400">
								<li>• Developed CQST Lab website using WordPress</li>
								<li>• Built courier portal for college in Next.js + MongoDB</li>
								<li>• Made institute&apos;s CAS login and VPN pages responsive</li>
								<li>• Designed UML diagram for clubs page infrastructure</li>
								<li>• Good understanding of frontend-backend integration</li>
							</ul>
						</motion.div>
					</div>

					{/* CTF & Security */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">CTFs & Security</h3>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
						>
							<ul className="space-y-2 text-gray-400">
								<li>• Regularly participate in CTFs and security events</li>
								<li>• Skilled in solving web and binary exploitation challenges</li>
								<li>• Tools: Burp Suite, pwntools, GDB, nmap, etc.</li>
								<li>• Practicing on platforms like HackTheBox and PicoCTF</li>
							</ul>
						</motion.div>
					</div>

				</div>
			</div>
		</section>
	);
}
