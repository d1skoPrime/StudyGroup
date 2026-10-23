'use client'

import {
	ArrowRight,
	MessageSquare,
	ShieldCheck,
	Users,
	Zap
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="min-h-screen bg-[#121212] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
			{/* Navigation Bar */}
			<nav className="h-20 border-b border-[#27272a] flex items-center justify-between px-8 md:px-16 bg-[#121212]/80 backdrop-blur-md sticky top-0 z-50">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
						<Users className="w-5 h-5 text-blue-400" />
					</div>
					<span className="font-bold text-lg tracking-tight">StudyGroup</span>
				</div>

				<div className="flex items-center gap-4">
					<Link
						href="/signup"
						className="text-sm font-medium text-gray-300 hover:text-white transition px-4 py-2"
					>
						Sign In
					</Link>
					<Link
						href="/signup"
						className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-blue-600/20"
					>
						Get Started
					</Link>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="px-8 md:px-16 pt-24 pb-20 max-w-6xl mx-auto text-center flex flex-col items-center">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181b] border border-[#27272a] text-xs font-medium text-blue-400 mb-6">
					<Zap className="w-3.5 h-3.5" /> Real-time peer learning platform
				</div>

				<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight mb-6">
					Collaborate, share knowledge, and study together seamlessly.
				</h1>

				<p className="text-gray-400 text-base md:text-lg max-w-xl mb-10">
					StudyGroup is the virtual hub where students connect in real-time
					lobbies, share insights, and elevate their learning experience
					together.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
					<Link
						href="/signup"
						className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/20"
					>
						Join Main Lobby <ArrowRight className="w-4 h-4" />
					</Link>
					<a
						href="#features"
						className="flex items-center justify-center bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] text-gray-300 hover:text-white font-medium px-6 py-3.5 rounded-xl transition"
					>
						Learn More
					</a>
				</div>
			</section>

			{/* What is StudyGroup Section */}
			<section
				id="features"
				className="px-8 md:px-16 py-20 border-t border-[#27272a] bg-[#161619]/50"
			>
				<div className="max-w-6xl mx-auto">
					<div className="text-center max-w-xl mx-auto mb-16">
						<h2 className="text-2xl md:text-3xl font-bold mb-3">
							Built for focused collaboration
						</h2>
						<p className="text-gray-400 text-sm">
							Everything you need to keep conversations organized and
							productive.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Feature 1 */}
						<div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 transition hover:border-blue-500/40">
							<div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4">
								<MessageSquare className="w-6 h-6 text-blue-400" />
							</div>
							<h3 className="font-semibold text-lg mb-2">
								Real-Time Messaging
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								Powered by Socket.io, messages sync instantly across all peers
								in the study session without lagging.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 transition hover:border-blue-500/40">
							<div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4">
								<Users className="w-6 h-6 text-blue-400" />
							</div>
							<h3 className="font-semibold text-lg mb-2">Public Lobbies</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								Jump straight into the main lobby to connect with active peers,
								ask questions, and share study notes instantly.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 transition hover:border-blue-500/40">
							<div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4">
								<ShieldCheck className="w-6 h-6 text-blue-400" />
							</div>
							<h3 className="font-semibold text-lg mb-2">Secure Profiles</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								JWT-backed authentication protects your sessions, tracks your
								account history, and keeps your discussions safe.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="px-8 md:px-16 py-20 border-t border-[#27272a]">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-2xl md:text-3xl font-bold mb-3">
							How to Use StudyGroup
						</h2>
						<p className="text-gray-400 text-sm">
							Get started in three simple steps.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="flex flex-col items-center text-center">
							<div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
								1
							</div>
							<h3 className="font-semibold mb-1">Create an Account</h3>
							<p className="text-xs text-gray-400">
								Sign up with a unique username and password to secure your
								personal profile.
							</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
								2
							</div>
							<h3 className="font-semibold mb-1">Enter the Lobby</h3>
							<p className="text-xs text-gray-400">
								Join the active chat space where all live discussions and peer
								messages take place.
							</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
								3
							</div>
							<h3 className="font-semibold mb-1">Collaborate</h3>
							<p className="text-xs text-gray-400">
								Type your questions or share insights. Messages update
								dynamically in real time.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="h-20 border-t border-[#27272a] flex items-center justify-between px-8 md:px-16 text-xs text-gray-500">
				<p>© {new Date().getFullYear()} StudyGroup. All rights reserved.</p>
				<div className="flex gap-4">
					<Link
						href="/privacy"
						className="hover:text-gray-400 transition"
					>
						Privacy
					</Link>
					<Link
						href="/terms"
						className="hover:text-gray-400 transition"
					>
						Terms
					</Link>
				</div>
			</footer>
		</div>
	)
}
