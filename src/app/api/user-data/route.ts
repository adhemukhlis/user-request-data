export function GET(request: Request) {
	const ip: string | null = request.headers.get('x-forwarded-for') || null;
	const continent: string | null = request.headers.get('x-vercel-ip-continent') || null;
	const country: string | null = request.headers.get('x-vercel-ip-country') || null;
	const region: string | null = request.headers.get('x-vercel-ip-country-region') || null;
	const city: string | null = request.headers.get('x-vercel-ip-city') || null;
	const latitude: string | null = request.headers.get('x-vercel-ip-latitude') || null;
	const longitude: string | null = request.headers.get('x-vercel-ip-longitude') || null;
	const timezone: string | null = request.headers.get('x-vercel-ip-timezone') || null;
	const postalCode: string | null = request.headers.get('x-vercel-ip-postal-code') || null;

	return Response.json({
		ip,
		continent,
		country,
		region,
		city,
		latitude,
		longitude,
		timezone,
		postalCode,
	});
}
