// 'use client'
import { loginUser, signupUser } from '@/services/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuthStore } from '../store/store'

interface LogInCardProps {
	onSwitchToSignup: () => void
}

export function LogInCard({ onSwitchToSignup }: LogInCardProps) {
	const [username, setUsername] = useState('')
	const [pin, setPin] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()
	const { setAuth } = useAuthStore()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		try {
			const data = await loginUser(username, pin)
			useAuthStore
				.getState()
				.setAuth(data.access_token, data.userId, data.username)

			// Redirect to your chat page after successful login
			router.push('/chats')
		} catch (err: any) {
			setError(err.message)
		}
	}

	return (
		<div className="bg-[#1e1e1e] border border-[#333333] p-8 rounded-xl shadow-lg w-96 text-center">
			<h2 className="text-xl font-bold text-[#E0E0E0] mb-2">Welcome Back</h2>
			<p className="text-[#B0B0B0] mb-6">Enter your details to join.</p>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4"
			>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={e => setUsername(e.target.value)}
					className="bg-[#2a2a2a] border border-[#444] text-white p-2 rounded-lg focus:outline-none focus:border-blue-500"
				/>
				<input
					type="password"
					placeholder="4-Digit PIN"
					maxLength={6}
					value={pin}
					onChange={e => setPin(e.target.value)}
					className="bg-[#2a2a2a] border border-[#444] text-white p-2 rounded-lg focus:outline-none focus:border-blue-500 text-center tracking-widest"
				/>
				<button
					type="submit"
					className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
				>
					Enter Chat
				</button>
			</form>

			<p className="text-[#B0B0B0] text-sm mt-4">
				No account yet?{' '}
				<button
					type="button"
					onClick={onSwitchToSignup}
					className="text-blue-500 hover:underline bg-transparent border-none cursor-pointer"
				>
					Sign Up
				</button>
			</p>
		</div>
	)
}

interface SignUpCardProps {
	onSwitchToLogin: () => void
}

export function SignUpCard({ onSwitchToLogin }: SignUpCardProps) {
	const [username, setUsername] = useState('')
	const [pin, setPin] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		try {
			await signupUser(username, pin)
			console.log('Account created successfully!')

			// Automatically switch to the login form after a successful signup
			onSwitchToLogin()
		} catch (err: any) {
			setError(err.message)
		}
	}

	return (
		<div className="bg-[#1e1e1e] border border-[#333333] p-8 rounded-xl shadow-lg w-96 text-center">
			<h2 className="text-xl font-bold text-[#E0E0E0] mb-2">Create Account</h2>
			<p className="text-[#B0B0B0] mb-6">Enter your details to sign up.</p>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-4"
			>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={e => setUsername(e.target.value)}
					className="bg-[#2a2a2a] border border-[#444] text-white p-2 rounded-lg focus:outline-none focus:border-blue-500"
				/>
				<input
					type="password"
					placeholder="4 to 6-Digit PIN"
					maxLength={6}
					value={pin}
					onChange={e => setPin(e.target.value)}
					className="bg-[#2a2a2a] border border-[#444] text-white p-2 rounded-lg focus:outline-none focus:border-blue-500 text-center tracking-widest"
				/>
				<button
					type="submit"
					className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
				>
					Register
				</button>
			</form>

			<p className="text-[#B0B0B0] text-sm mt-4">
				Already have an account?{' '}
				<button
					type="button"
					onClick={onSwitchToLogin}
					className="text-blue-500 hover:underline bg-transparent border-none cursor-pointer"
				>
					Log In
				</button>
			</p>
		</div>
	)
}
