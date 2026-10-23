// app/auth/page.tsx (or wherever your auth screen lives)
'use client'

import { useState } from 'react'
import { LogInCard, SignUpCard } from './Card'

export default function AuthPage() {
	const [isSigningUp, setIsSigningUp] = useState(false)

	return (
		<div className="flex justify-center items-center h-screen bg-[#121212]">
			{isSigningUp ? (
				<SignUpCard onSwitchToLogin={() => setIsSigningUp(false)} />
			) : (
				<LogInCard onSwitchToSignup={() => setIsSigningUp(true)} />
			)}
		</div>
	)
}
