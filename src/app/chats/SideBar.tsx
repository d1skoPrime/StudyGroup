// SideBar.tsx
import Cookies from 'js-cookie'
import { X } from 'lucide-react'
import { useAuthStore } from '../store/store'

interface SideBarProps {
	isOpen?: boolean
	onClose?: () => void
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
	const { token } = useAuthStore()

	const handleLogout = () => {
		useAuthStore.getState().logout()
		Cookies.remove('token', { path: '/' })
		window.location.href = '/signup'
	}

	return (
		<>
			{/* Mobile Backdrop Overlay */}
			{isOpen && (
				<div
					onClick={onClose}
					className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
				/>
			)}

			{/* Sidebar Container */}
			<div
				className={`fixed md:static inset-y-0 left-0 z-50 w-80 bg-[#18181b] border-r border-[#27272a] flex flex-col p-4 transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
				}`}
			>
				<div className="flex flex-row justify-between items-center mb-4">
					<h2 className="text-xl font-bold text-white mb-4">Chats</h2>
					<div className="flex items-center gap-2">
						<button className="hover:bg-black/40 duration-200 text-white font-medium px-4 py-2 rounded-lg transition cursor-pointer mb-4 text-center">
							+
						</button>
						{/* Close button visible only on mobile */}
						<button
							onClick={onClose}
							className="md:hidden text-gray-400 hover:text-white p-2 mb-4 rounded-lg hover:bg-[#27272a]"
						>
							<X className="w-5 h-5" />
						</button>
					</div>
				</div>

				{/* List of chat rooms */}
				<div className="flex flex-col gap-2 overflow-y-auto">
					<div
						onClick={onClose}
						className="p-3 bg-[#27272a] rounded-lg cursor-pointer hover:bg-[#3f3f46] transition text-sm"
					>
						# main-lobby
					</div>
				</div>

				<button
					className="mt-auto bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium py-2 rounded-lg transition cursor-pointer"
					onClick={handleLogout}
				>
					Log Out
				</button>
			</div>
		</>
	)
}
