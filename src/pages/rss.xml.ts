import rss from "@astrojs/rss";
import { siteConfig } from "../constants";
import { getAllProjects } from "../utils/project";

export const GET = async () => {
	const projects = await getAllProjects();

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: projects.map((project) => ({
			title: project.data.title,
			description: project.data.description,
      coverImage: project.data.coverImage,
			link: `projects/${project.slug}`,
		})),
	});
};
