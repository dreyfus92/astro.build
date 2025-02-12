import type { EndpointOutput } from "astro"
import { getCollection } from "astro:content"

export async function get(): Promise<EndpointOutput> {
	const showcase = await getCollection("showcase")

	const result = showcase.map((site) => ({
		title: site.data.title,
		url: site.data.url,
		slug: site.slug,
	}))

	return {
		body: JSON.stringify(result),
	}
}
