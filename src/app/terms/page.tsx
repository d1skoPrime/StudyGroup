'use client'

import { ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
	const lastUpdated = 'October 22, 2026'

	return (
		<div className="min-h-screen bg-[#121212] text-white selection:bg-blue-500 selection:text-white">
			{/* Header */}
			<header className="h-20 border-b border-[#27272a] flex items-center justify-between px-8 md:px-16 bg-[#121212]/80 backdrop-blur-md sticky top-0 z-50">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
						<FileText className="w-5 h-5 text-blue-400" />
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
					Terms of Service
				</h1>
				<p className="text-sm text-gray-400 mb-10">
					Last updated: {lastUpdated}
				</p>

				<div className="space-y-8 text-gray-300 text-sm leading-relaxed border-t border-[#27272a] pt-8">
					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							1. Acceptance of Terms
						</h2>
						<p>
							By accessing or using <strong>StudyGroup</strong>, you agree to be
							bound by these Terms of Service. If you do not agree with any part
							of these terms, you may not use our services.
						</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							2. User Accounts & Security
						</h2>
						<p className="mb-3">
							You are responsible for maintaining the confidentiality of your
							account credentials (username and password). You agree to:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-400">
							<li>Provide accurate account registration details.</li>
							<li>
								Notify us immediately of any unauthorized access to your
								account.
							</li>
							<li>
								Take full responsibility for all activities occurring under your
								credentials.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							3. Community Guidelines & Code of Conduct
						</h2>
						<p className="mb-3">
							When using StudyGroup chat lobbies, you strictly agree NOT to:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-400">
							<li>
								Post hate speech, harassing, offensive, or abusive content.
							</li>
							<li>
								Distribute malware, spam, or promotional material in study
								rooms.
							</li>
							<li>Impersonate other users, instructors, or staff members.</li>
							<li>
								Attempt to reverse-engineer, exploit, or bypass authentication
								mechanisms.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							4. Content Ownership & Rights
						</h2>
						<p>
							You retain ownership of any text messages or materials you submit.
							However, by broadcasting content through StudyGroup lobbies, you
							grant us a worldwide, non-exclusive license to transmit, display,
							and store your messages to operate the service.
						</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							5. Account Termination
						</h2>
						<p>
							We reserve the right to suspend or terminate your account access
							immediately, without prior notice, if you violate these Terms or
							engage in conduct harmful to other users.
						</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							6. Limitation of Liability
						</h2>
						<p>
							StudyGroup is provided on an &quot;AS IS&quot; and &quot;AS
							AVAILABLE&quot; basis without warranties of any kind. We are not
							liable for service interruptions, data loss, or content posted by
							other users.
						</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white mb-3">
							7. Contact Information
						</h2>
						<p>
							For legal inquiries or terms questions, please contact us at{' '}
							<a
								href="mailto:legal@studygroup.app"
								className="text-blue-400 hover:underline"
							>
								legal@studygroup.app
							</a>
							.
						</p>
					</section>
				</div>
			</main>
		</div>
	)
}
