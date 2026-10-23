'use client'

import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
	const lastUpdated = 'October 22, 2026'

	return (
		<div className="min-h-screen bg-[#121212] text-white selection:bg-blue-500 selection:text-white">
			{/* Header */}
			<header className="h-20 border-b border-[#27272a] flex items-center justify-between px-8 md:px-16 bg-[#121212]/80 backdrop-blur-md sticky top-0 z-50">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
						<Shield className="w-5 h-5 text-blue-400" />
					</div>
					<span className="font-bold text-lg tracking-tight">StudyGroup</span>
				</div>

				<Link
					href="/"
					className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition"
				>
					<ArrowLeft className="w-4 h-4" /> Back to Home
				</Link>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto px-6 py-16">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-2">
					Privacy Policy
				</h1>
				<p className="text-sm text-gray-400 mb-10">
					Last updated: {lastUpdated}
				</p>

				<div className="space-y-8 text-gray-300 text-sm leading-relaxed border-t border-[#27272a] pt-8">
					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							1. Information We Collect
						</h2>
						<p className="mb-3">
							When you create an account and use <strong>StudyGroup</strong>, we
							collect minimal personal information to provide real-time study
							rooms and profile functionality:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-400">
							<li>
								<strong className="text-gray-200">Account Data:</strong> Your
								username, encrypted password, and account creation timestamp.
							</li>
							<li>
								<strong className="text-gray-200">Chat Messages:</strong> Text
								content you send in public lobbies or private chat rooms,
								associated with your account ID and timestamp.
							</li>
							<li>
								<strong className="text-gray-200">Technical Logs:</strong>{' '}
								Socket connection events, IP addresses, and standard HTTP
								headers required for network security and debugging.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							2. How We Use Your Information
						</h2>
						<p className="mb-3">
							We use your information strictly for the following purposes:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-400">
							<li>
								Authenticating users via JSON Web Tokens (JWT) to secure session
								access.
							</li>
							<li>
								Delivering real-time messages and chat history to active
								participants.
							</li>
							<li>
								Maintaining system performance, security, and preventing abusive
								activity.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							3. Data Sharing & Disclosure
						</h2>
						<p>
							We do not sell, rent, or trade your personal information. Chat
							messages posted in public lobbies are visible to other logged-in
							users in the room. We may disclose technical logs only if required
							by law or to enforce our Terms of Service.
						</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							4. Security & Storage
						</h2>
						<p>
							We implement industry-standard security practices, including
							cryptographic password hashing and token authentication. However,
							no transmission over the Internet or WebSocket protocol is 100%
							secure, and we cannot guarantee absolute security.
						</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							5. Data Retention & Deletion
						</h2>
						<p>
							Your chat messages and profile details are retained as long as
							your account remains active. You may request account and data
							deletion by contacting our support team.
						</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							6. Contact Us
						</h2>
						<p>
							If you have questions regarding this Privacy Policy or your data,
							please reach out to us at{' '}
							<a
								href="mailto:support@studygroup.app"
								className="text-blue-400 hover:underline"
							>
								support@studygroup.app
							</a>
							.
						</p>
					</section>
				</div>
			</main>
		</div>
	)
}
