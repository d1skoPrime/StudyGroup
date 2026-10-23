import { useAuthStore, useUserStore } from '@/app/store/store'
import Cookies from 'js-cookie'
const API_URL = 'http://localhost:3001/api' // Match your NestJS backend URL & port

export async function loginUser(username: string, pin: string) {
	const response = await fetch(`${API_URL}/auth/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, pin })
	})

	const data = await response.json()

	if (!response.ok) {
		throw new Error(data.message || 'Login failed')
	}

	// Assuming your NestJS backend returns { access_token: "your_jwt_here" }
	if (data.access_token) {
		Cookies.set('token', data.access_token, { expires: 7, path: '/' }) // expires in 7 days
		useAuthStore
			.getState()
			.setAuth(data.access_token, data.userId, data.username)
	}
	Cookies.set('token', data.access_token, { expires: 7, path: '/' }) // expires in 7 days

	return data
}

export async function signupUser(username: string, pin: string) {
	const response = await fetch(`${API_URL}/auth/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, pin })
	})

	const data = await response.json()

	if (!response.ok) {
		throw new Error(data.message || 'Signup failed')
	}

	return data
}

export async function fetchUserCreatedAt(
	userId: string,
	token: string
): Promise<string | null> {
	const response = await fetch(`${API_URL}/users/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})

	if (!response.ok) {
		console.error('Failed to fetch user creation date')
		return null
	}

	const data = await response.json()
	useUserStore.getState().setUser(data.createdAt, data.userId, data.username)

	return data.createdAt || null
}
