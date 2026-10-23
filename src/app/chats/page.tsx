// page.tsx
'use client'

import { fetchUserCreatedAt } from '@/services/api'
import { SendHorizontal, User } from 'lucide-react'
import { redirect } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '../store/store'
import SideBar from './SideBar'

interface Message {
	id?: string
	userId: string
	username: string
	content: string
	createdAt?: string
}

const SOCKET_URL = 'http://localhost:3001'

export default function Page() {
	const [socket, setSocket] = useState<Socket | null>(null)
	const [messages, setMessages] = useState<Message[]>([])
	const [input, setInput] = useState('')
	const { userId, username, token } = useAuthStore()
	const [showProfile, setShowProfile] = useState(false)
	const [userCreatedAt, setUserCreatedAt] = useState<string | null>(null) // optional, to view password

	useEffect(() => {
		if (!token) {
			redirect('/signup')
			return
		}

		// Fetch past messages (Adjust /api prefix if your backend doesn't use one)
		fetch('http://localhost:3001/api/chat/messages')
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch chat history')
				return res.json()
			})
			.then((data: any[]) => {
				// Map backend Prisma response structure to include username easily
				const formatted = data.map(msg => ({
					id: msg.id,
					userId: msg.userId,
					username: msg.user?.username || 'Unknown',
					content: msg.content,
					createdAt: msg.createdAt
				}))
				setMessages(formatted)
			})
			.catch(err => console.error('Fetch history error:', err))

		if (userId) {
			fetchUserCreatedAt(userId, token)
				.then(setUserCreatedAt)
				.catch(err => console.error('Fetch user profile error:', err))
		}

		// Initialize Socket.io connection for live updates
		const socketInstance: Socket = io(SOCKET_URL, {
			transports: ['polling', 'websocket'],
			autoConnect: true
		})

		socketInstance.on('connect', () => {
			console.log('Connected to socket server! ID:', socketInstance.id)
		})

		socketInstance.on('connect_error', err => {
			console.error('Socket connection error:', err.message)
		})

		setSocket(socketInstance)

		socketInstance.on('newMessage', (msg: any) => {
			const formattedMsg: Message = {
				id: msg.id,
				userId: msg.userId,
				username: msg.user?.username || msg.username || 'Unknown',
				content: msg.content,
				createdAt: msg.createdAt || new Date().toISOString()
			}
			setMessages(prev => [...prev, formattedMsg])
		})

		return () => {
			socketInstance.disconnect()
		}
	}, [token, redirect])

	const handleSendMessage = (e?: FormEvent) => {
		if (e) e.preventDefault()
		if (!input.trim() || !socket) return

		socket.emit('sendMessage', {
			userId,
			username,
			room: 'main-lobby',
			content: input
		})

		setInput('')
	}

	// Helper function to format timestamp nicely (e.g., "2:45 PM")
	const formatTime = (dateString?: string) => {
		if (!dateString) return ''
		const date = new Date(dateString)
		return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
	}

	return (
		<div className="flex flex-row h-screen w-screen bg-[#121212] text-white overflow-hidden">
			{/* Left Sidebar */}
			<SideBar />

			{/* Main Chat Area on the right */}
			<div className="flex-1 flex flex-col h-full bg-[#121212] relative">
				{/* Chat Header */}
				<div className="h-16 border-b border-[#27272a] flex items-center px-6 justify-between">
					<h1 className="font-bold text-lg"># main-lobby</h1>
					<User
						onClick={() => setShowProfile(true)}
						className="cursor-pointer w-12 p-2 rounded-2xl hover:bg-[#27272a] transition ease-in duration-200"
					/>
				</div>

				{/* Centered Profile Modal Overlay with Blurred Background */}
				{showProfile && (
					<div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
						<div className="w-full max-w-sm bg-[#18181b] border border-[#27272a] rounded-2xl p-6 shadow-2xl text-white relative animate-in fade-in zoom-in-95 duration-150">
							{/* Modal Header */}
							<div className="flex items-center justify-between mb-6 pb-3 border-b border-[#27272a]">
								<h2 className="font-bold text-lg">User Profile</h2>
								<button
									onClick={() => setShowProfile(false)}
									className="text-gray-400 hover:text-white transition w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#27272a]"
								>
									✕
								</button>
							</div>

							{/* Modal Details */}
							<div className="space-y-4">
								<div>
									<label className="text-xs text-gray-400 block mb-1">
										Username
									</label>
									<div className="bg-[#121212] border border-[#27272a] rounded-lg px-4 py-3 text-sm font-medium text-gray-100">
										{username || 'N/A'}
									</div>
								</div>

								<div>
									<label className="text-xs text-gray-400 block mb-1">
										Account Created
									</label>
									<div className="bg-[#121212] border border-[#27272a] rounded-lg px-4 py-3 text-sm font-medium text-gray-300">
										{userCreatedAt
											? new Date(userCreatedAt).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric'
												})
											: 'Loading...'}
									</div>
								</div>
							</div>

							{/* Close Action Button at Bottom */}
							<div className="mt-6 pt-4 border-t border-[#27272a] flex justify-end">
								<button
									onClick={() => setShowProfile(false)}
									className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition font-medium"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				)}
				{/* Messages Feed (Scrollable) - Placed BEFORE the form */}
				<div className="flex-1 p-6 overflow-y-auto space-y-4 flex flex-col">
					{messages.length === 0 ? (
						<p className="text-[#a1a1aa] text-center my-auto">
							Messages will appear here...
						</p>
					) : (
						messages.map((msg, index) => {
							const isMe = msg.userId === userId

							return (
								<div
									key={msg.id || index}
									className={`flex flex-col max-w-xl p-3 rounded-lg border ${
										isMe
											? 'ml-auto bg-blue-600/20 border-blue-500/40 text-right'
											: 'mr-auto bg-[#18181b] border-[#27272a] text-left'
									}`}
								>
									<div
										className={`flex items-center gap-2 mb-1 ${isMe ? 'justify-end' : 'justify-start'}`}
									>
										<span
											className={`text-xs font-semibold ${isMe ? 'text-blue-300' : 'text-blue-400'}`}
										>
											{isMe ? 'You' : msg.username}
										</span>
										<span className="text-[10px] text-gray-400">
											{formatTime(msg.createdAt)}
										</span>
									</div>
									<p className="text-sm text-gray-200 wrap-break-word">
										{msg.content}
									</p>
								</div>
							)
						})
					)}
				</div>

				{/* Message Input Box at the bottom - Placed AFTER the messages feed */}
				<form
					onSubmit={handleSendMessage}
					className="p-4 border-t border-[#27272a] flex flex-row gap-4 items-center"
				>
					<input
						type="text"
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder="Type a message..."
						className="w-full bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
					/>
					<button
						type="submit"
						className="p-2 rounded-lg hover:bg-[#27272a] transition duration-200"
					>
						<SendHorizontal className="cursor-pointer text-gray-400 hover:text-blue-500" />
					</button>
				</form>
			</div>
		</div>
	)
}
