import rss from "@astrojs/rss";
import { SITE_CONFIG } from "../constants";
import { getAllProjects } from "../utils/project";

export const GET = async () => {
  const projects = await getAllProjects();

  return rss({
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    site: import.meta.env.SITE,
    items: projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      coverImage: project.data.coverImage,
      link: `projects/${project.slug}`,
    })),
  });
};
