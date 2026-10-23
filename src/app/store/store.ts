import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
	token: string | null
	userId: string | null
	username: string | null
	setAuth: (token: string, userId: string, username: string) => void
	logout: () => void
}

interface UserState {
	createdAt: string | null
	username: string | null
	setUser: (createdAt: string, userId: string, username: string) => void
}

export const useAuthStore = create<AuthState>()(
	persist(
		set => ({
			token: null,
			userId: null,
			username: null,
			setAuth: (token, userId, username) => set({ token, userId, username }),
			logout: () => set({ token: null, userId: null, username: null })
		}),
		{
			name: 'auth-storage' // saves data to localStorage automatically
		}
	)
)

export const useUserStore = create<UserState>()(
	persist(
		set => ({
			createdAt: null,

			username: null,
			setUser: (createdAt, username) => set({ createdAt, username })
		}),
		{
			name: 'user-storage'
		}
	)
)
