import Cookies from 'js-cookie'
import { useAuthStore } from '../store/store'
export default function SideBar() {
	const { token } = useAuthStore()

	const handleLogout = () => {
		useAuthStore.getState().logout()
		Cookies.remove('token', { path: '/' })
		window.location.href = '/signup' // Redirect to signup page after logout
	}
	return (
		<div className="bg-[#18181b] border-r border-[#27272a] w-80 h-screen flex flex-col p-4">
			<div className="flex-row flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold text-white mb-4">Chats</h2>
				<button className=" hover:bg-black/40 duration-500 ease-in-out text-white font-medium py-2 rounded-lg transition cursor-pointer mb-4 text-center p-6">
					+
				</button>
			</div>

			{/* List of chat rooms or users will go here later */}
			<div className="flex flex-col gap-2 overflow-y-auto">
				<div className="p-3 bg-[#27272a] rounded-lg cursor-pointer hover:bg-[#3f3f46] transition">
					# main-lobby
				</div>
			</div>
			<button
				className="mt-auto bg-blue-600 hover:bg-blue-700 duration-200 ease-in-out text-white font-medium py-2 rounded-lg transition cursor-pointer"
				onClick={handleLogout}
			>
				Log Out
			</button>
		</div>
	)
}
