import '@/app/globals.css'

import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'User Request Data',
	description: 'identify user data',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
