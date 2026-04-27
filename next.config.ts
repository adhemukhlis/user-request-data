import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	compiler: {
		...(process.env.NODE_ENV === 'production'
			? {
					removeConsole: {
						exclude: ['error', 'warn', 'info', 'table'],
					},
				}
			: {}),
		...(process.env.NODE_ENV === 'production' ? { reactRemoveProperties: { properties: ['^data-testid$'] } } : {}),
	},
	cacheComponents: true,
	pageExtensions: ['ts', 'tsx'],
	poweredByHeader: false,
	typescript: {
		ignoreBuildErrors: true,
		tsconfigPath: 'tsconfig.json',
	},
	reactStrictMode: false, // I prefer to set to false to prevent double rendering.
	productionBrowserSourceMaps: false,
	trailingSlash: false,
	turbopack: {
		resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
	},
	typedRoutes: true,
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: '*',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		]
	},
}

export default nextConfig
