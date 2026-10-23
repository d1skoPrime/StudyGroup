import router from 'next/router'

export const checkAuth = (token: string | null) => {
	if (!token) {
		router.push('/signup')
	}
}
