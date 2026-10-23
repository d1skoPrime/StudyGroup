'use client'
export const RegisterButtons = ({
	children,
	onClick
}: {
	children: React.ReactNode
	onClick: () => void
}) => {
	return (
		<button
			onClick={onClick}
			className="bg-[#1e1e1e] border border-[#333333] p-2 rounded-xl shadow-lg w-96 text-center text-[#E0E0E0] hover:bg-[#2a2a2a] transition-colors duration-200"
		>
			{children}
		</button>
	)
}
